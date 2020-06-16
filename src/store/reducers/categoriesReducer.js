import { ALL_CATEGORIES_KEY} from '../Constants';

const initial_state ={
    categories:[]
}
const CategoriesReducer = (state=initial_state,action)=>{
    switch (action.type) {
        case ALL_CATEGORIES_KEY:
            return { ...state, categories:[...action.payload]};
        default:
           return state;
    }
}

export default CategoriesReducer;