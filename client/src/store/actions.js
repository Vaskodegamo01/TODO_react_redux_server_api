import axios from '../axios-counter';


export const CHANGETASK = 'CHANGETASK';

export const FETCH_FORM_REQUEST = 'FETCH_FORM_REQUEST';
export const FETCH_FORM_SUCCESS = 'FETCH_FORM_SUCCESS';
export const FETCH_FORM_ERROR = 'FETCH_FORM_ERROR';

export const fetchSendFormRequest = () => {
    return { type: FETCH_FORM_REQUEST };
};

export const fetchSendFormSuccess = (task) => {
    return { type: FETCH_FORM_SUCCESS, task};
};

export const fetchSendFormError = (error) => {
    return { type: FETCH_FORM_ERROR, error};
};

export const fetchTask = () => {
    return dispatch => {
        dispatch(fetchSendFormRequest());
        axios.get('tasks')
            .then(response => {dispatch(fetchSendFormSuccess(response.data))},
                error => {dispatch(fetchSendFormError(error));
                });
    }};


export const fetchSendForm = (data) => {
    let bd = {title: data.title, description: data.description, status: data.status};
    return dispatch => {
        dispatch(fetchSendFormRequest());
        axios.post('tasks', bd).then(() => {dispatch(fetchTask())},error => {dispatch(fetchSendFormError(error));
        });
    }};

export const deleteTaskById = (id) => {
    console.log(id);
    return dispatch => {
        axios.delete(`tasks/${id}`).then(() => {dispatch(fetchTask())});
    }};


export const changeTask = (event) => {
    return { type: CHANGETASK,event};
};



