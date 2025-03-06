import { Component } from 'react';

export class Navbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: 'початкові дані'
    }
  }

  shouldComponentUpdate(props, state) {
    return this.state.data !== state.data
  }

  render() {
    return <div id="navbar"> це Navbar - і {this.state.data}</div>
  }

  componentDidUpdate(props, state) {
    if (state.data !== this.state.data) {
      const navbar = document.getElementById('navbar')
      navbar.style.backgroundColor = 'blue'
    }
  }

  componentDidMount() {
    const navbar = document.getElementById('navbar')
    navbar.style.backgroundColor = 'green'
    this.setState({ data: 'дані оновлено ' })
  }

  componentWillUnmount() {
    const navbar = document.getElementById('navbar')
    navbar.style.backgroundColor = 'transparent'
  }
}


