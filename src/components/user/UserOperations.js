import axios from 'axios';

export const add = newUser => {
    return axios
    .post('user/add', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    })
    .then(response => {
        console.log(response);
        return response.data;
    });
}

export const login = user => {
    return axios
    .post('user/login', {
        email: user.email,
        password: user.password
    })
    .then(response => {
        console.log(response);
        return {values: response.data};
    })
    .catch(error => {
        console.log(error);
        return {error: error.response.data.error};
    });
}

export const list = () => {
    return axios
    .get('user/list')
    .then(response => {
        console.log(response);
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
}

export const getUser = userId => {
    return axios
    .get('/user/' + userId)
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
    .put('/user/update/' + newValues.id_user, {
        first_name: newValues.first_name,
        last_name: newValues.last_name,
        email: newValues.email,
        password: newValues.password
    })
    .then(response => {
        console.log(response);
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
}

export const deleteUser = userId => {
    return axios
    .delete('/user/delete/' + userId)
    .then(response => {
        console.log(response);
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
}