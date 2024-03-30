import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Opt for our quick learning solutions, where efficiency meets effectiveness. With streamlined courses designed for rapid comprehension and practical application, you'll grasp essential concepts swiftly and confidently. Whether you're pressed for time or eager to acquire new skills expediently, our quick learning programs offer the perfect solution to accelerate your journey towards mastery!",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Experience unwavering support at all times with our dedicated team by your side. From day one and beyond, we're committed to providing comprehensive assistance whenever you need it. Our round-the-clock support ensures that your learning journey is smooth and seamless, empowering you to overcome any obstacles and achieve success with confidence. With us, you're never alone on your path to greatness!",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Unlock your achievements with our industry-recognized certifications, validating your expertise and opening doors to new opportunities. Our meticulously curated courses lead to prestigious certifications, attesting to your proficiency and dedication. Backed by reputable accreditation, our certifications serve as a testament to your skills, enhancing your credibility and propelling your career forward. Choose us for a pathway to professional recognition and advancement!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
