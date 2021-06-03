import classes from './stacks.module.css';
import { FaHtml5 } from 'react-icons/fa';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiNextDotJs } from 'react-icons/si';
import { SiGatsby } from 'react-icons/si';

import { FaNodeJs } from 'react-icons/fa';
import { SiGraphql } from 'react-icons/si';
import { SiApollographql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';

import { SiGithub } from 'react-icons/si';
import { SiNpm } from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';

export default function Stacks() {
  return (
    <section className={classes.section}>
      <h2>Technology Stacks</h2>
      <ul>
        <li>
          <span className={classes.html}>
            <FaHtml5 />
          </span>
          <p>HTML</p>
        </li>
        <li>
          <span className={classes.css}>
            <SiCss3 />
          </span>
          <p>CSS</p>
        </li>
        <li>
          <span className={classes.javascript}>
            <SiJavascript />
          </span>
          <p>JavaScript</p>
        </li>
        <li>
          <span className={classes.react}>
            <FaReact />
          </span>
          <p>React</p>
        </li>
        <li>
          <span className={classes.next}>
            <SiNextDotJs />
          </span>
          <p>Next.js</p>
        </li>
        <li>
          <span className={classes.gatsby}>
            <SiGatsby />
          </span>
          <p>Gatsby</p>
        </li>
        <li>
          <span className={classes.node}>
            <FaNodeJs />
          </span>
          <p>Node.js</p>
        </li>
        <li>
          <span className={classes.graphql}>
            <SiGraphql />
          </span>
          <p>GraphQL</p>
        </li>
        <li>
          <span className={classes.apollo}>
            <SiApollographql />
          </span>
          <p>Apollo</p>
        </li>
        <li>
          <span className={classes.mongodb}>
            <SiMongodb />
          </span>
          <p>MongoDB</p>
        </li>
        {/* <li>
          <span className={classes.sanity}>
            <div>S</div>
          </span>
          <p>Sanity.io</p>
        </li> */}
        {/* <li>
          <span className={classes.keystone}>
            <div>K</div>
          </span>
          <p>Keystone.js</p>
        </li> */}
        <li>
          <span className={classes.github}>
            <SiGithub />
          </span>
          <p>GitHub</p>
        </li>
        <li>
          <span className={classes.npm}>
            <SiNpm />
          </span>
          <p>NPM</p>
        </li>
        <li>
          <span className={classes.netlify}>
            <SiNetlify />
          </span>
          <p>Netlify</p>
        </li>
      </ul>
    </section>
  );
}
