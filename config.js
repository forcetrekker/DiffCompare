let config = {}

let dirname = __dirname;
config.path = {
    source: `${dirname}\\source`,
    destination: `${dirname}\\destination`
};

config.classNames = [
    'AccountBuilder.cls',
    'EmailManager.cls'
];

module.exports = config;