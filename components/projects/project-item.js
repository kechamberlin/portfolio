import Link from 'next/link';
import classes from './project-item.module.css';
import Image from 'next/image';

import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';

export default function ProjectItem(props) {
  const { title, image, description, techs, github, demo, slug } =
    props.project;

  const imagePath = `/images/projects/${slug}/${image}`;
  const linkPath = `/projects/${slug}`;

  return (
    <li className={classes.project}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={325}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{techs}</p>
          </div>
        </a>
      </Link>
      <span className={classes.projectLinks}>
        <a href={github} rel="noopener noreferrer" target="_blank">
          <FaGithub />
        </a>
        <a href={demo} rel="noopener noreferrer" target="_blank">
          <BsBoxArrowUpRight />
        </a>
      </span>
    </li>
  );
}
