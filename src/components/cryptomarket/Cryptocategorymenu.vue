<template>
    <div class="cryptocategorymenu-cryptocategorymenu-wrapper">
        <button  class="cryptocategorymenu-button" :disabled="propLoading" @click="sendSelectedCategory(category)" v-for="category in categories" :key="category.name">
            {{ category.name }}
        </button>
    </div>
</template>

<script>
export default {
    props:["propLoading"],
    data() {
        return {
            categories: [{ name: "Top Valute", id: "top-currencies", loading:true }, { name: "NFT", id: "non-fungible-tokens-nft", loading:true }, { name: "DeFi", id: "decentralized-finance-defi", loading:true }, { name: "Gaming", id: "gaming", loading:true }, { name: "Binance Valute", id: "binance-smart-chain", loading:true }, { name: "Solana Valute", id: "solana-ecosystem", loading:true }],

            // categorySelected: "",
            // categoryName:""

        }
    },
    methods:{
        sendSelectedCategory: function(category){
            // this.categorySelected = category.name;
            // this.ca

            console.log(category);
            this.$emit('categorySelected', category)
        }
    }
}
</script>

<style>
.cryptocategorymenu-cryptocategorymenu-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    /* height: 5vh; */
    background-color: #676767;
    box-shadow: 0px 20px 10px #171717;
    background-image: linear-gradient(#404040, #676767);
    border-radius: 20px;

}

.cryptocategorymenu-button {
    background: none;
    border: none;
    color: white;
    padding: 5px 30px;
    cursor: pointer;
    /* text-shadow:
      0 0 7px #7CF3A0,
      0 0 102px #7CF3A0,
      0 0 151px #7CF3A0; */

    /* border-radius: 50px; */
    font-size: 0.8rem;
}
.cryptocategorymenu-button:hover {
    background-color: #7CF3A0;
    color: #19202a;

    
}
.cryptocategorymenu-button.active {
    background-color: #7CF3A0;
}

</style>