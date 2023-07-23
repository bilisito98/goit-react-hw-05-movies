import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/movies-api';
import s from './Cast.module.css';

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCredits(movieId)
            .then(data => {
                setCast(data.cast);
            })
    }, [movieId])

    return <>
        {cast &&
            <ul className={s.cast}>
                { cast.map(({ id, character, original_name, profile_path }) => (
                    <li className={s.item} key={id}>
                        <a className={s.link } href={`https://www.google.com/search?q=${original_name.split(' ').join('+')}`} target='_blank' rel="noreferrer">
                            <div className={s.image_wrapper}>{profile_path
                                ? <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={original_name} className={s.image} />
                                : <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt={original_name} className={s.image} />
                            }</div>
                            <div className={s.name_wrapper}>
                                <p className={s.name}>{ original_name }</p>
                                <p className={s.character}>{character}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        }
    </>
}
