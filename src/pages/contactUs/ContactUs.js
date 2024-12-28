import './ContactUs.css';
import '../../components/sidebar/Sidebar';
import '../../components/newsletter/NewsLetter'
import ScrollButton from '../../components/scroll/ScrollButton';

const ContactUs = () => {
    return (
      <div className='main'>
        <div className="blog-section">
            <h1>Leave Us a Message!!</h1>
            <p>
                If you would like to subscribe to our Newsletter, have a question about an upcoming event,
                would like to explore a partnership with TEDx IIT Guwahati, or want to send us a comment or suggestion,
                simply fill out the form below and we’ll get back to you shortly.
            </p>
        </div>

        <div className="form-wrapper">
            <div className="outer-box"></div>

            <div className="form-container">
                <form>
                    <div className="row">
                        <input type="text" name="first_name" placeholder="First Name*" required />
                        <input type="text" name="last_name" placeholder="Last Name" />
                    </div>

                    <div className="row">
                        <input type="email" name="email" placeholder="Email Address*" required />
                        <input type="tel" name="contact_number" placeholder="Contact Number*" required />
                    </div>

                    <textarea name="comments" placeholder="Comments"></textarea>

                    <div className="checkbox-container">
                        <input type="checkbox" id="newsletter" name="newsletter" />
                        <label for="newsletter">Sign me up for the TEDx IIT Guwahati newsletter</label>
                    </div>

                    <div className="button-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        
        {/* <ScrollButton /> */}
      </div>
    );
};

export default ContactUs;
