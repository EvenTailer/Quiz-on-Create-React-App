import Answer from "../Answer/Answer.jsx";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz.jsx";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("Question", quizState);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            key={index}
            index={index}
            correctAnswer={currentQuestion.correctAnswer}
            currentAnswer={quizState.currentAnswer}
            answerText={answer}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", fooo: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};
export default Question;
