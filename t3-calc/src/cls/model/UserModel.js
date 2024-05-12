const axios = require('axios')
export default class UserModel {
    constructor() {
        this.email = '';
        this.password = null;
        this.gender = '';
        this.dateOfBirth = null;
        this.status = 'Wait';
    }

    async register() {
        this.status = 'Wait';
        let password_verify;
        this.email = document.getElementById("email").value;
        this.password = document.getElementById("password").value;
        password_verify = document.getElementById("password-verify").value;
        this.dateOfBirth = document.getElementById("dateob").value;
        this.gender = document.getElementById("gender-select").value;
        if (this.password !== password_verify) { this.status = 'Recheck password and password verify'; }
        if (JSON.stringify(this.password).length - 2 < 8) { this.status = 'Password length must be more or equal to 8 symbols'; }
        if (JSON.stringify(this.email) == '') { this.status = 'Email is empty'; }
        if (JSON.stringify(this.dateOfBirth) === '""') { this.status = 'Date of birth is empty'; }
        if (this.status === 'Wait') {
            const resp = await axios.post("http://localhost:8082/api/users/create", { email: this.email, password: this.password, date: this.dateOfBirth, gender: this.gender }).then(function (response) {
                console.log(response);
                return response;
            }).catch((error) => {
                console.log(error);
                if (error.response) {
                    if(error.response.status == 400)
                        alert("HOW??? Direct API abuse");
                    else if (error.response.status == 500)
                        alert("Cannot create user, try use another email");
                    else 
                        alert(error.message);
                    }
            });
            if (resp != undefined) {
                if (resp.status == 200)
                    this.status = 'Done'
            }
        }
    }

    async login() {
        this.status = 'Wait';
        this.email = document.getElementById("email").value;
        this.password = document.getElementById("password").value;
        if (this.status === 'Wait') {
            const resp = await axios.post("http://localhost:8082/api/users/login", { email: this.email, password: this.password }).then(function (response) {
                console.log(response);
                return response;
            }).catch((error) => {
                console.log(error);
                if (error.response) {
                    if(error.response.status == 404)
                        alert("User not found");
                    else if (error.response.status == 401)
                        alert("Incorrect password");
                    else if (error.response.status == 500)
                        alert("Are users even exist?");
                    else 
                        alert(error.message);
                }
                alert(error.message);
            });
            if (resp != undefined) {
                if (resp.status == 200)
                    this.status = 'Login'
                localStorage.setItem("current-user", resp.data.id);
            }
        }
    }

    async select() {
        this.id = localStorage.getItem("current-user");
        const resp = await axios.get("http://localhost:8082/api/users/" + this.id).then(function (response) { console.log(response); return response; }).catch((error) => {
            alert('Cannot load profile info, possible hacking'); console.log(error); localStorage.removeItem("current-user");
        })
        if (resp != undefined) {
            if (resp.status == 200) {
                this.email = resp.data.email;
                this.password = resp.data.password;
                this.gender = resp.data.gender;
                this.dateOfBirth = resp.data.date;
            }
        }

    }

    async update() {
        this.id = localStorage.getItem("current-user");
        let possible_password = document.getElementById("password").value;
        if (JSON.stringify(possible_password).length - 2 < 8) { this.status = 'Password length must be more or equal to 8 symbols'; }
        if (this.status == 'Wait') {
            const resp = await axios.post("http://localhost:8082/api/users/update", { id: this.id, password: possible_password }).then(function (response) { console.log(response); return response; }).catch((error) => {
                alert('Cannot update profile info, possible hacking'); console.log(error); localStorage.removeItem("current-user");
            })
            if (resp != undefined) {
                if (resp.status == 200) {
                    this.email = resp.data.email;
                    this.password = resp.data.password;
                    this.gender = resp.data.gender;
                    this.dateOfBirth = resp.data.date;
                    this.status = "Updated";
                }
            }
        }

    }
}