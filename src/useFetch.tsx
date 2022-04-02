import React from 'react';
import { useState, useEffect} from 'react';



const useFetch  = <T,> (url: RequestInfo )  => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (()=> {
      const abortCont =new AbortController();
        setTimeout(() =>{
          fetch(url, {signal: abortCont.signal})
           
          .then(res => {
              if(!res.ok){
                throw Error('could not fetch the data for that resource')
              }
              
              return res.json()
            })
           
            .then (data => {
              setData(data)
              setIsLoading(false)
              setError(null)
            })
            
            .catch(err =>{
               if(err.name === 'AbortError'){
                console.log('fetch aborted');
               } else {
              setIsLoading(false)
              setError(err.message)
              }
            })
        },1000 )

        // return () => abortCont.abort
            
    },[url])


  // useEffect () => {
  //     const abortCont =new AbortController();
  //       setTimeout(() =>{
  //         fetch(url, {signal: abortCont.signal})
           
  //         .then(res => {
  //             if(!res.ok){
  //               throw Error('could not fetch the data for that resource')
  //             }
              
  //             return res.json()
  //           })
           
  //           .then (data => {
  //             setData(data)
  //             setIsLoading(false)
  //             setError(null)
  //           })
            
  //           .catch(err =>{
  //              if(err.name === 'AbortError'){
  //               console.log('fetch aborted');
  //              } else {
  //             setIsLoading(false)
  //             setError(err.message)
  //             }
  //           })
  //       },1000 )
  //       return () => abortCont.abort
  //     }
    
      return { data, isLoading, error}
}
export default useFetch;