import React from 'react';
import { Link } from 'react-router-dom';
import {firebaseConnect, isLoaded} from 'react-redux-firebase';
import {connect} from 'react-redux';
import { compose } from 'redux';

// class Homepage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cards: [
//         { front: 'front1', back: 'back1' },
//         { front: 'front2', back: 'back2' },
//       ],
//       editor: true,
//     };
//   }

//   addCard = card => {
//     const cards = this.state.cards.slice().concat(card);
//     this.setState({ cards });
//   };

//   deleteCard = index => {
//     const cards = this.state.cards.slice();
//     cards.splice(index, 1);
//     this.setState({ cards });
//   };

//   switchMode = () => this.setState({ editor: !this.state.editor });

//   render() {
//     return (
//     <div>
//       <Link to="/editor">Go to card editor</Link>
//       <br/>
//       <Link to="/viewer">Go to card viewer</Link>
//     </div>
//     );
//   }
// }

// export default Homepage

const Homepage = props => {

  if (!isLoaded(props.homepage)) {
    return (
      <div>
        Loading... 
        {console.log(props.homepage)}
      </div>
    )
  }

  const decks = Object.keys(props.homepage).map(deckId => {
    return (
      <div key={deckId}>
        <Link to= {`/viewer/${deckId}`}> {props.homepage[deckId].name} </Link>
      </div>
    )
  })

  return(
    <div>
        <h2>Homepage</h2>
        <Link to = "/editor">Create a new card deck</Link>
        <br/>
        <h2>Flashcards</h2>
        {decks}
    </div>

  );
}

const mapStateToProps = (state) => {
  return(
    {homepage: state.firebase.data.homepage}
  )
}

export default compose(
  firebaseConnect(['/homepage']),
  connect(mapStateToProps))
  (Homepage);