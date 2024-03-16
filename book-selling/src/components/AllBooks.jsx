import { useEffect, useState } from 'react'
import {getAllBooks} from '../hooks/getAllBooks'
import BooksItems from './BookItems'
import 'bootstrap/dist/css/bootstrap.min.css';

function AllBooks(){

    const [data, setData] = useState(null)

    useEffect(() => {
        getAllBooks()
        .then(data => {
            console.log(data)
            setData(data);
        })
    },[])
    return (
        <div className="books-container">
            {
                data && data.map(book => (
                    <BooksItems key={book.id} data={book}></BooksItems>
                ))
            }
        </div>
    )
}
export default AllBooks