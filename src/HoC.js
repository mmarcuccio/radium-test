import React from "react";
import Radium from "@instacart/radium";
import { connect } from "react-redux";
import hoistNonReactStatic from "hoist-non-react-statics";
import withTheme from "ic-snacks";

export default function withHoC(Component) {
  class Wrapped extends React.Component {
    render() {
      return (
        <Component ref={(node) => (this.wrapped = node)} {...this.props} />
      );
    }
  }

  return withTheme(
    Radium(hoistNonReactStatic(connect(() => ({}))(Radium(Wrapped)), Component))
  );
}
