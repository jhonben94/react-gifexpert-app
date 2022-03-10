export const getGifs= async(categoria)=>{ 
    const API_KEY= "ybcAiKNEJlQjw1bd2OgoHa071a0cOOYV";
    const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=10&api_key=${API_KEY}`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img =>{
        return {
            id:img.id,
            title:img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}