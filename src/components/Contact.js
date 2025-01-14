import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form method="post" onSubmit={handleSubmit}>
            {/* Form content */}
          </form>
        </section>
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="fa icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="mailto:jom.nacorda@gmail.com">jom.nacorda@gmail.com</a>
            </div>
          </section>
          {/* Other contact methods */}
        </section>
      </div>
    </section>
  );
}

export default Contact;