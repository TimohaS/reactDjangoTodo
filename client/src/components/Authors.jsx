import React from "react";

const authors_url = "http://sergeytimushkin.pythonanywhere.com/Authors/";

export class Authors extends React.Component {
  state = {
    author: [],
    error: "",
  };

  componentDidMount = async () => {
    const { token } = this.props;
    const { updateAuthors } = this.props;
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
      updateAuthors(author);
    }
  };

  render() {
    const { error } = this.state;
    return <h2>{error}</h2>;
  }
}

export default Authors;
