import React from 'react';
import TpLink  from "../../components/TpLink/TpLink";

import styles from "./Covid19.module.scss";

import cVirus from "../../images/cVirus.jpg";
import fVirus from "../../images/fVirus.png";

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
            <dt>SARS-CoV-2</dt>
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
            I didn't get to pick those names. I think I would have gone for "The big C"
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

          <h3 id="coronavirusViruses">Viruses, Coronavirus viruses, Influenza viruses and hand washing</h3>

          <h5>Virus</h5>
            
          <p>
            A virus is an extremely small, simple thing. Many of them, such as a coronavirus, contain nothing except RNA, 
            a simpler form of genetic material than DNA.They are held together
            by a skin, with proteins on the outside that have the ability to latch on to cells and penetrate into them.
            Once inside the cell, the virus's RNA takes over the cell and turns it into a factory that quickly makes lots of copies
            of itself, destroying the cell. This is the only way it can reproduce, there are no lady viruses or gentlemen viruses.
            If a virus isn't inside something that has cells it can penetrate, then it can do nothing. 
            Most viruses will then die after a sort period of time, but some can remain dormant for a long time. There are millions of
            different species of viruses, that infect specific animals, plants or bacteria. Viruses are usually too small to be
            seen, even with a microscope. Because it doesn't have a cell structure like bacteria, it cannot be killed by antibiotics.
          </p>
          
          <h5>Coronavirus</h5>
          <div className="clearfix">
            <img src={cVirus} alt="Cut away diagram of a mean coronavirus"
              className="artImage artFloatLeft" style={{ height: "16em" }} />
            <p>
              Coronavirus is a group of viruses that cause diseases in mammals and birds. On an electron microscope the spike
              proteins on the outside look a little like the halo around the sun, which is a bit like a crown, which is where the
              name coronavirus comes from. Very few coronaviruses cause disease in people, but SARS-CoV-2 does. 
            </p>
          </div>
          
          <h5>Flu virus and Rhinovirus, the common cold</h5>
          <div className="clearfix">
            <div className="artFloatLeft artImageWithTitle">
              <img src={fVirus} alt="Cut away diagram of a flu virus"
                style={{ height: "12em" }} />
              <span>Influenza (flu) virus</span>
            </div>
            <p>
              Both the flu virus and the coronavirus are RNA viruses, so look fairly similar, but the internal structures are different.
            </p>
          </div>
          <p>Rhinoviruses are the main cause of the common cold</p>
          <p>
            SARS-CoV-2, flu viruses and Rhinoviruses love our noses and sinuses. Lots of humidity, perfect temperature and with
            sinuses, a lot of room to multiply. As an added bonus, the person can breathe out or sneeze out viruses that can the 
            infect another person. As the infection progresses, the viruses can travel down into our throats, causing a cough
            and sore throat. After that, the infection can travel into the lungs. The lungs can become become inflamed and 
            lead to pneumonia.
          </p>
          <p>
            Our bodies are pretty smart and they can detect a viral infection. The first defense is to produce more snot(mucous), hoping to 
            wash away the infection, which is where the runny nose comes from. The body will also raise its temperature, trying to 
            kill the virus, other forms of inflammation can start, the white blood cells try to kill the virus and other 
            mechanisms kick in. The bodies last defence is to analyze the virus and make 
            antibodies that are specific to killing that virus. This takes longer to happen than the other mechanisms.
          </p>

          <h5>Killing viruses, hand washing and not touching the face</h5>
          <p>
            If you look at the diagrams of the coronavirus and the flu virus, they are both enclosed 
            in a lipid envelope or membrane. Fats are form of lipid and if you've washed dishes or degreased an engine, you know 
            that soap dissolves fats and oils. So soap kills these viruses, destroying the outer layer and spilling the out the 
            contents. This is why washing hands with soap and water is so effective. It needs about 20 seconds for soap to kill all 
            the viruses
          </p>
          <p>
            As coronaviruses love our noses so much, any way they can get in there is good. Touching your face anywhere can allow a 
            virus to get in. Rubbing your nose pretty much guarantees it getting in. Rubbing your eyes can allow it in, as 
            there is a connection from eyes to nose. The mouth isn't so bad and any viruses swallowed will not like the acid 
            in your stomach
          </p>
          <p>
            There are other things that are good at killing viruses. Oxidizers are chemicals that cause chemical reactions 
            in anything they get into contact with, so will kill most things, including viruses and, if used incorrectly 
            people. Bleach is an effective oxidizer, and used in a dilution of 1:48 (⅓ cup per quart), sprayed on a pre cleaned surface 
            and allowed to sit for 10 minutes, will kill almost all viruses. The solution will degrade in a day, so best to 
            mix up fresh. Bleach will also damage clothing, skin, and so on. If mixed with other chemicals, it can react and 
            produce poisonous gasses. It should go without saying that taking it internally in any way, such as drinking, will 
            not only fail to kill viruses, but damage any part of your body it comes into contact with.
          </p>
          <p>
            An alcohol concentration of at least 60% can kill viruses, which is what is found in most hand sanitizers. This 
            is a much higher concentration than drinkable alcohol, so even the best Scotch, matured for 30 years, isn't going 
            to help. Tastes nice though. The alcohol we love to drink is Ethanol. There are many other chemicals called alcohols 
            that are usually dangerous to drink and they are usually some present in small amounts in alcohols not intended 
            for drinking. The answer is simple. Don't mix your drinks.
          </p>
          <p>
            One upside of all the precautions we are taking against the coronavirus is that they also work against the 
            common cold and flu. So we shouldn't get so much of that. At least not until the sweet little germ factories
            go back to school
          </p>

          {/* <h5>Mutation</h5> */}
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

          <h3 id="coronavirusLinks">Some information on the web</h3>

          <h6>
            Information about the Coronavirus
          </h6>
            <TpLink to="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
              The World Health Organization's page on the Coronavirus<br />
              https://www.who.int/emergencies/diseases/novel-coronavirus-2019c
            </TpLink><br />
            <TpLink to="https://en.wikipedia.org/wiki/Coronavirus_disease_2019">
              Wikipedia article on the Coronavirus<br />
              https://en.wikipedia.org/wiki/Coronavirus_disease_2019
            </TpLink><br />

          <h6>
            Science information
          </h6>
            <TpLink to="https://www.statnews.com/tag/coronavirus/">
              STAT news is a newspaper for Medical Professionals<br />
              https://www.statnews.com/tag/coronavirus/
            </TpLink>

          <h6>
            News organizations
          </h6>
            <TpLink to="https://www.bbc.com/news">
              News from the BBC (British Broadcasting Corporation)<br />
              https://www.bbc.com/news
            </TpLink><br />
            <TpLink to="https://www.npr.org/series/812054919/the-coronavirus-crisis">
              News from NPR (National Public Radio). Independent news in the United States<br />
              https://www.npr.org/series/812054919/the-coronavirus-crisis
            </TpLink>

          <h6>
            Worthwhile fake news
          </h6>
          <TpLink to="https://www.theonion.com">
            The Onion - satire about the news. Funny, not true. More fun than most news sources<br />
            https://www.theonion.com
          </TpLink>
        </div>
      </div>
      
    </div>
  );
}
export default Covid19;
