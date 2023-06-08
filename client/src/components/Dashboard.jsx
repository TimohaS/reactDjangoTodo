import React from "react";
import Authors from "./Authors";
import Records from "./Records";
import Items from "./Items";
import Tags from "./Tags";
import AuthorForm from "./AuthorForm";
import ChooseAuthor from "./ChooseAuthor";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      authors: [],
      tags: [],
      records: [],
      
    };    
    this.updateRecords= this.updateRecords.bind(this);
  };

  componentDidMount() {}

  updateAuthors = (value) => {
    this.setState({ authors: value });
  };

  updateTags = (value) => {
    this.setState({ tags: value });
  };

  updateRecords = (value) => {
    this.setState({ records: value });
    let arr = [];
    let count = 0;
    for (let i = 0; i < this.state.records.length; i++) {
      for (let j = 0; j < this.state.authors.length; j++) {
        if (
          "http://sergeytimushkin.pythonanywhere.com/Authors/" +
            String(this.state.authors[j].id) +
            "/" ===
          String(this.state.records[i].author)
        ) {
          console.log(this.state.authors[j]);

          arr[count] = {
            id: this.state.records[i].id,
            first_name: this.state.authors[j].first_name,
            last_name: this.state.authors[j].last_name,
            position: this.state.authors[j].position,
            title_tag: "срочно",
            data_created_tag: "2022-07-12T18:14:21.745614Z",
            is_active: true,
            title_record: this.state.records[i].title,
            description: this.state.records[i].description,
            data_created_record: this.state.records[i].data_created,
            due_date_record: this.state.records[i].due_data,
          };

          count++;
        }
      }
    }
    this.setState({ items: arr });
  };

  




  handleClick = () => {
    const { onButtonClick } = this.props;

    onButtonClick();
  };

  render() {
    return (
      <div className="dashboard">
        <div className="exit">
          <p>Тимушкин Сергей Владимирович</p>
          <button onClick={this.handleClick}> Выйти </button>
        </div>
        <Authors token={this.props.token} updateAuthors={this.updateAuthors} />
        <Records token={this.props.token} updateRecords={this.updateRecords} />
        <Tags token={this.props.token} updateTags={this.updateTags} />
        <Items items={this.state.items} token={this.props.token} />
        <div className="make_note">
        <AuthorForm token={this.props.token} />
        <ChooseAuthor token={this.props.token} />
        </div>
      </div>

      
    );
  }
}

export default Dashboard;
