import React, { useState } from 'react';
import styles from './css/weatherDetail.module.css';
import { Link, useSearchParams } from 'react-router-dom';
import Home from './Home';

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
        <div style={{ display: "flex" }}>
            <form onSubmit={handleSubmit}>
                <label>
                    <input defaultValue={user ?? undefined} type="text" name="user" />
                </label>
                <button type="submit">Search</button>
            </form>
        </div>
    </div>
  )
}

export default Search;