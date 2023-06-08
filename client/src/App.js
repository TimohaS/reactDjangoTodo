import "./App.css";
import React from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import CookiesManager from "js-cookie";

class App extends React.Component {
  

  state = {
    isLoggedIn: CookiesManager.get('isLoggedIn') || false,
    token: CookiesManager.get('token') || "",
    name: undefined,
  };
 
  handleLoginClick = () => {
    if (this.state.isLoggedIn === false) {
      this.setState({ isLoggedIn: true });
      CookiesManager.set('isLoggedIn', true);
    } 
    else {
      this.setState({ isLoggedIn: false });
      CookiesManager.remove('isLoggedIn');
      CookiesManager.remove('token'); 
    }
  };
  
  setToken= (s_token) => {
    this.setState({ token: s_token});
    CookiesManager.set('token', s_token);
  };



  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div className="MainScreen">          
            <Dashboard
              onButtonClick={this.handleLoginClick}
              name={this.state.name}
              token={this.state.token}
            />
            
          </div>
        ) : (
          <LoginForm
            onButtonClick={this.handleLoginClick}
            setToken={this.setToken}
           />
          
        )}
        
      </div>
    );
  }
}

export default App;
