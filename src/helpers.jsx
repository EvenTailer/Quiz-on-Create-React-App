export const shuffleAnswers = question => {
    const unshuffledAnswer = [
        question.correctAnswer,
        ...question.incorrectAnswers
    ]
    return unshuffledAnswer.map(unshuffledAnswer => ({
        sort: Math.random(),
        value: unshuffledAnswer
    })).sort((a,b) => a.sort - b.sort).map(a => a.value)
}