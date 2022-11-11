export interface MENU_ITEM {
  title : string,
  icon : any,
  link : string,
}

export const MENU_ITEMS: Array<MENU_ITEM> = [
    {
      title: 'About',
      icon: 'assets/img/about.svg',
      link: '/pages/about',
    },
    {
      title: 'My Skills',
      icon: 'assets/img/about.svg',
      link: '/pages/skills',
    },
]