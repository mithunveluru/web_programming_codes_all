document.addEventListener("DOMContentLoaded", function () {
    let noteInput = document.getElementById("note-input");
    let saveBtn = document.getElementById("save-note");
    let summarizeBtn = document.getElementById("summarize-note");
    let savedNotes = document.getElementById("saved-notes");

    const GROQ_API_KEY = "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"; // Paste your key here!

    // Save note to localStorage
    saveBtn.addEventListener("click", function () {
        let noteText = noteInput.value.trim();
        if (noteText) {
            localStorage.setItem("savedNote", noteText);
            displaySavedNote();
            alert("Note saved!");
        } else {
            alert("Write something before saving!");
        }
    });

    // Fetch AI-powered summary using Groq API
    summarizeBtn.addEventListener("click", async function () {
        let noteText = noteInput.value.trim();
        if (!noteText) {
            alert("Write something before summarizing!");
            return;
        }

        try {
            let response = await fetch("https://api.groq.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    model: "mixtral-8x7b-32768",  // Or "mixtral-8x7b-32768" for better results
                    messages: [
                        { role: "system", content: "You are an AI that summarizes text concisely." },
                        { role: "user", content: `Summarize this: ${noteText}` }
                    ]
                })
            });

            let data = await response.json();

            if (data.choices && data.choices.length > 0) {
                let summary = data.choices[0].message.content;
                let summaryDiv = document.createElement("div");
                summaryDiv.innerHTML = `<p><strong>Summary:</strong> ${summary}</p>`;
                savedNotes.appendChild(summaryDiv);

            } else {
                alert("Summarization failed. Try again!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong! Check console for details.");
        }
    });

    // Display saved note on load
    function displaySavedNote() {
        let storedNote = localStorage.getItem("savedNote");
        if (storedNote) {
            savedNotes.innerHTML = `<p><strong>Saved Note:</strong> ${storedNote}</p>`;
        } else {
            savedNotes.innerHTML = `<p>No saved notes.</p>`;
        }
    }

    displaySavedNote();
});
