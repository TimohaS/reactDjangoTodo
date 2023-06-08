import React from "react";
import "../css/chooseAuthor.css";

const authors_url = "http://sergeytimushkin.pythonanywhere.com/Authors/";

export class ChooseAuthor extends React.Component {
  constructor(props){
  super(props);
    this.state = {
    author: [],
    error: "",
    chosedId: "",
    title: "",
    description: "",
  };
  this.Choose = this.Choose.bind(this);
  this.tChange = this.tChange.bind(this);
  this.dChange = this.dChange.bind(this);
  this.delAuthor = this.delAuthor.bind(this);
  this.AddRow  = this.AddRow.bind(this);
};

  componentDidMount = async () => {
    const { token } = this.props;
    let author = [];
    try {
      const result = await fetch(authors_url, {
        method: "GET",
        headers: {
          Authorization: "Token " + token,
        },
      });
      author = await result.json();
    } catch (err) {
      this.setState({
        error: "Ошибка получения данных",
      });
    }

    this.setState({
      author: author,
    });
    if (this.state.error === "") {
      console.log(author);
    }
  };

  Choose(id) {
    this.setState({chosedId: id});
};

  delAuthor = async (id) => {    
      try {
        const response = await fetch(
        authors_url + id + "/",
          {
            method: "DELETE",
            headers: {
              Authorization: "Token " + this.props.token,
              "content-type": "application/json",
            },
          }
        );
        
      } catch (err) {
        console.log(err);
      }
    
  };

tChange(event) {
    this.setState({title: event.target.value});
};

dChange(event) {
    this.setState({description: event.target.value});
};

AddRow = async () => {
    try {
      const response = await fetch("http://sergeytimushkin.pythonanywhere.com/Records/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: "Token " + this.props.token,
          
        },
        body: JSON.stringify({
          title: this.state.title,
          description: this.state.description,
          author: "http://sergeytimushkin.pythonanywhere.com/Authors/" + this.state.chosedId + "/",
        }),
      });
      
    } catch (err) {
        this.setState({
            error: "Ошибка получения данных",
          });
    }
};

  render() {    
    return <div><h2>Создание заметки</h2>
        <div className="author_items"><h2>Выбрать автора</h2>
    {this.state.author.map((el) => (
        
        <div className='item_choose' >            
            <div className='name'>
                <p className='first_name'>{el.first_name}</p>
                <p className='last_name'>{el.last_name}</p>
            </div>            
            <p className='position'>{el.position}</p>
            <div className="del_cursor" onClick = {this.delAuthor.bind(null,el.id)}></div>
            <button type="button" onClick = {this.Choose.bind(null,el.id)}>Выбрать</button>
        </div>
        
      ))}
    </div>
    
    <form  autoComplete="off" className="input_wrap">        
        <p className="input">
            <label for ="title">Название</label>
            <input type="text" name="title" value={this.state.title} onChange={this.tChange}></input>
        </p>
        <p className="input">
            <label for="description">Описание</label>
            <input type="text" name="description" value={this.state.description} onChange={this.dChange}></input>
        </p>   
        <button type="button" onClick = {this.AddRow}>Создать новую заметку</button>
        </form>
    </div>
  }
}

export default ChooseAuthor;
