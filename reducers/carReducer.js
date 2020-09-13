import{ADD_CAR,EDIT_CAR,DELETE_CAR} from '../actions/types';
import { AccessibilityInfo } from 'react-native';


const intialSate={
  cars:[]
}

const carReducer = (state=intialSate,action)=>{
  switch(action.type){
    case ADD_CAR:
      return{...state,
      cars:state.cars.concat(action.car)
      }
    case EDIT_CAR:
      return{...state,cars:state.cars.map(car=>(car.id===action.car.id)?{...car,model:action.car.model,description:action.car.description}:car)}
    case DELETE_CAR:
    console.log("test")
      return{...state,cars:state.cars.filter((car)=>(car.id!==action.car.id))}
    default:
      return state;
  }
}

export default carReducer;