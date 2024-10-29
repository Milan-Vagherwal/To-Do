// Grabs references to the input box and the container for the task list
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something"); // Alert if no input
    } else {
        // Create a new list item element
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Set its text to the input box's value
        listContainer.appendChild(li); // Add the list item to the container

        // Create a delete button using a span element
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode character for '×'
        li.appendChild(span); // Append the delete button to the list item
    }
    inputBox.value = ''; // Clear the input box after adding the task
    saveData(); // Save the current list to local storage
}

// Event listener to handle task completion and deletion
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class when a task is clicked
        e.target.classList.toggle("checked");
        saveData(); // Update local storage with the modified list
    } else if (e.target.tagName === "SPAN") {
        // Remove the task if the delete button (span) is clicked
        e.target.parentElement.remove();
        saveData(); // Update local storage after deletion
    }
}, false);

// Save the current list's HTML to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load tasks from local storage and display them on the page
function showTask() {
    // Retrieve stored data and set it as the HTML for the list container
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); // Call showTask to load tasks when the page is first loaded
