<template>
<h1> Page Contact</h1>
<div class="Contact-List">


  <div v-for="contact in this.$store.state.Numbers " :key="contact.number" class="contact">
    <div class="contact-element">

      <h2>{{ contact.name }}</h2>
      <h2> {{ contact.number }}</h2>

      <img src="@/assets/Circle-icons-phone.svg">

    </div>
  </div>
</div>
  <a href="/#/addContact"> Ajouter un Contact</a>
</template>


<script>
export default {
  name: "ContactView"
}
</script>

<style scoped>
a{
  background: linear-gradient(to right, var(--blue-button), #4286f4);
  color: var(--white-blue);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.contact-element {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: auto;
  margin-top: auto;
  align-items: center;

}
.contact {



  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 4px;
  border: 4px solid var(--light-blue-2);
  margin-right: 10px;
  margin-left: 10px;
  width: 20%;
  height: 250px;
  background-color: #2c3e50;

  color: white;


  margin-bottom: 10px;

}
.Contact-List {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
img {
  width: 50px;
  height: 50px;
}
</style>