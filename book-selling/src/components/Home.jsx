import 'bootstrap/dist/css/bootstrap.min.css';
import bookImage1 from '../images/book2.jpg'
import bookImage2 from '../images/book3.jpg'
import bookImage4 from '../images/book4.jpg'


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
            title: "Health"
        },
        {
            img: "https://m.media-amazon.com/images/I/91RTk4zk+QL._AC_UY327_FMwebp_QL65_.jpg",
            title: "Religious"
        }
    ]
    return (
        <div className="home-container">
            <div id="carouselExampleIndicators" class="carousel slide"  >
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner" >
                    <div class="carousel-item active">
                        <img src={bookImage4} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bookImage1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bookImage2} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
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
