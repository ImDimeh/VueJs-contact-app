<template>
  <h1> Page Journal </h1>
  <h1> Liste des appelles </h1>
  <div v-for="Call in this.$store.state.CallHistory " :key="Call.date" class="contact">
    <div>

      <h2>{{ Call.name }}</h2>
      <h2> {{ Call.date }}</h2>


    </div>
  </div>
</template>

<script>
export default {

  name: "JournalView",


}
</script>

<style scoped>

</style>