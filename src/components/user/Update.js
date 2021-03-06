import React, {Component} from 'react';
import {getUser, update} from './UserOperations';

class Update extends Component{

    constructor(props){
        super(props);
        this.state = {
            id_user: '',
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        getUser(this.props.match.params.id).then(response => {
            if (response){
                console.log(response);
                this.setState({ 
                    id_user: response.id_user,
                    first_name: response.first_name,
                    last_name: response.last_name,
                    email: response.email,
                    password: ''
                });
            }
        })
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            id_user: this.state.id_user,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        update(user).then(response => {
            console.log(response);
            if (response){
                this.props.history.push('/list')
            }
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 front-weigh-normal">Actualización Usuario</h1>
                            <div className="form-group">
                                <label htmlFor="first_name">Nombre</label>
                                <input type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="Ingrese Nombre"
                                value={this.state.first_name}
                                onChange={this.onChange}>
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Apellido</label>
                                <input type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Ingrese Apellido"
                                value={this.state.last_name}
                                onChange={this.onChange}>
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Ingrese Email"
                                value={this.state.email}
                                onChange={this.onChange}>
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Nuevo Password"
                                value={this.state.password}
                                onChange={this.onChange}>
                                </input>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Actualizar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Update