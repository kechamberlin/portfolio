import classes from './about.module.css';
import Stacks from './stacks';

export default function About() {
  return (
    <section className={classes.heading}>
      <h1>About Me</h1>
      <p>
        Hey! My name is Kris and I'm an aspiring web developer from southern
        California. After obtaining a history degree from UC Santa Barbara, I
        decided to challenge myself and attended a full-stack certificate
        program. There, I discovered my love for front-end programming and
        design.
      </p>
      <p>
        When I'm not coding, I enjoy pursuing my passions for video games,
        creative writing, playing bass, and making memories with my fiancé
        Aleah.
      </p>
      <Stacks />
    </section>
  );
}
