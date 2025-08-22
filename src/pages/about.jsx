function About() {
  return (
    <section className="section">
      <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg text-gray-700 mb-4">
            I'm a dedicated student software developer passionate about creating impactful solutions. With expertise in software development, data analysis, and mobile app creation, I thrive on turning ideas into reality. My skills also extend to creative and formal writing, as well as business analysis and automation, helping businesses streamline processes efficiently.
          </p>
          <a href="https://drive.google.com/your-resume-link" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary hover:text-primary transition">Download Resume</a>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">Timeline</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>2023 - Began programming with Python and JavaScript</li>
            <li>2024 - Developed first mobile app using React Native</li>
            <li>2025 - Pursuing a degree in Computer Science, building real-world projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;