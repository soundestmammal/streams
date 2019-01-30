import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = { isSignedIn: null};
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "417460803655-itb79r1fdmuq77nud61dpr5oi9vioma9.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onOffChange)
            })
        });
    }

    onOffChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton = () => {
        if(this.state.isSignedIn === null) {
            return null;
        }
        else if (this.state.isSignedIn) {
            return (
                <button className="red ui google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }
        else {
            return (
                <button className="red ui google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    Sign in with Google
                </button>
            );    
        }
    }
    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;