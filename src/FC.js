import React from "react";
import Radium from "@instacart/radium";
import { connect } from "react-redux";

const FC = ({ success = "no" }) => (
  <div>FC mapDispatchToProps called? {success}</div>
);

const mapDispatchToProps = () => ({
  success: "yes",
});

export default connect(undefined, mapDispatchToProps)(Radium(FC));
