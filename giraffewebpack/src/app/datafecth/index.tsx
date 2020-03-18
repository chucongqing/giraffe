import React, {Fragment,useEffect, useState} from 'react'
import axios from 'axios'

type FetchData = {
    objectID : string;
    url : string;
    title : string;
    author : string;
    num_comments: number;
}

type AppData = {
    hits: FetchData[]
}

export default function DataFetchApp () {
    // let a : AppData = [];

    const [data, setData] = useState<AppData | null>({hits:[]});
    const [query, setQuery] = useState('redux')
    // const [search, setSearch] = useState('')
    const [url,setUrl] = useState(
        `https://hn.algolia.com/api/v1/search?query=redux`
    )
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        const  afunc = async ()=>{
            setIsError(false);
            setIsLoading(true);
            try{
            const result = await axios(url)
            
            setData(result.data);}
            catch(error) {
                setIsError(true)
            }
            setIsLoading(false);
        }
        afunc();
        
    },[url])
    return (
        <div>
   <h1>Todo List</h1>
         
           <Fragment>
               <form  
               onSubmit = { event =>{
                setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)

                //prevent browser to refresh
                event?.preventDefault();
               }}>
               <input 
               type="text"
               value={query}
               onChange={event => setQuery(event.target.value)}
                />

                <button
                    type='submit'
                    
                >Search</button>
                </form>
                {isError && (<div>Something happened!</div>)}
            {
                isLoading? (<div>Loading ...</div>):
            (<ul>
            {data?.hits.map(item=> (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title} author:{item.author}</a>
                </li>
            ))}</ul> )}

            </Fragment>

        </div>
    )
}