import React from 'react';
import { Switch, Route } from  'react-router-dom';

import Home from './components/Home/Home';
import SinglePlayer from './components/SinglePlayer/SinglePlayer';
import Playlist from './components/Playlist/Playlist';

export default(
  <Switch>
    <Route component = { Home } path = "/" exact />
    <Route component = { SinglePlayer } path = "/post/:id"/>
    <Route component = { Playlist } path = "/playlist"/>
    <Route component= { Home } />
  </Switch>
)
