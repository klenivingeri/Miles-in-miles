import styles from '../../styles/repositoryList.module.scss'
import { RepositoryItem } from './RepositoryItem'

export function RepositoryList(){
    const repository = {
        name: 'unform',
        description: 'Forms in React',
        link: 'http://google.com.br'
    }
    return(
        <div>
            <h1 className={styles.title}>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem/>
                <RepositoryItem/>
                <a href="/Spinner">testando</a>
            </ul>
        </div>
    )
}
