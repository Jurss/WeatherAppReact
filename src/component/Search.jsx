import React from 'react';
import styles from './css/search.module.css';
import { useSearchParams } from 'react-router-dom';
import searchIcon from '../assets/icon/searchIcon.png';

const Search = (props) => {
    let [searchParams, setSearchParams] = useSearchParams();
    let user = searchParams.get("users")
    function handleSubmit(event) {
        event.preventDefault();
        //rerender the Home component
        props.rerender();

        let formData = new FormData(event.currentTarget);
        let newUser = formData.get("user");
        if (!newUser) return;
        setSearchParams({ user: newUser });
      }
  return (
    <div id={styles.searchBar}>
        <form id={styles.form} onSubmit={handleSubmit}>
            <label id={styles.label}>
                <input id={styles.formInput} defaultValue={user ?? undefined} type="text" name="user" placeholder='Another location' autocomplete="off" />
            </label>
            <button id={styles.submitBtn} type="submit"><img src={searchIcon} alt="" /></button>
            <div className={styles.bar}></div>
        </form>
        <div className={styles.bar}></div>
    </div>
  )
}

export default Search;