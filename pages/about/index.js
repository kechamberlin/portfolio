import Head from 'next/head';
import { Fragment } from 'react';
import classes from './about.module.css';

export default function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>About | Kris Chamberlin</title>
        <meta
          name="description"
          content="An about page for Kris Chamberlin detailing his recent background, experience, and education, "
        />
      </Head>

      <section className={classes.section}>
        <h1>About Me</h1>

        <h2>Background</h2>
        <p>
          My name is Kris Chamberlin and my dream is to become a well-rounded
          web developer. My journey started in the spring of 2019 while
          finishing my last quarter at UC Santa Barbara. Unsure of what to do
          with my life after college, I came across an ad for web development
          that peaked my interest. I started learning HTML and CSS over the
          summer, and quickly fell in love with puzzle-piecing code together.
        </p>

        <p>
          Immediately after earning my certificate from UC Irvine, Covid-19
          hamstrung society. I felt an urge to do my part, no matter how small,
          so I got a job at my local grocery store. Working there provided
          invaluable experience with customer service and team collaboration,
          all while under the pressure of a global pandemic. I continued
          practicing coding on my off days and in the hours before my shifts
          started.
        </p>

        <p>
          While I recognize that working at a grocery store and my history
          degree do not directly apply to a career in web development, both
          instilled in me a strong work ethic and a foundation for lifelong
          learning. I have never been more hungry to prove myself and gain the
          experience necessary to succeed.
        </p>

        <h2>Education</h2>
        <h4>
          University of California, Irvine | <em>2019</em>
        </h4>
        <ul>
          <li>Full-Stack Web Development Certificate</li>
          <li>
            12-week intensive program that focused on modern programming skills:
            HTML, CSS, Javascript, jQuery, Bootstrap, Node.js, MySQL, MongoDB,
            Express, and React.
          </li>
        </ul>
        <h4>
          University of California, Santa Barbara | <em>2019</em>
        </h4>
        <ul>
          <li>Bachelor of Arts in History</li>
          <li>
            Graduated <em>magna cum laude</em> with 3.81 GPA
          </li>
          <li>
            Received grade of A on 32-page senior thesis that emphasized
            research, writing, and critical analysis
          </li>
        </ul>

        <h2>Experience</h2>
        <h4>
          Albertsons | <em>2020 - present</em>
        </h4>
        <ul>
          <li>Frequently provided exceptional customer service </li>
          <li>Regularly worked with team members</li>
          <li>Recognized by upper management for work ethic</li>
        </ul>
      </section>
    </Fragment>
  );
}
