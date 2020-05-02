import React from 'react';

import styles from "./About.module.scss";
import TpLink from "../../components/TpLink/TpLink";
import cookie from "../../images/cookie2.gif";

import LinkedIn from "../../images/linkedInLogo.png";

const About: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.page + " container-sm"} >

      <div id="tpContact" className="row">
        <div className="col-12">
          <h3>Contact</h3>
        </div>
      </div>
      
      <div className="row">
        <div className="col-10 col-md-9">

          <p>My name is John Webster and I approve this website</p>
          <p>If you wish to send comments or toilet paper related items (digital only please) for use in this website, please navigate or click below to 
            reach the contributions page
          </p>
          <p>
            <TpLink to="/Contribute">
              Comment on website or send cool stuff about toilet paper to me
            </TpLink>
          </p>
          <p>If you wish to find out more about me, please feel free to click on the LinkedIn logo, which leaves this website</p>
        </div>
        <div className="col-8 col-md-3">
          <a href="https://www.linkedin.com/in/JohnWWebster">
            <img src={LinkedIn} alt="Clickable LinkedIn logo, find out more about me"  className={styles.contactLI} />
          </a>
        </div>
      </div>


      
      {/* <div id="tpDonate" className="row">
        <div className="col-12">
          <h3>Donations</h3>
          <p>Animated dollar bill. Some information about how to donate</p>
        </div>
      </div> */}

      <div id="tpStuff" className="row">
        <div className="col-12">
          <h3>Stuff I used</h3>
          <p>Humour inspired by Monty Python, Mad Magazine and a number of other sources too dubious to mention</p>
          <h5>Sources (links to external pages)</h5>
          <p>
            <TpLink to="http://www.toiletpaperhistory.net">History of toilet paper</TpLink><br />
            <TpLink to="https://trueplumbers.com/blog/do-you-use-more-toilet-paper-than-the-average-person/">
              trueplumbers.com Toilet paper usage</TpLink><br />
            <TpLink to="https://www.tissueworldmagazine.com/">Tissue world magazine Industry newsletter for pulp products</TpLink><br />
            <TpLink to="https://en.wikipedia.org/wiki/Toilet_paper">
              Wikipedia on toilet paper - I don't know how they could keep a straight face writing this
            </TpLink> <br />
          </p>
          {/* <h5>Licenses</h5> */}
        </div>
      </div>

      {/* <div className="row">
        <div className="col-12">
          <h3>Key software used to build this website</h3>
          <p>Image. react etc.stack overflow</p>
        </div>
      </div> */}

      <div id="tpPrivacy" className="row">
        <div className="col-12">
          <h3>Privacy and cookies</h3>
          <img src={cookie} alt="No cookies here" className={styles.cookie} />
          <p>
            This website collects no data and uses no cookies or other similar technologies, 
            which is one way to meet the requirements of GPDR, CCPR, LGPD and any other standard.
          </p>
          <p className={styles.clear}>
            I know I'm making a big fuss about this, but I'm amazed by all the sneaky methods some companies use to track people.
            Examples include
          </p>
          <ul>
            <li>
              Google (and similar) analytics. Provides the website owner with lots of useful information about how the website is being used,
              but also supplies information about individual users to other companies
            </li>
            <li>
              Social media share buttons. I would love you to talk about my website with your friends, but guess what ....
            </li>
            <li>
              Code within ads that sends tracking information back to other companies and sets cookies. That's why no ads
            </li>
            <li>
              Images from other websites that can track behavior when the image is loaded
            </li>
          </ul>
          <p>
            In many ways all this tracking doesn't bother me that much. It allows companies that are offering free services to make
            money from those services, and companies should be able to make money. The privacy aspect makes me nervous though, but let's face it,
            I'm the kind of person that doesn't have a facebook account ...
          </p>
        </div>
      </div>

      <div id="tpCopyright" className="row">
        <div className="col-12">
          
          <h4>Copyright information for this website</h4>
          <p>There has to be some small print somewhere, so here it is.</p>
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
            From <a href="https://opensource.org/licenses/MIT" >https://opensource.org/licenses/MIT</a>          
          </div>
          
        </div>
      </div>


    </div>

  );
}



export default About;