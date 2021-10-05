import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './Faq.css'

const Faq = () => {
  return (
    <div className='colorr mb-5'>
      <h1 className="text-center p-5 colorr">Frequently Asked Question</h1>
      <div className="accordion colorr" id="accordionExample">
        <div className="accordion-item colorr">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button colorr"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Our Course Fee
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show colorr"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Please check our website.</strong> you may call us for details.
            </div>
          </div>
        </div>
        <div className="accordion-item colorr">
          <h2 className="accordion-header colorr" id="headingTwo">
            <button
              className="accordion-button collapsed colorr"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              About Instuctor Quality
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse colorr"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body colorr">
              <strong>You may check our instructor details from their social media</strong>{' '}
              Undoubtly they are some of the best music instructor of the country.
            </div>
          </div>
        </div>
        <div className="accordion-item colorr">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed colorr"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Course Fee reduce possible?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse colorr"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body colorr">
              <strong>No we are very sorry for that.</strong> But if you are really in trouble,but
              you have too much passion for music,please let us know we will think about that.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
