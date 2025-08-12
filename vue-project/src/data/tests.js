/** @typedef {{ id: string, title: string, questions: Question[] }} Test */
/** @typedef {{ id: number, questionText: string, options: string[], correctAnswer: string }} Question */

/** @type {Test[]} */
export const tests = [
  {
    id: 'math-basic',
    title: 'Основы математики',
    questions: [
      {
        id: 1,
        questionText: 'Сколько будет 2 + 2?',
        options: ['3', '4', '5'],
        correctAnswer: '4'
      },
      {
        id: 2,
        questionText: 'Чему равен квадратный корень из 9?',
        options: ['2', '3', '4'],
        correctAnswer: '3'
      }
    ]
  },
  {
    id: 'programming-js',
    title: 'Основы JavaScript',
    questions: [
      {
        id: 1,
        questionText: 'Какое ключевое слово используется для объявления переменной в JavaScript?',
        options: ['var', 'let', 'const', 'Все вышеперечисленное'],
        correctAnswer: 'Все вышеперечисленное'
      },
      {
        id: 2,
        questionText: 'Как называется функция, которая вызывается сама себя?',
        options: ['Анонимная функция', 'Стрелочная функция', 'Рекурсивная функция'],
        correctAnswer: 'Рекурсивная функция'
      }
    ]
  }
];