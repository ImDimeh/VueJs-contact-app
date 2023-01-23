<template>
  <nav>

    <router-link to="/about">présenation</router-link>|
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
  --blue : #013A63;
  --nav-color : #436ef0;
  --nav-background : #020129;

}
body {
  background-color: var(--main-bg-color);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--nav-color);


}

nav {
  margin-top: 0;
  padding: 40px;
  background-color: var(--nav-background);

  a {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--nav-color);

    &.router-link-exact-active {
      color: var(--light-blue);
    }
  }
}
</style>
