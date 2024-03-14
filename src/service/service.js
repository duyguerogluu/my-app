const API_URL = 'https://randomuser.me/api/?results=5';

export const getDeneme = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Deneme getirirken bir hata oluştu:', error);
        throw error;
    }
};
