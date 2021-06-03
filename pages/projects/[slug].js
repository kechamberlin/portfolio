import Head from 'next/head';
import { Fragment } from 'react';
import ProjectContent from '../../components/projects/project-detail/project-content';
import { getProjectData, getProjectsFiles } from '../../lib/projects-util';

export default function SingleProjectPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.project.title} | Kris Chamberlin</title>
        <meta name="description" content={props.project.description} />
      </Head>
      <ProjectContent project={props.project} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const projectData = getProjectData(slug);

  return {
    props: {
      project: projectData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const projectFileNames = getProjectsFiles();

  const slugs = projectFileNames.map((fileName) =>
    fileName.replace(/\.md$/, '')
  );

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),

    fallback: false,
  };
}
