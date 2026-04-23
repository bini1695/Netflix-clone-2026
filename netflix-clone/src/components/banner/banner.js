import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';

// Add the truncate function
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function Banner() {  // Changed to PascalCase (React convention)
    const [movie, setMovie] = useState({});
    
    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } catch (error) {
                console.log("error", error);  // Fixed console.log
            }
        })();
    }, []);

    return (
        <div 
            className='banner'
            style={{
                backgroundSize: "cover",  // Fixed: 'backgroundsize' to 'backgroundSize'
                backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className='banner_buttons'>
                    <button className='banner_button play'>Play</button>
                    <button className='banner_button'>My List</button>  {/* Fixed typo: 'banner_buttton' to 'banner_button' */}
                </div>

                <h1 className='banner_description'>  {/* Fixed: 'banner_discription' to 'banner_description' */}
                    {truncate(movie?.overview, 150)}  {/* Fixed: 'trancate' to 'truncate' */}
                </h1>
            </div>
            <div className='banner fadeBottom'/>  {/* Fixed: 'fadeBotton' to 'fadeBottom' */}
        </div>
    );
}
 
export default Banner;