import React from 'react';
import DigitalArtGallery from './digitalArtGallery';
import image1 from './IMAGES/blooming steps.png';
import image2 from './IMAGES/whispers of twilight.png';
import 'bulma/css/bulma.min.css';

function Demo(props) {
  return (
    <div>
      {/* Navbar */}
      <nav className= "navbar" style={{ backgroundColor: '#92c3a5' , fontFamily: "'Pacifico', cursive" }} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item has-text-white is-size-3 ">
            Digital Library
          </a>
        </div>
      </nav>

      
      <section
        className="section is-flex is-justify-content-center is-align-items-center"
        style={{ height: '70vh' }}
      >
        <div className="container" style={{ maxWidth: '900px' , fontFamily: "'Pacifico', cursive" ,textAlign: 'center' }}>
          <div className="columns is-centered">
            <div className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by6">
                    <DigitalArtGallery image={image1} />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="is-size-5 has-text-weight-bold ">
                    <DigitalArtGallery title="Blooming Steps" />
                  </p>
                </div>
              </div>
            </div>

            <div className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by6">
                    <DigitalArtGallery image={image2} />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="is-size-5 has-text-weight-bold ">
                    <DigitalArtGallery title="Whispers of Twilight" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Demo;
