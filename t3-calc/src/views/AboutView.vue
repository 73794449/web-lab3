<template>
    <div>
    <main role="main">
        <section class="jumbotron text-center">
            <div class="container padding pt-3">
                <h1 class="jumbotron-heading">t3calc</h1>
                <p class="lead text-muted">
                    Converting from binary to decimal or if rrly base-X to base-Y, binary calculations, ascii converter,
                    bitwise calculations and just default calculator buttons
                </p>
                <img class="logo2" src="../assets/logo/icon.png" alt="">
            </div>
        </section>
    </main>
    <FooterComponent />
</div>
</template>

<script>
import FooterComponent from './FooterView.vue'

export default {
    name: 'AboutView',
    components: { FooterComponent},
    data() {
        return {};
    }
}
</script>