document.addEventListener("DOMContentLoaded", () => {
    // Sample markdown files array (in a real application, this could be dynamic)
    const markdownFiles = [
        { name: "Django Installation & Setting up a Project", url: "./markdown/Django_for_JavaScript_Developers.md" }
    ];
    
    const dropdownEl = document.getElementById("file-dropdown");
    const markdownContentEl = document.getElementById("markdown-content");

    // Set default content
    markdownContentEl.innerHTML = "Select a markdown";

    // Add default option to the dropdown
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "--Select--";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    dropdownEl.appendChild(defaultOption);

    // Populate the dropdown menu with actual options
    markdownFiles.forEach(file => {
        const optionEl = document.createElement("option");
        optionEl.value = file.url;
        optionEl.textContent = file.name;
        dropdownEl.appendChild(optionEl);
    });

    dropdownEl.addEventListener("change", (event) => {
        const selectedUrl = event.target.value;
        if (selectedUrl) {
            fetch(selectedUrl)
                .then(response => response.text())
                .then(text => {
                    markdownContentEl.innerHTML = marked.parse(text);
                })
                .catch(error => console.error("Error loading Markdown file:", error));
        } else {
            markdownContentEl.innerHTML = "Select a markdown";
        }
    });
});
