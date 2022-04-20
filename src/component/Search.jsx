import React from 'react';
import styles from './css/search.module.css';
import { useSearchParams } from 'react-router-dom';
import searchIcon from '../assets/icon/searchIcon.png';

const Search = (props) => {

    let [searchParams, setSearchParams] = useSearchParams();
    let query = searchParams.get("query")
    function handleSubmit(event) {
        event.preventDefault();
        //rerender the Home component
        props.rerender();

        let formData = new FormData(event.currentTarget);
        let newQuery = formData.get("query");
        if (!newQuery) return;
        setSearchParams({ query: newQuery });
    }

    let suggest = ['London', 'New York', 'Paris', 'Tokyo'];

  return (
    <div id={styles.searchBar}>
        <form id={styles.form} onSubmit={handleSubmit}>
            <label id={styles.label}>
                <input id={styles.formInput} defaultValue={query ?? undefined} type="text" name="query" placeholder='Another location' autoComplete="off" />
            </label>
            <button id={styles.submitBtn} type="submit"><img src={searchIcon} alt="" /></button>
            <div className={styles.barTop}></div>
        </form>
        <div className={styles.barBottom}></div>

        {/* Suggest city name */}
        <div id={styles.formSuggestContainer}>
            <form className={styles.formSuggest} onSubmit={handleSubmit}>
                <input className={styles.inputSuggest} defaultValue={suggest[0]} name="query"></input>
                <button className={styles.btnSuggest} type="submit">London</button>
            </form>
            <form className={styles.formSuggest} onSubmit={handleSubmit}>
                <input className={styles.inputSuggest} defaultValue={suggest[1]} name="query"></input>
                <button className={styles.btnSuggest} type="submit">New York</button>
            </form>
            <form className={styles.formSuggest} onSubmit={handleSubmit}>
                <input className={styles.inputSuggest} defaultValue={suggest[2]} name="query"></input>
                <button className={styles.btnSuggest} type="submit">Paris</button>
            </form>
            <form className={styles.formSuggest} onSubmit={handleSubmit}>
                <input className={styles.inputSuggest} defaultValue={suggest[3]} name="query"></input>
                <button className={styles.btnSuggest} type="submit">Tokyo</button>
            </form>
        </div>
    </div>
  )
}

export default Search;