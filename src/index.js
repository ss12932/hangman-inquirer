//ask username question
const inquirer = require("inquirer");

const gameSettingsQuestions = [
  {
    type: "input",
    message: "Please enter your nickname",
    name: "nickname",
  },
];
//ask the category question and consoel log data from the chosen category
const init = async () => {
  //prompt the game setting questions and store answers
  const answers = await inquirer.prompt(gameSettingsQuestions);
  //log the answers
  console.log(answers);
};
init();

//00:37:44 timestamp video
