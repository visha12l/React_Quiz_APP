import React from "react";
import { func } from "prop-types";

const SuccessPopup = ({ totalQuestion, result, closePopup }) => {
  const { attempted, studentMarks } = result;
  return (
    <div className="successPopupWrap">
      <div className="content">
        <h2>Result</h2>
        <span>total Attempted => {attempted}</span>
        <span>Correct answer => {studentMarks} </span>
        <span>InCorrect answers => {totalQuestion - studentMarks}</span>
        <span>
          Total Marks => {studentMarks} / {totalQuestion}
        </span>
        <button className="submitBtn" onClick={() => closePopup()}>
          OK
        </button>
      </div>
    </div>
  );
};

SuccessPopup.propTypes = {
  closePopup: func
};

SuccessPopup.defaultProps = {
  closePopup: () => {}
};

export default SuccessPopup;
