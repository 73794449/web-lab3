<template>
    <div>
            <section class="jumbotron text-center">
            <div class="container padding pt-3">
                <h1 class="jumbotron-heading">Register</h1>
                <p class="lead text-muted">
                    Enter e-mail, password, gender and date of birth
                </p>
            </div>
        </section>
        <div class="container pr-1 pl-1">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="container pr-1">
                        <span class="input-group-text my-button-color" id="basic-addon1">E-mail</span>
                    </div>
                </div>
                <input id="email" type="text" class="form-control" placeholder="example@example.com"
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
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="container pr-1">
                        <span class="input-group-text my-button-color" id="basic-addon1">Password repeat</span>
                    </div>
                </div>
                <input id="password-verify" type="password" class="form-control" placeholder="********" aria-label="********"
                    aria-describedby="basic-addon1">
            </div>
            <div class="mb-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="container pr-1">
                            <span class="input-group-text my-button-color" id="basic-addon1">Gender</span>
                        </div>
                    </div>
                    <select id="gender-select" class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3" selected>Helicopter</option>
                    </select>

                </div>

            </div>
            <div class="mb-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="container pr-1">
                            <span class="input-group-text my-button-color" id="basic-addon1">Date of birth</span>
                        </div>

                    </div>
                    <input id="dateob" class="form-control" type="date" />
                </div>
            </div>
        </div>
        <div class="text-center">
            <button @click=goRegister id="register-button" type="button" class="btn my-button-color">Login</button>
        </div>
        <FooterComponent/>
    </div>
</template>

<script>
import FooterComponent from './FooterView.vue'
import ControllerUser from '../cls/controller/ControllerUser.js'
import UserModel from '../cls/model/UserModel.js'
import UserView from '../cls/view/UserView.js'

let userModel = new UserModel();
let userView = new UserView(userModel);

let controller = new ControllerUser(userModel, userView);

export default {
  name: 'RegisterView',
  components: {
    FooterComponent,
  },
  methods: {
        goRegister() { 
            controller.registerMe(this);
        }
    }
};
</script>