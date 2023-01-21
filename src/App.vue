<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/Journal">Journal</router-link> |
    <router-link to="/contact">contact</router-link> |
    <router-link to="/clavier">clavier</router-link> |
    <router-link to="/addContact">AddContact</router-link> |




  </nav>
  <router-view/>
</template>

<style lang="scss">


:root{
  box-sizing: border-box;
  --main-bg-color: #012A4A;
  --light-blue: #A9D6E5;
  --nav-dark-blue : #2C7DA0;
  --color-text : #2A6F97;
  --blue-button:#01497C;
  --white-blue:#A9D6E5;
  --light-blue-2: #89C2D9 ;
  --blue-button: #2A6F97;

}
body {
  background-color: var(--main-bg-color);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-text);


}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--nav-dark-blue);

    &.router-link-exact-active {
      color: var(--light-blue);
    }
  }
}
</style>
