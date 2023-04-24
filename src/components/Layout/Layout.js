import { Container } from './Layout.styled';
import bgImage from 'components/images/login-bg.png';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return <Container>
    <img src={bgImage} alt="background" className={css.bgImage} />
    {children}</Container>;
};