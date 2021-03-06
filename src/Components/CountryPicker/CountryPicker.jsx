import React, { useState, useEffect } from "react";
import { FormControl , NativeSelect  } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";


const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

 
  return (
    <FormControl variant="outlined" color = 'primary' className={styles.formControl} style={{ color: 'blue' }}>
     
      <NativeSelect
        onChange={(e) => handleCountryChange(e.target.value)}
        style={{ color: 'red' , fontSize:40  }}
        
      >
        <option value="" >Global</option>
        {fetchedCountries.map((country, key) => (
          <option key={key} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
    
  );
};

export default CountryPicker;
