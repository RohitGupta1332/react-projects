import 'bootstrap/dist/css/bootstrap.min.css';
import bookImage1 from '../images/book2.jpg'
import bookImage2 from '../images/book3.jpg'
import bookImage4 from '../images/book4.jpg'


import Card from './Card';

function Home() {

    const books = [
        {
            img: "https://m.media-amazon.com/images/I/91LsoIWuOmL._SY466_.jpg",
            title: "Mysteries"
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
        },
        {
            img: "https://m.media-amazon.com/images/I/71xWWxjzF7L._AC_UY327_FMwebp_QL65_.jpg",
            title: "Kids"
        }
    ]
    return (
        <div className="home-container">
            <div id="carouselExampleIndicators" className="carousel slide"  >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img src={bookImage4} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={bookImage1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={bookImage2} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h4 className="display-5 p-3 mx-1 my-1">Categories</h4>
            <div className="categories-box" >
                {
                    books.map((book, index) => (
                        <Card key={index} img={book.img} title={book.title}></Card>
                    ))
                }
            </div>

            <h4 className="display-5 p-3 mx-1 my-1">Top-Seller</h4>

            <div className="categories-box">
            <div className="card-container">
                    <img src="https://m.media-amazon.com/images/I/81Ls+SBCLiL._SY466_.jpg" alt="" />
                    <h4>Atomic Habits</h4>
                    <h5>₹500</h5>
                </div>
                <div className="card-container">
                    <img src="https://m.media-amazon.com/images/I/81n6auLS9aS._SY466_.jpg" alt="" />
                    <h4>Three Hours</h4>
                    <h5>₹384</h5>
                </div>
                <div className="card-container">
                    <img src="https://m.media-amazon.com/images/I/41E+2EfN3NL._SY445_SX342_.jpg" alt="" />
                    <h4>The Psychology of Money</h4>
                    <h5>₹299</h5>
                </div>
                <div className="card-container">
                    <img src="https://m.media-amazon.com/images/I/81wiMPTSFuL._SY466_.jpg" alt="" />
                    <h4>Shri Ram Charitmanas</h4>
                    <h5>₹440</h5>
                </div>
                <div className="card-container">
                    <img src="https://m.media-amazon.com/images/I/7113F2UOhqL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                    <h4>Spaceboy</h4>
                    <h5>₹374</h5>
                </div>
                <div className="card-container">
                    <img src="https://m.media-amazon.com/images/I/410SBqmsPdL._SY445_SX342_.jpg" alt="" />
                    <h4>The 5 AM Club</h4>
                    <h5>₹240</h5>
                </div>
            </div>


            <h4 className="display-5 p-3 mx-1 my-1">Recommended</h4>
            <div className="categories-box">
                <div className="card-container">
                    <img src="https://m.media-amazon.com/images/I/41-tZGcVRkL._SX342_SY445_.jpg" alt="" />
                    <h4>Knowledge Encyclopedia</h4>
                    <h5>₹600</h5>
                </div>
                <div className="card-container">
                    <img src="https://m.media-amazon.com/images/I/918G9WKcfpL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                    <h4>Hindu Mythology - Vedic and Puranic</h4>
                    <h5>₹249</h5>
                </div>
                <div className="card-container">
                    <img src="https://m.media-amazon.com/images/I/410bFYkn9qL._SX342_SY445_.jpg" alt="" />
                    <h4>Yoga & Stress Management </h4>
                    <h5>₹159</h5>
                </div>
                <div className="card-container">
                    <img src="https://m.media-amazon.com/images/I/71vllLbpsdL._SY466_.jpg" alt="" />
                    <h4>The Intelligent Investor</h4>
                    <h5>₹340</h5>
                </div>
                <div className="card-container">
                    <img src="https://m.media-amazon.com/images/I/41TyduBWCdL._SY445_SX342_.jpg" alt="" />
                    <h4>Meditations </h4>
                    <h5>₹149</h5>
                </div>
                <div className="card-container">
                    <img src="https://m.media-amazon.com/images/I/81n6auLS9aS._SY466_.jpg" alt="" />
                    <h4>Three Hours</h4>
                    <h5>₹384</h5>
                </div>
            </div>
        </div>
    )
}
export default Home;
