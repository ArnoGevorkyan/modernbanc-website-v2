export type TMainNavigationItem = {
  title: string
  href: string
  icon?: JSX.Element
}

export const main_nav_items: TMainNavigationItem[] = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/career',
    title: 'Career',
  },
  {
    href: '/integrations',
    title: 'Integrations',
  },
  {
    href: '/contact-us',
    title: 'Contact us',
  },
]
