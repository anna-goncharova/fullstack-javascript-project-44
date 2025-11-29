#!/usr/bin/env node
import readlineSync from 'readline-sync'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  return operators[getRandomNumber(0, operators.length - 1)]
}

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const playGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('What is the result of the expression?')

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRandomNumber(1, 50)
    const num2 = getRandomNumber(1, 50)
    const operator = getRandomOperator()
    const correctAnswer = calculate(num1, num2, operator)

    console.log(`Question: ${num1} ${operator} ${num2}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

playGame()
