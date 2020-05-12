import React from "react";
import Radium from "@instacart/radium";
import { connect } from "react-redux";
import HoC from "./HoC";

class ClassComponent extends React.Component {
  state = {
    showTotalDetails: false,
    showSavingDetails: false,
    viewSavings: "",
    tipModalIsOpen: false,
  };

  UNSAFE_componentWillReceiveProps() {
    return;
  }
  UNSAFE_componentWillUpdate() {
    return;
  }
  render() {
    const { success = "no" } = this.props;
    return <div>ClassComponent mapDispatchToProps called? {success}</div>;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
  success: "yes",
});

export default HoC(
  connect(mapStateToProps, mapDispatchToProps)(Radium(ClassComponent))
);
