import React from "react";

function ImageCarousel(props) {
  return (
    // <ScrollableSection name={props.projectId}>
      <div
        id={props.projectId}
        className="carousel slide"
        data-ride="carousel"
        data-interval={false}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block"
              style={{ width: `${props.Size.width}`, height: `${props.Size.height}`, objectFit: "fill" }}
              src={props.projectimages.url}
              alt="First slide"
            />
          </div>
            <div className="carousel-item">
            <img
              className="d-block"
              style={{ width: `${props.Size.width}`, height: `${props.Size.height}`, objectFit: "fill" }}
              src={props.projectimages.second.url}
              alt="Second slide"
            />
          </div>

          <div className="carousel-item">
            <img
              className="d-block"
              style={{ width: `${props.Size.width}`, height: `${props.Size.height}`, objectFit: "fill" }}
              src={props.projectimages.third.url}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          style={{ opacity: "0", cursor: "e-resize" }}
          href={`#${props.projectId}`}
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          style={{ opacity: "0", cursor: "e-resize" }}
          href={`#${props.projectId}`}
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    // </ScrollableSection>
  );
}

export default ImageCarousel;
