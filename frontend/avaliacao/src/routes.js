import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Main from './pages/main/main';
import Area from './pages/area/area';
import Pergunta from './pages/pergunta/pergunta';
import Funci from './pages/funci/funci';
import FunciView from './pages/funciView/funciView';
import Time from './pages/time/time';

export default function Routes() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/main" component={Main} />
        <Route path="/area" component={Area} />
        <Route path="/pergunta" component={Pergunta} />
        <Route path="/funci" exact component={Funci} />
        <Route path="/funci/:id" component={FunciView} />
        <Route path="/time" component={Time} />
    </BrowserRouter>
  );
}
