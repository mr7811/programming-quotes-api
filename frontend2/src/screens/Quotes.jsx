import {useState, useEffect} from 'react'
import { getQuotes } from "../services/quotes.js"
import Quote from '../components/Quote.jsx';

 export default function Quotes() {
    const [quotes, setQuotes] = useState([])

   useEffect(() => {
        const fetchQuotes = async () => {

         const quotesData =  await getQuotes()
         setQuotes(quotesData)
       }

        fetchQuotes()

    }, [])

    return(

    <div><h1>Quotes</h1>
    <div className="Qoutes-map-container">
    {
      quotes.map((quoteData) => (
        <Quote data={quoteData} />

      ))
    }

    </div>

</div>
    )


}