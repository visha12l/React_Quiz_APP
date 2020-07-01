import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { JS_QUESTIONS } from "../../constants/JsQuestions";
import CodeEditor from "../shared/CodeEditor";
import SuccessPopup from "../shared/successPopup";

// TODO ADD REACT, REDUX QUESTIONS
// add ability to select random question from set
// add pagination after 5 questions
// reset Quiz Option

const Quiz = () => {
  const [result, setResult] = useState({
    attempted: 0,
    studentmarks: 0,
    showResult: false
  });
  const [questions, setQuestions] = useState(JS_QUESTIONS);

  const { showResult, studentMarks, attempted } = result;

  useEffect(() => {
    //Animation Effect on input radio change
    const labels = document.querySelectorAll(".label");
    labels.forEach(label => {
      const chars = label.textContent.split("");
      label.innerHTML = "";
      chars.forEach(char => {
        label.innerHTML += `<span>${char === " " ? "&nbsp" : char}</span>`;
      });
    });
  }, []);

  const handleCodeChange = (value, parentKey) => {
    const newResult = questions.map((item, key) => {
      if (parentKey === key) {
        item.UserText = value;
      }
      return item;
    });
    setQuestions(newResult);
  };

  const handleOptionChange = (event, correctAnswer, parentKey, childKey) => {
    let newstudentMarks = 0;
    let finalAttempted = 0;
    let newResult = questions.map((item, key) => {
      if (key === parentKey) {
        item.isCorrect = correctAnswer === childKey ? "correct" : "incorrect";
        item.attempted = true;
        item.currentAnswer = childKey;
      }
      if (item.isCorrect === "correct") newstudentMarks += 1;
      if (item.attempted) finalAttempted += 1;
      return item;
    });

    setResult({
      ...result,
      attempted: finalAttempted,
      studentMarks: newstudentMarks
    });
    setQuestions(newResult);
  };

  return (
    <div className="quizContainer">
      <ul className="questionList">
        {questions.map((item, key) => {
          return (
            <li
              className={`question ${
                item.isCorrect === "incorrect" && "incorrect"
              }`}
              key={key}
            >
              <pre className="questionHead" id="question-label">
                {key + 1}) {item.question}
              </pre>
              {item.type === "Text" && (
                <div className="codeEditor">
                  <CodeEditor
                    code={item.UserText || "type"}
                    parentKey={key}
                    handleCodeChange={handleCodeChange}
                  />
                </div>
              )}
              {item.answers.map((option, childKey) => {
                return (
                  <label key={childKey}>
                    <input
                      onChange={() => {
                        handleOptionChange(
                          event,
                          item.correctAnswer,
                          key,
                          childKey
                        );
                      }}
                      type="radio"
                      value={option.value}
                      name={item.question}
                      checked={item.currentAnswer === childKey}
                    />
                    <span className="radio"></span>
                    <span className="label">{option.value}</span>
                  </label>
                );
              })}
            </li>
          );
        })}
      </ul>
      <button
        className={`submitBtn ${attempted === 0 && "noPointer"}`}
        onClick={e => setResult({ ...result, showResult: true })}
      >
        Submit Quiz
      </button>
      {showResult && (
        <SuccessPopup
          totalQuestion={questions.length}
          result={result}
          closePopup={() => setResult({ ...result, showResult: false })}
        />
      )}
    </div>
  );
};

export default Quiz;
