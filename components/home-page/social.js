import classes from './social.module.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Social() {
  return (
    <span className={classes.icons}>
      <a
        href="https://github.com/kechamberlin"
        target="_blank"
        rel="noreferrer"
        className={classes.github}
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/kris-chamberlin/"
        target="_blank"
        rel="noreferrer"
        className={classes.linkedin}
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:kris.elliott.chamberlin@gmail.com?subject=Hey Kris!"
        className={classes.email}
      >
        <MdEmail />
      </a>
    </span>
  );
}
