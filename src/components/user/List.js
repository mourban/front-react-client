import React, {Component} from 'react';
import {list, deleteUser} from './UserOperations';
import { Link } from 'react-router-dom';

class List extends Component{
    constructor(){
        super();
        this.state = {users: []};
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount(){
        list().then(response => {
            if (response){
                this.setState({ users: response});
            }
        });
    }

    deleteUser(userId) {
        if (userId){
            deleteUser(userId)
            .then(response => {
                if (response){
                    this.setState({ users: this.state.users.filter( user => user.id_user !== userId)});
                }
            });
        }
    }

    tabRow(){
        var self = this;
        return this.state.users.map(function(object, i){
            return (
                <tr key={i}>
                    <td>
                        {object.first_name}
                    </td>
                    <td>
                        {object.last_name}
                    </td>
                    <td>
                        {object.email}
                    </td>
                    <td class="text-center">
                        <Link id="btn-edit" to={"/user/"+object.id_user} className="btn btn-warning">Editar</Link>
                        <button style={{ marginLeft: 8 }} onClick={() => self.deleteUser(object.id_user)} className="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            );
        });
    }
  
    render() {
        return (
            <div>
                <h3 align="center">Lista de Usuarios</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th class="text-center">Nombre</th>
                        <th class="text-center">Apellido</th>
                        <th class="text-center">Email</th>
                        <th class="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { this.tabRow() }
                </tbody>
                </table>
            </div>
        );
    }
}

export default List