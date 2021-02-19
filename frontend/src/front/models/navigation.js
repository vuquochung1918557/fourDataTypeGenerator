// @flow

export const navigation = Object.freeze({
  brand: 'reactJsEvaluation',
  leftLinks: [],
  rightLinks: [
    {
      label: 'Home',
      link: '/',
      view: 'home',
      isRouteBtn: true,
    },
    {
      label: 'About',
      link: '/about',
      view: 'about',
      isRouteBtn: true,
    },
  ],
  sideMenu: [
    // group menu #1
    {
      id: 1,
      group: 'Dashboard  ',
      menus: [
        {
          name: 'Dashboard preview',
          linkTo: '/',
          faIconName: 'fa-eye',
        }
      ],
    }
  ]
});
