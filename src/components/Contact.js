import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id="contact">
    <div class="inner">
      <section>
        <form method="post" action="#">
          <div class="fields">
            <div class="field half">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div class="field half">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="6"></textarea>
            </div>
          </div>
          <ul class="actions">
            <li>
              <input type="submit" value="Send Message" class="primary" />
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