import { Link } from 'react-router-dom';
// import { ReactComponent as LogoDark } from '../../../../assets/logos/Logo.svg';
import { ReactComponent as LogoDark } from '../../../../assets/logos/LogoAMS.svg';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <LogoDark height={70} />
    </LinkStyled>
  )
};

export default Logo;
