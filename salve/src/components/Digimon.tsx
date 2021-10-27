import styles from '../styles/Digimon.module.css'
interface Digimon {
    perfil: {
        name: string;
        img: string;
        level: string;
    }

}
export function Digimon2(props: Digimon){
    return(
        <div className={styles.caixa2}>
            <p>{props.perfil.name}</p>
                <img src={props.perfil.img} width="100" />
            <p>{props.perfil.level}</p>
        </div>

    )
}

