<template>
    <div>
        <main role="main">
            
            <section class="jumbotron text-center">
                <div class="container padding pt-3">
                    <h1 class="jumbotron-heading">t3calc</h1>
                    <p class="lead text-muted">
                        Time to calc.
                    </p>
                </div>
            </section>
            <section>
                <div class="container justify-content-center">
                    <div class="calculator card d-flex px-3 pt-2 shadow darker">
                        <a>CURRENT:</a>
                        <input id="cur-form" class="text" v-model="currentForm" readonly>
                        <a>DEC:</a>
                        <input id="dec-form" class="calculator-screen z-depth-1 text" v-model="decForm" readonly>
                        <a>HEX:</a>
                        <input id="hex-form" class="calculator-screen z-depth-1 text" v-model="hexForm" readonly>
                        <a>OCT:</a>
                        <input id="oct-form" class="calculator-screen z-depth-1 text" v-model="octForm" readonly>
                        <a>BIN:</a>
                        <input id="bin-form" class="calculator-screen z-depth-1 text" v-model="binForm" readonly>
                        <div class="container">
                            <div class="calculator-keys">
                                <div class="col text-center mb-3 my-3">
                                    <div class="col my-2 pt-2">
                                        <button  @click="clearButton(0)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="CE">CE</button>
                                        <button  @click="clearButton(1)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="C">C</button>
                                    </div>
                                    <div class="col my-2 pt-2">
                                        <button @click="logicalOperButton(0)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="AND">AND</button>
                                        <button @click="logicalOperButton(1)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="OR">OR</button>
                                        <button @click="logicalOperButton(2)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="XOR">XOR</button>
                                        <button @click="logicalOperButton(3)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="NOT">NOT</button>
                                    </div>
                                    <div class="col my-2">
                                        <button @click="operButton(0)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="↑">↑</button>
                                        <button @click="operButton(1)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="×">×</button>
                                        <button @click="operButton(2)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="÷">÷</button>
                                        <button @click="operButton(3)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="+">+</button>
                                        <button @click="operButton(4)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="-">-</button>

                                        <button @click="sqButton(5)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="(">(</button>
                                        <button @click="sqButton(6)" type="button"
                                            class="operator btn my-button-color btn-calculator" value=")">)</button>


                                    </div>
                                    <div class="col my-2">
                                        <button @click="letterButton(0)" type="button darker"
                                            class="operator btn my-button-color btn-calculator" value="A">A</button>
                                        <button @click="letterButton(1)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="B">B</button>
                                        <button @click="letterButton(2)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="C">C</button>
                                        <button @click="letterButton(3)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="D">D</button>
                                        <button @click="letterButton(4)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="E">E</button>
                                        <button @click="letterButton(5)" type="button"
                                            class="operator btn my-button-color btn-calculator" value="F">F</button>
                                    </div>
                                    <div class="col">
                                        <div class="col text-center mb-1">
                                            <button @click="numberButton(7)" type="button"
                                                class="btn my-button-color-num waves-effect btn-calculator"
                                                value="7">7</button>
                                            <button @click="numberButton(8)" type="button"
                                                class="btn my-button-color-num waves-effect btn-calculator"
                                                value="8">8</button>
                                            <button @click="numberButton(9)" type="button"
                                                class="btn my-button-color-num waves-effect btn-calculator"
                                                value="9">9</button>
                                        </div>
                                        <div class="col text-center mb-1">
                                            <button @click="numberButton(4)" type="button"
                                                class="btn my-button-color-num waves-effect btn-calculator"
                                                value="4">4</button>
                                            <button @click="numberButton(5)" type="button"
                                                class="btn my-button-color-num waves-effect btn-calculator"
                                                value="5">5</button>
                                            <button @click="numberButton(6)" type="button"
                                                class="btn my-button-color-num waves-effect btn-calculator"
                                                value="6">6</button>
                                        </div>
                                        <div class="col text-center mb-1">
                                            <button @click="numberButton(1)" type="button"
                                                class="btn my-button-color-num waves-effect btn-calculator"
                                                value="1">1</button>
                                            <button @click="numberButton(2)" type="button"
                                                class="btn my-button-color-num waves-effect btn-calculator"
                                                value="2">2</button>
                                            <button @click="numberButton(3)" type="button"
                                                class="btn my-button-color-num waves-effect btn-calculator"
                                                value="3">3</button>
                                        </div>
                                        <div @click="numberButton(0)" class="col text-center mb-1">
                                            <button type="button"
                                                class="btn my-button-color-num waves-effect btn-calculator"
                                                value="0">0</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <select @change="onChangeFormat" v-model="selectedForm" class="form-select mb-3" aria-label="Select to-base">
                                    <option value="HEX">HEX</option>
                                    <option value="DEC" selected>DEC</option>
                                    <option value="BIN">BIN</option>
                                </select>
                                <button @click="calculateButton" type="button" class="btn btn-primary mb-3">CALCULATE</button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </main>
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from './FooterView.vue'

import ControllerCalc from '../cls/controller/ControllerCalc.js';
import CalculatorModel from '../cls/model/CalculatorModel.js';
import CalculatorView from '../cls/view/CalculatorView.js';

let calculatorModel = new CalculatorModel();
let calculatorView = new CalculatorView(calculatorModel);

let controller = new ControllerCalc(calculatorModel, calculatorView);

export default {
    name: 'CalculatorView',
    components: { FooterComponent },
    data() {
        return {
            currentForm: '',
            binForm: '',
            octForm: '',
            decForm: '',
            hexForm: '',
            selectedForm: "DEC"
        }
    },
    beforeMount()
    {
        let user = localStorage.getItem('current-user');
        if(user == null)
        {
            alert("Login first");
            this.$router.push({ name: 'Home page' }).then(() => { this.$router.go(0) })  
        }
    },
    methods: {
        onChangeFormat()
        {
            controller.selectedModeChanged(this.selectedForm);
        },
        numberButton(i)
        {
            controller.digitButtonPressed(i);
        },
        letterButton(i)
        {
            controller.letterButtonPressed(i);
        },
        operButton(i)
        {
            controller.basicOperButtonPressed(i);
        },
        sqButton(i)
        {
            controller.roundsqButtonPressed(i);
        },
        clearButton(i)
        {
            controller.clearButtonPressed(i);
        },
        logicalOperButton(i)
        {
            controller.operButtonPressed(i);
        },
        calculateButton()
        {
            controller.calculateMe();
        }

    }
}
</script>