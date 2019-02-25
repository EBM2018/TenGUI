import React from 'react';

import './ButtonLayout.css';

import PropTypes from 'prop-types';
//import ListSpeed from './ListSpeed/ListSpeed.js';
//import ListAccuracy from './ListAccuracy/ListAccuracy.js';

import {fct_Student_question,fct_Student_speed_up,fct_Student_speed_down,fct_Student_not_understand,fct_Student_stop} from '../../../service/Fishtank/Fishtank.js';

export default class ButtonLayout extends React.PureComponent {

    speedUp = () => {
        console.log(1);
    };
    speedDown = () => {
        console.log(2);
    };
    dontUnderstand = () => {
        console.log(3);
    };
    plsStop = () => {
        console.log(4);
    };

    render() {
        return (
            <d>
                <div id='ButtonLayoutContainer'>
                    <button id='AskQuestion' onClick={fct_Student_question}>
                        Posez votre question
                    </button>


                    <b className="dropdown">
                        <button className="dropbtn"> Changement de Rythme</button>
                        <c className="dropdown-content">
                            <a href="#" onClick={fct_Student_speed_up}>Demander d'aller plus vite</a>
                            <a href="#" onClick={fct_Student_speed_down}>Demander d'aller moins vite</a>
                            <a href="#" onClick={fct_Student_not_understand}>Je ne comprends plus rien</a>
                            <a href="#" onClick={fct_Student_stop}>Demander une pause</a>
                        </c>
                    </b>


                    <b className="dropdown">
                        <button className="dropbtn"> Précision
                        </button>
                        <c className="dropdown-content">
                            <a href="#" onClick={this.speedUp}>Demander d'aller plus vite 2</a>
                            <a href="#" onClick={this.speedDown}>Demander d'aller moins vite 2</a>
                            <a href="#" onClick={this.dontUnderstand}>Je ne comprends plus rien 2</a>
                            <a href="#" onClick={this.plsStop}>Demander une pause 2</a>
                        </c>
                    </b>

                </div>
                <div id={'clean'}></div>
            </d>
        );
    }
}