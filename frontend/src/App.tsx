import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Todo } from './types/todo';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [editText, setEditText] = useState('');

  // API URL
  const API_URL = 'http://localhost:8000/api/todos/';

  // Fetch todos from backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Load todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Add new todo
  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const response = await axios.post(API_URL, {
        title: newTodo,
        status: 'offen'
      });
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Delete todo
  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // Update todo status
  const updateTodoStatus = async (todo: Todo, newStatus: Todo['status']) => {
    try {
      const response = await axios.patch(`${API_URL}${todo.id}/`, {
        ...todo,
        status: newStatus
      });
      setTodos(todos.map(t => t.id === todo.id ? response.data : t));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  // Start editing a todo
  const startEditing = (todo: Todo) => {
    setEditingTodo(todo);
    setEditText(todo.title);
  };

  // Save edited todo
  const saveEdit = async () => {
    if (!editingTodo || !editText.trim()) return;

    try {
      const response = await axios.patch(`${API_URL}${editingTodo.id}/`, {
        ...editingTodo,
        title: editText
      });
      setTodos(todos.map(t => t.id === editingTodo.id ? response.data : t));
      setEditingTodo(null);
      setEditText('');
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  // Get status color
  const getStatusColor = (status: Todo['status']) => {
    switch (status) {
      case 'offen':
        return 'bg-yellow-100 text-yellow-800';
      case 'in_bearbeitung':
        return 'bg-blue-100 text-blue-800';
      case 'erledigt':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12" style={{
      backgroundImage: "url('/images/hintergrund.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="relative py-3 mb-80 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white/100 shadow-lg sm:rounded-3xl sm:p-20 min-h-[750px]">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-7xl font-bold text-center mb-8 text-green-600">Todo Liste</h1>
                
                {/* Add Todo Form */}
                <form onSubmit={addTodo} className="mt-8">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                      placeholder="Neue Aufgabe hinzufügen..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                    >
                      Hinzufügen
                    </button>
                  </div>
                </form>

                {/* Todo List */}
                <div className="mt-6 space-y-4">
                  {todos.map(todo => (
                    <div
                      key={todo.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        {editingTodo?.id === todo.id ? (
                          <div className="flex gap-2 flex-1">
                            <input
                              type="text"
                              value={editText}
                              onChange={(e) => setEditText(e.target.value)}
                              className="flex-1 px-2 py-1 border border-gray-300 rounded-md"
                              autoFocus
                            />
                            <button
                              onClick={saveEdit}
                              className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                            >
                              Speichern
                            </button>
                            <button
                              onClick={() => setEditingTodo(null)}
                              className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                            >
                              Abbrechen
                            </button>
                          </div>
                        ) : (
                          <>
                            <span className="text-gray-700">{todo.title}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(todo.status)}`}>
                              {todo.status}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <select
                          value={todo.status}
                          onChange={(e) => updateTodoStatus(todo, e.target.value as Todo['status'])}
                          className="px-2 py-1 border border-gray-300 rounded-md text-sm"
                        >
                          <option value="offen">Offen</option>
                          <option value="in_bearbeitung">In Bearbeitung</option>
                          <option value="erledigt">Erledigt</option>
                        </select>
                        {editingTodo?.id !== todo.id && (
                          <button
                            onClick={() => startEditing(todo)}
                            className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center gap-2"
                            title="Bearbeiten"
                          >
                            ✎ 
                          </button>
                        )}
                        <button
                          onClick={() => deleteTodo(todo.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center gap-2"
                        >
                          ✖️ 
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


