import React from "react"
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { connect } from 'react-redux'
import styles from '../../styles/pomodoro.module.css'
import Link from 'next/link'



const SESSION_MODE = 'SESSION'
const BREAK_MODE = 'BREAK'


let current_mode = SESSION_MODE
var storedSeconds = 0
var storedTime = 10
var clearInt;


const addStatus = (status, time, playStatus, breakSess) => {
  return {
    type: status,
    status: status,
    time: time,
    playStatus: playStatus,
    breakSess: breakSess
  }
}

const timerReducer = (state = current_mode, action) => {
  switch (action.type) {
    case SESSION_MODE: {
      if (action.playStatus == "pause") {
        return (
          clearInterval(clearInt),
          Intervals(action.breakSess),
          state = SESSION_MODE
        )
      }
      else if (action.playStatus == "start") {
        return (clearInterval(clearInt),
          state = SESSION_MODE)
      }
    }
    case BREAK_MODE: {
      return (state = BREAK_MODE)
    }
    default: {
      return (state = SESSION_MODE)
    }
  }
}

const store = createStore(timerReducer)


function checkStatus(current_mode, time, play, sessEnd, breaks) {

  if (sessEnd == "true" && play == "pause") {
    return time = "--"
  }
  if (play == "reset") {
    clearInterval(clearInt)
    document.getElementById('minutes').innerHTML = "--:--";
    storedTime = time
    storedSeconds = 0
  }
  if (play == "FastForward") {
    clearInterval(clearInt)
    storedTime = breaks
    storedSeconds = 0
    document.getElementById('minutes').innerHTML = breaks + ":" + 0
  }
}



function Intervals( _breaktime) {

  var _storedSec = storedSeconds
  var intTimer = setInterval(function () {
    if(storedTime == _breaktime && _storedSec === 0)
    {
     
      clearInterval(intTimer)
    }
    document.getElementById('minutes').innerHTML = storedTime + ':' + _storedSec;
    _storedSec--;
if (_storedSec < 0 && storedTime > 1) {
      _storedSec = 59
      storedTime -= 1;
    }
  }, 1000);
  clearInt = intTimer;
}

class Structure extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Link href="../" passHref>
          <a><h2>Back</h2></a>
        </Link>
        <hr />
        <header> <h1>Pomodoro</h1></header>
        <div id={styles.MainBG}>
          <img id={styles.stem} src="/pomBGstem.png" alt="" />
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
              <div><h3>{this.props.status}</h3><p><h2 id="minutes">{checkStatus(this.props.status, this.props.timer, this.props.play, this.props.sessionEnd, this.props.breakTime)}<label id="seconds">:--</label></h2></p></div>
              <button onClick={this.props.session}>Start/Stop</button>
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

  if (timer >= 60) {
    return timer = 60
  }
  if (timer <= 0) {
    return timer = 0
  }
  else {
    return timer;
  }

}

const playStatus = (play) => {
  return play == "pause" ? play = "start" : play = "pause"
}
const oneSession = (sess, timer, play) => {
  return sess == "true" && timer > 0 && play == "start" ? sess = "true" : sess = "false"
}
class Pomodoro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 10,
      breakTime: 5,
      play: "pause",
      sessionEnd: "true",
    
    }
    this.handleAddCount = this.handleAddCount.bind(this)
    this.handleRemoveCount = this.handleRemoveCount.bind(this)
    this.handleBreakAdd = this.handleBreakAdd.bind(this)
    this.handleBreakRemove = this.handleBreakRemove.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleFastForward = this.handleFastForward.bind(this)
    this.handleStatusChange = this.handleStatusChange.bind(this)
  }
  handleStatusChange() {
    this.props.submitNewStatus(SESSION_MODE, this.state.timer, this.state.play, this.state.breakTime)
    this.setState({
      play: playStatus(this.state.play),
      sessionEnd: oneSession(this.state.sessionEnd, this.state.timer, this.state.play)
    })
  }

  handleAddCount() {
    storedTime += 1
    this.setState({
      timer: check(this.state.timer + 1)
    })
  }
  handleRemoveCount() {
    storedTime -= 1
    this.setState({
      timer: check(this.state.timer - 1),
      storedTime: this.state.timer
    })
  }
  handleBreakAdd() {
    this.setState({
      breakTime: check(this.state.breakTime + 1)
    })
  }
  handleBreakRemove() {
    this.setState({
      breakTime: check(this.state.breakTime - 1)
    })
  }
  handleReset() {
    this.setState({
      timer: 10,
      breakTime: 5,
      play:  "reset"
    })
  }
  handleFastForward() {
    this.setState({
      timer: this.state.breakTime,
      play: "FastForward"

    })
  }


  render() {
    return (
      <div>
        <Structure breakTime={this.state.breakTime} timer={this.state.timer} handleCount={this.handleAddCount}
          handleRemoveCount={this.handleRemoveCount} breakAdd={this.handleBreakAdd}
          breakRemove={this.handleBreakRemove} reset={this.handleReset} fastForward={this.handleFastForward}
          session={this.handleStatusChange} status={this.props.status} play={this.state.play} sessionEnd={this.state.sessionEnd}
          storedTime={this.state.storedTime} />
        {storedTime}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    status: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewStatus: (newStatus, time, playStatus, breakSess) => {
      dispatch(addStatus(newStatus, time, playStatus, breakSess))
    }
  }
}



const Container = connect(mapStateToProps, mapDispatchToProps)(Pomodoro);

class PomodoroWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}

export default PomodoroWrapper