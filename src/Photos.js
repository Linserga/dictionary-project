import "./Photos.css";

function Photos(props) {
  if (props.photos) {  
    console.log(props.photos);  
    return (
      <section>
        <div className="row">
          {props.photos.map((photo, index) => {
            if (index < 6) {
              return (
                <div className="col-md-4 mt-2" key={index}>
                  <img
                    src={photo.src.tiny}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </div>
              );
            }
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

export default Photos;
