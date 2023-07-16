import DropDown from '../DropDown/DropDown';
const logOut = [
  {
    title: 'Bookmarks',
    link: '/bookmarks'
  },
  {
    title: 'Sign out',
    link: '/sign-out'
  }
];
function DropdownBM() {
  return <DropDown data={logOut} />;
}

export default DropdownBM;
