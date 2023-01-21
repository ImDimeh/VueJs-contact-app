<template>

  <form>

    <p>name is: {{ Name }}</p>
    <input type="text" v-model="Name" placeholder=" Nom du contact"/>
    <p>number is: {{ number }}</p>
    <input type="text" v-model="number" placeholder=" numéro du contact"/>

    <button v-if=" ( number.length > 0  && Name.length > 0 )" @click="AddContact( )" class="bouton">
      Ajout du contacte
    </button>


  </form>
</template>

<script>
export default {
  name: "AddContact",
  data() {
    return {
      Name: '',
      number: '',
    }
  },
  methods: {
    AddContact() {
      console.log(this.Name
          + "  " + this.number)
      const number = {

        name: this.Name,
        number: this.number,

      }
      this.$store.commit('AddToContact', number)

    }
  }
}
</script>

<style scoped lang="scss">
$white: rgba(255,255,255,0.3);
form {
  width: 200px;
  background: $white;
  padding: 3em;
  height: 320px;
  border-radius: 20px;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  transition: all 0.2s ease-in-out;
  margin-left: auto;
  margin-right: auto;

  p {
    font-weight: 500;
    color: #fff;
    opacity: 0.7;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 60px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: #ddd;
    font-size: 12px;

    &:hover {
      text-shadow: 2px 2px 6px #00000040;
    }

    &:active {
      text-shadow: none;
    }
  }

  input {
    background: transparent;
    width: 200px;
    padding: 1em;
    margin-bottom: 2em;
    border: none;
    border-left: 1px solid $white;
    border-top: 1px solid $white;
    border-radius: 5000px;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    }

    &[type="email"],
    &[type="password"] {

      &:focus {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);

      }
    }

    &[type="button"] {
      margin-top: 10px;
      width: 150px;
      font-size: 1rem;

      &:hover {
        cursor: pointer;

      }

      &:active {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }


}

::placeholder {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

}


</style>