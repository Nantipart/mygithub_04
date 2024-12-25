import React, { useState } from 'react';

function Room_top() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="room-top">
      <div className="carousel-container">
        <div className="carousel-inner">
          <img
            src="./img/1.jpg"
            className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}
            alt="img1"
          />
          <img
            src="./img/2.jpg"
            className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}
            alt="img2"
          />
          <img
            src="./img/3.jpg"
            className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}
            alt="img3"
          />
        </div>
        <button className="carousel-control-prev" onClick={handlePrevClick}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" onClick={handleNextClick}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="room-info">
        <div className="room-name">
          <h2>Standard Room</h2>
          <span>X,XXX บาท</span>
        </div>
        <div className="room-rating">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">☆</span>
        </div>
        <div className="room-description">
          <p>
            เป็นห้องที่มีขนาดกว้าง หรือใหญ่กว่าห้องสแตนดาร์ดขึ้นมาอีกเล็กน้อย
            มีการเพิ่มเติมเฟอร์นิเจอร์ และสิ่งอำนวยความสะดวกมาให้มากกว่าห้อง
            สแตนดาร์ด วิวจะสวยกว่าห้องแบบสแตนดาร์ดขึ้นมาหน่อย
          </p>
        </div>
        <div className="room-details">
          <div className="room-capacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.87 10 8 10c-2.87 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
            </svg>
            <span>2 คน</span>
          </div>
          <div className="room-bed">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bed" viewBox="0 0 16 16">
              <path d="M0 2.833C0 1.88 0.88 1 1.993 1H11.007C12.12 1 13 1.88 13 2.833v2.934H15c.552 0 1 .802 1 1.79v9.513c0 .988-.448 1.79-1 1.79H1c-.552 0-1-.802-1-1.79V7.527h-2V2.833zm13 11.173c0 .988-.448 1.79-1 1.79H1c-.552 0-1-.802-1-1.79V7.527h15v6.646z"/>
            </svg>
            <span>1 เตียง</span>
          </div>
          <button className="btn-book">จองเลย</button>
        </div>
      </div>
    </div>
  );
}

export default Room_top;