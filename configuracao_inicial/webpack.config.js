const path = require('path')

module.exports = {
    mode: 'development',
    entry : path.resolve(__dirname, 'src', 'index.jsx'), /** nome do arquivo de entrada */
    output : {
        path: path.resolve(__dirname, 'dist'), /** nome do pasta de saída */
        filename : 'bundle.js' /** nome do arquivo de saída */
    },
    resolve:{
        extensions : ['.js','.jsx'],  /** Formato de arquivos que ele pode ler */
    },
    module: { /** como deve se comportar com cada importação */
        rules: [ /** Array de regras */
            {
                test: /\.jsx$/, /** ler os arquivos com a extensão .jsx */
                exclude: /node_modules/, /** não ler a node_modules pq cada lib precisa já ter sua config*/
                use: 'babel-loader' /** converter o arquivo usando o babel */
            }
        ]
    }
}