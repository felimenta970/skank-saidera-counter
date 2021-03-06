import './App.css';

import React from 'react';

const{ DateTime, Interval, Duration } = require("luxon");

function Timer() {


    var dateStart = DateTime.local(2015, 11, 1, 0, 30);
    var now = DateTime.now();

    var intervalo = Interval.fromDateTimes(dateStart, now);

    var minutes = intervalo.length('minutes');

    var musicasTemp = Math.round(minutes/3.5);
    var musicas = musicasTemp.toLocaleString('pt-BR');

    var saiderasTemp = Math.round(minutes/7) - 90;
    var saideras = saiderasTemp.toLocaleString('pt-BR');

    const diference = now.diff(dateStart, ["years", "months", "days", "hours"]).toObject();

    
    // Duração

    console.log(diference);


    
    return (
        <div className="App">
        <h1>Skank show infinito</h1>
        <br/>
        <h2>Já rolaram aproximadamente {musicas} músicas desde o início do show</h2>
        <h2>Já pediram aproximadamente {saideras} saideras</h2>
        <h3>Se passaram {diference.years} anos, {diference.months} meses, {diference.days} dias e {Math.round(diference.hours)} horas desde o início do show</h3>
        </div>
    );


}

export default Timer;
