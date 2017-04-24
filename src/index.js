import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Page from './components/Page';
import BasicForm from './components/forms/BasicForm';
import BasicTable from './components/tables/BasicTables';
import AdvancedTable from './components/tables/AdvancedTables';
import AsynchronousTable from './components/tables/AsynchronousTable';
import Login from './components/pages/Login';
import Echarts from './components/charts/Echarts';
import Recharts from './components/charts/Recharts';
import Icons from './components/ui/Icons';
import Buttons from './components/ui/Buttons';
import Spins from './components/ui/Spins';

const routes =
    <Route path={'/'} components={Page}>
        <IndexRedirect to="/app/table/basicTable" />
        <Route path={'app'} component={App}>
            <Route path={'form'}>
                <Route path={'basicForm'} component={BasicForm} />
            </Route>
            <Route path={'table'}>
                <Route path={'basicTable'} component={BasicTable} />
                <Route path={'advancedTable'} components={AdvancedTable} />
                <Route path={'asynchronousTable'} components={AsynchronousTable} />
            </Route>
            <Route path={'chart'}>
                <Route path={'echarts'} component={Echarts} />
                <Route path={'recharts'} component={Recharts} />
            </Route>
            <Route path={'ui'}>
                <Route path={'icons'} component={Icons} />
                <Route path={'buttons'} component={Buttons} />
                <Route path={'spins'} component={Spins} />
            </Route>
        </Route>
        <Route path={'login'} components={Login} />
    </Route>;


ReactDOM.render(
  <Router history={hashHistory}>
      {routes}
  </Router>,
  document.getElementById('root')
);
