const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const  isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
    mode:isDevelopment ? 'development' : 'production' ,
    devtool:isDevelopment? 'eval-source-map' : 'source-map'  ,
    entry : path.resolve(__dirname, 'src', 'index.jsx'), /** nome do arquivo de entrada */
    output : {
        path: path.resolve(__dirname, 'dist'), /** nome do pasta de saída */
        filename : 'bundle.js' /** nome do arquivo de saída */
    },
    resolve:{
        extensions : ['.js','.jsx'],  /** Formato de arquivos que ele pode ler */
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'public')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: { /** como deve se comportar com cada importação */
        rules: [ /** Array de regras */
            {
                test: /\.jsx$/, /** ler os arquivos com a extensão .jsx */
                exclude: /node_modules/, /** não ler a node_modules pq cada lib precisa já ter sua config*/
                use: 'babel-loader' /** converter o arquivo usando o babel , para um formato que o browser entenda*/
            },
            {
                test: /\.scss$/, /** ler os arquivos com a extensão .cs */
                exclude: /node_modules/, /** não ler a node_modules pq cada lib precisa já ter sua config*/
                use: ['style-loader', 'css-loader', 'sass-loader'] /** converter o arquivo usando o babel , para um formato que o browser entenda*/
            }
        ]
    }
}