import React from "react"
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'
import styles from '../../styles/calculator.module.css'
import { configureStore } from "@reduxjs/toolkit";
import mexp from 'math-expression-evaluator'


const ADD = "ADD"

let display = '0'
let previousResult = undefined
let operations = []
let errorMessage = ''

const addInput = (input) => {
return{
  input:input
}
}

const inputReducer = (state = '', action) => {
switch(action.type)
{
  case ADD:{
    return(state)
  }
  default:{
    return("def")
  }
}
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

              <div id={styles.result}>Work in Progress</div>
              <button id={styles.AC}><h2>AC</h2></button>
              <button><h2 id={styles.num}>/</h2></button>
              <button><h2 id={styles.num}>*</h2></button>
              <button><h2 id={styles.num}>7</h2></button>
              <button><h2 id={styles.num}>8</h2></button>
              <button><h2 id={styles.num} >9</h2></button>
              <button><h2 id={styles.num}>-</h2></button>
              <button><h2 id={styles.num}>4</h2></button>
              <button><h2 id={styles.num}>5</h2></button>
              <button><h2 id={styles.num}>6</h2></button>
              <button><h2 id={styles.num}>+</h2></button>
              <button><h2 id={styles.num}>1</h2></button>
              <button><h2 id={styles.num}>2</h2></button>
              <button><h2 id={styles.num}>3</h2></button>
              <button id={styles.zero}><h2>0</h2></button>
              <button><h2>.</h2></button>
              <button id={styles.equals}><h2>=</h2></button>

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
    this.inputHandler = this.inputHandler.bind(this)
  }

  inputHandler(){
  this.props.addInput(this.props.additive);
  }

  render() {
    return (
      <div>

        <Structure input={this.inputHandler}/>


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
    submitNewInput : (input) => {
      dispatch(addInput(input))
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
