export function Accordion(props){
    let id = props.tr.list.replaceAll('.', '')
    return(
        <table width="100%">
            <tbody >
                <tr className="">
                    
                    <td width="15%">1</td>
                    <td width="25%">Vanessa</td>
                    <td width="25%">Tonini</td>
                    <td width="25%">24/05/2017</td>
                    <td width="10%">
                        <div className="">
                            <button className="btn-outline-primary" data-toggle="collapse" data-target={`#col1-row1${props.tr.id}`}>+</button>
                        </div>
                    </td>
                </tr>
                <tr id={`col1-row1${props.tr.id}`} className="collapse">
                    <td colSpan={5}>
                        
                        {props?.children}
                        
                    </td>
                </tr>
            </tbody>
        </table>
    )
}