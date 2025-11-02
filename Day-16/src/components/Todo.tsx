// TodoApp.tsx
import React, { useState } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: "Learn React basics", completed: true },
        { id: 2, text: "Build a todo app", completed: false },
        { id: 3, text: "Master TypeScript", completed: false },
    ]);

    const [inputText, setInputText] = useState<string>("");

    // Add new todo
    const addTodo = () => {
        if (inputText.trim() === "") return;

        const newTodo: Todo = {
            id: Date.now(), // Simple ID generation
            text: inputText,
            completed: false,
        };

        setTodos([...todos, newTodo]); // Immutable add
        setInputText(""); // Clear input
    };

    // Toggle completion status
    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Delete todo
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
            <h1>📝My Today's work💪🏻Stay focused⚔️</h1>

            {/* Add Todo Form */}
            <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addTodo()}
                    placeholder="Add a new task..."
                    style={{
                        flex: 1,
                        padding: "10px",
                        borderRadius: "6px",
                        border: "1px solid #ddd",
                    }}
                />
                <button
                    onClick={addTodo}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    Add
                </button>
            </div>

            {/* Todo List */}
            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "12px",
                            marginBottom: "10px",
                            backgroundColor: "#f9f9f9",
                            borderRadius: "6px",
                            border: "1px solid #ddd",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            style={{ cursor: "pointer" }}
                        />
                        <span
                            style={{
                                flex: 1,
                                textDecoration: todo.completed ? "line-through" : "none",
                                color: todo.completed ? "#999" : "#333",
                            }}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            style={{
                                padding: "6px 12px",
                                backgroundColor: "#dc3545",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {/* Summary */}
            <div style={{ marginTop: "20px", color: "#666" }}>
                <p>Total: {todos.length} tasks</p>
                <p>Completed: {todos.filter((t) => t.completed).length}</p>
                <p>Pending: {todos.filter((t) => !t.completed).length}</p>
            </div>
        </div>
    );
};

export default TodoApp;
