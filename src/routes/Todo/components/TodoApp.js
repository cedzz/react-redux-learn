import React from 'react';
import VisibleTodoList from './TodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';


const TodoApp = () => (
      <div>
        <AddTodo />
        <VisibleTodoList/>
        <Footer/>
      </div>
);

export default TodoApp;
