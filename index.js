const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((eachTutorial) => {
    const words = eachTutorial.split(" ");
    const capitalizeMe = words.map((word) => word.substring(0, 1).toUpperCase() + word.substring(1));
    const whatever = capitalizeMe.join(" ")
    return whatever;}
    );
};

// const titleCased = () => {
//   return tutorials.map((line) => {
//     const tokens = line.split(" ");
//     const capitalizedTokens = tokens.map(
//       (token) => token.charAt(0).toUpperCase() + token.slice(1)
//     );
//     const response = capitalizedTokens.join(" ");
//     return response;
//   });
// };

titleCased();

// const titleCased = () => {
//   return tutorials.map (eachTask => {
//     let eachWord = eachTask.split (" ")
//     eachWord.map ((letter) => letter[0].toUpperCase() + letter.substring(1)).join(" ")
//     return eachWord
//     })
// }

// titleCased()


// // return tutorialsUpper = tutorials.map (whatever => {
// //   return whatever.toUpperCase()
// // })

// // const activatedRobots = robots.map ((robot) => {
//   // return Object.assign({}, robot, {isActivated: true}) } )


// // titleCased(): returns an array with title case tutorial names. 
// // Note that this function takes 
// // no arguments and should use the global tutorials variable as data.