export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Need answers</h2>
          <p>
            If you have a question, no matter how big or small, our awesome team
            will get back to you as soon as possible – you can usually expect a
            response within 24 hours.
          </p>
        </div>
        <div className="contact-form">
          <form
            id="contact"
            action="https://formsubmit.co/vassito@abv.bg"
            method="POST"
          >
            <div className="container">
              <div className="form-elements">
                <label htmlFor="name" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-elements">
                <label htmlFor="email" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-elements">
                <label htmlFor="email" />
                <input type="hidden" name="_subject" value="New submission!" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:5173/thankYou"
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
                  required
                />
              </div>
              <div className="form-elements">
                {/* <input
                  type="submit"
                  className="submit-button"
                  defaultValue="SEND"
                /> */}
                <button type="submit" className="submit-button">
                  SEND
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
