import React from 'react';
import andrew from 'assets/img/andrew.jpg';
import resume from 'assets/files/andrew_vernier_resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function About(): JSX.Element {
  return (
    <>
      {/* About */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="section-header">About</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img src={andrew} className="img-fluid rounded" id="about-portrait" alt="" />
            </div>
            <div className="col-xs-12 col-md-6 about-info">
              <div className="about-text">
                <p>
                  Hi!
                  My name is Andrew and I am a software engineer at Microsoft working on the Azure Privileged Identity Management team.
                  I graduated from the University of Michigan in December 2020 with a master's degree in Computer Science and Engineering.
                  My career goal is to use my passions to positively impact the lives of others while challenging myself to continually become a better version of myself.
                  My professional interests lie in user experiences, autonomous robotics, and algorithms.
                  With my current personal projects, I am exploring mobile applications, automated testing, and refactoring this website into React.
                  I have experience with user interfaces, RESTful APIs, and object oriented programming.
                  In my free time I love nearly anything sports related and do my best to stay active.
                  My favorite sports to follow are hockey and football, especially the Michigan Wolverines.
                  Go blue!
                  I also enjoy working on DIY projects and playing sub-par golf.
                </p>
                <div className="center-button-wrapper">
                  <a href={resume} className="custom-button btn btn-primary btn-lg page-scroll ">My Resume</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="section-header">Contact</h2>
              <hr />
            </div>
          </div>
          <form action="https://formsubmit.co/amverni@umich.edu" method="POST">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 contact-form">
                <input type="textarea" name="name" className="form-control" placeholder="Name" required />
              </div>
              <div className="col-xs-10 col-xs-offset-1 col-md-6 contact-form">
                <input type="email" name="email" className="form-control" placeholder="Email" required />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 col-md-12 contact-form">
                <input type="text" name="subject" className="form-control" placeholder="Subject" required />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 col-md-12 contact-form">
                <textarea name="message" className="form-control" rows={4} placeholder="Message" required></textarea>
              </div>
            </div>
            <input type="text" name="_gotcha" style={{"display": "none"}} />
            <div className ="center-button-wrapper">
            <button type ="submit" className ="btn btn-primary btn-lg custom-button">Send Message</button>
            </div>
            <input type ="hidden" name="_next" value="https://amverni.github.io"/>
          </form>

          <div className="row">
            <div className="col-xs-12 col-md-12">
              <p id="send-message-disclaimer"><em>
                After hitting send message, if you get a page telling you that this form needs activation, don't worry, I'll still get your message. This happens because the form gets deactivated after a period of time of not being used. Oddly enough my website is not most people's preferred method of contacting me, but don't let that stop you!
              </em></p>
            </div>
          </div>

          <div className="row">
            <div className="col social">
              <ul className="social-icons list-inline">
                <li className="list-inline-item">
                  <div className="social-icon-container github">
                    <a href="https://github.com/amverni">
                      <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
                    </a>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="social-icon-container linkedin">
                    <a href="https://www.linkedin.com/in/andrew-vernier/">
                      <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="white" />
                    </a>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="social-icon-container facebook">
                    <a href="https://www.facebook.com/profile.php?id=100009483842716">
                      <FontAwesomeIcon icon={faFacebookF} size="2x" color="white" />
                    </a>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="social-icon-container twitter">
                    <a href="https://twitter.com/amvernier">
                      <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
                    </a>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="social-icon-container instagram">
                    <a href="https://www.instagram.com/avernier14/">
                      <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
