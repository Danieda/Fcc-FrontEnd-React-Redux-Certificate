import React from "react"
import { Provider } from "react-redux";

const ADD = "ADD";

const addMessage = (message) => {
  return{
    type: 'ADD',
    message: message
  }
}

const messageReducer = (state = [], action) => {
switch(action.type)
{
  case ADD:
    return []
}
}



const store = Redux.createStore(messageReducer)

class QuoteMachine extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        messages: []
      }
    
  }
  
  randomQuoteHandle(){

  }

  render(){

    return(
      <div>
         
      </div>
    )
  }
}


function Quotes() {
  return <h1>Quote Machine</h1>
}
const arrQuote = [
  {
    Quote:"Don't need to say please to no man for a happy tune.",
    Name:"Neil Diamond (1941 - ), Cracklin' Rose"
  },
  {
    Quote:"In modern America, anyone who attempts to write satirically about the events of the day finds it difficult to concoct a situation so bizarre that it may not actually come to pass while the article is still on the presses.",
   Name:"Calvin Trillin (1935 - )"
  },
  {
    Quote:"While there's life, there's hope.",
    Name:"Cicero (106 BC - 43 BC), Ad Atticum"
  },
 {
   Quote:"You only live once - but if you work it right, once is enough.",
   Name:"Joe E. Lewis"
 },
 {
   Quote:"If you forgo your plan, you also have to forgo fear.",
   Name:"Eric Schmidt, University of Pennsylvania Commencement Address, 2009"
 },
 {
   Quote:"Waste not fresh tears over old griefs.",
   Name:"Euripides (484 BC - 406 BC)"
 },
 {
   Quote:"The one thing more difficult than following a regimen is not imposing it on others.",
   Name:"Marcel Proust (1871 - 1922)"
 },
 {
   Quote:"We judge ourselves by what we feel capable of doing, while others judge us by what we have already done.",
   Name:"Henry Wadsworth Longfellow (1807 - 1882)"
 },
 {
   Quote:"About the only thing that comes to us without effort is old age.",
   Name:"Gloria Pitzer, in Reader's Digest, 1979"
 },
 {
   Quote:"Humor is just another defense against the universe.",
   Name:"Mel Brooks (1926 - )"
 },
 {
   Quote:"Everyone's a hero in their own way, in their own not that heroic way.",
   Name:"Joss Whedon, Zack Whedon, Maurissa Tancharoen, and Jed Whedon, Dr. Horrible's Sing Along Blog, 2008"
 }
 ]

 const randQuote = arrQuote[Math.random(arrQuote.length -1)]
 
export default QuoteMachine
