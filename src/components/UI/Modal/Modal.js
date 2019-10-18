import React, { Component } from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  render() {
    return (
      <>
        <Backdrop show={this.props.show} modalClosed={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "transalteY(-100vh)",
            display: this.props.show ? "block" : "none"
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;
