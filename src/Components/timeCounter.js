import './../App.css';

import React, { useEffect, useState } from 'react';

const{ DateTime, Interval } = require("luxon");

function Timer() {

    // TODO: Atualizar para que comece imediatamente

    const [musicas, setMusicas] = useState(0);
    const [saideras, setSaideras] = useState(0);
    const [diference, setDiference] = useState(0);

    useEffect(() => {
        const interval_id = setInterval(() => {
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
            setMusicas(musicas => musicasTemp.toLocaleString('pt-BR'));

            // Calcula o número de saideras pedidas
            // Considera chamada de saidera a cada duas músicas, e que o show durou 90 minutos antes da primeira saidera
            var saiderasTemp = Math.round((minutes - 90)/7);
            setSaideras(saideras => saiderasTemp.toLocaleString('pt-BR'));

            // Calcula quanto tempo se passou desde o início do show
            // Usa o 'diff',que nos mostra anos, meses, dias e horas e transforma em um objeto para fácil obtenção dos dados
            setDiference(diference => now.diff(dateStart, ["years", "months", "days", "hours", "minutes", "seconds"]).toObject());
        }, 1000);

        return () => clearInterval(interval_id);
    }, )

    // HTML do texto
    return (
        <div className="timerText">
            {/* Header */}
            <h1 className="textBorder">Show infinito do Skank - Inter 2015</h1>
            <br/>
            <h2>O show do Skank no Inter 2015 tá rolando até hoje, mas quantas músicas e saideras já rolaram desde então?</h2>

            {/* Quantidade de músicas tocadas */}
            <h2 className="dataText">{musicas} músicas desde o início do show</h2>
            <div className="subText">Considerando aprox. 3m30s por música</div>

            {/* Quantidade de saideras pedidas */}
            <h2 className="dataText">{saideras} saideras</h2>
            <div className="subText">Considerando 2 músicas por "saidera" e que a primeira rolou após 1h30 depois do início do show</div>

            {/* Tempo desde o início do show */}
            <h3 className="dataText">Se passaram {diference.years} anos, {diference.months} meses, {diference.days} dias, {diference.hours} horas, {diference.minutes} minutos e {Math.round(diference.seconds)} segundos desde o início do show</h3>
            <div className="subText">Considerando que o show começou às 00h30 do dia 01/11/2015</div>

            <br/>
        </div>
    );


}

export default Timer;
