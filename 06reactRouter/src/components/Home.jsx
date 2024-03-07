import './Home.css'
function Home(){
    return (
        <section id="hero">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Hi,<br/>I am John</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet soluta veniam voluptate aliquam deleniti labore quod quis illum, sapiente nam nesciunt magni voluptatibus voluptatem incidunt placeat consequuntur quaerat voluptatum expedita!</p>
                    <button type="button" className="btn btn-dark btn-lg">Book a Skype Call</button>
                 </div>
                 <div className="col">
                     <img src="https://www.pngmart.com/files/7/Web-Design-Download-PNG-Image.png" alt="..."/>
                 </div>
            </div>
            <div className="row cards">
                <div className="col-md-4 d-flex justify-content-center">
                  <div className="card">
                      <div className="card-body">
                          <img src="https://www.iasesoria.com/wp-content/uploads/2020/03/skills-3260624_1920.jpg" alt="..." className="icon"/>
                          <h5 className="card-title">Skills</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <div className="card">
                      <div className="card-body">
                          <img src="https://www.getfoundquick.com/wp-content/uploads/2020/05/shutterstock_289446920-scaled.jpg" alt="..." className="icon"/>
                          <h5 className="card-title">Experience</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <div className="card">
                      <div className="card-body">
                          <img src="https://www.fifteendesign.co.uk/wp-content/uploads/2017/09/Web-Design-Blog-Image.jpg" alt="..." className="icon"/>
                          <h5 className="card-title">Projects</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Home;