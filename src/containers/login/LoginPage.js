import React, { Component } from 'react';
import ButterToast, { CinnamonSugar } from 'butter-toast';
import 'butter-toast/dist/universal/style.css';

import './login.scss';
import LogoDark from './logo_dark.png';



export default class LoginPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            credintiality : {
                email: 'demo@jubelio.com',
                password: '123456'
            }
        };
        this.handleSubmit  = this.handleSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.errorToast    = this.errorToast.bind(this);
    }

    componentDidMount(){
    }

    handleSubmit(event){
        //we don't want the form to submit, so we prevent the default behavior
        const { history } = this.props;

        event.preventDefault();

        //need to check form validity 
        if (!event.target.checkValidity()) {
            // form is invalid! so we do nothing
            this.setState({ displayErrors: true });
            return;
        }
        this.setState({ displayErrors: false });
        const form = event.target;
        const data = new FormData(form);

        const loginData = {}

        //If the input fields were directly within this
        //this component, we could use this.refs.[FIELD].value
        //Instead, we want to save the data for when the form is submitted
        for (let entry of data.entries()) {
            loginData[entry[0]] = entry[1]
        }

        if(!this.validateEmail(loginData.email)){
            // form is invalid! so we do nothing
            this.setState({ displayErrors: true });
            return;
        }

        //Check validity of credintial
        if(this.checkIsValid(loginData)){
            history.push('/');
        }
        else{
            console.log('failed login');
            this.errorToast(
                <div>
                    Please input valid credintial 
                </div>
            );
        }
    }

    validateEmail(value) {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    }

    checkIsValid(credintiality){
        if (this.state.credintiality.email === credintiality.email && 
            this.state.credintiality.password ===  credintiality.password){
                return true;
        }
        return false;
    }


    errorToast(message){
        // in this example, I am using a `fresh` toast
        // since it has all the possible options
        const toast = CinnamonSugar.fresh({
            theme: 'lite',
            image: 'http://lorempixel.com/150/150/people',
            title: 'Amazing!', // you can also add jsx code here!
            message: message, // you can also add jsx code here!
            icon: 'bath' // literally any font awesome 4.7 icon
            // you may also add here regular butter-toast options, such as toastTimeout,
            // name, sticky, etc..
            
        });
        ButterToast.raise(toast);
    }

    render() {

        const {displayErrors} = this.state;

        return (
            <div>
                <ButterToast trayPosition="bottom-left"/>
                <div className={["login-page", "bg"].join(' ')}>
                    <div className="login-box">
                        <div className="login-box-body">
                            <div className="login-logo">
                                <a href="/">
                                    <img src={LogoDark} alt="logo"></img>
                                </a>
                            </div>
                            <p>
                                Sign in to start your session with 
                                <br/>
                                username: demo@jubelio.com 
                                <br/>
                                password: 123456
                            </p>
                            <form onSubmit={this.handleSubmit} noValidate className={displayErrors ? 'displayErrors' : ''} >
                                    <div className="field">
                                        <div className="control">
                                            <input 
                                                id="email" 
                                                name="email"
                                                required 
                                                className={["input", "custom-control", "is-medium"].join(' ')} 
                                                type="text"
                                                placeholder="eg. demo@jubelio.co"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input 
                                                id="password" 
                                                name="password"
                                                required 
                                                className={["input", "custom-control", "is-medium"].join(' ')} 
                                                type="password"
                                                placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className={["control", "icheck"].join(' ')}>
                                            <label className="checkbox">
                                                <input type="checkbox"/>
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className={["field", "m-t-10"].join(' ')}>    
                                        <div className="control">
                                            <button className={["button", "btn", "btn-flat", "is-primary"].join(' ')}>Sign In</button>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}