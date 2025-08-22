function Skills() {
  const skills = [
    { name: 'Software Development', icon: '💻', desc: 'Building robust web apps with React, JavaScript, and Python' },
    { name: 'Data Analysis', icon: '📊', desc: 'Extracting insights using Pandas, NumPy, and Tableau' },
    { name: 'Mobile App Development', icon: '📱', desc: 'Creating cross-platform apps with React Native and Flutter' },
    { name: 'Writing', icon: '✍️', desc: 'Crafting creative and formal content for diverse needs' },
    { name: 'Business Analysis & Automation', icon: '📈', desc: 'Streamlining processes with Excel, Zapier, and custom tools' },
  ];

  return (
    <section className="section">
      <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-primary">{skill.name}</h3>
            <p className="text-gray-700">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;