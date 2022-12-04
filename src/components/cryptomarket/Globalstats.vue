<template>
    <div class="globalstats-globalstats-wrapper">
        <div v-if="loading">
            Loading...
        </div>
        <div v-else class="globalstats-inner-wrapper">
            <div class="globalstats-inner-wrapper-left">
                <div class="globalstats-inner-wrapper-left-inner">
                    <div class="globalstats-inner-left">
                        <div>
                            <p class="globalstats-label-p">Vrednost Marketa(USD)</p>
                            <p> ${{
                                    globalStats.total_market_cap.usd.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                                        ",")
                            }}</p>
                        </div>
                        <div>
                            <p class="globalstats-label-p">Vrednost Marketa(BTC)</p>
                            <p>%{{
                                    globalStats.market_cap_percentage.btc.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                                        ",")
                            }}</p>
                        </div>
                        <div>
                            <p class="globalstats-label-p">Vrednost Marketa(ETH)</p>
                            <p>%{{
                                    globalStats.market_cap_percentage.eth.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                                        ",")
                            }}</p>
                        </div>
                    </div>
                    <div class="globalstats-inner-right">
                        <div>
                            <p class="globalstats-label-p">Volumen trgovanja</p>
                            <p>${{ globalStats.total_volume.usd.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                                    ",")
                            }}
                            </p>
                        </div>
                        <div>
                            <p class="globalstats-label-p">Vrednost marketa(24h/%)</p>
                            <p>%{{
                                    globalStats.market_cap_change_percentage_24h_usd.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                                        ",")
                            }}</p>
                        </div>
                        <div>
                            <p class="globalstats-label-p">Aktivnih valuta</p>
                            <p>{{
                                    globalStats.active_cryptocurrencies.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                                        ",")
                            }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="globalstats-inner-wrapper-right">
                <div class="globalstats-inner-wrapper-right-inner">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { setInterval } from 'timers/promises';

export default {
    data() {
        return {
            globalStats: [],
            loading: true,
            interval: null
        }
    },
    methods: {

        fetchGlobalStats: function () {
            const options = {
                method: 'GET'
            };
            fetch("http://localhost:9000/global_stats", options)
                .then(response => response.json())
                .then(response => { this.globalStats = response.data; this.loading = false; })
                .catch(err => console.error(err));

            console.log("fetch global data");
        },

        updateGlobalStats: function () {
            console.log("update global data");
            this.interval = setInterval(() => {
                this.fetchGlobalStats()
                console.log(this.globalStats);
            }, 120000);
        }

    },
    mounted() {
        this.fetchGlobalStats()
        this.updateGlobalStats()

    },
    unmounted() {
        console.log("global stats interval cleared");
        clearInterval(this.interval)
    }

}

</script>

<style>
.globalstats-globalstats-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.globalstats-inner-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;


}

.globalstats-inner-wrapper-right {
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 30vh;
    /* background-color: #676767; */
    border-radius: 20px;
    margin-bottom: 5%;
    box-shadow: 0px 20px 10px #171717;
    /* background-image: linear-gradient(#404040, #676767); */
    transition-duration: 0.5s;
}
.globalstats-inner-wrapper-right:hover{
    
    width: 70%;
    transition-duration: 0.5s;
}
.globalstats-inner-wrapper-right-inner {
    width: 100%;
    height: 30vh;
    background-image: linear-gradient(#404040, #676767);
    border-radius: 20px;
    box-shadow: inset 0 0 10px #171717;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.globalstats-inner-wrapper-left {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 30vh;
    background-color: #676767;
    /* padding: 0 20px; */
    border-radius: 20px;
    margin-bottom: 5%;
    box-shadow: 0px 20px 10px #171717;
    background-image: linear-gradient(#404040, #676767);
    transition-duration: 0.5s;
}
/* .globalstats-inner-wrapper-left:hover{
    
    width: 95%;
    transition-duration: 0.5s;
} */
.globalstats-inner-wrapper-left-inner {
    width: 100%;
    height: 30vh;
    background-image: linear-gradient(#404040, #676767);
    border-radius: 20px;
    box-shadow: inset 0 0 10px #171717;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.globalstats-inner-left {
    width: 40%;
    height: 30vh;
}

.globalstats-inner-right {
    width: 40%;
    height: 30vh;
}

.globalstats-inner-left div,
.globalstats-inner-right div {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    box-shadow: 0px 0px 0px #676767;

    /* border-bottom:1px solid black ; */
}

.globalstats-label-p {
    font-weight: bold;
    max-width: 10%;
}
</style>