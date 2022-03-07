import axios from "../../axios";
import { useEffect, useState } from "react"
import './Row.css';

export default function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const res = await axios.get(fetchURL);
            setMovies(res.data.results);
            return res;
        }
        getMovies();
    }, [fetchURL]);
    const imgURLBase = 'https://image.tmdb.org/t/p/original';
    return(
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
            {
                movies?.map(movie => {
                    return <img className={`row__poster ${isLargeRow && "row__posterLarge" }`} key={movie.id} src={`${imgURLBase}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                })
            }
            </div>
        </div>
    )
}
