import React,{Component} from 'react';
import Header from '../Header';

const url = "http://localhost:5000/api/auth/login";

class Login extends Component{

    constructor(){
        super()

        this.state={
            email:"nikki@gmail.com",
            password:'12345678',
            message:''

        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message: data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
            <Header/>
                <div className="container">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3>Login</h3>
                            <h2>{this.state.message}</h2>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="form-group col-md-9">
                                    <label for="email">Email</label>
                                    <input type="text" name="email" className="form-control"
                                    value={this.state.email} onChange={this.handleChange}  />
                                </div>
                                <div className="form-group col-md-9">
                                    <label for="password">Password</label>
                                    <input type="text" name="password" className="form-control"
                                    value={this.state.password} onChange={this.handleChange}  />
                                </div>
                            </div>
                            <button className="btn btn-success" onClick={this.handleSubmit}>
                                Login
                            </button>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login