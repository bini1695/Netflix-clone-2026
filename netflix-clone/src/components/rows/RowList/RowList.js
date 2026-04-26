import React from 'react';
import '../RowList/RowList.css';
import Row from '../Row/Row';
import requests from '../../../utils/requests';

function RowList() {
  return (
   <>
        <Row
         title="NETFLIX ORIGINALS"
         fetchUrl={requests.fetchNetflixOriginals}
         isLargRow={true} />
        <Row title='trending' fetchUrl={requests.fetchTrending}/>
        <Row title='Top rated' fetchUrl={requests.fetchTopRated}/>
        <Row title ='Action Movies' fetchUrl={requests.fetchActionMovies}/>
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title ='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
        <Row title ='Roma' fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
     </>
      
  );
}

export default RowList;