import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import logoCRV from './assets/logoCRV.svg'
import search from './assets/search.svg'
import { Link } from 'react-router-dom';

import './assets/style.css'


export default function Search(){
    const [date, setDates] = useState([])
    useEffect(() =>{
        let dados = localStorage.getItem('dates');
        dados = JSON.parse(dados);
        setDates(dados);
    },[])

    const [usuario,setUsuario] = useState('')
    const history = useHistory()
    function handleSearch(event){
        event.preventDefault();
        axios.get(`https://api.github.com/users/${usuario}`).then(response => {
            localStorage.removeItem('dates')
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
            dates.push(users.public_gists);
            dates.push(users.followers_url)
            dates.push(users.following_url)
            dates.push(users.gists_url)
            dates.push(users.repos_url)
            localStorage.setItem('dates',JSON.stringify(dates));
            let info = localStorage.getItem('dates');
            info = JSON.parse(info);
            setDates(info);
            history.push(`/user`)
        });
    }
    function handleRepo(){
        axios.get(date[12]).then(response =>{
        const repo = response.data;
        
        const reposName = []
        const created_at = []
        const description = []
        const html_url = []
        const id = []

    

        repo.map((rep) => {
            reposName.push(rep.name)
        })
        
        repo.map((rep)=>{
            created_at.push(rep.created_at)
        })

        repo.map((rep)=>{
            description.push(rep.description)
        })

        repo.map((rep)=>{
            html_url.push(rep.html_url)
        })
        
        repo.map((rep)=>{
            id.push(rep.id)
        })
        localStorage.setItem('repoName', JSON.stringify(reposName))
        localStorage.setItem('repoCreated_at', JSON.stringify(created_at))
        localStorage.setItem('repoDescription', JSON.stringify(description))
        localStorage.setItem('repoHtml_url', JSON.stringify(html_url))
        localStorage.setItem('repoId', JSON.stringify(id))
        history.push(`/user/repo`)
        })
        
    }
    return (
        <div className="containerSearch">
        <div className="search2">
            <Link to="/">
                <img className="imgLogo2"src={logoCRV} alt="logo"></img>
            </Link>
            <div className="containerWord">
                <form onSubmit={handleSearch}>  
                    <input id="searchRoute"type="search" placeholder="Digite o nome aqui" value = {usuario} className="input2" onChange={(event)=>{setUsuario(event.target.value)}}></input>
                    <button type="submit" className="butaoSearch2">
                        <img className="svgSearch2"src={search} alt="pesquisa"></img>
                    </button>
                </form>
            </div>
            <div className="dream"></div>
        </div>
        <div className="containerDados">
            <div className="containerName">
                <h1>{date[1]}</h1>
            </div>
            <div className="containerOthers">
                <img src= {date[0]} className="imgUser"></img>
                <ul className="containerHex">
                    <li className="dates">
                        <h2>{date[3]}</h2>
                        <p>Seguidores</p>
                    </li>
                    <li className="dates">
                        <h2>{date[4]}</h2>
                        <p>Seguindo</p>
                    </li>
                </ul>
                <ul className="containerHex">
                    <li onClick={handleRepo} className="dates">
                        <h2>{date[6]}</h2>
                        <p>Repositorios</p>
                    </li>
                    <li className="dates">
                        <h2>{date[8]}</h2>
                        <p>Gists</p>
                    </li>
                </ul>
                <button className="buttonGithub"><a target="_blank" href={date[5]}><p className="githubText">Github Perfil</p></a></button>
            </div>
        </div>
        </div>
    )
}