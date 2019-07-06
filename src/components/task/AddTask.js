import React, {Component} from 'react';
import {add} from './TaskOperations';

class AddTask extends Component{

    constructor(props){
        console.log(props);
        super(props);
        this.state = {
            description: '',
            userId: localStorage.userId
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    cancel() {
        this.props.history.push('/listTask');
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const task = {
            description: this.state.description,
            id_user: this.state.userId
        }

        console.log(task);
        
        add(task).then(response => {
            if (response){
                if (response){
                    this.props.history.push({
                        pathname : 'listTask',
                        state :{
                            userid: this.props.match.params.userId
                        }
                    });
                }
            }
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 front-weigh-normal">Nueva Tarea</h1>
                            <div className="form-group">
                                <label htmlFor="description">Descripción</label>
                                <textarea 
                                value={this.state.description} 
                                className="form-control"
                                name="description"
                                onChange={this.onChange} />
                            </div>
                            <button id="btn-add-task" type="submit" className="btn btn-lg btn-primary btn-block">
                                Agregar Tarea
                            </button>
                            <button onClick={this.cancel} type="button" className="btn btn-lg btn-danger btn-block">
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTask