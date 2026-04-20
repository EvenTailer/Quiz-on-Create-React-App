import { useContext } from "react";
import { useReducer } from "react";
import { QuizContext } from "../../context/quiz.jsx";
import Question from "../Questions/Questions.jsx";



function Quiz() {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("ok", quizState);
  let levelResult = ''
  if(quizState.correctAnswerCount <= 9){
    levelResult = 'Beginner'
  }
  else if(quizState.correctAnswerCount >= 10 && quizState.correctAnswerCount <= 15){
    levelResult = 'Elementary '
  }
  else if(quizState.correctAnswerCount >= 16 && quizState.correctAnswerCount <= 20){
    levelResult = 'Pre-Intermediate'
  }
  else if(quizState.correctAnswerCount >= 21 && quizState.correctAnswerCount <= 25){
    levelResult = 'Intermediate '
  }
  else if(quizState.correctAnswerCount >= 26){
    levelResult = 'Upper-Intermediate'
  }
  return (
    <div className="Quiz">
      {quizState.showResults && (
        // function openLevel(){
        //   if (quizState.correctAnswerCount <= 9){
        //     console.log(11111111111111111111111111111111111111);
        //   }
        // },
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>Вы прошли тест</div>
            <div>Вы набрали {quizState.correctAnswerCount} баллов из 30.</div>
            <div>Ваш уровень {levelResult}</div>
            <div className="next-button" onClick={() => dispatch({type: 'RESTART'})}>restart</div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Вопрос {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT Q" })}
          >
            Далее
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
