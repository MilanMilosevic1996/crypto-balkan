<template>
    <div class="currencychart-currencychart-wrapper">
        <canvas class="currencychart-myCanvas" id="myChart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {

    props: ["chartData"],
    data() {
        return {
            values: ""
        }
    },
    methods: {



    },
    mounted() {
        this.chartData.prices = this.chartData.prices.filter((el, index)=>{
            if(index % 5 == 0){
                return el;
            }
        });
        this.chartData.market_caps = this.chartData.market_caps.filter((el, index)=>{
            if(index % 5 == 0){
                return el;
            }
        });
        this.chartData.total_volumes = this.chartData.total_volumes.filter((el, index)=>{
            if(index % 5 == 0){
                return el;
            }
        });
        this.values = this.chartData;
        const ctx = document.getElementById('myChart');


        let newArrOfLabels = []
        let newArrOfData = []
        for (let i = 0; i < this.values.prices.length; i++) {
            newArrOfLabels.push(new Date(this.values.prices[i][0]).toString().slice(3, 15))
            newArrOfData.push(this.values.prices[i][1])
            console.log(this.values.prices[i][1].toString());
        }
        console.log(newArrOfLabels);
        console.log(newArrOfLabels);
        //line chart data
        var data = {
            labels: newArrOfLabels,
            datasets: [
                {
                    label: "Price In the period",
                    data: newArrOfData,
                    backgroundColor: "blue",
                    borderColor: "#85D1DF",
                    borderWidth:1,
                    lineTension: 0,
                    radius: 0.1,
                    backgroundColor: "rgba(76, 175, 80, 0.3)",
                    fill: true,
                    
                },
        
            ]
        };
        var options = {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            normalized: true,
            animation: true
,        spanGaps: true // enable for all datasets
,
showLine: true // disable for all datasets
,
            
            scales: {
                x: {
                    display: true,
                    title: {
                        display: false,
                        text: 'Month',
                        labels:false
                 
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Value'
                    },
          
                }

            },
      
        };

        //create Chart class object
        var chart = new Chart(ctx, {
            type: "line",
            data: data,
            options: options
        });

    }

}
</script>

<style>
.currencychart-currencychart-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 100%;
    font-size: 0.6rem;
    /* background-color: cadetblue; */
}

canvas {
    font-size: 0.3rem;
}

@media only screen and (max-width: 1000px) {
    /* .currencychart-currencychart-wrapper {} */
}

/* .currencychart-myCanvas {} */
</style>