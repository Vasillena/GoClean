export default function Contact() {
  return (
    <section className="contact-section">
      <h1>NEED ANSWERS</h1>
      <div className="contact-container">
        <div className="contact-text">
          <p>
            If you have a question, no matter how big or small, our awesome
            customer support team will get back to you as soon as possible – you
            can usually expect a response within 24 hours.
          </p>
        </div>
        <div className="contact-form">
          <form id="contact">
            <div className="container">
              <div className="form-elements">
                <label htmlFor="name" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Name"
                />
              </div>
              <div className="form-elements">
                <label htmlFor="email" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-elements">
                <label htmlFor="message" />
                <textarea
                  id="message"
                  name="message"
                  cols={50}
                  rows={2}
                  placeholder="Hi..."
                  defaultValue={""}
                />
              </div>
              <div className="form-elements">
                <input
                  type="submit"
                  className="submit-button"
                  defaultValue="SEND"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
