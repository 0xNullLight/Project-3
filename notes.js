document.addEventListener("DOMContentLoaded", () => {
    // Sample markdown files array (in a real application, this could be dynamic)
    const markdownFiles = [
        { name: "Django For JavaScript Developers", url: "./markdown/Django_for_JavaScript_Developers.md" },
        { name: "Installing Virtual Environment for Python in Visual Studio to Work on Django (Windows, macOS, Linux)", url: "./markdown/Installing_Virtual_Environment_for_Python_in_Visual_Studio_to_Work_on_Django.md" },
        { name: "Navigating Python with Visual Studio and Jupyter Lab Extension: The Essential Functions You Won't Find in Textbooks", url: "./markdown/Navigating_Python_&_Jupyter_Lab_Extension:The_Essential_Functions_You_Won't_Find_in_Textbooks.md" },
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
