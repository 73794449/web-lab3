<template>
    
        <div>
            <main role="main">
                <NavbarComponent logon="false" active="Home" />
                <section class="jumbotron text-center">
                    <div class="container padding pt-3">
                        <h1 class="jumbotron-heading">t3calc</h1>
                        <p class="lead text-muted">
                            Programming calculator that can easily convert values and make fast calculations.
                        </p>
                    </div>
                </section>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <CardComponent cardTitle="What is it?" cardSubtitle="Just laboratory work"
                                cardText="Calculator if rrly" buttonText="Go register" register="true" />
                            <CardComponent cardTitle="Already registered?" cardSubtitle="Just login" cardText="Right now!"
                                buttonText="Go login" register="false" />
                        </div>
                        <div class="col-sm text-center">
                            <img src="../assets/animations/calc.gif" class="rounded  maingif">
                        </div>
                    </div>
                </div>
            </main>
        </div>
    
    <FooterComponent />
</template>


<script>
// @ is an alias to /src
import CardComponent from '../views/CardView.vue';
import FooterComponent from './FooterView.vue'
export default {
    name: 'HomeView',
    components: { FooterComponent, CardComponent },
};
</script>

<style>

</style>