import {useState, useEffect} from 'react'
import { getQuotes } from "../services/quotes.js"

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

    <div>Quotes</div>
)

}