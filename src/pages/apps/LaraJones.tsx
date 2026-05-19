import AppHeader, { AppDescription, AppFooter } from '../../components/AppHeader'
import SectionContainer from '../../components/SectionContainer'
import Button from '../../components/Button'

export default function LaraJones() {
  return (
    <section className="app-description">
      <SectionContainer>
        <AppHeader
          banner="/applications/lara-jones-and-the-caves-of-madness/img/banner_small.png"
          icon="/applications/lara-jones-and-the-caves-of-madness/img/app-icon.png"
          iconAlt="Lara Jones and the Caves of Madness Icon"
          storeUrl="https://phillipstemmlar.itch.io/lara-jones-and-the-caves-of-madness"
          storeLabel="Itch.io"
          colour="salmon"
          hideIconOnMobile
        />

        <AppDescription>
          <h1>Lara Jones and the Caves of Madness</h1>
          <br />
          <p>
            Embark on an epic journey with{' '}
            <b>Lara Jones and the Caves of Madness</b>, a thrilling puzzle game that challenges
            your wit and determination. As Lara, a courageous young woman with a knack for
            adventure, you find yourself drawn to a mysterious cave temple rumored to hold untold
            treasures and ancient secrets.
          </p>
          <br />
          <p>
            Venture deep into the heart of the jungle where the cave resides, and prepare to
            confront a series of mind-bending puzzles and obstacles. Each chamber within the cave
            presents a unique challenge, from intricate mechanisms that must be deciphered to logic
            puzzles that test your analytical skills.
          </p>
          <br />
          <p>
            Navigate through labyrinthine corridors, solve riddles left by past explorers, and
            unravel the mysteries of an ancient civilization. Along the way, uncover clues that
            shed light on the temple's history and the true nature of the treasure that lies hidden
            within.
          </p>
          <br />
          <p>
            As you progress, encounter artifacts that grant new abilities and unlock paths
            previously inaccessible. Use these newfound powers to manipulate your environment and
            overcome increasingly complex challenges.
          </p>
          <br />
          <p>
            Immerse yourself in stunning visuals and atmospheric sound design that bring the cave
            temple to life, creating an immersive experience that captivates and challenges you at
            every turn.
          </p>
        </AppDescription>

        <br />
        <AppFooter>
          <p>
            <b>
              Will you unravel the secrets of the Caves of Madness and claim the legendary
              treasure? Join Lara Jones on her daring quest and test your mettle in this
              unforgettable puzzle adventure.
            </b>
          </p>
          <br />
          <Button href="/#apps" colour="khaki-green">
            Back to Home
          </Button>
        </AppFooter>
        <br />
      </SectionContainer>
    </section>
  )
}
