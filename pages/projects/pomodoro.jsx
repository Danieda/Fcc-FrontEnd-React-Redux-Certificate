import React from "react"
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { connect } from 'react-redux'
import quote from '../../fodder/quoteList.js'
import styles from '../../styles/pomodoro.module.css'
import Link from 'next/link'



const SESSION_MODE = 'SESSION'
const BREAK_MODE = 'BREAK'

let minutes = '25'
let seconds = '00'
let current_mode = SESSION_MODE
let inProgress = false
let finishedTime
let timerInterval


  const addSession = (status) => {
    return{
      type: SESSION_MODE,
      status:status

    }
  }
  const addBreak = (status) => {
    return{
      type: BREAK_MODE,
      status: status
    }
  }

const intitialState = {
default: 0
}


const timerReducer = (state = current_mode, action) => {
switch(action.type)
{
  case SESSION_MODE:{
return("DECREAS TIME")
  }
  case BREAK_MODE:{
      return("STOP!")
  }

}
}


const store = createStore(timerReducer)

class Structure extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
  
    return(
      <div>
<Link href="../" passHref>
            <a><h2>Back</h2></a>
          </Link>
          <hr />
          <header> <h1>Pomodoro</h1></header> 

          <div id={styles.MainBG}>
        
          <img id={styles.stem} src="/pomBGstem.png" alt=""/>
          <div id={styles.PomodoroBox}>
            <div id={styles.container}>
            <div id={styles.buttonGrid}>
              <div> <h3>Break Length: {this.props.breakTime} </h3>
              <p>
              <button id={styles.buttonStyle} onClick={this.props.breakRemove} >-</button>
              <button id={styles.buttonStyle} onClick={this.props.breakAdd} >+</button></p>
              </div>
              <div > <h3> Session Length: {this.props.timer}</h3>
              <p>
                
              <button id={styles.buttonStyle} onClick={this.props.handleRemoveCount}>-</button>
              <button id={styles.buttonStyle} onClick={this.props.handleCount}>+</button></p>
              </div>
              </div>
              <div><h3>SESSION</h3><p><h2>{this.props.timer}:{seconds}</h2></p></div>
              <button>Start/Stop</button>
              <button onClick={this.props.reset}>Reset</button>
              <button onClick={this.props.fastForward}>Fast Forward</button>
            </div>
            </div>
      
          </div>
          <footer><a href="https://github.com/Danieda/Fcc-FrontEnd-React-Redux-Certificate"><h3>View Source</h3></a></footer>
      </div>
    )
  }
}

const check = (timer) => {
        
  if(timer < 0 )
{
  timer = 0
}
else{
  return timer;
}
return timer;
}



class Pomodoro extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      timer: 10,
      breakTime: 5
    }
    this.handleAddCount = this.handleAddCount.bind(this)
    this.handleRemoveCount = this.handleRemoveCount.bind(this)
    this.handleBreakAdd = this.handleBreakAdd.bind(this)
    this.handleBreakRemove = this.handleBreakRemove.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleFastForward = this.handleFastForward.bind(this)
  }

  handleAddCount() {
    this.setState({
      timer: check(this.state.timer + 1)
    })
  }
  handleRemoveCount() {
    this.setState({
    
      timer: check(this.state.timer -1)
    })
  }
 handleBreakAdd(){
  this.setState({
    breakTime: check(this.state.breakTime + 1)
  })
 }
  handleBreakRemove(){
    this.setState({
      breakTime: check(this.state.breakTime - 1)
    })
 }
handleReset(){
  this.setState({
    timer: 10
  })
}
handleFastForward(){
  this.setState({
    timer: this.state.breakTime
    //must have a stop session maybe redux.
  })
}
 handle

  render(){
  
    return(
        <div>
        <Structure breakTime={this.state.breakTime} timer={this.state.timer} handleCount={this.handleAddCount}
         handleRemoveCount={this.handleRemoveCount} breakAdd={this.handleBreakAdd}
         breakRemove={this.handleBreakRemove} reset={this.handleReset} fastForward={this.handleFastForward}/>
     
        {this.state.timer}
        </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
   status: state
  }
}

const mapDispatchStatusToProps = (dispatch) => {
return{
  submitNewStatus: (newStatus) => {
    dispatch(addStatus(newStatus))
}
}


}



const Container = connect(mapStateToProps, mapDispatchStatusToProps)(Pomodoro);

class PomodoroWrapper extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <Container/>
      </Provider>
    )
  }
}

  export default  PomodoroWrapper