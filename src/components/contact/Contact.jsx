import "./contact.scss"
import harper from "../../assets/images/svg/harper.png"

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <img
        alt ="Harper Face"
        src = {harper}>
        </img>
        <div className="input">
          <textarea>
            Harpers Advice</textarea>
        </div>
      </div>
    </div>
  )
}

export default Contact