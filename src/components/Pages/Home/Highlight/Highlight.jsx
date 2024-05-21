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
            <Link key={6} to={`/post/${26}`}>
              <div className="newsCard news-Slide-up m-1">
                <img alt="" src="images/portfolio-thumb.jpg" />
                <div className="newsCaption text-left">
                  <div className="newsCaption-title">project</div>
                  <span className="projectTitle">
                    Portfolio : Symfony to React
                  </span>
                  <div className="dottedLine mb-3 mt-1"></div>
                  <span className="techTxt">Description</span>
                  <p>
                    Mon portfolio est le fruit de mon parcours de formation et
                    de ma passion pour le développement web
                  </p>
                  <div className="mb-5 mt-1"></div>
                  <div className="newsCaption-content d-none d-sm-block col-12">
                    <span className="techTxt">Technologies</span>
                    <p className="mt-1">
                      <span className="tagsCards">php</span>
                      <span className="tagsCards">api</span>
                      <span className="tagsCards">sql</span>
                      <span className="tagsCards">react</span>
                      <span className="tagsCards">node</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link key={5} to={`/post/${25}`}>
              <div className="newsCard news-Slide-up m-1">
                <img alt="" src="images/weatherCover.jpg" />
                <div className="newsCaption text-left">
                  <div className="newsCaption-title">project</div>
                  <span className="projectTitle">Weather API</span>
                  <div className="dottedLine mb-3 mt-1"></div>
                  <span className="techTxt">Description</span>
                  <p>Web app simple de meteo utilisant l'api Open weather.</p>
                  <div className="mb-5 mt-1"></div>
                  <div className="newsCaption-content d-none d-sm-block col-12">
                    <span className="techTxt">Technologies</span>
                    <p className="mt-1">
                      <span className="tagsCards">js</span>
                      <span className="tagsCards">api</span>
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
