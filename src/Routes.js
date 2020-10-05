import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Api from './Api';
import Home from './Home';
import About from './About';
import Sources from './Sources';
import NewResourceForm from './NewResourceForm';

function Routes() {

    const handleAdd = async (data) => {
        Api.addResource(JSON.stringify(data));
    }

    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/sources'>
                    <Sources />
                </Route>
                <Route exact path='/newResourceForm'>
                    <NewResourceForm handleAdd={handleAdd} />
                </Route>
                <Redirect to='/' />
            </Switch>
        </div>
    );
}

export default Routes;