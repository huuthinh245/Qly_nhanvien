import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL} from '../actions/types';
const INITIAL_STATE={// hoi giong custructors
  email:'',
  password:'',
  user:null,
  error:'',
  loading:false
};
export default (state=INITIAL_STATE,action)=>{
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
          //state.email=action.payload;
          //return state;
          return {...state,email:action.payload};// kieu rut gon
    case PASSWORD_CHANGED:
          return {...state,password:action.payload};
    case LOGIN_USER:
          return {...state,loading:true,error:''}
    case LOGIN_USER_SUCCESS:
          //phamhuuthinh;
          return {...state,...INITIAL_STATE,user:action.payload,loading:false}//...INITIAL login thanh cong set gia tri luc khoi tao
    case LOGIN_USER_FAIL:
          return{...state,error:'Authencation failed.!',password:'',loading:false}
    default:
        return state;
  }
};
