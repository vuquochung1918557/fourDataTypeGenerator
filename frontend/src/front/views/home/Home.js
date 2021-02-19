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
  const [show, setShow] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const handlesGenerateButtonClick = useCallback(
    (event: SyntheticEvent<>) => {
      event && event.preventDefault();
      setShow(false);
      axios.get('http://127.0.0.1:5000/theAPI/')
      .then(response => {
        setData(response.data);
        setShow(true);
      });
    },
  );
  const handlesReportButtonClick = useCallback(
    (event: SyntheticEvent<>) => {
      event && event.preventDefault();
      setShowReport(true)
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
      { show 
      ? 
      <div>
        &nbsp;
      <div className="row"> 
        <a id="downloadLink" 
        href={'data:text/plain;charset=utf-8,' + encodeURIComponent(data.result)}
        download='output.txt'>Download now</a>
      </div>
      &nbsp;
      <div className="row"> 
        <button 
          onClick={handlesReportButtonClick}
          className="btn btn-danger">
          Report
        </button>
      </div>
      &nbsp;
        { showReport 
        ?
        <div className="row"> 
          <p>Alphabet string: {data.randomAlphabet}</p>
          <p>Real numbers: {data.randomFloat}</p>
          <p>Integers: {data.randomIntegers}</p>
          <p>Alphabetnumerics: {data.randomString}</p>
        </div> 
        :
        null

        }
      </div>
        : null
     }
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
