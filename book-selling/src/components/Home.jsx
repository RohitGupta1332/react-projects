import 'bootstrap/dist/css/bootstrap.min.css';
import bookImage from '../images/book2.jpg'
import Card from './Card';

function Home() {
    const books = [
        {
            img: "https://m.media-amazon.com/images/I/91LsoIWuOmL._SY466_.jpg",
            title: "Myteries"
        },
        {
            img: "https://m.media-amazon.com/images/I/61-x37JrKwL._SY466_.jpg",
            title: "Horror"
        },
        {
            img: "https://m.media-amazon.com/images/I/61-hMfd7NGL._SY466_.jpg",
            title: "Finance"
        },
        {
            img: "https://m.media-amazon.com/images/I/71pi-C7-oKL._AC_UY327_FMwebp_QL65_.jpg",
            title: "Health/Fitness"
        },
        {
            img: "https://m.media-amazon.com/images/I/91RTk4zk+QL._AC_UY327_FMwebp_QL65_.jpg",
            title: "Spirituality"
        }
    ]
    return (
        <div className="home-container">
            <img src={bookImage} className="img-fluid" style={{ objectFit: 'cover', maxHeight: '400px', width: '100%' }} alt="..." />
            <h1 className="display-3 p-3 mx-3 my-1">Categories</h1>
            <div className="categories-box" >
                {
                    books.map((book, index) => (
                        <Card key={index} img={book.img} title={book.title}></Card>
                    ))
                }
            </div>
        </div>
    )
}
export default Home;