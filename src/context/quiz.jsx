import { createContext } from "react";
import { useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helpers";

const initialState = {
  questions,
  currentQuestionIndex: 0,
  showResults: false,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: "",
  correctAnswerCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      let point = 0;
      if (state.currentQuestionIndex <= 4) {
        point = 1;
      } else if (
        state.currentQuestionIndex > 4 &&
        state.currentQuestionIndex <= 10
      ) {
        point = 2;
      } else {
        point = 3;
      }

      const correctAnswerCount =
        action.fooo ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + point
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer: action.fooo,
        correctAnswerCount,
      };
    }
    case "NEXT Q": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        showResults,
        answers,
        currentAnswer: "",
      };
    }
    case "RESTART": {
      return initialState;
    }
    default: {
      return state;
    }
  }

  if (action.type === "RESTART") {
    return initialState;
  }
  return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
