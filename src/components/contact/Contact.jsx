import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useContext } from 'react'
import { ThemeContext } from '../../context'


const Contact = () => {
  const serviceID = "service_fms93wg";
  const templateID = "template_jxyuuud";
  const publicKey = "eqJmOxlsCV-JV9Hts";
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef)

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setDone(true)
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <div className="c-title">Let&apos;s discuss your project</div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +94 75 123 321
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              contact@lama.dev
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              245 King Street, Touterie Victoria 8520 Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What&apos;s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" style={{backgroundColor: darkMode && "#333", color:darkMode && "white" }}  name="user_name" placeholder="Name" />
            <input type="text" style={{backgroundColor: darkMode && "#333", color:darkMode && "white"}} name="user_subject" placeholder="Subject" />
            <input type="email"style={{backgroundColor: darkMode && "#333" , color:darkMode && "white"}}  name="user_email" placeholder="Email" />
            <textarea rows="5" style={{backgroundColor: darkMode && "#333", color:darkMode && "white"}} placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {done && <p>Thank You</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
