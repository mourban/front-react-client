import React, {Component} from 'react';
import {getTask, update} from './TaskOperations';

class UpdateTask extends Component{

    constructor(props){
        super(props);
        this.state = {
            description: '',
            status: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        getTask(this.props.match.params.id).then(response => {
            if (response){
                console.log(response);
                this.setState({ 
                    id_task: response.id_task,
                    description: response.description,
                    status: JSON.parse(response.status)
                });
            }
        })
    }

    cancel() {
        this.props.history.push('/listTask');
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onChangeCheckbox(e){
        this.setState({[e.target.name]: e.target.checked})
    }

    onSubmit(e){
        e.preventDefault();

        const task = {
            id_task: this.state.id_task,
            description: this.state.description,
            status: this.state.status? "true" : "false"
        }

        update(task).then(response => {
            console.log(response);
            if (response){
                this.props.history.push('/listTask')
            }
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 front-weigh-normal">Actualización de Tarea</h1>
                            <div className="form-group">
                                <label htmlFor="description">Descripción</label>
                                <textarea 
                                value={this.state.description} 
                                className="form-control"
                                name="description"
                                onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label>
                                    <input
                                    name="status"
                                    type="checkbox"
                                    checked={this.state.status}
                                    onChange={this.onChangeCheckbox} />
                                    <span style={{ marginLeft: 8 }}>Estado: {this.state.status? "Terminada" : "Pendiente"}</span>
                                </label>
                            </div>
                            <button id="btn-update-task" type="submit" className="btn btn-lg btn-primary btn-block">
                                Actualizar Tarea
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

export default UpdateTask