import React from "react";
import "./signup.css";
import { signup } from "../../js/actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const SignUp = ({ signup }) => {
  return (
    <div>princess is here</div>
  )
}
const mapStateToProps = state => ({});

SignUp.propTypes = {
  signup: PropTypes.func,
};
export default connect(mapStateToProps, { signup })(SignUp);