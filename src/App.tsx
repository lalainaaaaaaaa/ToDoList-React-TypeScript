import React from 'react';
import TodoList from './components/ToDoList';

const App: React.FC = () => {
  return (
    <div>
      <h1>ToDo List</h1>
      <TodoList />
    </div>
  );
};

export default App;