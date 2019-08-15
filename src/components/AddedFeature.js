import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions";

const AddedFeature = props => {
  //console.log("AddFeature Props", props);
  const { feature, removeFeature } = props;
  return (
    <li>
      <button className="button" onClick={() => removeFeature(feature)}>
        X
      </button>
      {feature.name}
    </li>
  );
};

export default connect(
  null,
  { removeFeature }
)(AddedFeature);
