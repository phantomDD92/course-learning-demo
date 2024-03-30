import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.jpeg";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        Discover excellence through the voices of our students as they share their journey with our exceptional course materials. With firsthand insights and testimonials, you'll witness the transformative impact of our courses on their learning experience. From enriched content to practical resources, our students attest to the quality and effectiveness of our materials, empowering them to achieve their goals with confidence. Join our community and let your voice be the next testament to our commitment to excellence!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        Discover excellence through the voices of our students as they share their journey with our exceptional course materials. With firsthand insights and testimonials, you'll witness the transformative impact of our courses on their learning experience. From enriched content to practical resources, our students attest to the quality and effectiveness of our materials, empowering them to achieve their goals with confidence. Join our community and let your voice be the next testament to our commitment to excellence!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        Discover excellence through the voices of our students as they share their journey with our exceptional course materials. With firsthand insights and testimonials, you'll witness the transformative impact of our courses on their learning experience. From enriched content to practical resources, our students attest to the quality and effectiveness of our materials, empowering them to achieve their goals with confidence. Join our community and let your voice be the next testament to our commitment to excellence!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">CEO | Serhii</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;