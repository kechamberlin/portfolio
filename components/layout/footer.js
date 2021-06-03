import classes from './footer.module.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Social from '../home-page/social';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Social />
      <div> &copy; Built by Kris Chamberlin | {new Date().getFullYear()}</div>
    </footer>
  );
}
