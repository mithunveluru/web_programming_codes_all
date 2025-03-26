document.addEventListener("DOMContentLoaded", () => {
    const mindmap = document.getElementById("mindmap");
    const edgesContainer = document.getElementById("edges");
    const addNodeBtn = document.getElementById("add-node");
    const connectNodesBtn = document.getElementById("connect-nodes");
    const clearMapBtn = document.getElementById("clear-map");
    const themeToggle = document.getElementById("toggle-theme");
    let darkMode = localStorage.getItem("dark-mode") === "enabled";

    let nodes = [];
    let edges = [];

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

        node.dataset.id = nodes.length;
        nodes.push(node);

        node.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", null);
            node.dataset.offsetX = e.offsetX;
            node.dataset.offsetY = e.offsetY;
        });

        node.addEventListener("dragend", (e) => {
            node.style.left = `${e.pageX - node.dataset.offsetX}px`;
            node.style.top = `${e.pageY - node.dataset.offsetY}px`;
            updateEdges();
        });

        node.addEventListener("dblclick", () => {
            const newText = prompt("Edit Node:", node.innerText);
            if (newText) node.innerText = newText;
        });

        mindmap.appendChild(node);
        return node;
    }

    function createEdge(nodeA, nodeB) {
        const edge = document.createElementNS("http://www.w3.org/2000/svg", "line");
        edge.setAttribute("stroke", "#ff4081");
        edge.setAttribute("stroke-width", "2");
        edge.dataset.from = nodeA.dataset.id;
        edge.dataset.to = nodeB.dataset.id;
        edges.push(edge);
        edgesContainer.appendChild(edge);
        updateEdges();
    }

    function updateEdges() {
        edges.forEach(edge => {
            const nodeA = nodes[edge.dataset.from];
            const nodeB = nodes[edge.dataset.to];
            if (nodeA && nodeB) {
                const x1 = nodeA.offsetLeft + nodeA.offsetWidth / 2;
                const y1 = nodeA.offsetTop + nodeA.offsetHeight / 2;
                const x2 = nodeB.offsetLeft + nodeB.offsetWidth / 2;
                const y2 = nodeB.offsetTop + nodeB.offsetHeight / 2;

                edge.setAttribute("x1", x1);
                edge.setAttribute("y1", y1);
                edge.setAttribute("x2", x2);
                edge.setAttribute("y2", y2);
            }
        });
    }

    connectNodesBtn.addEventListener("click", () => {
        if (nodes.length < 2) return alert("You need at least two nodes to connect!");
        const nodeA = nodes[nodes.length - 2];
        const nodeB = nodes[nodes.length - 1];
        createEdge(nodeA, nodeB);
    });

    addNodeBtn.addEventListener("click", () => {
        createNode(350, 250);
    });

    clearMapBtn.addEventListener("click", () => {
        mindmap.innerHTML = "";
        edgesContainer.innerHTML = "";
        nodes = [];
        edges = [];
    });

    // Add some starter nodes & connections
    const presetNodes = [
        { x: 100, y: 50, text: "🚀 Big Ideas" },
        { x: 300, y: 150, text: "📌 To-Do List" },
        { x: 500, y: 200, text: "💡 Random Thoughts" },
        { x: 200, y: 300, text: "🔥 Motivation" },
        { x: 400, y: 400, text: "💭 Deep Thinking" },
    ];

    presetNodes.forEach(({ x, y, text }) => createNode(x, y));

    // Pre-connect first few nodes
    createEdge(nodes[0], nodes[1]);
    createEdge(nodes[1], nodes[2]);
    createEdge(nodes[2], nodes[3]);
    createEdge(nodes[3], nodes[4]);
});
