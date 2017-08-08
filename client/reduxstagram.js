import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

//Import styles
import css from './styles/style.styl';
//Import components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute> /*if path is just "/" then render the PhotoGrid component else we have a nested Route*/
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
