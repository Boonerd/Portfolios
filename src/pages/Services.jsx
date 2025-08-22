function Services() {
  const services = [
    { title: 'Software Development', desc: 'Custom web and desktop applications using modern frameworks.' },
    { title: 'Data Analysis', desc: 'Turning raw data into actionable insights with Python and Tableau.' },
    { title: 'Mobile App Development', desc: 'Building cross-platform apps with React Native or Flutter.' },
    { title: 'Writing', desc: 'Crafting engaging creative content or professional documentation.' },
    { title: 'Business Analysis & Automation', desc: 'Optimizing workflows with tools like Zapier and custom scripts.' },
  ];

  return (
    <section className="section">
      <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">Services</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;