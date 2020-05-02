import React from 'react';
import TpLink  from "../../components/TpLink/TpLink";

import styles from "./Covid19.module.scss";


const Covid19: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.page + " container-sm"}>
      <div className="row">
        <div className="col-12">
          <h2>Coronavirus</h2>
          <p>
            There are a number of names for what's going on
          </p>
          <dl className={styles.indent}>
            <dt>Pandemic</dt>
              <dd>The world wide spread of a disease</dd>
            <dt>Coronavirus</dt>
              <dd>A type of virus</dd>
            <dt>SARS-CoV-2 </dt>
              <dd>
                The virus that's causing all the trouble. 
                Severe Acute Respiratory Syndrome Coronavirus 2
              </dd>
            <dt>COVID-19: </dt>
              <dd>
                The disease caused by this virus.
                Coronavirus Disease 2019
              </dd>
          </dl>
          <p>
            I didn't get to pick those names
          </p>

          <p>
            On this page, there a number of different topics. Click on one of the links below to go directly to that topic
            or read in sequence
          </p>
          <TpLink scroll={true} to="#coronavirusViruses">
            Viruses, Coronavirus viruses, Influenza viruses and hand washing
          </TpLink>
          <br />
          {/* <TpLink to="#coronavirusInformation">
            How to use different sources of information, not everything on the internet is true
          </TpLink>
          <br /> */}
          {/* <TpLink to="#coronavirusReliable">
            Reliable sources of Information - Doctors, Scientists, Statistics and Journalists
          </TpLink>
          <br /> */}
          <TpLink scroll={true} to="#coronavirusLinks">
            External websites with more information
          </TpLink>
          <br />

          <h5 id="coronavirusViruses">Viruses, Coronavirus viruses, Influenza viruses and hand washing</h5>

          {/* <h5 id="coronavirusInformation">Information</h5>
          <p>
            Like everything nowadays, there is lots of information about the coronavirus available on the Internet. 
            Like everything else, some information is accurate, some information is incomplete, some information is a wild guess 
            and some information is deliberately false. 
          </p>
          <p>
            There are people who deliberately create false information because the more clicks they get, the more money
            they can make. There are people who make a living from this. The false information is intended to catch
            everyone's attention, usually the more controversial it is, the more clicks they get. With the Coronavirus,
            things like magic cures, stories about hoarded masks and ventilators and so on are going to get a lot of clicks.
            Stories like this can spread like wildfire on social media, which does not make them true.
          </p>
          <p>
            Governments and Institutions have priorities that may not match yours. They have two important priorities
          </p>
          <ol>
            <li>Don't create panic</li>
            <li>Make themselves and their associates look good</li>
          </ol>
            The first is important as you might imagine. The second is human nature. After all, you might shave, put on makeup or both before
            going out - everyone want to look good. For example, the World Health Organization (WHO) cannot afford to make any specific 
            country look bad. That could lead to loss of funding, but more importantly, loss of access to the health care system
            of that country, which interferes with the organizations purpose.
          <p>
            By incomplete information, I mean that a conclusion has been drawn from an accurate fact, but that not enough is known to 
            say whether the conclusion is true or not.
          </p>
          Social media

          <p>
            We are all naturally worried about the Coronavirus and it's impact on societies and economies. The situation
            is constantly changing and some decisions have to made very quickly
            I have put some basic facts on this page and information about identifying whether new information is true,
            incomplete or false.
          </p>
          <p>
            It's also important that the Pandemic shouldn't completely control our lives. There are opportunities to reach
            out to neighbors, friends and family. There is also some humor to be found in the midst of this crisis.
          </p> */}
          
          {/* <h5 id="coronavirusReliable">Reliable information about the Coronavirus</h5>


          <h5>SARS and MERS</h5> */}

          <h5 id="coronavirusLinks">More information outside this website, not an exhaustive list</h5>

          <p>
            Information about the Coronavirus
          </p>
            <TpLink to="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
              The World Health Organization's page on the Coronavirus<br />
              https://www.who.int/emergencies/diseases/novel-coronavirus-2019c
            </TpLink><br />
            <TpLink to="https://en.wikipedia.org/wiki/Coronavirus_disease_2019">
              Wikipedia article on the Coronavirus. Wikipedia insists that all information present has a real and Reliable
              source.<br />
              https://en.wikipedia.org/wiki/Coronavirus_disease_2019
            </TpLink><br />

          <p>
            Science information
          </p>
            <TpLink to="https://www.statnews.com/tag/coronavirus/">
              STAT news is a newspaper for Medical Professionals<br />
              https://www.statnews.com/tag/coronavirus/
            </TpLink>

          <p>
            News organizations
          </p>
            <TpLink to="https://www.bbc.com/news">
              News from the BBC (British Broadcasting Corporation)<br />
              https://www.bbc.com/news
            </TpLink><br />
            <TpLink to="https://www.npr.org/series/812054919/the-coronavirus-crisis">
              News from NPR (National Public Radio). Independent news in the United States<br />
              https://www.npr.org/series/812054919/the-coronavirus-crisis
            </TpLink>

          <p>
            Fake news
          </p>
          <TpLink to="https://www.theonion.com">
            Satire about the news. Funny, not true. More fun than most news sources<br />
            https://www.theonion.com
          </TpLink>
        </div>
      </div>
      
    </div>
  );
}
export default Covid19;
