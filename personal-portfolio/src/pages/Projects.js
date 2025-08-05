import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ProjectCard
        title="My Portfolio"
        description="A personal portfolio built with React."
        link="https://your-portfolio-link.com"
      />
      <ProjectCard
        title="Client Website"
        description="A responsive business site built for a real client."
      />
    </section>
  );
}

export default Projects;
