import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Reads path of overall portfolio project and points to the projects folder
const projectsDirectory = path.join(process.cwd(), 'projects');

export function getProjectsFiles() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectData(projectIdentifier) {
  const projectSlug = projectIdentifier.replace(/\.md$/, ''); // removes file extension

  const filePath = path.join(projectsDirectory, `${projectSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const projectData = {
    slug: projectSlug,
    ...data,
    content: content,
  };

  return projectData;
}

export function getAllProjects() {
  // reads entire content of a directory in one go
  const projectFiles = getProjectsFiles();

  const allProjects = projectFiles.map((projectFile) => {
    return getProjectData(projectFile);
  });

  // sort alphabetically
  const sortedProjects = allProjects.sort((projectA, projectB) =>
    projectA.title > projectB.title ? -1 : 1
  );

  return sortedProjects;
}

export function getFeaturedProjects() {
  const allProjects = getAllProjects();

  const featuredProjects = allProjects.filter((project) => project.isFeatured);

  return featuredProjects;
}
