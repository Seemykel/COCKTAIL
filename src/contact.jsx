
import './styles/contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h1>📩 Contact Us</h1>
      <p>
        Have questions, suggestions, or just want to share your favorite cocktail? 
        Reach out we'll love to hear from you!!!
      </p>
      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Message</label>
        <textarea placeholder="Type your message here..." rows="5"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;