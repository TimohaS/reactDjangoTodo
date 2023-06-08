import React from "react";


const GET_TOKEN_URL =
  "https://sergeytimushkin.pythonanywhere.com/api-token-auth/";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.loginRef = null;
    this.passwordRef = null;
  };

  state = {
    failedLogin: false,
  };

  tryLogin = async () => {
    const { onButtonClick } = this.props;
    const { setToken } = this.props;
    let username = this.loginRef.value;
    let password = this.passwordRef.value;
    try {
      const result = await fetch(GET_TOKEN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      let token_tmp = await result.json();
      if ("token" in token_tmp) {
        setToken(token_tmp.token);
        onButtonClick();
      } else {
        this.setState({ failedLogin: true });
        
      }
    } catch (err) {
      this.setState({
        error: "Ошибка получения данных",
      });
    }

  };
  
 


  render() {
    let { failedLogin } = this.state;
    return (
      <div className="loginform">
        <h1>Вход</h1>
        <p>
          <label htmlFor="login">Логин: </label>
          <input
            type="text"
            name="username"
            ref={(ref) => (this.loginRef = ref)}
          />
        </p>
        <p>
          <label htmlFor="password">Пароль: </label>
          <input
            type="password"
            name="password"
            ref={(ref) => (this.passwordRef = ref)}
          />
        </p>
        <p>
          <button onClick={this.tryLogin}>Войти</button>
        </p>
        {failedLogin ? (
          <div className="fail">Неверный логин или пароль!</div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default LoginForm;
