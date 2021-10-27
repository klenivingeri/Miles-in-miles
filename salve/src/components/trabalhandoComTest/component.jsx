import ComponentLink from "../cLink"
import {useState} from 'react'

const LINK = {
  GOOGLE: {
    uri: 'http://google.com.br',
    descricao: 'Google',
  },
  BING: {
    uri: 'http://bing.com.br',
    descricao: 'Bing',
  }
}
export function ComponenteDeTeste(a, b){
  const [link, setLink] = useState(LINK.GOOGLE)

  const numero = 1000
  const booleano = true
  const texto = 'Titulo'

  const google = () => {
    setLink(LINK.GOOGLE)
  }
  const bing = () => {
    setLink(LINK.BING)
  }

  return(
    <div style={{background: 'red', height: '200px', width: '200px', margin: '0 auto', marginTop:'100px', fontSize:'20px', padding:'10px'}}>
      {booleano && (<div>Texto {texto}: <br/> Numero: {numero}</div>)}

      <a href="#!" onMouseEnter={google}>Google | click</a> <br/>
      <a href="#!" onClick={bing}>Bing | click</a> <br/>

      <ComponentLink link={link.uri}>{link.descricao}</ComponentLink>
    </div>
  )
}