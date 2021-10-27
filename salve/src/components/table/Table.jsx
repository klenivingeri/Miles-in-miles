import { Accordion } from './Accordion'
import './styles.scss'




export function Table(){
    var obj = [{
        title: 'Base de Clientes - DVR',
        type: 'DVR',
        list: '1',
        thm: [{
            title: 'Base de Clientes - THM',
            type: 'THM',
            list: '1.1',
            okr: [{
                title: 'Base de Clientes - OKR',
                type: 'OKR',
                list: '1.1.1',
                priority: '1000', 
                kr:[{
                    list: '1.1.1.1',
                    type: 'KR',
                    title: 'Base ativa de clientes recorrentes',
                    team: 'Corp',
                    owner: 'Fred',
                    priority: '900',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Soma mensal',
                    status: 'Approved'
                },
                {
                    list: '1.1.1.2',
                    type: 'KR',
                    title: 'Venda de novas lojas',
                    team: 'Corp',
                    owner: 'Fabrício',
                    priority: '800',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Média',
                    status: 'Review'
                },
                {
                    list: '1.1.1.3',
                    type: 'KR',
                    title: 'Venda total Mobile Remoto',
                    team: 'Corp',
                    owner: 'Fabrício',
                    priority: '750',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Padrão',
                    status: 'Pending'
                },{
                    list: '1.1.1.4',
                    type: 'KR',
                    title: 'Venda total Mobile Remoto',
                    team: 'Operações',
                    owner: 'Fabrício',
                    priority: '700',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Total Anual',
                    status: 'Rejected'
                }]
            }]
        }]
    },{
        title: 'Base de Clientes - DVR',
        type: 'DVR',
        list: '2',
        thm: [{
            title: 'Base de Clientes - THM',
            type: 'THM',
            list: '2.1',
            okr: [{
                title: 'Base de Clientes - OKR',
                type: 'OKR',
                list: '2.1.1', 
                priority: '500',   
                kr:[{
                    list: '2.1.1.1',
                    type: 'KR',
                    title: 'Base ativa de clientes recorrentes',
                    team: 'Corp',
                    owner: 'Fred',
                    priority: '400',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Soma mensal',
                    status: 'Approved'
                },
                {
                    list: '2.1.1.2',
                    type: 'KR',
                    title: 'Venda de novas lojas',
                    team: 'Corp',
                    owner: 'Fabrício',
                    priority: '300',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Média',
                    status: 'Review'
                },
                {
                    list: '2.1.1.3',
                    type: 'KR',
                    title: 'Venda total Mobile Remoto',
                    team: 'Corp',
                    owner: 'Fabrício',
                    priority: '100',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Padrão',
                    status: 'Pending'
                },{
                    list: '2.1.1.4',
                    type: 'KR',
                    title: 'Venda total Mobile Remoto',
                    team: 'Operações',
                    owner: 'Fabrício',
                    priority: '0',
                    low: '10,0',
                    medium: '11,0',
                    high: '12,0',
                    metric: 'Total Anual',
                    status: 'Rejected'
                }]
            }]
        }]
    }]

    
    return(
        
    <div  className="container">
        <table id="table" width="100%" className="">
            <caption>Lista de Contribuintes Cadastrados</caption>
            <thead>
                <tr>
                    
                    <th scope="col" width="15%">#</th>
                    <th scope="col" width="25%">Nome</th>
                    <th scope="col" width="25%">Sobrenome</th>
                    <th scope="col" width="25%">Data</th>
                    <th scope="col" width="10%"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td colSpan={5}>
                {obj.map( index =>{
                    return(
                        <Accordion key={index.id} tr={index} color="#eeeeee">
                        
                            {index.thm.map( index =>{
                                return(
                                <Accordion key={index.id} tr={index} color="#dddddd" >
                        
                                    {index.okr.map( index =>{
                                        return(
                                            <Accordion key={index.id} tr={index} color="#cccccc" >

                                                {index.kr.map( index =>{
                                                    return(
                                                     <Accordion key={index.id} tr={index} color="#c9c9c9">
                                    
                                                    </Accordion>
                                                    )
                                                })}
                                    
                                            </Accordion>
                                        )
                                    })}

                                </Accordion>
                                )
                            })}

                        </Accordion>
                    )
                })}
                </td>
                </tr>
            </tbody>
        </table>
        
    </div>
    )
}