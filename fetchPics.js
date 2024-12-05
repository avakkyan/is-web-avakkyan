export const fetchImageUrl = () => {
    return new Promise((resolve, reject) => {
        const randomId = Math.floor(Math.random() * 5000) + 1;
        const url = `https://jsonplaceholder.typicode.com/photos/${randomId}`;
        console.log('Fetching image from:', url);

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const imageUrl = data?.thumbnailUrl || 'error.jpg';
                resolve(imageUrl);
            })
            .catch((error) => {
                console.error('Ошибка загрузки картинки:', error);
                resolve('error.jpg');
            });
    });
};

export const fetchImageForCard = (card) => {
    const imageElement = card.querySelector('.wine-image');

    return new Promise((resolve, reject) => {
        const randomId = Math.floor(Math.random() * 5000) + 1;
        const url = `https://jsonplaceholder.typicode.com/photos/${randomId}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const imageUrl = data?.thumbnailUrl || 'error.jpg';

                const realImage = new Image();
                realImage.src = imageUrl;

                realImage.onload = () => {
                    imageElement.src = imageUrl;
                    resolve();
                };

                realImage.onerror = () => {
                    imageElement.src = 'error.jpg';
                    reject();
                };
            })
            .catch((error) => {
                console.error('Ошибка загрузки картинки:', error);
                imageElement.src = 'error.jpg';
                reject();
            });
    });
};
