<template>
  <h1> Page du clavier </h1>
  <div class="calculatrice">
    <div class="ecran"> {{ GetCallNumber }}</div>
    <div v-for="contact in NumberFound" :key="contact.number" class="contact">
      <div>
        <h2>{{ contact.name }}</h2>


      </div>
    </div>



    <div class="touches">



      <button @click="addToCallNumber(9) , GetContactName()" data-key="105" class="bouton">9</button>

      <button @click="addToCallNumber(8) , GetContactName()" data-key="104" class="bouton">8</button>
      <button @click="addToCallNumber(7) , GetContactName()" data-key="103" class="bouton">7</button>


      <button @click="addToCallNumber(6) , GetContactName()" data-key="102" class="bouton">6</button>
      <button @click="addToCallNumber(5) , GetContactName()" data-key="101" class="bouton">5</button>
      <button @click="addToCallNumber(4) , GetContactName()" data-key="100" class="bouton">4</button>




      <button data-key="99" @click="addToCallNumber(3) , GetContactName()" class="bouton">3</button>
      <button data-key="98" @click="addToCallNumber(2) , GetContactName()" class="bouton">2</button>
      <button data-key="97" @click="addToCallNumber(1) , GetContactName()" class="bouton">1</button>

      <button data-key="8" @click="ResetCallNumber()" class="bouton">Reset</button>

      <button data-key="96" @click="addToCallNumber(0) , GetContactName()" class="bouton">0</button>
      <button v-if="GetCallNumber.length > 0" @click="AddToHistoryCall(GetCallNumber  )" class="bouton"> Appeler la
        personne
      </button>


    </div>
  </div>

</template>

<script>


export default {
  name: "ClavierView",
  methods: {
    AddToHistoryCall(numberCall) {


      this.$store.commit('AddToHistoryCall', numberCall)

    },
    addToCallNumber(number) {

      this.$store.commit('addToCallNumber', number)

    },

    ResetCallNumber() {

      this.$store.commit('ResetCallNumber')
    },
    GetContactName() {
      console.log("getcontactname")

      return this.$store.commit('GetContactName', this.$store.state.CallNumber)
    },

  },
  computed: {
    GetCallNumber() {
      return this.$store.state.CallNumber
    },
    NumberFound() {
      return this.$store.state.NumberFound
    }

  },
}


</script>

<style scoped lang="scss">
.touches {
  background-color: #2c3e50;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
 margin-left: auto;
  margin-right: auto;
  align-items: center;



  width: 400px;

  button {
    margin: 10px;
    background-color: var(--blue-button);
    height: 50px;
    width: 100px;

  }

}


</style>