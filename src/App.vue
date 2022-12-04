
<template>
  <Menu />
  <Statsbanner />
  <!-- <Sidenews /> -->
  <div class="app-app-wrapper">
    <div class="router-view-wrapper">

      <router-view />
    </div>
    <div class="app-app-wrapper-ads">
      <Sidenews />
    </div>
  </div>

</template>


<script>

import Menu from "./views/widgets/Menu.vue";
import Sidenews from "./views/widgets/Sidenews.vue";
import Statsbanner from "./views/widgets/Statsbanner.vue";
export default {
  components: { Menu, Sidenews, Statsbanner },
  methods: {
  
  },
  mounted() {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@200;300;400&display=swap');
.html,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
font-family: 'Anek Devanagari', sans-serif;
color:white;

  /* font-size: 16px; */
}

body {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #272727;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

}

.app-app-wrapper {
  width: 100%;
  display: flex;
  align-self: center;
  justify-self: center;
  flex-direction: row;
  position: relative;
  top: 5vh;
}

.app-app-wrapper-ads {
  position: relative;
  left: 3%;
  height: 100vh;
  width: 17%;
  align-self: flex-start;
  justify-self: flex-start;
  top: 0;
}

.router-view-wrapper {
  position: relative;
  left: 3%;
  width: 80%;
  align-self: flex-start;
  justify-self: flex-start;
}
</style>