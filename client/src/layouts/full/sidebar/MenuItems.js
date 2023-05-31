import DashboardIcon from '@mui/icons-material/Dashboard';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';


import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: DashboardIcon,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: uniqueId(),
    title: 'Typography',
    icon: FontDownloadIcon,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Shadow',
    icon: ContentCopyIcon,
    href: '/ui/shadow',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: LoginIcon,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: PersonAddAltIcon,
    href: '/auth/register',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Icons',
    icon: InsertEmoticonIcon,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: SportsBasketballIcon,
    href: '/sample-page',
  },
];

export default Menuitems;
