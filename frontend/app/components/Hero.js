export default function Hero() {
  return (
    <section id="home" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">
              A happy place for your little ones
            </h1>
            <p className="lead">
              At Les Petits Anges, your children learn, play and grow in a
              safe, caring and colorful environment.
            </p>
            <a href="#contact" className="btn btn-warning btn-lg">
              Register your child
            </a>
          </div>
          <div className="col-md-6">
            <img
              src="https://placehold.co/600x400?text=Happy+Kids"
              alt="Children playing"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}