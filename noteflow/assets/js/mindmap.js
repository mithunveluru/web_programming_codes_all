document.addEventListener("DOMContentLoaded", () => {
    const mindmap = document.getElementById("mindmap");
    const addNodeBtn = document.getElementById("add-node");
    const clearMapBtn = document.getElementById("clear-map");
    const themeToggle = document.getElementById("toggle-theme");
    let darkMode = localStorage.getItem("dark-mode") === "enabled";

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("dark-mode", darkMode ? "enabled" : "disabled");
    }

    themeToggle.addEventListener("click", () => {
        darkMode = !darkMode;
        toggleDarkMode();
    });

    toggleDarkMode();

    function createNode(x, y, text = "New Node") {
        const node = document.createElement("div");
        node.className = "mindmap-node";
        node.innerText = text;
        node.style.left = `${x}px`;
        node.style.top = `${y}px`;
        node.draggable = true;

        node.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", null);
            node.dataset.offsetX = e.offsetX;
            node.dataset.offsetY = e.offsetY;
        });

        node.addEventListener("dragend", (e) => {
            node.style.left = `${e.pageX - node.dataset.offsetX}px`;
            node.style.top = `${e.pageY - node.dataset.offsetY}px`;
        });

        node.addEventListener("dblclick", () => {
            const newText = prompt("Edit Node:", node.innerText);
            if (newText) node.innerText = newText;
        });

        mindmap.appendChild(node);
    }

    // Add some wild and cool starter nodes 🔥
    const presetNodes = [
        { x: 100, y: 50, text: "🚀 Big Ideas" },
        { x: 300, y: 150, text: "📌 To-Do List" },
        { x: 500, y: 200, text: "💡 Random Thoughts" },
        { x: 200, y: 300, text: "🔥 Motivation" },
        { x: 400, y: 400, text: "💭 Deep Thinking" },
        { x: 600, y: 50, text: "📖 Study Topics" },
        { x: 750, y: 300, text: "🤖 AI Concepts" },
        { x: 500, y: 500, text: "🛠 Project Ideas" },
        { x: 250, y: 500, text: "🎯 Goals" },
    ];

    presetNodes.forEach(({ x, y, text }) => createNode(x, y, text));

    addNodeBtn.addEventListener("click", () => {
        createNode(350, 250);
    });

    clearMapBtn.addEventListener("click", () => {
        mindmap.innerHTML = "";
    });
});
