import ProjectsGrid from '../projects/projects-grid';
import classes from './featured-projects.module.css';

export default function FeaturedProjects(props) {
  return (
    <section className={classes.latest}>
      <h1>Featured Projects</h1>
      <ProjectsGrid projects={props.projects} />
    </section>
  );
}
