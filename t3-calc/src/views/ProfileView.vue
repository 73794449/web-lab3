<template>
    <div>
        <main role="main">
        <section class="jumbotron text-center">
            <div class="container padding pt-3">
                <h1 class="jumbotron-heading">t3calc</h1>
                <p class="lead text-muted">
                    Welcome home!
                </p>
            </div>
        </section>
        <div class="container border">
            <div class="row">
                <div class="col">
                    Email
                </div>
                <div id="email-form" class="col">
                    @email.com
                </div>
            </div>
            <div class="row ">
                <div class="col">
                    Gender
                </div>
                <div id="gender-form" class="col">
                    Helicopter
                </div>
            </div>
            <div class="row ">
                <div class="col">
                    Date of birth
                </div>
                <div id="dateob-form" class="col">
                    09.07.2004
                </div>
            </div>
            <a>Password</a>
            <input id="password" type="password" class="form-control" placeholder="********" aria-label="********"
                aria-describedby="basic-addon1">
            <div class="container my-2 text-center">
                <button id="update-button" class="btn my-button-color">Change password</button>
            </div>
        </div>
    </main>
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
    name: 'ProfileView',
    components: { FooterComponent, },
    beforeMount()
    {
        let user = localStorage.getItem('current-user');
        if(user == null | user == 'null')
        {
            alert("Login first");
            //this.$router.push({ name: 'Home page' }).then(() => { this.$router.go(0) });    
        }
    },
    mounted()
    {
        controller.updateMe();
    }
    
}
</script>