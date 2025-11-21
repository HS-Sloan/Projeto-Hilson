import React, { useState } from 'react';
import '../styles/TaskItem.css';

function TaskItem({ task, onUpdate, onDelete }) {
  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleSave = () => {
    onUpdate({ ...task, text });
    setEditing(false);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <>
          <input value={text} onChange={e => setText(e.target.value)} />
          <button onClick={handleSave}>Salvar</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setEditing(true)}>Editar</button>
          <button onClick={() => onDelete(task.id)}>Remover</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
