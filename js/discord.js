document.getElementById("copyButton").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the link from navigating to another page
        
        var textToCopy = "youdi3new#0"; // The text you want to copy
        
        // Create a temporary element to hold the text
        var tempElement = document.createElement("textarea");
        tempElement.value = textToCopy;
        
        // Append the temporary element to the document
        document.body.appendChild(tempElement);
        
        // Select and copy the text
        tempElement.select();
        document.execCommand("copy");
        
        // Remove the temporary element
        document.body.removeChild(tempElement);
        
        // Optionally, provide user feedback or perform additional actions
        alert("copied to clipboard");
      });
      