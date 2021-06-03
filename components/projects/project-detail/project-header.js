import classes from './project-header.module.css';

export default function ProjectHeader(props) {
  const { title } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
    </header>
  );
}
