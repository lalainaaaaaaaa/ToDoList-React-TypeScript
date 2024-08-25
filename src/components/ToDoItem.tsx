import React from 'react';

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const ToDoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <div>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onToggle(todo.id)}>Toggle</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default ToDoItem;