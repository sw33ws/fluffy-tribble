function createReadMe(data) {
    return `# ${data.title}

## Description
${data.description}

## Table of Contents
-[Description](#description)
-[Usage](#usage)
-[Installation](#installation)
-[ContactInfo](#contact info)

## Usage
${data.usage}

## Installation
${data.installation}

## Contact Info
Email at ${data.email}, github username at ${data.username}`
}

module.exports = {createReadMe};
