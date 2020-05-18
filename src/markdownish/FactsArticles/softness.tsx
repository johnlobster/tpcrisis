// Article on softness, strength and the environment
import React from 'react';

// images
const pineTree: string = process.env.PUBLIC_URL + "/assets/images/articles/Facts/pineTree.png";
const pulp: string = process.env.PUBLIC_URL + "/assets/images/articles/Facts/pulp.jpg";
const fsc: string = process.env.PUBLIC_URL + "/assets/images/articles/Facts/fscLogo.jpg";

const softness: React.FunctionComponent = () => { return(
<div>
  <div className="clearfix">
    <img className="artFloatLeft artImage" src={pineTree} alt="Lovely Pine tree" style={{height:'12em'}} />
    <p>
      To make toilet paper soft and strong, it has to have a high proportion of wood pulp straight from a tree.
      So to be environmentally sound, you have to give up softness and maybe end up with toilet paper that falls apart,
      rather than doing the job it was supposed to do. Of course, it's never that simple, as recycling has environmental 
      costs as well, and there are many arguments between conservationists and manufacturers.
    </p>
    <p>
      The main, well known, nice and soft, well advertised products from the major manufacturers contain no recycled pulp in the toilet
      paper itself.
      Example brands in the United States are Charmin, Angel Soft, Cottonelle, Brawny, Bounty, Kleenex, Quilted Northern, and Viva. Most toilet paper
      used in Offices and other commercial settings has recycled content.
    </p>
  </div>

  <h3>Sustainability</h3>
  <div className="clearfix">
    <img className="artFloatLeft artImage" src={fsc} alt="Logo of the Forest Sustainability Commission" style={{height:'8em'}} />
    <p>
      As you can imagine, companies are under pressure to be more friendly towards the environment, not to mention competition
      from the "eco" companies that sell 100% recycled toilet paper. Major brands have focussed on making the entire process more
      sustainable, and one place where that can be done is by being more responsible using trees. The Forest Sustainability Commission
      (FSC)) checks the use of trees, where they come from and whether new trees are planted to replace them. The FSC will issue certificates to companies,
      so looking for the FSC logo on product packaging is a great step towards buying sustainable products. To be even more 
      environmentally friendly, switch to a brand that is mostly recycled, although you won't get quite the softness ...
    </p>
  </div>

  <h3>It's all about the pulp</h3>
  <div className="clearfix">
    <div className="artFloatLeft artImageWithTitle">
      <img src={pulp} alt="Different colors of wood pulp" style={{height:'8em'}} />
      <span>Dried wood pulp, bleached by different amounts</span>
    </div>
    <p>
      Wood pulp can come from recycled paper, called deinked pulp, or from trees, called virgin pulp. Pulp usually starts off
      brown, and then is bleached to a final color. There are other kinds of pulp, but the
      majority of paper products are made from wood pulp, and toilet paper is of course the most important of all.  
      Wood pulp is used for almost all  
      paper products, from books, through cardboard packaging, through napkins, through paper towels, and for the stuff we're scared of running out of.
      It also makes diapers(nappies), although I am not too sure what to do with that piece of information.
    </p>
  </div>
  <p>
    Wood pulp can have different sized fibers. Virgin pulp gives nice long fibers, which makes the paper strong and soft. When
    paper is recycled, the fibres get smaller, so that paper can only be recycled a few times before nothing is left. The small fibres
    are weak and make paper that is not very absorbent. Making both virgin pulp and recycled requires a lot of energy, chemicals and
    water. It's a big industry and pollutes a lot, although there are a few new techniques and research to make it less polluting.
  </p>

  <h3>Links to further information online</h3>
  <div className="artReferences">
    <a className="artLink" href="https://en.m.wikipedia.org/wiki/Pulp_(paper)">Wikipedia on pulp</a>
    <a className="artLink" href="https://www.papernet.com/americas/usa/en/virgin-vs-recycled-paper">
      Industry article comparing recycled and virgin paper
    </a>
    <a className="artLink" href="https://amp.theguardian.com/environment/2019/jul/05/toilet-paper-less-sustainable-researchers-warn">
      Discussion of toilet paper sustainability (The Guardian newspaper)
    </a>
  </div>
</div>
);}

export default softness;