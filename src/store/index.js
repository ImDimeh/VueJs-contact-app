import {createStore} from 'vuex'

export default createStore({
    state: {
        CallNumber: "",
        NumberFound : [],
        CallHistory : [],
        Numbers: [
            {
                name: "pierre zidane",
                number: "074556578",
            },
            {
                name: "Lora dupois",
                number: "0688998899",
            },
            {
                name: "Yassine Bounou",
                number: "0711223344",
            }

        ]
    },
    getters: {},
    mutations: {
        addToCallNumber(state, value) {
            console.log("store")
            console.log(state.CallNumber)
            console.log(value)
            state.CallNumber = state.CallNumber + value
            console.log(state.CallNumber + "   call number ")


        },
        AddToHistoryCall(state, contact ){
            var d = new Date();
            var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate() + " " +  d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            console.log(date + "   date de l'apelle ")


            state.CallHistory.push(contact )
            console.log(state.CallHistory )
            console.log("CallHistory")
        },
        GetContactName(state , number) {
          console.log(number + " numero recherché ")

          //console.log(state.Numbers.find(Number => Number.number ==  number))
            if (state.Numbers.find(Number => Number.number ==  number) != undefined){
                state.NumberFound.push( state.Numbers.find(Number => Number.number ==  number))
                console.log( state.NumberFound[0])
            }


        },
        ResetCallNumber(state) {
            state.CallNumber = "";
            state.NumberFound = []
        }
    },
    actions: {},
    modules: {}
})
