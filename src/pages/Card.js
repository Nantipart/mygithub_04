import React from "react";

function Card() {
    return (
        <div className="container">
            <div className="row g-4"> {/* ใช้ g-4 เพื่อเพิ่ม gap ระหว่าง card */}
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img src="img/use1.jpg" className="card-img-top" alt="room1" />
                        <div className="card-body text-start">
                            <h5 className="card-title">name room</h5>
                            <h6 className="card-text">⭐⭐⭐⭐⭐</h6>
                            <p className="card-text">*,*** บาท</p>
                            <div className="d-grid d-md-flex justify-content-md-end">
                                <a href="#" className="btn btn-warning text-light">
                                    ดูห้องพัก
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img src="img/use1.jpg" className="card-img-top" alt="room1" />
                        <div className="card-body text-start">
                            <h5 className="card-title">name room</h5>
                            <h6 className="card-text">⭐⭐⭐⭐⭐</h6>
                            <p className="card-text">*,*** บาท</p>
                            <div className="d-grid d-md-flex justify-content-md-end">
                                <a href="#" className="btn btn-warning text-light">
                                    ดูห้องพัก
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img src="img/use1.jpg" className="card-img-top" alt="room1" />
                        <div className="card-body text-start">
                            <h5 className="card-title">name room</h5>
                            <h6 className="card-text">⭐⭐⭐⭐⭐</h6>
                            <p className="card-text">*,*** บาท</p>
                            <div className="d-grid d-md-flex justify-content-md-end">
                                <a href="#" className="btn btn-warning text-light">
                                    ดูห้องพัก
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img src="img/use1.jpg" className="card-img-top" alt="room1" />
                        <div className="card-body text-start">
                            <h5 className="card-title">name room</h5>
                            <h6 className="card-text">⭐⭐⭐⭐⭐</h6>
                            <p className="card-text">*,*** บาท</p>
                            <div className="d-grid d-md-flex justify-content-md-end">
                                <a href="#" className="btn btn-warning text-light">
                                    ดูห้องพัก
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img src="img/use1.jpg" className="card-img-top" alt="room1" />
                        <div className="card-body text-start">
                            <h5 className="card-title">name room</h5>
                            <h6 className="card-text">⭐⭐⭐⭐⭐</h6>
                            <p className="card-text">*,*** บาท</p>
                            <div className="d-grid d-md-flex justify-content-md-end">
                                <a href="#" className="btn btn-warning text-light">
                                    ดูห้องพัก
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img src="img/use1.jpg" className="card-img-top" alt="room1" />
                        <div className="card-body text-start">
                            <h5 className="card-title">name room</h5>
                            <h6 className="card-text">⭐⭐⭐⭐⭐</h6>
                            <p className="card-text">*,*** บาท</p>
                            <div className="d-grid d-md-flex justify-content-md-end">
                                <a href="#" className="btn btn-warning text-light">
                                    ดูห้องพัก
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card เพิ่มเติมตามต้องการ */}
            </div>
        </div>
    );
}

export default Card;
