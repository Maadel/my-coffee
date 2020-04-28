import React, { Component } from "react"
import contactBG from "../../images/contact-bg.png"
import klogo from "../../images/logo-k4ws.png"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"

export default class contactC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      css: "hero-min col-10",
    }
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "hero-min col-10" })
      : this.setState({
          navbarOpen: true,
          css: "hero-full col-12",
        })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className={this.state.css}>
          <div className="logo-k4ws">
          <Link to="/">
              <img src={klogo}/>
            </Link>
            </div>
            <div className="toggle-btn">
              <button onClick={this.navbarHandler}>
                <FaBars />
              </button>
            </div>
            <div>
              <div className="hero-bg">
                <img src={contactBG} />

                <div className="contact-text">
                  <h1>اتصل بنا</h1>

                  <form>
                    <label for="name">الإسم</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder=""
                    ></input>
                    <label for="name">البريد الالكتروني</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=""
                    ></input>
                    <label for="subject">موضوع الرسالة</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder=""
                    ></input>
                    <label for="massage">نص الرسالة</label>
                    <textarea
                      id="massage"
                      name="massage"
                      placeholder=""
                      className="form-textarea"
                    ></textarea>
                    
                    <input type="submit" value="إرسال"/>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
