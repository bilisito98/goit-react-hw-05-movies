import { useState } from 'react';
import s from './SearchField.module.css';
import { toast } from 'react-toastify';
import sprite from '../../../images/icons.svg'

function SearchField(props) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchQueryChange = event => {
        setSearchQuery(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
            //Setting searchQuery state '' in case query got spaces
            setSearchQuery('');

            return toast.info("Input your search query");
        }

        props.onSubmit(searchQuery);

        setSearchQuery('');
    }

    return <form className={s.form} onSubmit={handleSubmit}>
        <input
            className={s.input}
            type="text"
            autoComplete="off"
            name="searchQuery"
            placeholder="Search movie..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
        />

        <button type="submit" className={s.button}>
            <svg className={s.icon} width="16" height="16" aria-label="logo">
                <use href={`${sprite}#search`}></use>
            </svg>
        </button>
    </form>
}

export default SearchField;
