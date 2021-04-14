import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicial from './Pages/Main/index'
import Curriculo from './Pages/Curriculo/index.jsx'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicial} />
                <Route path="/Curriculo"  component={Curriculo} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes


