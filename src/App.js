class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {like: false};
  }

  render() {
    if (this.state.like) {
      return 'You like this';
    }

    //JSX by babel
    return (<button onClick={() => this.setState({like: true})}>Like</button>);
  }
}

ReactDOM.render(React.createElement(LikeButton), document.getElementById('root'));