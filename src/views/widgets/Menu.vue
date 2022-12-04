<template>
  <div class="menu-menu-wrapper">
    <nav>
      <router-link to="/">Home</router-link> 
      <router-link :to="{ name: 'articles' }">Articles</router-link> 
      <router-link :to="{ name: 'news' }">News</router-link> 
      <router-link :to="{ name: 'explained' }">Explained</router-link> 
      <router-link :to="{ name: 'cryptomarket' , params: { id: 1} }">Crypto Market</router-link> 
      <router-link :to="{ name: 'exchanges' }">Exchanges</router-link> 
      <router-link :to="{ name: 'cryptopedia'}">Cryptopedia</router-link> 
      <router-link :to="{ name: 'begginersguide' }">Begginers Guide</router-link> 
    </nav>
  </div>

</template>

<script>
export default {

}
</script>

<style>
.menu-menu-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #31ED31;
  background-color: greenyellow;
  background-color: aliceblue;
  background-color: #ED2461;
  background-color: darkturquoise;
  background-color: #85D1DF;
  background-color: #1C4670;
  background-color: #7CF3A0;
  background-color: #19202a;
  background-color: #676767;
  box-shadow: 0px 20px 10px #171717;
    background-image: linear-gradient(#404040, #676767);
  /* #1C4670  #57DDF3  #7CF3A0  #31ED31 #EAEAE0 #ED2461 */
  width: 100%;
  height: 10vh;
  position: relative;
  top: 5vh;
  font-size: 0.9rem;
}
nav a{
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 20px;

}
nav a:hover{
  background-color: #7CF3A0;
  color: #676767;
}
nav a.router-link-exact-active{
  background-color: #7CF3A0;
  color: #676767;
}
nav a.router-link-exact-active:hover{
 opacity: 0.3;
}

@media only screen and (max-width: 1200px) {
  nav a{
    font-size: 0.9rem;
  }
}
@media only screen and (max-width: 1100px) {
  nav a{
    font-size: 0.8rem;
  }
}
@media only screen and (max-width: 1000px) {
  nav a{
    font-size: 0.7rem;
  }
}
</style>