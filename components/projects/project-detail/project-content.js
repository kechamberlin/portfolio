import ProjectHeader from './project-header';
import classes from './project-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';
import { RiFoldersLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';

export default function ProjectContent(props) {
  const { project } = props;

  // const imagePath = `/images/projects/${project.slug}/${project.image}`;

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/projects/${project.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/projects/${project.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <ProjectHeader title={project.title} />
      <ReactMarkdown components={customRenderers}>
        {project.content}
      </ReactMarkdown>

      <span className={classes.projectLinks}>
        <Link href="/projects">
          <a>
            <RiFoldersLine />
            <p>Projects</p>
          </a>
        </Link>
        <a href={project.github} rel="noopener noreferrer" target="_blank">
          <FaGithub />
          <p>GitHub</p>
        </a>
        <a href={project.demo} rel="noopener noreferrer" target="_blank">
          <BsBoxArrowUpRight />
          <p>Demo</p>
        </a>
      </span>
    </article>
  );
}
