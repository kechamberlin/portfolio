import ProjectItem from './project-item';
import classes from './projects-grid.module.css';

export default function ProjectsGrid(props) {
  const { projects } = props;

  return (
    <ul className={classes.grid}>
      {projects.map((project) => (
        <ProjectItem key={project.slug} project={project} />
      ))}
    </ul>
  );
}
