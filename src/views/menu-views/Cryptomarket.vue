<template>
    <div class="cryptomarket-cryptomarket-wrapper">
        {{ coinIdFromUrl }}

        <Bigbanner />
        <Cryptolist v-if="coinIdFromUrlParent"  :coinIdFromUrl="coinIdFromUrlParent" />
    </div>

</template>

<script>
import Bigbanner from '../../components/cryptomarket/Bigbanner.vue'
import Cryptolist from '../../components/cryptomarket/Cryptolist.vue'
export default {
    components: { Bigbanner, Cryptolist },

    data() {
        return {
            coinIdFromUrlParent: ""

        }
    },
    methods: {
        getSelectedCryptoName: function () {
            console.log(this.$route.params.id);
        },


    },
    mounted() {

        this.coinIdFromUrlParent = this.$route.params.id
    },
    updated() {
        this.coinIdFromUrlParent = this.$route.params.id
    }

}
</script>

<style>
.cryptomarket-cryptomarket-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>