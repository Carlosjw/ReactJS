const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        // vai receber outra propriedade por isso não recebe o nome do arquivo
        path: path.resolve(__dirname, 'dist'),
        // propriedade com o nome do arquivo
        filename: 'bundle.js'
    }
};