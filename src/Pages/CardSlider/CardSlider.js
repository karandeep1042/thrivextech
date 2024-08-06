import React, { useEffect, useState } from 'react';
// import '../../css/SAP BTP/SapbtpCards1.css';
// import '../../New css/CardSlider/CardSlider.css'
// import './CS.css'
export default function SapbtpCards1() {
  const cardsinfo = [
    {
      title: 'Database & Data Management',
      desc1: 'Everything you need to flexibly and efficiently store, access, process, integrate, and interpret all relevant data in your landscape through a singular view and at the speed your business demands.',
      desc2: "SAP HANA, SAP HANA Cloud, SAP Data Warehouse Cloud"
    },
    {
      title: 'Analytics',
      desc1: "Plan and forecast, make rapid decisions, and truly become insight driven. Quickly bring data together from internal and external sources to enable identification of anomalies and key performance drivers.",
      desc2: "SAP Analytics Cloud, SAP Data Warehouse Cloud, SAP BW/4HANA, and others"
    },
    {
      title: 'Application Development & Integration',
      desc1: "Tools for agile business process innovation, extension, and integration in the cloud and across hybrid scenarios. Integrate systems, extend current applications, or create new point solutions.",
      desc2: "SAP Extension Suite, SAP Integration Suite"
    },
    {
      title: 'Intelligent Technologies',
      desc1: "AI, machine learning, and IoT are getting embedded into everything, enabling automation of complex business processes and integration of disparate solutions",
      desc2: "SAP Intelligent Robotic Process Automation (SAP Intelligent RPA), SAP Business AI Services"
    },
  ];

  const [cards, setCards] = useState(cardsinfo);

  useEffect(() => {
    const carousel = document.querySelector('.card-slider');
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    carousel.scrollLeft = firstCardWidth * 3; // Center the carousel
  }, []);

  const moveSlider = (e) => {
    const carousel = document.querySelector('.card-slider');
    const cardWidth = carousel.querySelector('.card').offsetWidth;

    if (e.target.id === "leftslidebtn") {
      const lastCard = carousel.lastElementChild;
      lastCard.classList.add('card-fade-out');
      setTimeout(() => {
        setCards(prev => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        lastCard.classList.remove('card-fade-out');
      }, 500); // Match this duration with your CSS transition time
    } else if (e.target.id === "rightslidebtn") {
      const firstCard = carousel.firstElementChild;
      firstCard.classList.add('card-fade-out');
      setTimeout(() => {
        setCards(prev => {
          const [last, ...rest] = [...prev].reverse();
          return [last, ...rest.reverse()];
        });
        firstCard.classList.remove('card-fade-out');
      }, 500); // Match this duration with your CSS transition time
    }

    // Update scroll position
    carousel.scrollLeft += (e.target.id === "leftslidebtn" ? -1 : 1) * cardWidth;
  };

  return (
    <>
      <div className='sapbtpcards1maincontainer'>
        <div className='sapbtpcardsheader'>
          More Than a Platform-As-A-Service
        </div>
        <div className='sapbtpcards'>
          <div className="card-slider-container">
            <div className="card-slider">
              {cards.map((option, index) => (
                <div className="card card-enter" key={index}>
                  <div className='sapbtpcard'>
                    <div className='sapbtpheadersection'>
                      <div className='sapbtpheadersectionin'>
                        {option.title}
                      </div>
                    </div>
                    <div className='sapdescription'>
                      <div className="sapdescription1">
                        {option.desc1}
                      </div>
                      <div className="sapdescription2">
                        <b>Products include: </b>
                        {option.desc2}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-buttons">
              <i id="leftslidebtn" className="fa-solid fa-chevron-left leftslidebtn"></i>
              <i id="rightslidebtn" className="fa-solid fa-chevron-right rightslidebtn"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
