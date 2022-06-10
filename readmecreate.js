function readmecreate(data) {
    return `# ${data.title}
    ## Description
    ${data.description}
    ## Usage
    ${data.usage}
    ## Installation
    ${data.installation}
    ## Contact Info
    Email at ${data.email}, github username at ${data.username}`
}

module.exports = {createReadMe};
