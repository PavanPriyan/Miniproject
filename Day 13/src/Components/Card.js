import React from 'react';
import { Link } from 'react-router-dom';


const Card = () => {
  return (
    <div className="card mb-3" >
      <img src="https://amityonline.com/cms/cms/images/Blog/Shutterstock_1829594045.jpg" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">MBA</h5>
        <p className="card-text">
        MBA is a postgraduate degree in Business and Management. Core specializations for an MBA include finance, sales, marketing, human resources, operations management, etc.</p>
        <Link to="/mba">
              Learn More
              </Link>
      </div>
    </div>
  );
}
const Card2 = () => {
  return (
    <div className="card mb-3">
      <img src="https://www.lloydlawcollege.edu.in/images/LLC/website/images/blog_img/bcom-llb.webp" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">LLB</h5>
        <p className="card-text">LLB or Bachelor of Legislative Law, is an undergraduate degree programme in Law, of three-year or five-year duration that can be pursued after graduation and 10+2 respectively.LLB Syllabus include Labor Law, Family Law, Crime, Women & Law, Law of Evidence, Jurisprudence. </p>
        <Link to="/llb">
              Learn More
              </Link>
      </div>
    </div>
  );
}
const Card3 = () => {
  return (
    <div className="card mb-3">
      <img src="https://i0.wp.com/www.bhuexpress.in/wp-content/uploads/2021/09/MCA.jpg?fit=1200%2C600&ssl=1" className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">MCA</h5>
        <p className="card-text">It has a huge amount of growth opportunity and has good ROI when an individual makes a career in the domain of Computer Science via MCA. MCA stands for Masters in Computer Application.It has a huge amount of growth opportunity and has good ROI when an individual makes a career in domain of MCA. </p>
        <Link to="/mca">
              Learn More
              </Link>
      </div>
    </div>
  );
}


const Ap = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <Card />
        </div>
        <div className="col-lg-4 col-md-6">
          <Card2 />
        </div>
        <div className="col-lg-4 col-md-6">
          <Card3 />
        </div>
      </div>
    </div>
    
  );
}

export default Ap;
