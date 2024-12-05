export const fetchImageUrl = async () => {
    try {
        const randomId = Math.floor(Math.random() * 5000) + 1;
        const url = `https://jsonplaceholder.typicode.com/photos/${randomId}`;
        console.log('Fetching image from:', url);

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}`);

        const data = await response.json();
        return data?.thumbnailUrl || 'error.jpg';
    } catch (error) {
        console.error('Ошибка загрузки картинки:', error);
        return 'error.jpg';
    }
};

export const fetchImageForCard = async (card) => {
    const imageElement = card.querySelector('.wine-image');

    try {
        const randomId = Math.floor(Math.random() * 5000) + 1;
        const url = `https://jsonplaceholder.typicode.com/photos/${randomId}`;

        const response = await fetch(url);

        const data = await response.json();
        const imageUrl = data?.thumbnailUrl || 'error.jpg';

        const realImage = new Image();
        realImage.src = imageUrl;

        realImage.onload = () => {
            imageElement.src = imageUrl;
        };

        realImage.onerror = () => {
            imageElement.src = 'error.jpg';
        };
    } catch (error) {
        console.error('Ошибка загрузки картинки:', error);
    }
};
