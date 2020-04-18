import React from 'react';

import styles from "./About.module.scss";
import TpLink from "../../components/TpLink/TpLink";

import LinkedIn from "../../images/LinkedIn-Blue-40@2x.png";

const About: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.page + " container-sm"} >

      <div className="row">
        <div className="col-9">
          <h3>Contact</h3>
          <p>My name is John Webster and I approve this website</p>
          <p>If you wish to send comments or toilet paper related items (digital only please) for use in this website, please navigate or click below to 
            reach the contributions page
          </p>
          <p>
            <TpLink to="/Contribute">
              Comment on website or send cool stuff about toilet paper to the site
            </TpLink>
          </p>
          <p>If you wish to find out more about me, please feel free to click on the LinkedIn logo opposite, which leaves this website</p>
        </div>
        <div className="col-3">
          <a href="https://www.linkedin.com/in/JohnWWebster">
            <img src={LinkedIn} alt="Clickable LinkedIn logo"  className={styles.contactLI} />
          </a>
        </div>
      </div>

      
      <div className="row">
        <div className="col-12">
          <h3>Donations</h3>
          <p>Some information about how to donate</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3>Key software used to build this website</h3>
          <p>Image. react etc.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3>Stuff I used</h3>
          <p>licenses, links to other stuff. Websites, Wikipedia etc.</p>
          <p>Humour inspired by Monty Python, Mad Magazine and a number of other sources too dubious to mention</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          
          <h4>Copyright information for this website</h4>
          <p>There has to be some small print somewhere, so here it is</p>
          <p>This website is licensed using the MIT license - you are free to copy or change things, but if you are foolish enough
          to want to use a large chunk
          of the site, then include the following notice
          </p>

          <div className={styles.copyBox} >
            <p><strong>MIT license</strong></p>
            <p>Copyright 2020 John Webster</p>
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
              The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
            <p>From <a href="https://opensource.org/licenses/MIT" >https://opensource.org/licenses/MIT</a></p>          
          </div>
          
        </div>
      </div>


    </div>

  );
}



export default About;