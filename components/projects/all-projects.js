import classes from './all-projects.module.css';
import ProjectsGrid from './projects-grid';

export default function AllProjects(props) {
  return (
    <section className={classes.projects}>
      <h1>Full Project Collection</h1>
      <ProjectsGrid projects={props.projects} />
    </section>
  );
}
