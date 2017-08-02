import React from 'react';
import VisibleTodoList from './TodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';


const TodoApp = ({ store }) => (
      <div>
        <AddTodo store={store} />
        <VisibleTodoList store={store} />
        <Footer store={store}/>
      </div>
);

export default TodoApp;
