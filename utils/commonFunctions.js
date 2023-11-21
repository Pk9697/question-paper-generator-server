export function generateQuestionDistribution(
  totalMarks = 100,
  easyPercentage = 20,
  mediumPercentage = 50,
  hardPercentage = 30
) {
  // Define mark values for each difficulty level
  const easyMarks = 5
  const mediumMarks = 10
  const hardMarks = 15

  // Convert percentages to decimals
  const easyDecimal = easyPercentage / 100
  const mediumDecimal = mediumPercentage / 100
  const hardDecimal = hardPercentage / 100

  // Calculate the number of questions for each difficulty level
  let easyQuestions = Math.floor((totalMarks * easyDecimal) / easyMarks)
  let mediumQuestions = Math.floor((totalMarks * mediumDecimal) / mediumMarks)
  let hardQuestions = Math.floor((totalMarks * hardDecimal) / hardMarks)

  // Calculate the remaining marks after integer division
  let remainingMarks =
    totalMarks - (easyQuestions * easyMarks + mediumQuestions * mediumMarks + hardQuestions * hardMarks)

  // Distribute the remaining marks proportionally to the difficulty levels
  while (remainingMarks > 0) {
    if (easyQuestions < easyMarks) {
      easyQuestions += 1
    } else if (mediumQuestions < mediumMarks) {
      mediumQuestions += 1
    } else if (hardQuestions < hardMarks) {
      hardQuestions += 1
    }
    remainingMarks -= 1
  }

  // Adjust the number of questions to ensure the total marks do not exceed the specified limit
  while (easyQuestions * easyMarks + mediumQuestions * mediumMarks + hardQuestions * hardMarks > totalMarks) {
    if (easyQuestions > 0) {
      easyQuestions -= 1
    } else if (mediumQuestions > 0) {
      mediumQuestions -= 1
    } else if (hardQuestions > 0) {
      hardQuestions -= 1
    }
  }

  return [easyQuestions, mediumQuestions, hardQuestions]
}

export function getRandomQuestions(difficultyType, countDifficultyTypeQuestions, allQuestions) {
  const allDifficultyTypeQuestions = allQuestions.filter((question) => question.difficulty === difficultyType)
  const randomQuestions = []
  while (randomQuestions.length < countDifficultyTypeQuestions) {
    const randomQuestion = allDifficultyTypeQuestions[Math.floor(Math.random() * countDifficultyTypeQuestions)]
    randomQuestions.push(randomQuestion)
  }

  return randomQuestions
}
