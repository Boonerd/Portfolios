function Home() {
  return (
    <section className="section min-h-screen flex items-center bg-gradient-to-b from-secondary to-white">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 animate-fade-in">Hi, I'm Your Name</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">Student Software Developer | Innovating with Code, Data, and Automation</p>
        <div className="space-x-4">
          <a href="/projects" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary hover:text-primary transition">View Projects</a>
          <a href="/contact" className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-secondary hover:text-primary transition">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;