class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount() {
    console.log("hello");
    this.setState(state => {
      return {
        count: state.count + 1 // ++state.count?
      };
    });
  }

  decrementCount() {
    console.log("hello");
    this.setState(state => ({
      count: state.count - 1 // ++state.count?
    }));
  }

  render() {
    return (
      <div class="counter-row">
        <button>{this.state.count}</button>
        <button onClick={this.incrementCount.bind(this)}>+</button>
        <button onClick={event => this.decrementCount(event)}>-</button>
      </div>
    );
  }
}

const container = document.getElementById("app");
const counter = <Counter />;

ReactDOM.render(counter, container);
