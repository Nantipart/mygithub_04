import React from "react";

function Footer() {
    return (
        <footer className="footer text-white p-4 mt-4">
            <div className="container">
                <div className="row align-items-center">
                    {/* ส่วนที่อยู่ */}
                    <div className="col-md-6 text-start">
                        <h5>ที่อยู่</h5>
                        <p>
                            #################### <br />
                            ####################
                        </p>
                        {/* ไอคอนโซเชียล */}
                        <div>
                            <a href="#" className="text-white me-3">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="bi bi-envelope"></i>
                            </a>
                        </div>
                    </div>

                    {/* แผนที่ */}
                    <div className="col-md-6 text-end">
                        <img
                            src="https://via.placeholder.com/200x150"
                            alt="Map"
                            className="rounded"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;