// Article on softness, strength and the environment

const imageUrl1: string = process.env.PUBLIC_URL + "/assets/images/articles/Facts/pineTree.png";
const pulp: string = process.env.PUBLIC_URL + "/assets/images/articles/Facts/pulp.jpg";

const softness: string = `
<div>
  <div class="clearfix">
    <img class="artFloatLeft artImage" src=${imageUrl1} alt="Lovely Pine tree" style="height:12em;">
    <p>
      To make toilet paper soft and strong, it has to have a high proportion of wood pulp straight from a tree.
      So to be environmentally sound, you have to give up softness and maybe end up with toilet paper that falls apart,
      rather than doing the job it was supposed to do
    </p>
  </div>

  <h3>It's all about the pulp</h3>
  <div class="clearfix">
    <div class="artFloatLeft artImageWithTitle">
      <img src=${pulp} alt="Different colors of wood pulp" style="height:8em;">
      <span>Wood pulp, bleached by different amounts</span>
    </div>
    <p>
      Wood pulp can come from recycled paper, deinked pulp, or from trees, virgin pulp. There are other kinds of pulp, but the
      majority of paper products are made from wood pulp, and toilet paper is of course the most important of all.
    </p>
  </div>
  <p>
    Another paragraph
  </p>
</div>
`

export default softness;