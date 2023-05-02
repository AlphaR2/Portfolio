import './About.css'
import Ava from "../images/avatoon.png"

const About = () => {
return(
  <div className="about">
    <div className='pics-about'>
      <h2 className='about-header'>About</h2>
      <div className='whitespace'></div>
<img src={Ava} alt="toon" className='toon'/>


<p className="about-text"> Hi, I'm Onyekachi Daniel, a software developer. I am a front-end developer, back-end developer and a designer with an experince in react and javascript. In my free time, i enjoy gaming, puzzles, and trying new recipies in the kitchen. I am passionate about making a positive impact in the community, building cool and exciting things and educating the community. While learning more about software development, I  engaged more in several areas of web development and design. I  am going to continue this growth by learning more and perfecting my skills.
You can review my latest work in my Portfolio and much more in my Resume</p>
  </div>
  </div>
)
}
export default About;
