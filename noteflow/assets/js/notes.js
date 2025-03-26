document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("note-input");
    const saveBtn = document.getElementById("save-note");
    const summarizeBtn = document.getElementById("summarize-note");
    const savedNotes = document.getElementById("saved-notes");
    const toggleThemeBtn = document.getElementById("toggle-theme");

    // Load saved notes
    function loadNotes() {
        const notes = localStorage.getItem("notes") || "";
        savedNotes.innerText = notes ? notes : "No saved notes.";
    }

    // Save note
    saveBtn.addEventListener("click", () => {
        const note = textarea.value.trim();
        if (!note) return;
        localStorage.setItem("notes", note);
        loadNotes();
        textarea.value = "";
    });

    // Clear notes
    document.getElementById("clear-note")?.addEventListener("click", () => {
        localStorage.removeItem("notes");
        savedNotes.innerText = "No saved notes.";
    });

    // Theme toggle
    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        toggleThemeBtn.innerText = isDark ? "🌙" : "☀️";
    });

    // Load theme
    function loadTheme() {
        const savedTheme = localStorage.getItem("theme") || "light";
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            toggleThemeBtn.innerText = "🌙";
        } else {
            toggleThemeBtn.innerText = "☀️";
        }
    }

    // AI Summarization (Mock Function)
    async function summarizeNote() {
        const noteText = textarea.value.trim();
        if (!noteText) return alert("Please enter a note to summarize.");

        summarizeBtn.innerText = "Summarizing...";
        summarizeBtn.disabled = true;

        // Fake AI Summary (Replace with API call)
        setTimeout(() => {
            savedNotes.innerText = "🔍 AI Summary: " + noteText.split(" ").slice(0, 20).join(" ") + "...";
            summarizeBtn.innerText = "Summarize with AI";
            summarizeBtn.disabled = false;
        }, 2000);
    }

    summarizeBtn.addEventListener("click", summarizeNote);

    // Initialize
    loadNotes();
    loadTheme();
});
