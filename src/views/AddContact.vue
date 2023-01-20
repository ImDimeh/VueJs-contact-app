<template>

  <form>

    <p>name is: {{ Name }}</p>
    <input type="text" v-model="Name" placeholder=" Nom du contact" />
    <p>number  is: {{ number }}</p>
    <input type="text" v-model="number" placeholder=" numéro du contact" />

    <button v-if=" ( number.length > 0  && Name.length > 0 )" @click="AddContact( )" class="bouton">
      Ajout du contacte
    </button>


  </form>
</template>

<script>
export default {
  name: "AddContact",
  data(){
    return {
      Name: '',
      number:'',
    }
  },
  methods: {
    AddContact(){
      console.log(this.Name
      + "  " + this.number)
      const number = {

        name: this.Name,
        number: this.number,

      }
      this.$store.commit('AddToContact',number)

    }
  }
}
</script>

<style scoped>

</style>