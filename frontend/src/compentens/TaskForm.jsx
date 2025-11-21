import React, { useState } from 'react';
import '../styles/TaskForm.css'; // importa da pasta styles

function TaskForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd({ id: Date.now(), text, completed: false });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Nova tarefa (ex: Atualizar LinkedIn)"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;
