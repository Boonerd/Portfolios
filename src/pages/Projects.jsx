function Projects() {
  const projects = [
    {
      title: 'Task Automation App',
      desc: 'A mobile app to automate repetitive tasks, improving productivity.',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      link: 'https://github.com/your-username/task-app',
      demo: 'https://your-demo-link.com',
    },
    {
      title: 'Data Insights Dashboard',
      desc: 'Interactive web dashboard for visualizing complex datasets.',
      tech: ['React', 'D3.js', 'Python'],
      link: 'https://github.com/your-username/dashboard',
      demo: 'https://your-demo-link.com',
    },
    {
      title: 'Personal Portfolio',
      desc: 'This responsive portfolio showcasing my skills and projects.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      link: 'https://github.com/your-username/portfolio',
      demo: '#',
    },
  ];

  return (
    <section className="section">
      <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-secondary text-primary px-2 py-1 rounded-md text-sm">{tech}</span>
              ))}
            </div>
            <div className="space-x-4">
              <a href={project.link} className="text-primary hover:text-secondary">GitHub</a>
              <a href={project.demo} className="text-primary hover:text-secondary">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;