import axios from 'axios';

export const add = newTask => {
    return axios
    .post('task/add', {
        description: newTask.description,
        id_user: newTask.id_user
    })
    .then(response => {
        console.log(response);
        return response.data;
    });
}

export const list = userId => {
    return axios
    .get('task/list/' + userId)
    .then(response => {
        console.log(response);
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
}

export const getTask = taskId => {
    return axios
    .get('/task/' + taskId)
    .then(response => {
        console.log(response);
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
}

export const update = newValues => {
    return axios
    .put('/task/update/' + newValues.id_task, {
        description: newValues.description,
        status: newValues.status
    })
    .then(response => {
        console.log(response);
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
}

export const deleteTask = taskId => {
    return axios
    .delete('/task/delete/' + taskId)
    .then(response => {
        console.log(response);
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
}