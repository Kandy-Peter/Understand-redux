//ACTION in redux
const BUY_PHONE = 'BUY_PHONE';

function buyPhone(){
    return {
        //type is the action to be executed in our reducer
        type: BUY_PHONE
    }
}

//reducer
//(prevState, action) => newState
//let's create the initiale state

const initialState = {
    phone: 5
}

const reducer = (state = initialState,action) =>{
    //We cannot modify the number of phones form our initialState
    //we have to create an action with a switch statement
    switch (action.type) {
        case BUY_PHONE:
            return{
                //spread operator "...". the value has to decrease
                ...state,
                phone: state.phone - 1
            }
        default: return state
            
    }
}

//let's create our store as redux is already imported via cdn

const store = Redux.createStore(reducer);

//the three methods of store in redux
//first: getState method which will retrieve the initial state of phones availability and store them
const phoneAvailable = document.getElementById('phoneAvailable');
phoneAvailable.innerHTML = store.getState().phone;

//second: dispatch method makes the dispatchof an action

document.getElementById('buy-phone').addEventListener('click', function(){
    store.dispatch(buyPhone());
})

//third:subscribe method which run for each modification in the store
store.subscribe(() => {
    phoneAvailable.innerHTML = store.getState().phone;
})
