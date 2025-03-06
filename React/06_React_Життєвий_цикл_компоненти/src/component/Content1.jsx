import { Component } from 'react';

export class Content1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Початковий контент'
    };
  }

  shouldComponentUpdate(props, state) {
    return this.state.content !== state.content;
  }

  render() {
    return <div id="content1"> це Content1 - і його {this.state.content}</div>;
  }

  componentDidUpdate(props, state) {
    if (state.content !== this.state.content) {
      const contentDiv = document.getElementById('content1');
      contentDiv.style.backgroundColor = 'blue'
    }
  }

  componentDidMount() {
    const contentDiv = document.getElementById('content1');
    contentDiv.style.fontSize = '16px';
    this.setState({ content: 'контент оновлено ' });
  }

  componentWillUnmount() {
    const contentDiv = document.getElementById('content1');
    contentDiv.style.fontSize = '14px';
  }
}


