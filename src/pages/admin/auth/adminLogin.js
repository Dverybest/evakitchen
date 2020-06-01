import React, { useState } from 'react';
import {connect} from 'react-redux';
import {LoginAuthentication }from '../../../store/actions/AuthAction'
import "./adminLogin.css";

const Login = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    
   
    const login =(email,password)=>{

        setIsLoading(true);
        let data = {
            email:email,
            password:password
        }
        props.LoginAuthentication(data).then(result=>{
            // console.log('result', result);
            setIsLoading(false);
            props.history.push('/admin-dashboard');

        }).catch(error => {
           // console.log('error', error);
            setIsLoading(false);
            setError(error.message)
        })
       
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            default:
                break;
        }

        if (error) setError('');
    }

    const handleClick = (e) => {
        if (email.length && password.length) {
            login(email,password);
        }
    }

    return (
        <div className="login">
            <div className=" container" >
                <div className=" p-1">
                    <h1>Hello, Welcome</h1>
                    <p>Please enter your details to login</p>
                    <form method="post" action='/admin'>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                value={email} 
                                id="email" 
                                placeholder="Enter your registered email address" 
                                name="email" 
                                required 
                                onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                value={password} 
                                id="password" 
                                placeholder="Enter your password" 
                                name="password" 
                                required 
                                onChange={handleChange} />
                        </div>
                        {
                            isLoading ? (
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border text-primary"></div>
                                </div>
                            ) : (
                                    <div className="form-group">
                                        <button type="submit" className="form-control btn btn-primary" onClick={handleClick}>Submit</button>
                                </div>
                            )
                        }

                    </form>
                    {
                        error &&
                        <p className="text-danger">{error}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default connect(null, { LoginAuthentication })(Login);
