class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button>{this.props.sign}</button>;
  }
}
