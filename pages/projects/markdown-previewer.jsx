import React from "react"
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'
import styles from '../../styles/markdown.module.css'


const ADD = 'ADD'

const AddInput = (input) => {
  return {
    type: ADD,
    input: input
  }
}

const defaultState = {
  default: 'inputtext'
}

const InputReducer = (state = defaultState.default, action) => {
  switch (action.type) {
    case ADD:
      {
        return(
          state = action.input
        )
       
      }
      default:{
        return(
          state = defaultState.default
        )
       
      }
  }
}

class Structure extends React.Component {
  constructor(props) {
    super(props)

  }
  markup(){
    return {
      __html: this.props.value
    }
  }
  render() {
 
    return (
      <div>
        <div className="html-editor">
          <Link href="../" passHref>
            <a><h2>Back</h2></a>
          </Link>
          <hr />
          <header> <h1>Markdown Previewer</h1></header>

        </div>

        <div className='column' id={styles.holder}>
          <textarea type="text" value={inputtext} id={styles.InputBox} className="row" />
          <div className="row" id={styles.InputResult}>{this.props.value}</div>
        
        </div>
        <div  className="html-editor__content" dangerouslySetInnerHTML={{__html:this.markup().__html}}></div>
        <footer><a href="https://github.com/Danieda/Fcc-FrontEnd-React-Redux-Certificate"><h3>View Source</h3></a></footer>
      </div>
    )
  }
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: inputtext
    }
  }

  inputHandler(events) {
    this.props.AddInput(value)
    this.setState({
      value: events.target.value
    
    })
  }
  

  render() {
    return (
      <div>
        <Structure value={this.state.value} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    messages: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    submitNewMessage: (newInput) => {
      dispatch(AddInput(newInput))
    }
  }

}
const store = createStore(InputReducer)
const Container = connect(mapStateToProps, mapDispatchToProps)(MarkdownPreviewer)


class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}

const inputtext = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
export default AppWrapper
