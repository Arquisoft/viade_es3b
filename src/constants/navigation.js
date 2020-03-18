/**
 * Object mapping of known possible inboxes for the user
 */
export const NavigationItems = [
  {
    id: 'welcome',
    icon: '/img/viade-icons/terrain-out.svg',
    label: 'navBar.welcome',
    to: '/welcome'
  },
 /* {
    id: 'profile',
    icon: '/img/people.svg',
    label: 'navBar.profile',
    to: '/profile'
  },
  {
<<<<<<< HEAD
    id: 'tictactoe',
    icon: '/img/icon/tictactoe.svg',
    label: 'navBar.tictactoe',
    to: '/tictactoe'
  },
  {
    id: 'text-editor',
    icon: '/img/icon/files.svg',
    label: 'navBar.text-editor',
    to: '/text-editor'
  },*/
  {
    id: 'map',
    icon: '/img/viade-icons/directions-out.svg',
    label: 'navBar.myTrails',
    to: '/map'
  },
  {
	id: 'upload',
    icon: '/img/icon/map.png',
    label: 'navBar.upload',
    to: '/upload'
  },
    {id: 'friends',
    icon: '/img/viade-icons/people.svg',
    label: 'navBar.friends',
    to: '/friends'

  }
];

export const ProfileOptions = [
  {
    label: 'navBar.profile',
    onClick: 'profileRedirect',
    icon: 'cog'
  },
  /*{
    label: 'navBar.formModelConvert',
    onClick: 'formModelConvertRedirect'
  },
  {
    label: 'navBar.formModelRender',
    onClick: 'formModelRenderRedirect'
  },*/
  {
    label: 'navBar.logOut',
    onClick: 'logOut',
    icon: 'lock'
  }
];
