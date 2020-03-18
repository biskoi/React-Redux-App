export const initialState = {
    data: [],
    loading: false,
    error: ''
}

export const shibeReducer = (state = initialState, action) => {

    switch(action.type){

        case 'FETCH_DATA': return {
            ...state,
            loading: true
        }

        case 'FETCH_DATA_OK': return {
            data: action.payload,
            loading: false,
            error: ''
        }

        case 'FETCH_DATA_FAIL': return {
            ...state,
            loading: false,
            error: action.payload
        }
        
        default: return state;


    }

}