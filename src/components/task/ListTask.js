import React, {Component} from 'react';
import {list, deleteTask} from './TaskOperations';
import { Link } from 'react-router-dom';

class ListTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            userId: localStorage.userId
        };
        console.log(this.state);
        this.deleteTask = this.deleteTask.bind(this);
    }

    componentDidMount(){
        console.log(this.state);
        list(this.state.userId).then(response => {
            if (response){
                this.setState({ tasks: response});
            }
        });
    }

    deleteTask(taskId) {
        if (taskId){
            deleteTask(taskId)
            .then(response => {
                if (response){
                    this.setState({ tasks: this.state.tasks.filter( task => task.id_task !== taskId)});
                }
            });
        }
    }

    tabRow(){
        var self = this;
        return this.state.tasks.map(function(object, i){
            return (
                <tr key={i}>
                    <td class="text-center">
                        {
                            new Intl.DateTimeFormat('es-VE', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: '2-digit' 
                            }).format(new Date(object.created))
                        }
                    </td>
                    <td>
                        {object.description}
                    </td>
                    <td class="text-center">
                        <input
                        type="checkbox"
                        checked={JSON.parse(object.status)} />
                        <span style={{ marginLeft: 8 }}>{JSON.parse(object.status)? "Terminada" : "Pendiente"}</span>
                    </td>
                    <td class="text-center">
                        <Link id="btn-edit" to={"/task/"+object.id_task} className="btn btn-warning">Editar</Link>
                        <button style={{ marginLeft: 8 }} onClick={() => self.deleteTask(object.id_task)} className="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            );
        });
    }
  
    render() {
        return (
            <div>
                <Link id="btn-add" to="/addTask" params={{ userId: this.state.userId }} className="btn btn-primary">Nueva Tarea</Link>
                <h3 align="center">Lista de Tareas</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th class="text-center">Creación</th>
                        <th class="text-center">Tarea</th>
                        <th class="text-center">Status</th>
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

export default ListTask