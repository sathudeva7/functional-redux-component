import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoginSuccess: false
        };

        this.onHome = this.onHome.bind(this);
    }

    onHome(){
        this.setState({isLoginSuccess:true})
        
    }

    render() {
        if(this.state.isLoginSuccess === true){
            return <Redirect to='/home' />
        }
        
        return (
            <div className="container">
	<div className="d-flex justify-content-center h-100" > 
		<div className="card-new">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" className="form-control" placeholder="username"/>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password"/>
					</div>
					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
                        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={this.onHome}>Login</button>
					</div>
			
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="/home">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
        )
    }
}
