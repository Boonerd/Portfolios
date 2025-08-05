function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <form>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label><br />
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
