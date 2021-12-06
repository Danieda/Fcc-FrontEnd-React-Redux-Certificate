import React from "react"
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'
import styles from '../../styles/calculator.module.css'

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
          <header> <h1>Calculator</h1></header> 
          <div id={styles.calcMain}>
          <div id={styles.calcBox}>
            <div id={styles.container} className="columns">
          
          <div id={styles.result}>....</div>
          <button id={styles.AC}><h2>AC</h2></button>
          <button><h2>/</h2></button>
          <button><h2>*</h2></button>
          <button><h2>7</h2></button>
          <button><h2>8</h2></button>
          <button><h2>9</h2></button>
          <button><h2>-</h2></button>
          <button><h2>4</h2></button>
          <button><h2>5</h2></button>
          <button><h2>6</h2></button>
          <button><h2>+</h2></button>
          <button><h2>1</h2></button>
          <button><h2>2</h2></button>
          <button><h2>3</h2></button>
          <button id={styles.zero}><h2>0</h2></button>
          <button><h2>.</h2></button>
          <button id ={styles.equals}><h2>=</h2></button>
          
          </div>
          </div>
          </div>

          <footer><a href="https://github.com/Danieda/Fcc-FrontEnd-React-Redux-Certificate"><h3>View Source</h3></a></footer>
      </div>
    )
  }
}



class Calculator extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>

      <Structure/>


      </div>
    )
  }
}

export default Calculator
