import { useEffect, useRef } from 'react'
import p5 from 'p5'

// ---- Vehicle class (ported from vehicle.js) ----

class Vehicle {
  acceleration: p5.Vector
  velocity: p5.Vector
  position: p5.Vector
  maxTrailLength: number
  trailPoints: p5.Vector[]
  r: number
  maxspeed: number
  maxforce: number
  d: number
  target: p5.Vector | null
  desiredseparation: number
  img: p5.Image | null

  constructor(x: number, y: number, img: p5.Image | null, p: p5) {
    this.acceleration = p.createVector(0, 0)
    this.velocity = p5.Vector.random2D()
    this.position = p.createVector(x, y)
    this.maxTrailLength = 15
    this.trailPoints = []
    this.r = 6
    this.maxspeed = 3
    this.maxforce = 0.15
    this.d = 25
    this.target = null
    this.desiredseparation = this.r * 2
    this.img = img
  }

  update(vehicles: Vehicle[], p: p5) {
    this.trailPoints.unshift(p.createVector(this.position.x, this.position.y))
    if (this.trailPoints.length > this.maxTrailLength) {
      this.trailPoints = this.trailPoints.slice(0, this.maxTrailLength)
    }
    this.applyBehaviors(vehicles, p)
    this.boundaries(p)
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxspeed)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
  }

  applyForce(force: p5.Vector) {
    this.acceleration.add(force)
  }

  setTarget(target: p5.Vector | null) {
    this.target = target
  }

  applyBehaviors(vehicles: Vehicle[], p: p5) {
    const separateForce = this.separate(vehicles)
    const seekForce = this.seek(p)

    let separateRatio = 0.5
    let seekRatio = 0.5

    if (this.target == null) {
      separateRatio = 1.0
      seekRatio = 0.0
    }

    separateForce.mult(separateRatio)
    seekForce.mult(seekRatio)
    this.applyForce(separateForce)
    this.applyForce(seekForce)
  }

  boundaries(p: p5) {
    let desired: p5.Vector | null = null

    if (this.position.x < this.d) {
      desired = p.createVector(this.maxspeed, this.velocity.y)
    } else if (this.position.x > p.width - this.d) {
      desired = p.createVector(-this.maxspeed, this.velocity.y)
    }

    if (this.position.y < this.d) {
      desired = p.createVector(this.velocity.x, this.maxspeed)
    } else if (this.position.y > p.height - this.d) {
      desired = p.createVector(this.velocity.x, -this.maxspeed)
    }

    if (desired !== null) {
      desired.normalize()
      desired.mult(this.maxspeed)
      const steer = p5.Vector.sub(desired, this.velocity)
      steer.limit(this.maxforce)
      this.applyForce(steer)
    }
  }

  separate(vehicles: Vehicle[]): p5.Vector {
    const sum = new p5.Vector()
    let count = 0
    for (const other of vehicles) {
      const d = p5.Vector.dist(this.position, other.position)
      if (d > 0 && d < this.desiredseparation) {
        const diff = p5.Vector.sub(this.position, other.position)
        diff.normalize()
        diff.div(d)
        sum.add(diff)
        count++
      }
    }
    if (count > 0) {
      sum.div(count)
      sum.normalize()
      sum.mult(this.maxspeed)
      sum.sub(this.velocity)
      sum.limit(this.maxforce)
    }
    return sum
  }

  seek(p: p5): p5.Vector {
    if (this.target == null) return p.createVector(0, 0)
    const d = p5.Vector.dist(this.position, this.target)
    if (d <= this.r) {
      this.setTarget(null)
      return p.createVector(0, 0)
    }
    const desired = p5.Vector.sub(this.target, this.position)
    desired.normalize()
    desired.mult(this.maxspeed)
    const steer = p5.Vector.sub(desired, this.velocity)
    steer.limit(this.maxforce)
    return steer
  }

  display(p: p5) {
    if (this.img != null) {
      const theta = this.velocity.heading() + p.PI / 2
      p.push()
      p.translate(this.position.x, this.position.y)
      p.rotate(theta)
      p.imageMode(p.CENTER)
      p.image(this.img, 0, 0, this.r * 2, this.r * 3)
      p.pop()
    } else {
      const theta = this.velocity.heading() + p.PI / 2
      p.fill(127)
      p.stroke(200)
      p.strokeWeight(1)
      p.push()
      p.translate(this.position.x, this.position.y)
      p.rotate(theta)
      p.beginShape()
      p.vertex(0, -this.r * 2)
      p.vertex(-this.r, this.r * 2)
      p.vertex(this.r, this.r * 2)
      p.endShape(p.CLOSE)
      p.pop()
    }

    p.strokeWeight(3)
    for (let i = 1; i < this.trailPoints.length; i++) {
      const alpha = (1 - i / this.trailPoints.length) * 0.5 * 255
      p.stroke(255, 176, 55, alpha)
      const pos1 = this.trailPoints[i - 1]
      const pos2 = this.trailPoints[i]
      p.line(pos1.x, pos1.y, pos2.x, pos2.y)
    }
  }
}

// ---- React component ----

const VEHICLE_COUNT = 10

export default function BannerAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sketchRef = useRef<p5 | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sketch = (p: p5) => {
      let vehicles: Vehicle[] = []
      let shipImage: p5.Image | null = null

      p.preload = () => {
        shipImage = p.loadImage('/decorations/banner/assets/ship.png')
      }

      p.setup = () => {
        const canvas = p.createCanvas(container.clientWidth, container.clientHeight)
        canvas.parent(container)
        for (let i = 0; i < VEHICLE_COUNT; i++) {
          vehicles.push(new Vehicle(p.width / 2, p.height / 2, shipImage, p))
        }
      }

      p.draw = () => {
        p.clear(0, 0, 0, 0)
        for (const v of vehicles) {
          v.update(vehicles, p)
          v.display(p)
        }
      }

      p.mousePressed = () => {
        const mousePos = p.createVector(p.mouseX, p.mouseY)
        for (const v of vehicles) {
          v.setTarget(mousePos)
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(container.clientWidth, container.clientHeight)
        vehicles = []
        for (let i = 0; i < VEHICLE_COUNT; i++) {
          vehicles.push(new Vehicle(p.width / 2, p.height / 2, shipImage, p))
        }
      }
    }

    sketchRef.current = new p5(sketch)

    return () => {
      sketchRef.current?.remove()
      sketchRef.current = null
    }
  }, [])

  return <div ref={containerRef} className="landing-decoration" />
}
