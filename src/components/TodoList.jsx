import { useState } from "react";

function TodoList() {
  // State Management Section
  // 1. todos: Array of todo objects, each with {id, text}
  // - Using useState([]) to initialize an empty array
  // - setTodos is used to update the todos array immutably
  const [todos, setTodos] = useState([]);

  // 2. inputValue: String to track input field content
  // - useState('') initializes empty string
  // - setInputValue updates on every keystroke
  const [inputValue, setInputValue] = useState("");

  // 3. editingId: Tracks which todo is being edited
  // - null means no todo is being edited
  // - When set to a todo.id, that todo enters edit mode
  const [editingId, setEditingId] = useState(null);

  // Event Handlers Section
  // Handles input field changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Updates inputValue state with each keystroke
  };

  // Adds a new todo when conditions are met
  const addTodo = () => {
    // Guard clause: Prevent adding empty todos
    if (!inputValue.trim()) return;

    // Create new todo with unique ID and trimmed text
    const newTodo = {
      id: Date.now(), // Unique ID using timestamp
      text: inputValue.trim(), // Remove whitespace
    };

    // Update todos array immutably by spreading previous todos
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    // Reset input field
    setInputValue("");
  };

  // Removes a todo by filtering it out
  const deleteTodo = (id) => {
    // Filter keeps all todos except the one matching the id
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Toggles edit mode for a todo
  const toggleEdit = (id) => {
    // If already editing this todo, exit edit mode
    // Otherwise, enter edit mode for this todo
    setEditingId((currentId) => (currentId === id ? null : id));
  };

  // Updates todo text and exits edit mode
  const updateTodo = (id, newText) => {
    // Skip update if text is empty
    if (!newText.trim()) return;

    // Map through todos, update matching todo
    setTodos((prevTodos) =>
      prevTodos.map(
        (todo) =>
          todo.id === id
            ? { ...todo, text: newText.trim() } // Update matched todo
            : todo // Keep others unchanged
      )
    );

    // Exit edit mode
    setEditingId(null);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Todo List Practice
      </h2>

      {/* Input form with controlled input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Add a new todo"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>

      {/* Dynamic todo list */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 p-2 border rounded-lg"
          >
            {editingId === todo.id ? (
              // Edit mode: Show input field
              <input
                type="text"
                defaultValue={todo.text}
                onBlur={(e) => updateTodo(todo.id, e.target.value)}
                className="flex-1 px-2 py-1 border rounded"
                autoFocus
              />
            ) : (
              // Display mode: Show todo text
              <span className="flex-1">{todo.text}</span>
            )}
            <button
              onClick={() => toggleEdit(todo.id)}
              className="text-blue-500 hover:text-blue-600"
            >
              {editingId === todo.id ? "Save" : "Edit"}
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
