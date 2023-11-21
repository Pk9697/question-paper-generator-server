import questionsData from '../../../questionStore.js'
import { generateQuestionDistribution, getRandomQuestions } from '../../../utils/commonFunctions.js'
/* api/v1/questions */
export const getAllQuestions = async (req, res) => {
  try {
    const questions = questionsData
    return res.status(200).json({
      success: true,
      message: 'Here are all your questions',
      data: {
        questions,
      },
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
}

export const getQuestionDistribution = async (req, res) => {
  try {
    const questions = questionsData

    const { totalMarks, easyPercentage, mediumPercentage, hardPercentage } = req.body
    const [countEasyQuestions, countMediumQuestions, countHardQuestions] = generateQuestionDistribution(
      totalMarks,
      easyPercentage,
      mediumPercentage,
      hardPercentage
    )

    const randomEasyQuestions = getRandomQuestions('Easy', countEasyQuestions, questions)
    const randomMediumQuestions = getRandomQuestions('Medium', countMediumQuestions, questions)
    const randomHardQuestions = getRandomQuestions('Hard', countHardQuestions, questions)

    const allRandomQuestions = [...randomEasyQuestions, ...randomMediumQuestions, ...randomHardQuestions]

    console.log({ randomHardQuestions })
    return res.status(200).json({
      success: true,
      message: 'Here are all your specific questions',
      data: {
        questions: allRandomQuestions,
      },
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
}
