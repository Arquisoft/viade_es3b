/**
 * Object mapping of known possible inboxes for the user
 */
export const NavigationItems = [
  {
    id: 'welcome',
    icon: '/viade_es3b/img/viade-icons/terrain-out.svg',
    label: 'navBar.welcome',
    to: '/viade_es3b/welcome'
  },
  {
    id: 'upload',
    icon: '/viade_es3b/img/viade-icons/directions-out.svg',
    label: 'navBar.upload',
    to: '/viade_es3b/upload'
  },
  {
    id: 'map',
    icon: '/viade_es3b/img/icon/map.png',
    label: 'navBar.myTrails',
    to: '/viade_es3b/map'
  },
  {
    id: 'friends',
    icon: '/viade_es3b/img/viade-icons/people.svg',
    label: 'navBar.friends',
    to: '/viade_es3b/friends'

  }
];

export const ProfileOptions = [
  {
    label: 'navBar.profile',
    onClick: 'profileRedirect',
    icon: 'cog'
  },
  {
    label: 'navBar.logOut',
    onClick: 'logOut',
    icon: 'lock'
  }
];
