
import * as actionTypes from "./actionTypes"

//state yönetimine sebep olacak evetnlerdir.
// x = (parametre) ;bu bir fonksiyoundur ve bu fonksiyonun değeri => ({})
export const increaseCounter = () => ({

//action bir fonksiyon ve aşağıdakilerde parametresi

    //fonksiyonun aksiyon tipi
    type: actionTypes.INCREASE_COUNTER ,
    payload:1
    //payload : artış miktarı

})

export const decreaseCounter = () => ({

    type: actionTypes.DECREASE_COUNTER,
    payload:1

})

export const increaseByTwoCounter = () =>({

        type: actionTypes.INCREASE_BY_TWO_COUNTER,
        payload:2
    }
)