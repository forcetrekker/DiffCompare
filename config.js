let config = {}

// full path of source and destination folders for comparison, this can be hardcoded to reference exact folders
let dirname = __dirname;
config.path = {
    source: `${dirname}\\source`,
    destination: `${dirname}\\destination`
};

// used for prompting user to select available configured file name to select from
config.fileNames = [
    'AccountBuilder.cls',
    'EmailManager.cls'
];

module.exports = config;