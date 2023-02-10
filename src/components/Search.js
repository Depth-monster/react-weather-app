import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { APIOptions, GET_API } from "./api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

 
  const loadOptions = (inputValue) => {
    return fetch(`${GET_API}&namePrefix=${inputValue}`, APIOptions)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.country}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600} //защита от дурака
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions} //for city search
      />
    </>
  );
};

export default Search;
