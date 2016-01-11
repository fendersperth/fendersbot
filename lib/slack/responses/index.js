const requireDirectory = require('require-directory');

const visit = (response) => response.default;

export default requireDirectory(module, { visit });
