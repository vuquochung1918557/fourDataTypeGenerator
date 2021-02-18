// @flow
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  AnimatedView
} from '../../components';
import { type RouterProps } from '../../types/react-router';

type Props = {
  actions: {
    enterHome: () => any,
    leaveHome: () => any,
  },
} & RouterProps;

function Home({
  actions: {
    enterHome,
    leaveHome,
  },
}: Props) {
  const [data, setData] = useState('');
  const handlesGenerateButtonClick = useCallback(
    (event: SyntheticEvent<>) => {
      event && event.preventDefault();
      axios.get('http://127.0.0.1:5000/theAPI/')
      .then(response => {
        setData(response.data);
        
      var element = document.getElementById('downloadLink');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
      element.setAttribute('download', "output.txt");
      });
    },
  );
  useEffect(() => {
    enterHome();
    return () => {
      leaveHome();
    };
  }, []);

  return (
    <AnimatedView>
      <div className="row">
        <button 
          onClick={handlesGenerateButtonClick}
          className="btn btn-danger">
          Generate
        </button>
      </div>

      <div className="row">
        <a id="downloadLink">Download now</a>
      </div>

      <div className="row">
        
      </div>

      <div className="row">
        
      </div>
    </AnimatedView>
  );
}

Home.displayName = 'Home';

Home.propTypes = {
  // react-router 4:
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  teamMates: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      profile: PropTypes.string,
      profileColor: PropTypes.oneOf(['danger', 'warning', 'info', 'success']),
    }),
  ),
  actions: PropTypes.shape({
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func,
  }),
};

export default Home;
