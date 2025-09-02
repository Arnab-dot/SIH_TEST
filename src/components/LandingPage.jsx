import './styles.css';
import bubbleImg from '../assets/bubble.png'; // make sure path is correct
import oceanVideo from "../assets/ocean.mp4"
const OceanLandingPage = () => {
  return (
    <div className="ocean-container">
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="logo">Deep Sea</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li> 
          </ul>
        </div>
      </nav>

      <video
        className="background-video"
        autoPlay
        muted
        loop
      >
        <source src={oceanVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="bubbles">
        {[...Array(20)].map((_, i) => (
          <img
            key={i}
            src={bubbleImg}        // use <img> for src
            alt="bubble"
            style={{
              position: 'absolute',
              bottom: '-50px',
              left: `${Math.random() * 100}%`,
              width: '40px',
              height: '40px',
              animation: 'bubbleUp linear infinite',
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OceanLandingPage;
