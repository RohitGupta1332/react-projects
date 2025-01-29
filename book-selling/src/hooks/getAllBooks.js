export async function getAllBooks() {
    try {
        const username = 'rohit12@gmail.com'; // Replace with your actual username
        const password = '1234'; // Replace with your actual password
        
        const result = await fetch('http://localhost:8080/books', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }
        });
        const data = await result.json();
        return data;
    } catch (error) {
        console.error('Error fetching all books:', error);
        throw error; // Re-throw the error to handle it in the component
    }
}
