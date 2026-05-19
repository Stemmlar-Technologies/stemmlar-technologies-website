export type ButtonColour = 'orange' | 'green' | 'salmon' | 'khaki-green'

export interface AppInfo {
  name: string
  slug: string
  icon: string
  description: string
  storeUrl: string
  storeLabel: string
  colour: ButtonColour
  comingSoon?: boolean
}
