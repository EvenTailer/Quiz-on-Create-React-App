import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quiz from './Component/Quiz/Quiz.jsx';
import { QuizContext, QuizProvider } from './context/quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizProvider>
    <Quiz />
    </QuizProvider>
  </React.StrictMode>
);


