

const reducer = (state=0 , action)=>{
    console.log("this si import ant is = " , state)
    if(action.type === "deposit" ){
        return state + action.payload
    }
    else if(action.type === 'withdraw' && state >0){
        return state - action.payload
    }
    else if (action.type === 'multiply'){
        return state * action.payload
    }
    else{
        return state
    }
}



export default reducer