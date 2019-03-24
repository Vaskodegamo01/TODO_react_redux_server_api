import {CHANGETASK, FETCH_FORM_REQUEST, FETCH_FORM_SUCCESS} from './actions'

const initialState = {
    title:'Task',
    description: 'Add your task',
    status: "New",
    task:[],
    isLoading:false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGETASK:
            let mystate = {...state};
            mystate[action.event.target.name] = action.event.target.value;
            return mystate;
        case FETCH_FORM_SUCCESS:
            console.log(action.task);
            return {...state, task: action.task, isLoading: false};
        case FETCH_FORM_REQUEST:
            return {...state, isLoading: true};
        default:
            return state
    }
};

export default reducer;