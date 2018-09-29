class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {like: false};
  }

  render() {
    if (this.state.like) {
      return 'You like this';
    }

    //Browser natively supported JS
    return React.createElement(
      'button',
      {onClick: () => {this.setState({like: true})}},
      'Like'
    );
  }
}

ReactDOM.render(React.createElement(LikeButton), document.getElementById('root'));