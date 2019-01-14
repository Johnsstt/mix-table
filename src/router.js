import React, {lazy, Suspense} from 'react';
import { Router, Route, Switch } from 'dva/router';
import Map from './routes/map';
import 'antd/dist/antd.css';




function RouterConfig({ history }) {
  
  return (
    <Router history={history}>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" exact component={Map} />
          

        </Switch>
      </Suspense>

    </Router>
  );
}

export default RouterConfig;
