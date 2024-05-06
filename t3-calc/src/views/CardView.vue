<template>
    <div class="container pb-3">
        <div class="card text-center shadow my-card-color">
            <div class="card-header my-card-header-color">
                {{ cardTitle }}
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ cardSubtitle }}</h5>
                <p class="card-text">{{ cardText }}</p>
                <a class="btn my-button-color" @click="goToRegister">{{ buttonText }}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardComponent',
    props : ['cardTitle', 'cardSubtitle', 'cardText', 'buttonText','register']  ,
    methods: {
        goToRegister() {
            if (this.register == 'true') {
                this.$router.push({name: 'Register page'});
            } else {
                this.$router.push({name: 'Login page'});
            }
        },
    },
    

};
</script>
