import React, { useState } from 'react';
import _ from 'lodash';
import { fetchTabs } from '../../services/api';
import ResultListComponent from '../ResultList';

const SearchBarComponent = () => {
  const [query, setQuery] = useState('');
  // eslint-disable-next-line
  const [searchQuery, setSearchQuery] = useState({});
  const [dataList, setDataList] = useState([]);
  const [errorMssg, setErrorMssg] = useState('');

  const onChange = ({ target: { value } }) => {
    setQuery(value);

    const search = _.debounce(sendQuery, 300);

    setSearchQuery(prevSearch => {
      if (prevSearch.cancel) {
        prevSearch.cancel();
      }
      return search;
    });

    if (value) {
      search(value);
    } else {
      setDataList([]);
      setErrorMssg('');
    }
  };

  const sendQuery = async value => {
    const { cancelPrevQuery, result } = await fetchTabs(value);

    if (cancelPrevQuery) return;

    setDataList(result);
    setErrorMssg('');
  };

  return (
    <div>
      <div>
        <div className="divCenter">
          <input
              className="SearchBar_input"
              type="text"
              value={query}
              placeholder="Enter artist or song title"
              onChange={onChange}
          />
        </div>
      </div>
      <div>
        <ResultListComponent items={dataList} />
        {errorMssg}
      </div>
    </div>
  );
};

export default SearchBarComponent;
