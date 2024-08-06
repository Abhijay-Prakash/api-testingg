
const handleSubmit = async (e) => {
    e.preventDefault()
    const input = document.getElementById('name');
    const inputValue= input.value;
    
    console.log(inputValue);

    try {
       
        const response = await fetch('https://api-testing-xbq8.onrender.com/api/courses', {
            method: 'POST', // Specify the request method
            headers: {
                'Content-Type': 'application/json', // Set the request headers
            },
            body: JSON.stringify({ id:5,name: inputValue }), // Convert the input value to a JSON string and send it in the request body
        });

        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
        }

        // Parse the response data as JSON
        const data = await response.json();

        // Log the data to the console (or use it as needed)
        console.log(data);

        // Optionally, you can return the data or use it in some way
        return data;
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('Error posting data:', error);
    }
};

const fetchData = async (e)=>{
    e.preventDefault();
    const response = await fetch('https://api-testing-xbq8.onrender.com/api/courses/5');
    const data = await response.json();
    console.log(data);

}

    // Optionally, you can return the data or use it in some wa

// Example HTML element
// <input type="text" id="name" value="Sample Name">

// Call the getData function
