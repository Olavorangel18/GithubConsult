import React from 'react'
import { Switch, Route, BrowserRouter}  from 'react-router-dom'
import Home from './pages/Home/Home'
import Repos from './pages/Repos/Repos';
import Search from './pages/search/Search'

export default function Routes(){
    return(

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path='/user' exact component={Search}/>
                <Route path= {`/user/repo`} exact component={Repos}/>
            </Switch>
        </BrowserRouter>
    )
}