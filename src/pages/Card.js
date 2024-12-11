import React from "react";

function Card() {
  return (
    <div className="container">
      <div className="row">
        {/* Card 1 */}
        <div className="card col-md-3 mx-3 my-2">
          <img src="img/use1.jpg" className="card-img-top" alt="room1" />
          <div className="card-body text-start">
            <h5 className="card-title">name room</h5>
            <p className="card-text">
                *,*** บาท
            </p>
            <a href="#" className="btn btn-primary">
              ดูห้องพัก
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card col-md-3 mx-3 my-2">
          <img src="img/use1.jpg" className="card-img-top" alt="room1" />
          <div className="card-body text-start">
            <h5 className="card-title">name room</h5>
            <p className="card-text">
                *,*** บาท
            </p>
            <a href="#" className="btn btn-primary">
                ดูห้องพัก
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
