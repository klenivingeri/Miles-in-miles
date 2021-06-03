import { Switch, Route } from 'react-router-dom';

import TuseEffect  from './pages/TuseEffect'
import TestLink  from './pages/TestLink'


const Routes = ()=>{
  return (
    <Switch>
      <Route path="/" exact component={TuseEffect} />
      <Route path="/test" component={TestLink} />
    </Switch>
  );
};

export default Routes;