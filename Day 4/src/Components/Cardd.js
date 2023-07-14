import React from 'react';
import { Link } from 'react-router-dom';


const Cardd = () => {
  return (
    <div className="card mb-3">
      <img src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/april/M.Com.png" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">MCom</h5>
        <p className="card-text">Master of Commerce (M.Com) is a postgraduate degree, which deals with commerce, accounting, management, and economics.Admission to MCom is based on the merit of a BCom from a recognised university or college. </p>
        <Link to="/mcom">
              Learn More
              </Link>
      </div>
    </div>
  );
}
const Cardd2 = () => {
  return (
    <div className="card mb-3">
      <img src="https://stxaviersbangalore.com/wp-content/uploads/2022/09/pgdm-1280x720-1.jpg" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">PGDM</h5>
        <p className="card-text"> PGDM stands for Post Graduate Diploma in Management and helps management aspirants develop relevant hard skills and soft skills to transform into an industry-ready management professional.</p>
        <Link to="/pgdm">
              Learn More
              </Link>
      </div>
    </div>
  );
}
const Cardd3 = () => {
  return (
    <div className="card mb-3">
      <img src="https://www.dbgidoon.ac.in/wp-content/uploads/2019/06/Msc.jpg" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">Master of Physics</h5>
        <p className="card-text">Advanced study of fundamental principles and research in physics. MSc Physics is a two-year postgraduate course which is usually opted for by candidates after pursuing a BSc Physics degree. </p>
        <Link to="/mphy">
              Learn More
              </Link>
      </div>
    </div>
  );
}


const Apj = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <Cardd />
        </div>
        <div className="col-lg-4 col-md-6">
          <Cardd2 />
        </div>
        <div className="col-lg-4 col-md-6">
          <Cardd3 />
        </div>
      </div>
    </div>
    
  );
}

export default Apj;
