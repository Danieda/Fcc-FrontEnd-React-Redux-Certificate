import React from "react"
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { connect } from 'react-redux'
import quote from '../../fodder/quoteList.js'
import styles from '../../styles/quotes.module.css'
import Link from 'next/link'

const ADD = "ADD";


const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
}

const initialState = {
  defaultQuote: quote[1]
}



const messageReducer = (state = initialState.defaultQuote, action) => {
  switch (action.type) {
    case ADD:
      return (
        state = action.message
      )
    default: {
      return (
        state = initialState.defaultQuote
      )
    }
  }
}


const store = createStore(messageReducer)

class Structure extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: this.props.quote,
      name: this.props.name
    }
  }
  render() {
    return (
      <div>
        <div>
          <Link href="../" passHref>
            <a><h2>Back</h2></a>
          </Link>
          <hr />
          <header> <h1>Quote Machine</h1></header> </div>


        <div id={styles.Main}>

          <div id={styles.QuoteBox}>
            <h2>Generate a Quote</h2>
            <div id={styles.QuoteText}>

              <p>{this.props.quote}</p>
              <p>{this.props.name}</p>
            </div>
            <button id={styles.drumButton} onClick={this.props.handle} className={styles.button}>Get a Quote!</button>
            <p><a href="https://twitter.com/?lang=en" id={styles.tweet}>Tweet this quote!</a></p>
          </div>
        </div>
        <footer><a href="https://github.com/Danieda/Fcc-FrontEnd-React-Redux-Certificate"><h3>View Source</h3></a></footer>
      </div>

    )
  }
}

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // messages: 'Quote?',
      // names: 'Quotee NAME',
      value: 0
    }
    this.randomQuoteHandle = this.randomQuoteHandle.bind(this)
  }

  randomQuoteHandle() {
    this.props.submitNewQuote(quote[this.state.value])
    this.setState({
      // messages: quote[this.state.value].Quote,
      //names: quote[this.state.value].Name,
      value: Math.floor(Math.random() * quote.length)
    })
  }

  render() {
    if (!this.state.value === 0) {
      return (

        <div>


          <Structure quote={this.props.messages.Quote} name={this.props.messages.Name} handle={this.randomQuoteHandle} />



          {Math.floor(Math.random() * quote.length)}
        </div>
      )
    }

    else {
      return (

        <div>

          <Structure quote={this.props.messages.Quote} name={this.props.messages.Name} handle={this.randomQuoteHandle} />

        </div>
      )
    }

  }
}


const mapStateToProps = (state) => {
  return {
    messages: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewQuote: (newQuote) => {
      dispatch(addMessage(newQuote))
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(QuoteMachine);

class QuoteWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
export default  QuoteWrapper
