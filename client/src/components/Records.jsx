import React from "react";

const records_url = "http://sergeytimushkin.pythonanywhere.com/Records/";

export class Records extends React.Component {
  state = {
    record: [],
    error: "",
  };

  componentDidMount = async () => {
    const { token } = this.props;
    const { updateRecords } = this.props;
    let record = [];
    try {
      const result = await fetch(records_url, {
        method: "GET",
        headers: {
          Authorization: "Token " + token,
        },
      });
      record = await result.json();
    } catch (err) {
      this.setState({
        error: "Ошибка получения данных",
      });
    }

    this.setState({
      record: record,
    });
    if (this.state.error === "") {
      updateRecords(record);
    }
  };

  render() {
    const { error } = this.state;
    return <h2>{error}</h2>;
  }
}

export default Records;
