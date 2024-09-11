window.onload = async () => {
    // Get the button element with ID 'getcat'
    var catButton = document.getElementById("getcat"); // Change the button ID to 'getcat'

    // Define the URL for the Cat API
    const catApi = "https://api.thecatapi.com/v1/images/search"; // Use Cat API

    // Fetch and display a random cat image on page load
    await fetch(catApi) // Use fetch() to make a network request to the Cat API
        .then((res) => res.json()) // Convert the response to JSON format
        .then((data) => {
            var newCat = document.createElement("img"); // Create a new image element
            newCat.src = data[0].url; // Set the src attribute to the URL of the cat image
            document.getElementById("container").appendChild(newCat); // Append the image to the container
        });

    // Set up an event listener to fetch and display a new cat image when the button is clicked
    catButton.addEventListener("click", async () => {
        document.getElementById("container").innerHTML = null; // Clear the container before adding a new image

        await fetch(catApi) // Use fetch() to make a network request to the Cat API
            .then((res) => res.json()) // Convert the response to JSON format
            .then((data) => {
                var newCat = document.createElement("img"); // Create a new image element
                newCat.src = data[0].url; // Set the src attribute to the URL of the cat image
                document.getElementById("container").appendChild(newCat); // Append the image to the container
            });
    });
};
