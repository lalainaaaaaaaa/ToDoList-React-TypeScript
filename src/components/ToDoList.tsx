import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>('all');

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filteredTodos = () => {
    if (filter === 'completed') return todos.filter(todo => todo.completed);
    if (filter === 'active') return todos.filter(todo => !todo.completed);
    return todos;
  };

  const sortTodos = (order: 'asc' | 'desc') => {
    const sorted = [...filteredTodos()].sort((a, b) => {
      if (order === 'asc') return a.text.localeCompare(b.text);
      return b.text.localeCompare(a.text);
    });
    return sorted;
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <ToDoForm onAdd={addTodo} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setTodos(sortTodos('asc'))}>Sort Asc</button>
        <button onClick={() => setTodos(sortTodos('desc'))}>Sort Desc</button>
      </div>
      <div>
        {sortTodos('asc').map(todo => (
          <ToDoItem 
            key={todo.id} 
            todo={todo} 
            onDelete={deleteTodo} 
            onToggle={toggleTodo} 
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;