import "./Contact.css";
import twitter from "../icons/twitter.svg"
import linkedin from "../icons/linkedin.svg"
import email from "../icons/envelope-solid.svg"

const Contact = () => {
  return (
    <div>
      <div className="contact-section">
        <h2 className="contact-header">Contact Us</h2>

        <div className="form-body">
          <div>
            <div>
              <div>
                <form className="form" action="#">
                  <div className="form-text"></div>

                  <div class="form__group">
                    {/* <label for="name" class="form__label">Full name</label> */}
                    <input
                      type="text"
                      class="form__input"
                      placeholder="Full name"
                      id="name"
                      required
                    />
                  </div>

                  <div class="form__group">
                    {/* <label for="email" class="form__label">Email address</label> */}
                    <input
                      type="email"
                      class="form__input"
                      placeholder="Email address"
                      id="email"
                      required
                    />
                  </div>

                  <div class="form__group">
                    {/* <label for="email" class="form__label">Email address</label> */}
                    <input
                      type="email"
                      class="form__input"
                      placeholder="Message"
                      id="email"
                      required
                    />
                  </div>

                  <div class="form__group">
                    <button class="btn-form">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer  className="footer">
        <div className="footer-end">
          <a href="#" target={"_blank"}>
            <div className="footer-icons">
            <img src={twitter} alt="Twitter" className="footer-icon-classified"/>
            </div>
          </a>
          <a href="#" target={"_blank"}>
            <div className="footer-icons">
            <img src={linkedin} alt="Twitter" className="footer-icon-classified"/>
            </div>
          </a>
          <a href="#" target={"_blank"}>
            <div className="footer-icons">
            <img src={email} alt="Twitter" className="footer-icon-classified"/>
            </div>
          </a>
     
        </div>
      </footer>
    </div>
  );
};

export default Contact;
