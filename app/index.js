import ReactDom from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import store from "scripts/store";
import {syncHistoryWithStore} from "react-router-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import MainPage from "scripts/pages/mainPage";
import Application from "scripts/containers/application";
import * as ignoreLessStyles from "styles/main.less";
import {root} from "scripts/utils/routes";

const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path={root} component={Application}>
                <IndexRoute component={MainPage}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);