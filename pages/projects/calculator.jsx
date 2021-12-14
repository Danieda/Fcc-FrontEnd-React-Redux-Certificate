import React from "react"
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'
import styles from '../../styles/calculator.module.css'
import { configureStore } from "@reduxjs/toolkit";
import mexp from 'math-expression-evaluator'


const ADD = "ADD"
const CLEAR = "CLEAR"
const EQUALS =" EQUALS"

const MATH_SYMBOLS = ['*', '/', '-', '+']
const DISSALLOWED_OPERATIONS = [['.', '.' ,'*', '/', '-', '+']]

let display = 'Work In Progress'
let previousResult = undefined
let operations = []
let errorMessage = ''

const addInput = (_input) => {
return{
  type: ADD,
  _input:_input
}
}
const InitiateEquals = (_equal) => {
  return{
    type: EQUALS,
    _equal:_equal
  }
}

const InitiateClear = (_clear) => {
return{
  type: CLEAR,
  _clear:_clear
}
}
const inputReducer = (state = '', action) => {
switch(action.type)
{
  case ADD:{
    return(

addOperation(action._input)
 
    )
  }

  case CLEAR: {
    return(
      equals()
    )
  }

  case CLEAR: {
    return(
      allClear()
    )
  }
  default:{
    return(state = "...")
  }
}
}

function disallowedOperation(op) {
  return (
    DISSALLOWED_OPERATIONS.filter((disallowedOps) => {
      let previousOperation = disallowedOps[0]
      let newOperation = disallowedOps[1]
      return (
        previousOperation === operations[operations.length - 1] &&
        newOperation === op
      )
    }).length > 0
  )
}
function addOperation(op) {
  if (operations.length > 0 && disallowedOperation(op)) {
    return
  } else if (MATH_SYMBOLS.includes(op) && operations.length === 0) {
    operations = [previousResult, op]
  } else {
    operations.push(op)
  }
  errorMessage = ''
  display = operations.join('')
}

function allClear() {
  errorMessage = ''
  operations = []
  display = '0'
}
function equals() {
  try {
    let result = mexp.eval(operations.join(''))
    display = result
    previousResult = result
    operations = []
  } catch (error) {
    errorMessage = error.message
  }
}

const store = createStore(inputReducer)


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
        <header> <h1>Calculator</h1></header>
        <div id={styles.calcMain}>
          <div id={styles.calcBox}>
            <div id={styles.container} className="columns">

              <div id={styles.result}>{display}</div>
             <button id={styles.AC}><h2>AC</h2></button>
              <button id={styles.num} value={'/'} onClick={(e) => this.props.input(e, "value")}>/</button>
              <button id={styles.num} value={'*'} onClick={(e) => this.props.input(e, "value")}>*</button>
              <button id={styles.num} value={'7'} onClick={(e) => this.props.input(e, "value")}>7</button>
              <button id={styles.num} value={'8'} onClick={(e) => this.props.input(e, "value")}>8</button>
              <button id={styles.num} value={'9'} onClick={(e) => this.props.input(e, "value")}>9</button>
              <button id={styles.num} value={'-'} onClick={(e) => this.props.input(e, "value")}>-</button>
              <button id={styles.num} value={'4'} onClick={(e) => this.props.input(e, "value")}>4</button>
              <button id={styles.num} value={'5'} onClick={(e) => this.props.input(e, "value")}>5</button>
              <button id={styles.num} value={'6'} onClick={(e) => this.props.input(e, "value")}>6</button>
              <button id={styles.num} value={'+'} onClick={(e) => this.props.input(e, "value")}>+</button>
              <button id={styles.num} value={'1'} onClick={(e) => this.props.input(e, "value")}>1</button>
              <button id={styles.num} value={'2'} onClick={(e) => this.props.input(e, "value")}>2</button>
              <button id={styles.num} value={'3'} onClick={(e) => this.props.input(e, "value")}>3</button>
              <button id={styles.zero} value={'0'} onClick={this.props.input}>0</button>
              <button id={styles.num} value={'.'} onClick={(e) => this.props.input(e, "value")}>.</button>
              <button id={styles.equals} value={'='} onClick={(e) => this.props.input(e, "value")}>=</button>

            </div>
          </div>
        </div>

        <footer><a href="https://github.com/Danieda/Fcc-FrontEnd-React-Redux-Certificate"><h3>View Source</h3></a></footer>
      </div>
    )
  }
}



class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      value: ''
    }
    this.inputHandler = this.inputHandler.bind(this)
    this.resultHandler = this.resultHandler.bind(this)
    this.resultHandler = this.resultHandler.bind(this)
  }

  inputHandler(e){
  e.preventDefault()
  this.setState({
    value: e.target.value
  })
  this.props.submitNewInput(e.target.value);
  }
 clearHandler(){
   this.props.startClear()
 }
 resultHandler(){
   this.props.result()
 }
  render() {
    return (
      <div>

        <Structure value={this.state.value} input={this.inputHandler} result={this.resultHandler} clear={this.props.clearHandler}/>


      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
   additive: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    submitNewInput : (_input) => {
      dispatch(addInput(_input))  
   },
    startClear: (_clear) => {
      dispatch(InitiateClear(_clear))
    },
    result: (_equal) => {
      dispatch(InitiateEquals(_equal))
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Calculator)

class CalculatorWrapper extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <Container/>
  </Provider>
    )

  }
}

export default CalculatorWrapper
