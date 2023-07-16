import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from './container/components/SearchBox';
import Table from './container/components/Table';

function App() {
  const [searchText, setSearchText] = useState("");
  const [order, setOrder] = useState("");

  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
      // handle success
      //console.log(response.data);
      setRecords(response.data);
    }).catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  const filterRecords = (records) => {
    if (searchText !== "")
      return records.filter(record => { return record.name.toLowerCase().startsWith(searchText.toLowerCase()); });

    return records;
  }

  const orderRecords = () => {
    if (order === "asc")
      return [...records].sort((a, b) => a.name > b.name ? 1 : -1,);
    else if (order === "desc")
      return [...records].sort((a, b) => a.name > b.name ? -1 : 1,);
    else
      return records;
  }

  // useEffect(() => {
  //   console.log("searchText: ", searchText);
  // }, [searchText])

  // useEffect(() => {
  //   console.log("order: ", order);
  // }, [order])

  return (
    <>
      {/* <div className='container'> */}
      {/* Search Box To filter Records*/}
      <SearchBox parameters={{ "searchText": searchText, "setSearchText": setSearchText, "order": order, "setOrder": setOrder }} />

      {/*Records Table*/}
      <Table parameters={{ "records": filterRecords(orderRecords()), }} />
      {/* </div> */}
    </>
  );
}

export default App;
