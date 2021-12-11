import { Switch, Route } from 'react-router-dom';
import React from 'react';
import SpaList from './component/spaList';
import ServiceList from './component/servicesList';
import book from './component/book';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={SpaList} exact />
        <Route path="/spa/:id/owner/:owner_id/services" component={ServiceList} />
        <Route path="/services/:id/spa_n_salon/:spa_n_salon_id/owner/:owner_id/book" component={book} />
      </Switch>
    </div>
  );
}

export default App;
