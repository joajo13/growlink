export const getUser = async () => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const data = await response.json();
    return data;
}