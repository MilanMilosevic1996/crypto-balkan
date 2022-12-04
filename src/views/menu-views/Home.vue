<template>
    <div class="home-home-wrapper">
        <Welcome></Welcome>
    </div>
</template>

<script>
import Welcome from "../../components/home-components/Welcome.vue"
export default {
    components: { Welcome },
    mounted() {
        let serverData = fetch("http://localhost:9000/crypto_data", {
            // mode: 'no-cors',
            method: "GET"
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.log(error))

    }
}
</script>

<style>

</style>