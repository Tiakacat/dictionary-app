import React from "react";

export default function Photos(props) {
  console.log(props.photo);
  if (props.photos)
    return (
      <section className="opacity-100">
        <div className="ms-3 me-3">
          <div className="row mt-4">
            {props.photos.map(function(photo, index) {
              return (
                <div className="col-4 mb-3">
                  <a
                    href={photo.src.landscape}
                    target="a_blank"
                    rel="noreferer"
                  >
                    <img
                      alt={photo.alt}
                      src={photo.src.tiny}
                      key={index}
                      className="img-fluid rounded"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
}
