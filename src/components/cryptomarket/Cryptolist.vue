
<template>
    <Globalstats />
    <Cryptocategorymenu @categorySelected="fetchDataInCryptoList($event)" :propLoading="loading" />

    <div class="cryptolist-cryptolist-wrapper">
        <div v-if="loading">
            Loading...
        </div>
        <div class="cryptolist-v-else" v-else>
            <!-- ----------------------------------------------------------- list -->
            <div class="cryptolist-name-selected">
                {{ categoryName }}
            </div>
            <div class="cryptolist-label-for-list">
                <div>
                    <p>Valuta</p>
                </div>
                <div>
                    <p>value(usd)</p>
                </div>
                <div>
                    <p>mktcap</p>
                </div>
                <div>
                    <p>24/h(%)</p>
                </div>
                <div>
                    <p>7/d(%)</p>
                </div>
                <div>
                    <p>30/d(%)</p>
                </div>
                <div>
                    <p>Volumen trgovanja</p>
                </div>

            </div>

            <!-- ----------------------------------------------------------- list -->
            <!-- ----------------------------------------------------------- single crypto -->
            <router-link v-for="currency in editedData" :key="currency.id"
                :to="{ name: 'singlecurrency', params: { id: currency.id, currency: currency.id } }"
                class="cryptolist-single-currency">

                <div class="cryptolist-currency">
                    <div class="cryptolist-currency-first">
                        <p>{{ currency.market_cap_rank }}</p>
                        <p class="cryptolist-upercase">#{{ currency.symbol }} </p>
                    </div>
                    <div class="cryptolist-currency-second">
                        <img class="cryptolist-currency-logo" :src="currency.image" alt="">
                        <p><b>({{ currency.name }})</b></p>
                    </div>
                </div>
                <div>
                    <p>${{ currency.current_price }}</p>
                </div>
                <div>
                    <p>${{ currency.market_cap }}</p>
                </div>
                <div>
                    <p class="green" v-if="currency.colorClass24 == 'green'">+{{
                            currency.price_change_percentage_24h_in_currency
                    }}</p>
                    <p class="red" v-if="currency.colorClass24 == 'red'">{{
                            currency.price_change_percentage_24h_in_currency
                    }}</p>
                </div>
                <div>
                    <p class="green" v-if="currency.colorClass7 == 'green'">+{{
                            currency.price_change_percentage_7d_in_currency
                    }}</p>
                    <p class="red" v-if="currency.colorClass7 == 'red'">{{
                            currency.price_change_percentage_7d_in_currency
                    }}</p>
                </div>
                <div>
                    <p class="green" v-if="currency.colorClass30 == 'green'">+{{
                            currency.price_change_percentage_30d_in_currency
                    }}</p>
                    <p class="red" v-if="currency.colorClass30 == 'red'">{{
                            currency.price_change_percentage_30d_in_currency
                    }}</p>
                </div>
                <div>
                    <p>${{ currency.total_volume }}</p>
                </div>

            </router-link>
            <!-- ----------------------------------------------------------- single crypto -->


        </div>
    </div>
</template>

<script>

import Cryptocategorymenu from './Cryptocategorymenu.vue'
import Globalstats from './Globalstats.vue'

export default {
    components: { Cryptocategorymenu, Globalstats },

    data() {
        return {
            dataForCryptoList: [],
            loading: true,
            categorySelected: "",
            interval: null,
            showPerPage: 100,
            categoryName: ""


        }
    },
    methods: {

        fetchDataInCryptoList: function (event) {



            //if we say this.categorySelected = event 
            //it will pass the data by refferance and changing this.categorySelected we would change event obj? New way to change emited data in parent component wohooooo!!!!!
            this.categorySelected = Object.assign({}, event);

            if (this.categorySelected.loading == true) {
                this.loading = true
                this.categorySelected.loading = false
            }
            this.categoryName = this.categorySelected.name


            let path = "http://localhost:9000/crypto_data/"
            path += event.id + "/" + this.showPerPage


            const options = {
                method: 'GET'
            };
            fetch(path, options)
                .then(response => response.json())
                .then(response => {
                    this.dataForCryptoList = response
                    this.loading = false;
                    console.log(response);
                })
                .catch(err => console.error(err));
            //    console.log("fetch crypto data"); 
        },

        updateDataInCryptoList: function () {
            // console.log("update data in crypto list");
            this.interval = setInterval(() => {
                this.fetchDataInCryptoList(this.categorySelected)
            }, 30000);
        },
       

    },

    mounted() {
        this.fetchDataInCryptoList({ id: "top-currencies", name: "Top Valute", loading: false });
        this.updateDataInCryptoList()
    },
    unmounted() {
        // console.log("cryptolist interval cleared");
        clearInterval(this.interval)
    },
    computed: {
        editedData: function () {
            let newArr = []
            for (let i = 0; i < this.dataForCryptoList.length; i++) {
                // this.dataForCryptoList[i].current_price = this.dataForCryptoList[i].current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                this.dataForCryptoList[i].price_change_percentage_7d_in_currency = parseFloat(this.dataForCryptoList[i].price_change_percentage_7d_in_currency).toFixed(2)
                this.dataForCryptoList[i].price_change_percentage_24h_in_currency = parseFloat(this.dataForCryptoList[i].price_change_percentage_24h_in_currency).toFixed(2);
                this.dataForCryptoList[i].price_change_percentage_30d_in_currency = parseFloat(this.dataForCryptoList[i].price_change_percentage_30d_in_currency).toFixed(2);
                this.dataForCryptoList[i].market_cap = this.dataForCryptoList[i].market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                this.dataForCryptoList[i].total_volume = this.dataForCryptoList[i].total_volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

                if (this.dataForCryptoList[i].price_change_percentage_24h_in_currency.charAt(0) == "-") {
                    this.dataForCryptoList[i].colorClass24 = "red"
                } else {
                    this.dataForCryptoList[i].colorClass24 = "green"
                }


                if (this.dataForCryptoList[i].price_change_percentage_7d_in_currency.charAt(0) == "-") {
                    this.dataForCryptoList[i].colorClass7 = "red"
                } else {
                    this.dataForCryptoList[i].colorClass7 = "green"
                }

                if (this.dataForCryptoList[i].price_change_percentage_30d_in_currency.charAt(0) == "-") {
                    this.dataForCryptoList[i].colorClass30 = "red"
                } else {
                    this.dataForCryptoList[i].colorClass30 = "green"
                }

                newArr.push(this.dataForCryptoList[i])
            }
            return newArr
        }
    }



}

</script>

<style>
.cryptolist-cryptolist-wrapper {
    margin-top: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.cryptolist-v-else {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
}

.cryptolist-name-selected {
    position: relative;
}

.cryptolist-label-for-list {
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: 0.9rem;
    color: #1C4670;
    position: sticky;
    top: 5vh;
    background-color: #676767;
    padding-left: 20px;
    /* border-radius: 20px; */


}

.cryptolist-name-selected {
    position: relative;
    left: 0;
}

.cryptolist-label-for-list div {
    min-width: 100px;
    position: sticky;
    font-size: 0.8rem;
}

.cryptolist-single-currency {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid black;
    cursor: pointer;
    font-size: 0.7rem;
    padding-left: 20px;
}

.cryptolist-single-currency:hover {
    background-color: #676767;
}


.cryptolist-single-currency div {
    min-width: 100px;
    display: flex;
    align-items: center;
    max-width: 100px;
    line-break: anywhere;
}

.cryptolist-currency {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.cryptolist-currency-first {
    display: flex;

}

.cryptolist-currency-second {
    display: flex;
}


.cryptolist-upercase {
    text-transform: uppercase;
    margin-right: 5px;
    color: darkturquoise;
}

.cryptolist-currency-logo {
    width: 20px;
    height: 20px;
    max-width: 100%;
    max-height: 100%;
}

/* .cryptolist-currency-logo-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
} */

.green {
    color: green;
}

.red {
    color: red;

}

a {
    text-decoration: none;
    color: black;
}
</style>

