import React from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_dj11to6',
      'template_5rsyt7z',
      e.target,
      'IoonUONJlNHstpftp'
    )
      .then((result) => {
        alert('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form onSubmit={handleSubmit}>
            <div className="fields">
              <div className="field half">
                <label htmlFor="name">Name</label>
                <input type="text" name="from_name" id="name" required />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="email" name="from_email" id="email" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6" required></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="primary" />
              </li>
              <li><input type="reset" value="Clear" /></li>
            </ul>
          </form>
        </section>
        <section class="split">
          <section>
            <div class="contact-method">
              <span class="fa icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="#">jom.nacorda@gmail.com</a>
            </div>
          </section>
          <section>
            <div class="contact-method">
              <span class="fa icon solid alt fa-phone"></span>
              <h3>Phone</h3>
              <span>0274271263</span>
            </div>
          </section>
          <section>
            <div class="contact-method">
              <span class="fa icon solid alt fa-home"></span>
              <h3>Address</h3>
              <span>Christchurch, NZ</span>
            </div>
          </section>
        </section>

      </div>
    </section>
  );
}

export default Contact;