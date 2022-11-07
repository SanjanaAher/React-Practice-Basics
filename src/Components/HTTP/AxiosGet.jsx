import React, { Component } from "react";
import axios from "axios";

export class AxiosGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Error Retriving Data" });
      });
  }
  render() {
    const { posts, error } = this.state;

    return (
      <div>
        <h1>Getting API data through AXIOS</h1>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default AxiosGet;
