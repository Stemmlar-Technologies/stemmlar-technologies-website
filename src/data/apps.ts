import type { AppInfo } from '../types/App'

export const apps: AppInfo[] = [
  {
    name: 'Track My Time',
    slug: 'track-my-time',
    icon: '/applications/track-my-time/img/app-icon.png',
    description: 'Effortless task tracking: Boost productivity, generate reports, stay organized!',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.stemmlar.track_my_time',
    storeLabel: 'Google Play',
    colour: 'green',
  },
  {
    name: 'Lara Jones and the Caves of Madness',
    slug: 'lara-jones-and-the-caves-of-madness',
    icon: '/applications/lara-jones-and-the-caves-of-madness/img/app-icon.png',
    description:
      'Join Lara Jones in the Caves of Madness to solve puzzles and uncover ancient treasures.',
    storeUrl: 'https://phillipstemmlar.itch.io/lara-jones-and-the-caves-of-madness',
    storeLabel: 'Itch.io',
    colour: 'salmon',
    comingSoon: true,
  },
]
