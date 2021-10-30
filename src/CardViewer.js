import React from 'react';

class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { front: true, index: 0};
  }

  next = () => {
    if ((this.state.index + 1) < (this.props.cards.length)) {
      (console.log(this.state.index))
      this.setState({ index: this.state.index + 1 })
    }
  }

  back = () => {
    if ((this.state.index) > 0) {
      (console.log(this.state.index))
      this.setState({ index: this.state.index - 1 })
    }
  }

  flipCard = i => {
    if (this.state.front === true) {
      this.setState({ front: false })
    }
    else {
      this.setState({ front: true })
    }
  }

  render() {
    return (
      <div>
        <h2>Card Viewer</h2>
        <hr />
        <button onClick={this.flipCard}>
          {this.state.front?(this.props.cards[this.state.index].front): (this.props.cards[this.state.index].back)}
        </button>
        <hr/>
        <br />
        <button onClick={this.next}> Next </button>
        <button onClick={this.back}> Back </button>
        <br />
        {this.state.index + 1} / {this.props.cards.length}
        <br />
        <button onClick={this.props.switchMode}>Go to card editor</button>
      </div>
    );
  }
}

export default CardViewer;