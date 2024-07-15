import { questions } from './data/questions'

const quiz = {
  quizTitle: 'SAA C03 Quiz',
  quizSynopsis: 'Good Luck!',
  nrOfQuestions: questions.length,
  appLocale: {
    marksOfQuestion: '',
    singleSelectionTagText: 'MCQ'
  },
  questions: questions.map((q) => {
    return {
      question: q.question,
      questionType: 'text',
      answerSelectionType: q.correctAnswer.length > 1 ? 'multiple' : 'single',
      answers: q.answers,
      correctAnswer: q.correctAnswer.map((answer) => answer + 1),
      point: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong!'
    }
  })
}

export default quiz
