import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header" dir="rtl">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">نبذة عني</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="coming-soon-container">
          <div className="coming-soon-content">
            <h2 className="coming-soon-title">قريباً</h2>
            <p className="coming-soon-text">جارى العمل والإعداد فى أقرب وقت ممكن</p>
            <div className="coming-soon-icon">
              <i className="fas fa-cogs"></i>
            </div>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
