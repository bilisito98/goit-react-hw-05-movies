import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/movies-api';
import MoviesList from 'components/MoviesList';
import MoviesListItem from '../../MoviesListItem';
import normalizedData from 'services/normalized-data';
import s from './MoviesSearchList.module.css';
import { toast } from 'react-toastify';

export default function MoviesSearchList({searchQuery}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (searchQuery === '') {
            return;
        }

        fetchMovies(searchQuery)
            .then(data => {
                if (data.total_results > 0) {
                    setMovies(normalizedData(data.results));
                }

                else {
                    setMovies([]);
                    return toast.error("Sorry, there are no images matching your search query. Please try again.");
                }
            });
    }, [searchQuery])



    return <MoviesList>
        <MoviesListItem data={ movies }/>
    </MoviesList>
}

MoviesSearchList.propTypes = {
    searchQuery: PropTypes.string,
}
