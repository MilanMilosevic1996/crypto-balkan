<template>
    <div class="statsbanner-statsbanner-wrapper">

        <div class="statsbanner-statsbanner-inner-wrapper" v-if="loading == false">
            <div class="statsbanner-top-currencies">
                <router-link :to="{ name: 'cryptomarket' }">Top currencies:</router-link>
            </div>
            <div v-for="el in statsBannerRenderData" :key="el.id" class="statsbanner-single-currency"
                :style="{ left: el.left }">
                <div class="statsbanner-single-currency-left">
                    <img class="statsbanner-img" :src="el.image" alt="">
                    <p>
                        {{ el.symbol }}
                    </p>
                </div>
                <div class="statsbanner-single-currency-right">
                    <p>
                        <b>$</b>{{ el.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                    </p>
                    <p>

                        <b>24h/% </b> {{ parseFloat(el.price_change_percentage_24h_in_currency).toFixed(2) }}
                    </p>
                </div>

            </div>
        </div>
        <div v-else>
            loading...
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            statsInterval: null,
            statsBannerData: [],
            loading: true,
            moveIfDataIsRendered: false,
            initialData: [],

            movingInterval: null,
            pixelsToMove: -1,
            currentLeftposition: 0,
            whichToMove: 0
        }
    },
    methods: {
        fetchStatsBannerData: function () {
            let path = "http://localhost:9000/crypto_data/top-currencies/100"
            const options = {
                method: 'GET'
            };
            fetch(path, options)
                .then(response => response.json())
                .then(response => {
                    this.initialData = response
                    this.loading = false;
                })
                .catch(err => console.error(err));
            // console.log("fetch crypto data");
        },
        updateDataStatsBanner: function () {
            // console.log("interval started in stats banner");
            this.statsInterval = setInterval(() => {
                this.fetchStatsBannerData()
            }, 120000);
        },

        movingStatsBanner: function () {
            // this.statsBannerData = this.statsBannerRenderData;
            // console.log(this.statsBannerData);
            // console.log(this.statsBannerData.length);


            setInterval(() => {
                // console.log(this.currentLeftposition);
                if (this.currentLeftposition == parseInt(-200)) {
                    // let tempData = this.statsBannerData[0];
                    // this.statsBannerData.shift()
                    // this.statsBannerData.push(tempData)
                    this.statsBannerData[this.whichToMove].left = "1800px"
                    // console.log(this.whichToMove);
                    this.whichToMove = this.whichToMove + 1
                    if (this.whichToMove == 9) {
                        this.whichToMove = 0
                    }
                    this.currentLeftposition = 0
                }
                for (let i = 0; i < this.statsBannerData.length; i++) {
                    this.statsBannerData[i].left = parseInt(this.statsBannerData[i].left) + this.pixelsToMove + "px"

                }

                this.currentLeftposition = this.currentLeftposition + this.pixelsToMove;


            }, 20);

        },

    },
    computed: {
        statsBannerRenderData: function () {
            let newArr = []

            if (this.initialData.length > 0 && this.statsBannerData.length > 0) {
                // console.log("data postoji u oba");
                for (let i = 0; i < this.initialData.length; i++) {
                    if (i == 10) {
                        break;
                    } else {
                        this.initialData[i].left = this.statsBannerData[i].left + "px";
                        newArr.push(this.initialData[i])
                    }
                }
                this.statsBannerData = newArr
            } else {
                if (this.statsBannerData.length) {
                    // console.log("pitaj boga sta se desava");

                } else {
                    // console.log(this.statsBannerData.length);
                    // console.log("data ne postoji u stats banner");
                    // console.log(this.initialData);
                    let positionLeft = 0;
                    for (let i = 0; i < this.initialData.length; i++) {
                        if (i == 10) {
                            break;
                        } else {
                            this.initialData[i].left = positionLeft + "px";
                            positionLeft = positionLeft += 200;
                            newArr.push(this.initialData[i])
                        }
                        this.statsBannerData = newArr
                    }
                    // console.log(newArr.length);
                    positionLeft = 0
                }

            }
            // if (this.statsBannerData.length > 10) {
            //     console.log("computed");
            //     if (this.statsBannerData.length) {

            //     }
            // }
            // else {
            //     newArr = this.statsBannerData
            //     console.log("kurcina ko kuca");
            // }


            try {
                // console.log("try");
                return newArr
            } finally {
                // console.log("finally");
                this.moveIfDataIsRendered = true
            }
        }
    },
    mounted() {
        this.fetchStatsBannerData()
        this.updateDataStatsBanner()
    },
    unmounted() {
        // console.log("interval cleared");
        clearInterval(this.statsInterval)
    },
    watch: {
        moveIfDataIsRendered: function () {
            // console.log("Data changed and ready to render");
            this.movingStatsBanner()

        }
    }
}



</script>

<style>
.statsbanner-statsbanner-wrapper {
    width: 100%;
    height: 5vh;
    position: fixed;
    top: 0vh;
    z-index: 1;
    background-color: #272727;
    /* box-shadow: 0px 1px 50px #676767; */
    /* border-bottom: 1px solid#31ED31; */

}

.statsbanner-statsbanner-inner-wrapper {
    width: 105%;
    height: 5vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.statsbanner-top-currencies {
    background-color: #272727;
    width: 200px;
    height: 5vh;
    border-radius: 0px 20px 20px 0px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.statsbanner-top-currencies a {
    font-size: 0.8rem;
    color: white;
}

.statsbanner-top-currencies a:hover {
    color: white;
}

.statsbanner-single-currency {
    min-width: 200px;
    widows: 200px;
    height: 100%;
    border-right: 1px solid black;
    position: absolute;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: row; */
}

.statsbanner-single-currency-left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

}

.statsbanner-single-currency-left p {
    font-size: 0.8rem;
    text-transform: uppercase;
}

.statsbanner-single-currency-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    flex-direction: column;
}

.statsbanner-single-currency-right p {
    font-size: 0.7rem;
    color: #31ED31;

}

.statsbanner-single-currency-right p b {
    font-size: 0.7rem;
}

.statsbanner-img {
    max-width: 20px;
    max-height: 20px;
}
</style>