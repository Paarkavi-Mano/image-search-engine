let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
let searchResult = document.getElementById("search-result");
let showMoreBTn = document.getElementById("show-more");


let keyword = "";
let page = 1;
let accessKey = "qvfb1mkvtDqTOwBbFz7g8w3wOMkadHEFO2S1t081yqY";

async function searchImages(){
    keyword = searchBox.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBTn.style.display = "block";


}

searchForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    page = 1;
    searchImages();
})

showMoreBTn.addEventListener("click", ()=>{
    page++;  
    searchImages(); //add page 2 results
})
