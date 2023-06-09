import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';

function App() {
  const TODO_V1_LOCALSTORAGE = 'TODO_V1';  
  const [todos, saveTodo] = useLocalStorage(TODO_V1_LOCALSTORAGE, []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newItem = [...todos];
    const indexTodo = newItem.findIndex(
      (todo) => todo.text === text
    );
    newItem[indexTodo].completed = true;
    saveTodo(newItem);
  }

  const deleteTodo = (text) => {
    const newItem = [...todos];
    const indexTodo = newItem.findIndex(
      (todo) => todo.text === text
    );    
    newItem.splice(indexTodo,1);
    saveTodo(newItem);
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
     </>
  );
  }

export default App;
