document.addEventListener("DOMContentLoaded", function () {
    const noteInput = document.getElementById("note-input");
    const saveBtn = document.getElementById("save-note");
    const summarizeBtn = document.getElementById("summarize-note");
    const savedNotes = document.getElementById("saved-notes");

    // Load saved notes from localStorage
    function loadNotes() {
        savedNotes.innerHTML = localStorage.getItem("savedNotes") || "No saved notes yet.";
    }

    loadNotes();

    // Save Notes to localStorage
    saveBtn.addEventListener("click", function () {
        let note = noteInput.value.trim();
        if (note) {
            localStorage.setItem("savedNotes", note);
            savedNotes.innerHTML = note;
            noteInput.value = "";
        }
    });

    // AI Summarization (Mock API Call)
    summarizeBtn.addEventListener("click", function () {
        let note = noteInput.value.trim();
        if (!note) {
            alert("Write something before summarizing!");
            return;
        }

        summarizeBtn.innerText = "Summarizing...";
        summarizeBtn.disabled = true;

        // Simulating AI summarization (Replace with actual API call)
        setTimeout(() => {
            let summary = "This is a summarized version of your note: " + note.slice(0, 100) + "...";
            savedNotes.innerHTML = summary;
            summarizeBtn.innerText = "Summarize with AI";
            summarizeBtn.disabled = false;
        }, 2000);
    });
});
