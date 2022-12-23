import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
   <footer>
   <div className="Box">
     
      <div className="Container">
        <div className="Row">
          <div className="Column">
            <div className="Heading">About Us</div>
            <div className="FooterLink" href="#">Aim</div>
            <div className="FooterLink" href="#">Vision</div>
            <div className="FooterLink" href="#">Testimonials</div>
          </div>
          <div className="Column">
            <div className="Heading">Services</div>
            <div className="FooterLink"href="#">Writing</div>
            <div className="FooterLink" href="#">Internships</div>
            <div className="FooterLink" href="#">Coding</div>
            <div className="FooterLink" href="#">Teaching</div>
          </div>
          <div className="Column">
            <div className="Heading">Contact Us</div>
            <div className="FooterLink" href="#">Uttar Pradesh</div>
            <div className="FooterLink" href="#">Ahemdabad</div>
            <div className="FooterLink" href="#">Indore</div>
            <div className="FooterLink" href="#">Mumbai</div>
          </div>
          <div className="Column">
            <div className="Heading">Social Media</div>
            <div className="FooterLink"  href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </div>
            <div className="FooterLink" href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </div>
            <div className="FooterLink" href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </div>
            <div className="FooterLink" href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
   </footer>

  )
}

export default Footer
