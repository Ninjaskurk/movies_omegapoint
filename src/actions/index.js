import axios from 'axios';

export const fetchMovies = () => {
    return(dispatch)=>{
        return axios.get('http://172.18.67.180:3001/movies').then((response)=>{
            dispatch(updateMovies(response.data));
        })
    }
}


export const editMovie = (body) => {
    let url = 'http://172.18.67.180:3001/movies'
    if (vody && body.id && body.id > 0) {
       url = `${url}/${id}`
    }

    return(dispatch)=>{
        axios({
            method: 'post',
            url: 'url',
            data: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
            })
            .then(function (response) {
                console.log(response.data);
                dispatch(updateMovie(response.data));
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
}

export const updateMovies = (data) => {
    return{
        type:"UPDATE_MOVIES",
        movies: data
    }
}

export const updateMovie = (data) => {
    return{
        type:"UPDATE_MOVIE",
        movie: data
    }
}

export const togglePopup = (toggle = false, id) => {
    return{
        type:"POPUP_TOGGLE",
        toggle,
        id
    }
}