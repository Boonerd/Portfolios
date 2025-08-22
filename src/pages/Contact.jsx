import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm('your-formspree-id'); // Replace with your Formspree ID

  if (state.succeeded) {
    return (
      <section className="section text-center">
        <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">Thank You!</h2>
        <p className="text-xl text-primary">Your message has been sent. I'll get back to you soon!</p>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-primary font-medium">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full p-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-primary font-medium">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full p-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message" className="block text-primary font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            rows="5"
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary hover:text-primary transition w-full"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center">
        <p className="text-gray-700">Or connect with me:</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/your-username" className="text-primary hover:text-secondary transition">GitHub</a>
          <a href="https://linkedin.com/in/your-username" className="text-primary hover:text-secondary transition">LinkedIn</a>
          <a href="https://x.com/your-username" className="text-primary hover:text-secondary transition">X</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;