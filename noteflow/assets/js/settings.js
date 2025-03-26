document.addEventListener("DOMContentLoaded", function () {
    let themeToggle = document.getElementById("theme-toggle");
    let fontSizeSelect = document.getElementById("font-size");
    let resetDataBtn = document.getElementById("reset-data");
    let apiKeyInput = document.getElementById("api-key");
    let saveApiKeyBtn = document.getElementById("save-api-key");

    // Function to apply dark mode
    function applyTheme() {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "Disable Dark Mode";
        } else {
            document.body.classList.remove("dark-mode");
            themeToggle.textContent = "Enable Dark Mode";
        }
    }

    // Toggle dark mode
    themeToggle.addEventListener("click", function () {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "Enable Dark Mode";
        } else {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "Disable Dark Mode";
        }
    });

    // Apply theme on page load
    applyTheme();

    // Font Size Change
    fontSizeSelect.addEventListener("change", function () {
        document.body.style.fontSize = this.value === "small" ? "14px" : this.value === "large" ? "18px" : "16px";
        localStorage.setItem("fontSize", this.value);
    });

    if (localStorage.getItem("fontSize")) {
        fontSizeSelect.value = localStorage.getItem("fontSize");
        document.body.style.fontSize = fontSizeSelect.value === "small" ? "14px" : fontSizeSelect.value === "large" ? "18px" : "16px";
    }

    // Reset Notes Data
    resetDataBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to clear all saved notes? This cannot be undone.")) {
            localStorage.removeItem("notes");
            alert("All notes have been cleared.");
        }
    });

    // Save API Key
    saveApiKeyBtn.addEventListener("click", function () {
        let key = apiKeyInput.value.trim();
        if (key) {
            localStorage.setItem("apiKey", key);
            alert("API Key saved successfully.");
        } else {
            alert("Please enter a valid API Key.");
        }
    });

    if (localStorage.getItem("apiKey")) {
        apiKeyInput.value = localStorage.getItem("apiKey");
    }
});
