export function TableTr(props){
    return(
       
        <tr className="tbody-tr">
            <th>{props.tr.id}</th>
            <td>typo1</td>
            <td>string de texto</td>
            <td>red</td>
            <td>games</td>
            <th> + </th>
        </tr>
    )
}