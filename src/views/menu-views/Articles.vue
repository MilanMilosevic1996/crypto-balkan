<template>
    <div class="articles-articles-wrapper">
        <!-- <div class="articles-header">
        </div> -->
        <Articlesmenu @selectedArticlesCategory="fetchNewArticles($event)"/>
        <Articleexchange />
        <Articleslist />
    </div>
</template>

<script>
import Articlesmenu from '../../components/articles-components/Articlesmenu.vue'
import Articleslist from '../../components/articles-components/Articleslist.vue'
import Articleexchange from '../../components/articles-components/Articleexchanges.vue'
export default {
    components:{Articlesmenu,Articleslist,Articleexchange},
    data(){
        return{
            selectedArticlesCategory:""
        }
    },
    methods:{
        fetchNewArticles: function(categorySelected){
        
    }

    }
   
}
</script>

<style>
.articles-articles-wrapper{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
}
/* .articles-header{
    height: 30vh;
    background-color: cadetblue;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
} */
</style>