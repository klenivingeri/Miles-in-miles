import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';

createServer({
  models:{// 1 Banco de dados do miragejs
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [ // mesmo nome do Model, mas no plural
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-14 12:40:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-05-14 12:40:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    // informa que todas as chamadas vão estar apartir de 'api'
    this.get('/transactions', () => { // chamada para rota
      return this.schema.all('transaction') // 2
    })

    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data) // 3 Cria o banco
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

