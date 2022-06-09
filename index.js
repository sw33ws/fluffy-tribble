const inquirer = require('inquirer');

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
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  })


