<template>
    <div class="welcome-welcome-wrapper">
        <div class="welcome-welcome-box">
            <h1>
                Novi ste u kripto svetu?
            </h1>
            <h2>
                Zelite li da naucite vise o kriptovalutama i blockchainu?
            </h2>
            <p>
                Pogledatjte vise...
            </p>
            <div class="buttons">
                <router-link :to="{ name: 'cryptopedia' }">Cryptopedia</router-link> |
                <router-link :to="{ name: 'begginersguide' }">Begginers Guide</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.welcome-welcome-wrapper {
    position: relative;
    background-color: green;
    width: 100%;
    align-self: flex-start;
    justify-self: flex-start;
}


</style>