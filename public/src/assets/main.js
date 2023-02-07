const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC_CJj7UOJnbZ9AwfyFP9yug&part=snippet%2Cid&order=date&maxResults=3';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ae489aa605mshca5e118e7790ccep1d13b3jsndea8db2ef800',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content')

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `${videos.items.map(video => 
            `<div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            <a href="https://youtu.be/${video.id.videoId}" target="_blank"></div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
          </div>
          `).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})()