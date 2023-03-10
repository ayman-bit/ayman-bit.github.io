const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/ayman-bit',
  title: 'My Github Code',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ayman Abu Awad',
  role: 'Computer Engineer',
  description:
    'Strong problem-solving and mathematical skills, creativity, and innovative thinking, attention to detail, a keen awareness of safety issues, written and verbal communication skills, and skills in time management.',
  resume: 'https://www.cs.mun.ca/~aymana/Docs/Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/ayman-abu-awad/',
    github: 'https://github.com/ayman-bit',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Easy Receipt',
    description:
      'Easy Receipts is a mobile application that aims to provide users with a more intuitive and user-friendly experience when it comes to receiving receipts. With our app, users can enjoy the convenience of receiving clear and detailed receipts without having to sacrifice their personal or professional email addresses to unwanted promotional emails. Our app is designed to make the process of receiving, managing and organizing receipts hassle-free and easy for users.',
    stack: ['React-Native','JavaScript', 'Java', 'HTML', 'C++', 'Objective-C++', 'Starlark'],
    sourceCode: 'https://github.com/ayman-bit/capstone-proj',
  },
  {
    name: 'NeuralNetwork',
    description:
      'An artificial neural network consists of a sequence of  layers each of which consists of one or more neurons, or brain cells. Each neuron can be modelled as taking some number of inputs from the previous layer and calculating a weighted sum of these inputs to produce a single output which is fed to the neurons in the next layer.',
    stack: ['Java'],
    sourceCode: 'https://github.com/ayman-bit/NeuralNetwork',
  },
  {
    name: 'U-Calendar',
    description:
      'U-Calendar is a desktop calendar application specifically designed for students to facilitate managing multiple courses. The calendar is based on the standard semester layout and offers a variety of features to make scheduling easier. While the main focus of this application is to provide a functional calendar, it also includes a customizable notebook and a planner to keep track of assignments and deadlines. ',
    stack: ['Java', 'JavaFx','Maven', 'Git'],
    sourceCode: 'https://github.com/ayman-bit/U-Calendar',
  },
  {
    name: 'ImageFiltering',
    description:
      'The Laplacian filter is used in image processing applications as an edge detector. It is a two-dimensional approximation of the second spatial derivative of an image. ',
    stack: ['BeautifulSoup', 'Python', 'Shell'],
    sourceCode: 'https://github.com/ayman-bit/ImageFiltering',
  },
  {
    name: 'EEAlgorithm',
    description:
      'This Algorithm will allow the user to compute the private-key. ',
    stack: ['Python'],
    sourceCode: 'https://github.com/ayman-bit/EEAlgorithm',
  },
  {
    name: 'Game Of Life',
    description:
      'The Game of Life, also known simply as Life. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.',
    stack: ['Java'],
    sourceCode: 'https://github.com/ayman-bit/Game-Of-Life',
  },
  {
    name: 'TicTacToe',
    description:
      'This repository is my implementation of TicTacToe in JAVA',
    stack: ['Java'],
    sourceCode: 'https://github.com/ayman-bit/TicTacToe',
  },

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'C++',
  'C',
  'C#',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'PHP',
  'Latex',
  'React',
  'Vue',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aymana@mun.ca',
}

export { header, about, projects, skills, contact }
