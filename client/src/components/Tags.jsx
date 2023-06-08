import React from "react";

const tags_url = "http://sergeytimushkin.pythonanywhere.com/Tags/";

export class Tags extends React.Component {
  state = {
    tag: [],
    error: "",
  };

  componentDidMount = async () => {
    const { token } = this.props;
    const { updateTags } = this.props;
    let tag = [];
    try {
      const result = await fetch(tags_url, {
        method: "GET",
        headers: {
          Authorization: "Token " + token,
        },
      });
      tag = await result.json();
    } catch (err) {
      this.setState({
        error: "Ошибка получения данных",
      });
    }

    this.setState({
      tag: tag,
    });

    if (this.state.error === "") {
      updateTags(tag);
    }
  };

  render() {
    const { error } = this.state;
    return <h2>{error}</h2>;
  }
}

export default Tags;
