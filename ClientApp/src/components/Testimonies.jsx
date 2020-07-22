import React from 'react'
import { Link } from 'react-router-dom'
import testimonies from './testimonies.scss'
import Carousel from 'react-bootstrap/Carousel'
import man from '../images/man.jpg'

const Testimonies = () => {
  return (
    <>
      <div className="testimonies">
        <div>
          <h1>Client Testimonies</h1>
        </div>
        <div className="testimony">
          {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
              reprehenderit optio amet ab temporibus asperiores quasi
              cupiditate. Voluptatum ducimus voluptates voluptas?
            </p> */}
          <Carousel>
            <Carousel.Item>
              <div className="testimony-item">
                <div className="testimony-pic">
                  <img className="d-block w-100" src={man} alt="Third slide" />
                </div>
                <div className="testimony-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa nesciunt nihil aut
                    nostrum explicabo reprehenderit ab temporibus asperiores on
                    quis culpa nesciunt quasi cupiditate. Voluptatum ducimus
                    voluptates voluptas? Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Eligendi non quis exercitationem culpa
                    nesciunt nihil aut nostrum explicabo reprehenderit ab
                    temporibus asperiores on quis culpa nesciunt quasi
                    cupiditate. Voluptatum ducimus voluptates voluptas? Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                    non quis exercitationem culpa nesciunt nihil aut nostrum
                    explicabo reprehenderit ab temporibus asperiores on quis
                    culpa nesciunt quasi cupiditate. Voluptatum ducimus
                    voluptates voluptas?
                  </p>
                </div>
              </div>
              {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimony-item">
                <div className="testimony-pic">
                  <img className="d-block w-100" src={man} alt="Third slide" />
                </div>
                <div className="testimony-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa nesciunt nihil aut
                    nostrum explicabo reprehenderit ab temporibus asperiores on
                    quis culpa nesciunt quasi cupiditate. Voluptatum ducimus
                    voluptates voluptas? reprehenderit ab temporibus asperiores
                    on quis culpa nesciunt quasi cupiditate. Voluptatum ducimus
                    voluptates voluptas? reprehenderit ab temporibus asperiores
                    on quis culpa nesciunt quasi cupiditate. Voluptatum ducimus
                    voluptates voluptas?
                  </p>
                </div>
              </div>
              {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimony-item">
                <div className="testimony-pic">
                  <img className="d-block w-100" src={man} alt="Third slide" />
                </div>
                <div className="testimony-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa nesciunt nihil aut
                    nostrum explicabo reprehenderit ab temporibus asperiores on
                    quis culpa nesciunt quasi cupiditate. Voluptatum ducimus
                    voluptates voluptas? Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Eligendi non quis exercitationem culpa
                    nesciunt nihil aut nostrum explicabo reprehenderit ab
                    temporibus asperiores on quis culpa nesciunt quasi
                    cupiditate. Voluptatum ducimus voluptates voluptas?
                  </p>
                </div>
              </div>
              {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/* <div className="div-line"></div> */}
    </>
  )
}

export default Testimonies
