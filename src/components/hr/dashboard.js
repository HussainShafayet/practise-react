import React, { Component } from 'react';
import Calculator from '../lifting-state/calculator';
import Section from '../Section';
import ThemeContext from '../../contexts/themeContext';
import TodoClass from '../hook/TodoClass';
import Todo from '../hook/Todo';


export default class Dashboard extends Component {
  state = {
    theme : 'dark'
  }
  switchTheme = () => {
    this.setState({
      theme : this.state.theme === 'dark' ? 'light' : 'dark'
    })
  }
  render() {
    const { theme } = this.state;
    return (
      <div>
        {/* <Calculator /> */}
{/*         
        <ThemeContext.Provider value={{theme,switchTheme:this.switchTheme}}>
          <Section />
        </ThemeContext.Provider> */}
        <TodoClass />
        <Todo />
      </div>
    )
  }
}
