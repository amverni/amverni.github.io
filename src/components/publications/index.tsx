import React from 'react';
import towards_universal_evaluation_of_image_annotation_interfaces_thumbnail from "assets/img/towards_universal_evaluation_of_image_annotation_interfaces_thumbnail.jpg";
import towards_universal_evaluation_of_image_annotation_interfaces from "assets/files/towards_universal_evaluation_of_image_annotation_interfaces.pdf";

export default function Experiences(): JSX.Element {
  return (
    <>
      {/* posters and abstracts */}
      <div id="posters-abstracts">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="section-header">Posters and Abstracts</h2>
              <hr />
            </div>
          </div>
          <div className="row publication">
            <div className="col-4 col-md-2 publication-thumbnail-container">
              <a href={towards_universal_evaluation_of_image_annotation_interfaces}>
                <img className="publication-thumbnail" src={towards_universal_evaluation_of_image_annotation_interfaces_thumbnail} />
              </a>
            </div>
            <div className="col-8 col-md-10 publication-info">
              <p><strong>Andrew M. Vernier</strong>, Jean Y. Song, Edward Sun, Allison Kench, Walter S. Lasecki. <a href="files/towards_universal_evaluation_of_image_annotation_interfaces.pdf">Towards Universal Evaluation of Image Annotation Interfaces</a>. In <em>Proceedings of the ACM Symposium on User Interface Software and Technology (UIST 2019)</em>. New Orleans, LA.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
