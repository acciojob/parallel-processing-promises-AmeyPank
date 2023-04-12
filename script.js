//your JS code here. If required.
const images = [
    { url: 'https://picsum.photos/200/300' },
    { url: 'https://picsum.photos/300/400' },
    { url: 'https://picsum.photos/400/500' },
    { url: 'https://picsum.photos/500/600' },
    // { url: 'https://picsum.photos/600/700' },
  ];
  
  function downloadImages(images) {
    const promises = images.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
        img.src = image.url;
      });
    });
  
    return Promise.all(promises);
  }
  
  document.getElementById('download-images-button').addEventListener('click', () => {
    downloadImages(images)
      .then(imgs => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';
        imgs.forEach(img => outputDiv.appendChild(img));
      })
      .catch(error => console.error(error));
  });
  