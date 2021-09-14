//ACTION in redux
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';
const BUY_TV = 'BUY_TV';

function buyPhone(){
    return {
        //type is the action to be executed in our reducer
        type: BUY_PHONE
    }
}


function buyTablet(){
    return {
        type: BUY_TABLET
    }
}
function buyTv(){
    return {
        type: BUY_TV
    }
}

//reducer
//(prevState, action) => newState
//let's create the initiale state

const initialState = {
    phone: 10,
    tablet: 7,
} 
const initialStateTv = {
    tv: 15
}

const phoneReducer = (state = initialState,action) =>{
    //We cannot modify the number of phones form our initialState
    //we have to create an action with a switch statement
    switch (action.type) {
        case BUY_PHONE:
            return{
                //spread operator "...". the value has to decrease
                ...state,
                phone: state.phone - 1
            }
            break
            case BUY_TABLET:
                return{
                    //spread operator "...". the value has to decrease
                    ...state,
                    tablet: state.tablet - 1
                }
        default: return state
            
    }
}
const tvReducer = (state = initialStateTv,action) =>{
    switch (action.type) {
        case BUY_TV:
            return{
                ...state,
                tv: state.tv - 1
            }
        default: return state
            
    }
}

//let's create our store as redux is already imported via cdn
// the code below is used to store one reducer
//by using many reducers we will use:
const rootReducer = Redux.combineReducers({
    phones: phoneReducer,
    tv: tvReducer
})
//create Store
const store = Redux.createStore(rootReducer);

//the three methods of store in redux
//first: getState method which will retrieve the initial state of phones availability and store them
const phoneAvailable = document.getElementById('phoneAvailable');
phoneAvailable.innerHTML = store.getState().phones.phone;

const tabletAvailable = document.getElementById('tabletAvailable');
tabletAvailable.innerHTML = store.getState().phones.tablet;

const tvAvailable = document.getElementById('tvAvailable');
tvAvailable.innerHTML = store.getState().tv.tv;

//second: dispatch method makes the dispatchof an action

document.getElementById('buy-phone').addEventListener('click', function(){
    store.dispatch(buyPhone());
})
document.getElementById('buy-tablet').addEventListener('click', function(){
    store.dispatch(buyTablet());
})

document.getElementById('buy-tv').addEventListener('click', function(){
    store.dispatch(buyTv());
})


//third:subscribe method which run for each modification in the store
store.subscribe(() => {
    phoneAvailable.innerHTML = store.getState().phones.phone;
    tabletAvailable.innerHTML = store.getState().phones.tablet;
    tvAvailable.innerHTML = store.getState().tv.tv;
})
