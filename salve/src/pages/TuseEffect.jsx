import { useEffect, useState } from "react"
import { Digimon2 } from "../components/Digimon";
import styles from '../styles/Digimon.module.css'

export default function TuseEffect(){
    const [ digimon, setDigimon] = useState([]);

    useEffect(() =>{
        fetch('https://digimon-api.vercel.app/api/digimon')
            .then( response => response.json())
            .then( data => setDigimon(data))
    },[])

    return(
        <div className={styles.caixa}>
            {digimon.map( perfil => (
                <Digimon2 key={perfil.name} perfil={perfil}/>
            ))}
        </div>
    )
}