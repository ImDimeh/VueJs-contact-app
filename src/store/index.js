import {createStore} from 'vuex'

export default createStore({
    state: {
        CallNumber: "",
        NumberFound: [],
        CallHistory: [],
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
        AddToContact(state , number){
            console.log("index + " + number)
           state.Numbers.push(number)

            console.log(state.Numbers)
        },
        AddToHistoryCall(state, numberCall) {
            var d = new Date();
            var calldate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() +":" + d.getMilliseconds();
            console.log(calldate + "   date de l'apelle ")

            if (state.Numbers.find(Number => Number.number == numberCall) == undefined) {
                state.CallHistory.push({
                    name: numberCall,
                    date: calldate,
                })

            } else {
                console.log("numero trouve et ajouté dans la liste " + state.NumberFound[0].name)

                state.CallHistory.push({
                    name: state.NumberFound[0].name,
                    date: calldate,
                })
            }


            console.log(state.CallHistory)

        },
        GetContactName(state, number) {
            //console.log(number + " numero recherché ")

            //console.log(state.Numbers.find(Number => Number.number ==  number))
            if (state.Numbers.find(Number => Number.number == number) != undefined) {
                state.NumberFound.push(state.Numbers.find(Number => Number.number == number))
                console.log(state.NumberFound[0])
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
