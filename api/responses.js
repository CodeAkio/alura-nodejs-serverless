function countCorrectAnswers(name, answers) {
  const correctQuestions = [3, 1, 0, 2];

  const totlaCorrectAnswers = answers.reduce((acc, answer, index) => {
    if (answer === correctQuestions[index]) {
      acc++;
    }
    return acc;
  }, 0)

  const result = {
    name,
    answers,
    totlaCorrectAnswers,
    totalAnswers: answers.length
  };

  return result;
}

module.exports = {
  countCorrectAnswers
}