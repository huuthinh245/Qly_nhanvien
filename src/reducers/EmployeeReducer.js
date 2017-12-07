import {EMPLOYEES_FETCH_SUCCESS} from '../actions/types';
const INITIAL={};//object
export default (state=INITIAL,action)=>{
    switch(action.type){
        case EMPLOYEES_FETCH_SUCCESS:
        return action.payload;// => can return object
        default:
            return state;
    }
}
