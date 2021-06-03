import classes from './hero.module.css';
import Image from 'next/image';
import Social from './social';

export default function Hero() {
  return (
    <header className={classes.hero}>
      <section>
        <h1>Kris Chamberlin</h1>
        <h2>I am a front end developer based in Irvine, California.</h2>
        <Social />
      </section>
      <section>
        <div className={classes.image}>
          <Image
            src="/images/site/kris-chamberlin.png"
            alt="An image of Kris Chamberlin"
            layout="responsive"
            width={1000}
            height={1000}
            loading="eager"
            quality={75}
          />
        </div>
      </section>
    </header>
  );
}
