

export const getGifts = async( categoria ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=5&api_key=2AP5Hb85L1tx6G42KOXDlytkl1cBGkPx`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        
        return  {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }

    }); 

    return gifs;  //retorna una promesa que resuelve la colleccion de imagenes
}