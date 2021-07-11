import React, { useEffect, useState } from 'react'
import axios from 'axios';
import logoCRV from './assets/logoCRV.svg'
import { Link } from 'react-router-dom';
import './assets/style.css'


export default function Repos(){
    let contador = 0;
    const [repoName, setRepoName] = useState([])
    const [created, setCreated] = useState([])
    const [description, setDescription] = useState([])
    const [html, setHtml] = useState([])
    const [id, setId] = useState([])
    const [name,setName] = useState([])
    
   
    
    useEffect(() =>{
        let dados = localStorage.getItem('repoName');
        dados = JSON.parse(dados);
        setRepoName(dados);
    },[])

    useEffect(async() =>{
        let dados = await localStorage.getItem('repoCreated_at');
        dados = await JSON.parse(dados);
        let dadosTratados = dados.map((e) => e.substring(0,10))
        setCreated(dadosTratados);
        
        
    },[])

    useEffect(() =>{
        let dados = localStorage.getItem('repoDescription');
        dados = JSON.parse(dados);
        setDescription(dados);
    },[])

    useEffect(() =>{
        let dados = localStorage.getItem('repoHtml_url');
        dados = JSON.parse(dados);
        setHtml(dados);
    },[])

    useEffect(() =>{
        let dados = localStorage.getItem('repoId');
        dados = JSON.parse(dados);
        setId(dados);
    },[])

    
    
    useEffect(() =>{
        let dados = localStorage.getItem('dates');
        dados = JSON.parse(dados);
        setName(dados);
    },[])  


    return (
        <>
        <div className="tudoCentro">
            <header>
                <Link to="/User">
                    <img className="imgLogo2"src={logoCRV} alt="logo"></img>
                </Link>
                <div className="dream"></div>
                <div className="dream"></div>
            </header>
            <div className="center">
                <div className="infGeral">
                    <div className="dream2">
                        <h1 className="titleRep">Repositorios</h1>

                    </div>
                    
                    <div className="dream2">
                        <p>Projetos que <span>{name[1]}</span> vinculou ao GitHub foram:</p>
                    </div>
                </div>
                <ul className="Repo">
                    {repoName.map(rep => {
                        contador = contador + 1
                        console.log(html[contador-1])
                        return(
                        <li className="listRepo">
                                <p className="dateRepo">{created[contador-1]}</p>
                                <div className="infRepo">
                                <h2 className="titleRepo"><span>{rep}</span></h2>
                                <p className="descriptionRepo">{description[contador-1]}</p>
                                <p><span>ID: {id[contador-1]}</span></p>
                            </div>
                            <button className="repoButton"><a target="_blank" href={html[contador-1]}><p className="textGit">Github</p></a></button>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    );
}