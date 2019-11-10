import React from "react";

const Image = ({ image }) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
    <div className="card">
      <img src={image.previewURL} alt={image.tags} className="card-img-top"/>
      <div className="card-body">
        <p className="card-text"> {image.likes} Likes</p>
        <p className="card-text"> {image.views} Views</p>
      </div>
      <div className="card-footer">
        <a href={image.largeImageURL} className="btn btn-primary btn-block" rel="noopener noreferrer" target="_blank" >
          Show Image
        </a>
      </div>
    </div>
  </div>
);

export default Image;