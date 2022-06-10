const inquirer = require('inquirer');
const {createReadMe} = require('./readmecreate')
var fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Write your Title here!',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write your github username',
      name: 'username',
    },
    {
        type: 'input',
        message: 'Write your Description here!',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Write how to use the program here!',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Write your installation guide here!',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Write your credited source here!',
        name: 'credit',
      },
      {
        type: 'input',
        message: 'Write your email here!',
        name: 'email',
      },
      {
        type: 'list',
        message: 'Choice your license!',
        name: 'license ',
        choices: ['MIT', 'none',],
      },
  ])
  .then((data) => {
    const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(filename, createReadMe(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  })
  
