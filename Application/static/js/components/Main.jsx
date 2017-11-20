import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainBody from './MainBody'
import Portal from './Portal'
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Portal}/>
        </Switch>
    </main>
);

export default Main