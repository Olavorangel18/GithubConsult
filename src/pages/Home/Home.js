import React, {useState} from 'react';
import axios from 'axios';
import logoCRV from './assets/logoCRV.svg'
import search from './assets/search.svg'
import {useHistory} from 'react-router-dom';

import './assets/style.css'

export default function Home(){
    const [usuario,setUsuario] = useState('')
    const history = useHistory()
    function handleSearch(event){
        event.preventDefault();
        axios.get(`https://api.github.com/users/${usuario}`).then(response => {
            
            const users = response.data;
            const login = users.login;
            const dates = [];
            dates.push(users.avatar_url);
            dates.push(users.login);
            dates.push(users.created_at);
            dates.push(users.followers);
            dates.push(users.following);
            dates.push(`https://github.com/${login}/`);
            dates.push(users.public_repos);
            dates.push(users.repos_url);
            dates.push(users.public_gists)
            dates.push(users.followers_url)
            dates.push(users.following_url)
            dates.push(users.gists_url)
            dates.push(users.repos_url)
            localStorage.setItem('dates',JSON.stringify(dates))
            history.push(`/user/`)
        });
    }
    
    return(
        <div class="containerSearch">
            <div className="search">
                <img className="imgLogo"src={logoCRV} alt="logo"></img>
                <div className="containerWord">
                <form onSubmit={handleSearch}>
                    <input type="search" placeholder="Digite o nome aqui" value = {usuario} className="input" onChange={(event)=>{setUsuario(event.target.value)}}></input>
                    <button type="submit" className="butaoSearch">
                        <img className="svgSearch"src={search} alt="pesquisa"></img>
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}