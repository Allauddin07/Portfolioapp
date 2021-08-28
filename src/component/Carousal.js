import logo from '../images/img1.jpg'
import log from '../images/pic2.jpg'
import logoi from '../images/pic3.jpg'
import lo from '../images/img3.jpg'
import img from '../images/img5.jpg'
import {Carousel} from 'react-bootstrap'
import img1 from '../images/img4.jpg'
// import './Slider.css'
function ControlledCarousel() {
    
  
    return (
        <Carousel className="z">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logoi}
      alt="First slide"
    />
    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
   
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={lo}
      alt="First slide"
    />
   
  </Carousel.Item>



  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Second slide"
    />

    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={log}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
  }
  

//   render(<ControlledCarousel />);
export default ControlledCarousel;