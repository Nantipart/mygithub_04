import React from "react";

function Carousel() {
    return (
        <div className="row">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner w-100">
                    <div className="carousel-item active">
                        <img src="img/1.jpg" className="d-block w-100" alt="img1" />
                    </div>
                    <div className="carousel-item">
                        <img src="img/2.jpg" className="d-block w-100" alt="img2" />
                    </div>
                    <div className="carousel-item">
                        <img src="img/3.jpg" className="d-block w-100" alt="img3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/* ////////////////////////////////////////////////////////////////////////// */}
            <div className="carousel-section">
                <div className="carousel-container">
                    <button className="carousel-btn prev-btn">{"<"}</button>
                    <div className="carousel-filters">
                        <button className="filter-btn">ใกล้สระน้ำ</button>
                        <button className="filter-btn">ราคาถูกๆ</button>
                        <button className="filter-btn">2 เตียงนอน</button>
                        <button className="filter-btn">วิวดี</button>
                        <button className="filter-btn">อาหารอร่อยมากๆ</button>
                    </div>
                    <button className="carousel-btn next-btn">{">"}</button>
                </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////// */}

            
        </div>

    );
}

export default Carousel;
