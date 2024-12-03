// External JavaScript file to manipulate the DOM

// Function to assign the value of one node to another node
function assignNodeValue() {
    // Get the source node by its ID
    var sourceNode = document.getElementById('source');

    // Get the target node by its ID
    var targetNode = document.getElementById('target');

    // Assign the text content of the source node to the target node
    targetNode.textContent = sourceNode.textContent;
}

// Call the function to execute the assignment
assignNodeValue();

