const API_KEY="l9Cz0hTP4SOj2VmIe9uVGCDR1U82"
// details of all matches
export const getMatches = () => {
    const url=`https://cricapi.com/api/matches/?apikey=${API_KEY}`;
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR:error"));
};
//match details
// individual match details
// going to have to replace the unique ID of the match to make the required request, so basically implementing a version of the API itself
export const getMatchDetail=(id)=>{
    const url=`https://cricapi.com/api/cricketScore/?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url)
    .then((response) => response.json())
    .catch((error)=> console.log(error));
}