import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact patrh='/' component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default PageRoutes;