// src/components/Note.jsx
import React from "react";
import "../styles/Index.css";

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

    return (
        <div className="note-container bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="note-title text-xl font-semibold">{note.title}</p>
            <p className="note-content text-gray-300 mt-2">{note.content}</p>
            <p className="note-date text-sm text-gray-500 mt-2">{formattedDate}</p>
            <button
                className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm transition-all hover:bg-gray-50 hover:text-gray-900 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-red-400"
                onClick={() => onDelete(note.id)}
            >
                Delete
            </button>

        </div>
    );
}

export default Note;


