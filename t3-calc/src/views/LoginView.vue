<template>
    <div>
    <section class="jumbotron text-center">
        <div class="container padding pt-3">
            <h1 class="jumbotron-heading">Login</h1>
            <p class="lead text-muted">
                Enter your e-mail and password
            </p>
        </div>
    </section>
    <div class="container">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <div class="container pr-1">
                    <span class="input-group-text my-button-color" id="basic-addon1">E-mail</span>
                </div>
            </div>
            <input id="email" autocomplete="on" type="text" class="form-control" placeholder="example@example.com"
                aria-label="example@example.com" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <div class="container pr-1">
                    <span class="input-group-text my-button-color" id="basic-addon1">Password</span>
                </div>
            </div>
            <input id="password" type="password" class="form-control" placeholder="********" aria-label="********"
                aria-describedby="basic-addon1">
        </div>
        <div class="text-center">
            <button @click="goLogin" type="button" class="btn my-button-color">Login</button>
        </div>
    </div>
    <FooterComponent />
</div>
</template>

<script>
import ControllerUser from '../cls/controller/ControllerUser.js'
import UserModel from '../cls/model/UserModel.js'
import UserView from '../cls/view/UserView.js'
import FooterComponent from './FooterView.vue'

let userModel = new UserModel();
let userView = new UserView(userModel);
let controller = new ControllerUser(userModel,userView);

export default {
    name: 'LoginView',
    components: {
        FooterComponent,
    },
    methods: {
        async goLogin() { 
            await controller.loginMe(this);
        }
    }
};
</script>