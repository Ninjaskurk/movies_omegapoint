const initialState = {
    popup: false,
    nr: 0
}

const popupReducer=(state = initialState, action) => {
    if(action.type==="POPUP_TOGGLE"){
        return {
            ...state,
            toggle: action.toggle,
            id: action.id
        }
    } else{
        return {
            ...state
        }
    }
}

export default popupReducer;