import React from "react";

const Footer = () => {
    return (
        <div className="footer">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col item social">
      
                <a style={{ backgroundColor: '#3b5998' }} href="https://www.facebook.com/BlackJocker/" target="_blank"><i
                    className="icon ion-social-facebook"></i></a>
                <a style={{ backgroundColor: '#55acee' }} href="https://twitter.com/EdoardoVitaglia" target="_blank"><i
                    className="icon ion-social-twitter"></i></a>
                <a style={{ backgroundColor: '#333333' }} href="https://github.com/R3ddy95" target="_blank"><i
                    className="icon ion-social-github"></i></a>
                <a style={{ backgroundColor: '#0082ca' }} href="https://www.linkedin.com/in/edoardo-vitagliano-299737110"
                  target="_blank"><i className="icon ion-social-linkedin"></i></a>
                <a style={{ backgroundColor: '#ac2bac' }} href="https://www.instagram.com/edo.vitagliano/" target="_blank"><i
                    className="icon ion-social-instagram"></i></a>
      
              </div>
            </div>
            <p className="copyright">Created by <b>Edoardo Vitagliano</b> © 2023</p>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;