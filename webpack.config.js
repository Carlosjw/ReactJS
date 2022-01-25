const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        // vai receber outra propriedade por isso não recebe o nome do arquivo
        path: path.resolve(__dirname, 'dist'),
        // propriedade com o nome do arquivo
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/, // verifica se o arquivo termina com .jsx
                exclue: /node_modules/, // exclui pasta node_modules da conversão
                use: 'babel-loader' // dependência que precisa ser instalada
            }
        ],
    },
};