import React from 'react';
import "../css/form.css";

export class AuthorForm  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            position: "",
            error: "",
    };
    this.fChange = this.fChange.bind(this);
    this.lChange = this.lChange.bind(this);
    this.pChange = this.pChange.bind(this);
    this.AddRow = this.AddRow.bind(this);
    };
    
    AddRow = async () => {
        try {
          const response = await fetch("http://sergeytimushkin.pythonanywhere.com/Authors/", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Authorization: "Token " + this.props.token,
              
            },
            body: JSON.stringify({
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              position: this.state.position,
            }),
          });
          
        } catch (err) {
            this.setState({
                error: "Ошибка получения данных",
              });
        }
    };

    fChange(event) {
        this.setState({first_name: event.target.value});
    };
    
      lChange(event) {
        this.setState({last_name: event.target.value});
    };
    
      pChange(event) {
        this.setState({position: event.target.value});
    };

    render() { 
        return (
            
        <form  autoComplete="off" className="input_wrap">      
        <h2>Создание автора</h2>  
        <p className="input">
            <label for ="first_name">Имя</label>
            <input type="text" name="first_name" value={this.state.first_name} onChange={this.fChange}></input>
        </p>
        <p className="input">
            <label for="last_name">Фамилия</label>
            <input type="text" name="last_name" value={this.state.last_name} onChange={this.lChange}></input>
        </p>
        <p className="input">
            <label for="position">Должность</label>
            <input type="text" name="position" value={this.state.position} onChange={this.pChange}></input>
        </p> 
        <button type="button" onClick = {this.AddRow}>Создать нового автора</button>
        
      </form>
      )
    }
}
 
export default AuthorForm ;