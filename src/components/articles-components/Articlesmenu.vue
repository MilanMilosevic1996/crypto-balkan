<template>
    <div class="articlesmenu-articlesmenu-wrapper">
        <div class="articlesmenu-upper-text">
            <h1>Articles Page</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus illo quia neque, enim vel, similique
                ipsa rem, porro suscipit doloremque reiciendis! Nisi exercitationem asperiores atque molestias.
                Laboriosam eveniet incidunt fuga cumque minus nesciunt esse quisquam hic, modi, tenetur, magni illo
                magnam possimus ipsum et iure consequatur quod aliquid dignissimos ratione consequuntur inventore
                placeat pariatur architecto! Tempore, facilis nam delectus nobis placeat fugiat rem, autem molestiae
                possimus magni quaerat provident similique dolor commodi cumque. Laborum doloribus nostrum, deserunt qui
                aspernatur commodi necessitatibus dicta, illum accusantium et quam.</p>
        </div>
        <div class="articlesmenu-below-menu">
            <div class="articlesmenu-menu-item">
                <button @click="changeCategory('popular')">Popular</button>
            </div>
            <div class="articlesmenu-menu-item">
                <button @click="changeCategory('latest')">Latest</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedArticlesCategory: "popular"
        }
    },
    methods: {
        changeCategory: function (category) {
            this.selectedArticlesCategory = category
            this.$emit('selectedArticlesCategory', category)
        }
    }
}
</script>

<style>
.articlesmenu-articlesmenu-wrapper {
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.articlesmenu-upper-text {
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.articlesmenu-upper-text h1{
margin-bottom: 20px;
margin-top: 10px;

}
.articlesmenu-below-menu {
    display: flex;
    width: 100%;
    height: 5vh;
    justify-content: space-evenly;
    margin: 5vh 0;
}

.articlesmenu-menu-item button{
    border: none;
    cursor: pointer;
    background-color: cadetblue;
    width: 100px;
    height: 100%;
    border-radius: 10px;
    
}
</style>