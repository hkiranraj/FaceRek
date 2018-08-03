
export default function( state = {} , action ){
    switch ( action.type ){
        case 'FETCH_USER_SUCCESS':
            console.log(action.payload);
            return action.payload;
            break;
        case 'FETCH_USER_FAIL':
            return action.payload;
            break;
        case 'SAVE_USER_SUCCESS':
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}