const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// variável que identitfica o tipo de ambiente
const isDevelopement = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopement ? 'development' : 'production', // fazendo mudança do ambriente
    devtool: 'eval-source-map', // desativa o embaralhamento do código
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
    // automatiza o comando yarn webpack
    devServer: {
        // contentBase foi descontinuado
        static: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ],    
    module: {
        rules: [
            {
                test: /\.jsx$/, // verifica se o arquivo termina com .jsx
                exclude: /node_modules/, // exclui pasta node_modules da conversão
                use: 'babel-loader' // dependência que precisa ser instalada
            }
        ],
    },
};