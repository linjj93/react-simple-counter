class Button extends React.Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.sign}
      </button>
    );
  }
}

class Display extends React.Component {
  render() {
    return <div className={this.props.className}>{this.props.count}</div>;
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.count };
  }

  incrementCount() {
    this.setState(state => {
      return {
        count: state.count + 1 // ++state.count?
      };
    });
  }

  changeClass() {
    return this.state.count < 0 ? "negative" : "positive";
  }

  decrementCount() {
    this.setState(state => ({
      count: state.count - 1 // ++state.count?
    }));
  }

  render() {
    return (
      <div className="counter-row">
        <Display className={this.changeClass()} count={this.state.count} />
        {/* <div className={this.changeClass()}>{this.state.count}</div> */}
        <Button
          className="increment-btn"
          onClick={this.incrementCount.bind(this)}
          sign="+"
        />
        <Button
          className="decrement-btn"
          onClick={event => this.decrementCount(event)}
          sign="-"
        />
        {/* <button
          className="increment-btn"
          onClick={this.incrementCount.bind(this)}
        >
          +
        </button>
        <button
          className="decrement-btn"
          onClick={event => this.decrementCount(event)}
        >
          -
        </button> */}
      </div>
    );
  }
}

function App() {
  const count = [0, -2, 7, 5, -10];
  const counters = [
    { id: "0", initialCount: 0 },
    { id: "1", initialCount: -2 },
    { id: "2", initialCount: 7 },
    { id: "3", initialCount: 5 },
    { id: "4", initialCount: -10 }
  ];

  const counterItems = counters.map(counter => {
    return <Counter key={counter.id} count={counter.initialCount} />;
  });

  // return (
  //   <React.Fragment>
  //     {
  //       // index can be used only if array is not pushed or popped
  //     }
  //     {count.map((num, index) => {
  //       return <Counter key={index} num={num} />;
  //     })}
  //   </React.Fragment>
  // );
  return <React.Fragment>{counterItems}</React.Fragment>;
}

const container = document.getElementById("app");
const app = <App />;

ReactDOM.render(app, container);
