export function Accordion(props){
    console.log(props)
    let id = props.tr.list.replaceAll('.', '')
    return(
        <table width="100%">
            <tbody >
                <tr className="" style={{backgroundColor: props.color}}>
                    
                    <td width="15%">{props.tr.list}</td>
                    <td width="25%">{props.tr.title}</td>
                    <td width="25%">Tonini</td>
                    <td width="25%">24/05/2017</td>
                    <td width="10%">
                        <div className="">
                            <button className="btn-outline-primary" data-toggle="collapse" data-target={`#col1-row1${id}`}>+</button>
                        </div>
                    </td>
                </tr>
                <tr id={`col1-row1${id}`} className="collapse">
                    <td colSpan={5}>
                        
                        {props?.children}
                        
                    </td>
                </tr>
            </tbody>
        </table>
    )
}