export  function RepositoryItem(props){
    return (
        <li>
            <strong> {props.repository?.name ?? 'default'} </strong>
            <p>{props.repository?.description ?? 'Form in React'}</p>
            <a href={props.repository?.link ?? 'default'}>
             Acessar repositório
            </a>
        </li>
    )
}