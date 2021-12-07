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
              <button>-</button>
              <button>+</button>
              <button>-</button>
              <button>+</button>
              <div>SESSION<p>0:00</p></div>
              <button>Start/Stop</button>
              <button>Reset</button>
              <button>Fast Forward</button>
            </div>
            </div>
      
          </div>
          <footer><a href="https://github.com/Danieda/Fcc-FrontEnd-React-Redux-Certificate"><h3>View Source</h3></a></footer>
      </div>
    )
  }
}


class Pomodoro extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
        <Structure/>
    )
  }
}




  export default  Pomodoro