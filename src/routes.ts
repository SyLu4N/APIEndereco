import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import CEP from '../pages/SearchCep';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aprendiz/:id" component={Aluno} isClosed />
      <MyRoute exact path="/aprendiz/" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute exact path="/sobre/" component={Sobre} isClosed={false} />
      <MyRoute exact path="/user/" component={User} isClosed />
      <MyRoute exact path="/user/:id" component={UserEdit} isClosed />
      <MyRoute exact path="/EditPassWord" component={EditPassword} isClosed />
      <MyRoute exact path="*" component={Page404} />
    </Switch>
  );
}
