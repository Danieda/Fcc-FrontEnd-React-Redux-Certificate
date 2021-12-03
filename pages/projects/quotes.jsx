import React from "react"
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { connect } from 'react-redux'
import quote from '../../fodder/quoteList.js'

const ADD = "ADD";


const addMessage = (message) => {
  return{
    type: ADD,
    message: message
  }
}

const initialState = {
  defaultQuote: quote[1]
}



const messageReducer = (state = initialState.defaultQuote,   action) => {
switch(action.type)
{
  case ADD:
    return (
      state = action.message
     )
     default:{
       return(
       state = initialState.defaultQuote
       )
     }
}
}



const store = createStore(messageReducer)

class Structure extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      quote: this.props.quote,
      name: this.props.name,
      handle: this.props.handle
    }
  }
  render(){
    return(
      <div>

<button onClick={this.state.handle}>NonWorking</button>
 

        
      </div>
    )
  }
}
class QuoteMachine extends React.Component{
  constructor(props){
    super(props)
      this.state = {
       // messages: 'Quote?',
       // names: 'Quotee NAME',
        value: 0
      }
    this.randomQuoteHandle = this.randomQuoteHandle.bind(this)
  }
  
  randomQuoteHandle(){
    this.props.submitNewQuote(quote[this.state.value])
   this.setState({
    // messages: quote[this.state.value].Quote,
     //names: quote[this.state.value].Name,
     value: Math.floor(Math.random() * quote.length)
   })
  }

  render(){
      if (!this.state.value === 0) {
        return(
      
          <div>
             
             <button onClick={this.randomQuoteHandle}>QUOTE BUTTON</button>
            <Structure quote={this.props.messages.Quote} name={this.props.messages.Name} handle={this.randomQuoteHandle}/>
                   <p>{this.props.messages.Quote}</p>
                   <p>{this.props.messages.Name}</p>
                  
             
            {Math.floor(Math.random() * quote.length)}
          </div>
        )
      }

      else{
        return(
          
          <div>
            <button onClick={this.randomQuoteHandle}>QUOTE BUTTON</button>
            <Structure quote={this.props.messages.Quote} name={this.props.messages.Name}/>
            <p>{this.props.messages.Quote}</p>
            <p>{this.props.messages.Name}</p>
            </div>
        )
      }
    
  }
}


const mapStateToProps = (state) => {
  return{messages : state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewQuote: (newQuote) => {
      dispatch(addMessage(newQuote))
    }
  }
}

const Container = connect (mapStateToProps, mapDispatchToProps)(QuoteMachine);

 class AppWrapper extends React.Component{
   render(){
     return(
        <Provider store={store}>
          <Container/>
        </Provider>
     )
   }
 }
export default AppWrapper
