import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-section">
        <h2 className="project-header"> Projects</h2>
      
      <div className="work-template">
        <div className="workbox">
          <img className="work-img-one"/> 
          <div className="work-inbox">
            <h5>Alpha Palace</h5>
          <p className="work-text text-one">
          A simple blog website where daily insights are written here about the happenings in the blockchain word. The next big mint, the big movements and more 
          </p>
          <a href="#"><button className="work-button work-one">Explore</button></a>
          </div>
        </div>
       
        <div className="workbox">
          <img className="work-img-two"/> 
          <div className="work-inbox">
            <h5>Online Resume</h5>
          <p className="work-text">
          A simple online resume where all those that seek to know more about my services can visit. This page inncludes also information on works done as well as a free template.
          </p>
          <a href="#"><button className="work-button work-two">Explore</button></a>
          </div>
        </div>

        <div className="workbox">
          <img className="work-img-three"/> 
          <div className="work-inbox">
            <h5>Hera's Place</h5>
          <p className="work-text">
          An online hair shop where customers can purchase wigs and hair products and pre-order and make payments as well. 
          it includes a catalog of different range of hair products. 
          </p>
          <a href="#"><button className="work-button work-three">Explore</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
