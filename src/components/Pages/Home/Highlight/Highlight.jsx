import "./Highlight.css";

const Highlight = ({ posts, Link, spanref }) => {
  return (
    <div className="row">
      <div className="col-md-12 pt-5 text-center highLightBlock">
        <img src="images/rosace-title.png" alt="" className="mb-2" />
        <h4 className="text-center color titleColor">
          <b>HIGHLIGHT</b> PROJECT(S)
        </h4>
        <div className="box devBox active">
          <div className="row pb-5 pt-5 justify-content-center">
            <Link key={6} to={`/post/${6}`}>
              <div className="newsCard news-Slide-up m-1">
                <img alt="" src="https://picsum.photos/390/340?random=0" />
                <div className="newsCaption text-left">
                  <div className="newsCaption-title">project</div>
                  <span className="projectTitle">Front end react m</span>
                  <div className="dottedLine mb-3 mt-1"></div>
                  <span className="techTxt">Description</span>
                  <p>
                    Stars Wars Battle est un mini jeu de combat au tour par
                    tour. Le principe est simple, le joueur sélectionne deux
                    cartes et les faits s'affronter en déclenchant le combat.
                  </p>
                  <div className="mb-5 mt-1"></div>
                  <div className="newsCaption-content col-12">
                    <span className="techTxt">Technologies</span>
                    <p className="mt-1">
                      <span className="tagsCards">php</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link key={5} to={`/post/${5}`}>
              <div className="newsCard news-Slide-up m-1">
                <img alt="" src="https://picsum.photos/390/340?random=0" />
                <div className="newsCaption text-left">
                  <div className="newsCaption-title">project</div>
                  <span className="projectTitle">Front end react m</span>
                  <div className="dottedLine mb-3 mt-1"></div>
                  <span className="techTxt">Description</span>
                  <p>
                    Stars Wars Battle est un mini jeu de combat au tour par
                    tour. Le principe est simple, le joueur sélectionne deux
                    cartes et les faits s'affronter en déclenchant le combat.
                  </p>
                  <div className="mb-5 mt-1"></div>
                  <div className="newsCaption-content col-12">
                    <span className="techTxt">Technologies</span>
                    <p className="mt-1">
                      <span className="tagsCards">sql</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Highlight;
