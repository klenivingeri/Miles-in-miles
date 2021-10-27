import { Switch, Route } from 'react-router-dom';

import TuseEffect  from './pages/TuseEffect'
import TestLink  from './pages/TestLink'
import Table from './pages/Tablepg'
import Componente from './pages/Teste'


const Routes = ()=>{
  return (
    <Switch>
      <Route path="/" exact component={Componente} />
      <Route path="/table" exact component={Table} />
      <Route path="/test" component={TestLink} />
      <Route path="/digimon" component={TuseEffect} />
    </Switch>
  );
};

export default Routes;