import './App.css';

import React from 'react';

const{ DateTime, Interval } = require("luxon");

function Timer() {

    // Inicializa a data inicial do show e o momento que o site carrega
    // Usa a ferramenta DateTime da biblioteca "luxon"
    var dateStart = DateTime.local(2015, 11, 1, 0, 30);
    var now = DateTime.now();

    // Calcula o intervalo de tempo entre as duas datas
    // Usa a ferramenta Interval da biblioteca "luxon"
    var intervalo = Interval.fromDateTimes(dateStart, now);

    // Recebe a duração em minutos do intervalo
    var minutes = intervalo.length('minutes');

    // Calcula a quantidade aproximada de músicas (considerando cada música com 3m30s)
    var musicasTemp = Math.round(minutes/3.5);
    // Converte para uma string
    var musicas = musicasTemp.toLocaleString('pt-BR');

    // Calcula o número de saideras pedidas
    // Considera chamada de saidera a cada duas músicas, e que o show durou 90 minutos antes da primeira saidera
    var saiderasTemp = Math.round((minutes - 90)/7);
    var saideras = saiderasTemp.toLocaleString('pt-BR');

    // Calcula quanto tempo se passou desde o início do show
    // Usa o 'diff',que nos mostra anos, meses, dias e horas e transforma em um objeto para fácil obtenção dos dados
    const diference = now.diff(dateStart, ["years", "months", "days", "hours"]).toObject();

    // HTML do texto
    return (
        <div className="timerText">
            <h1 className="textBorder">Show infinito do Skank - Inter 2015</h1>
            <br/>
            <h2>O show do Skank no Inter 2015 tá rolando até hoje, mas quantas músicas e saideras já rolaram desde então?</h2>

            <h2 className="dataText">{musicas} músicas desde o início do show</h2>
            <div className="subText">Considerando aprox. 3m30s por música</div>

            <h2 className="dataText">{saideras} saideras</h2>
            <div className="subText">Considerando 2 músicas por "saidera" e que a primeira rolou após 1h30 depois do início do show</div>

            <h3 className="dataText">Se passaram {diference.years} anos, {diference.months} meses, {diference.days} dias e {Math.round(diference.hours)} horas desde o início do show</h3>

            <br/>
        </div>
    );


}

export default Timer;
