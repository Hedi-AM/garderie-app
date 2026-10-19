export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <div className="display-4">🍎</div>
                <h5 className="card-title mt-2">Healthy Meals</h5>
                <p className="card-text">
                  Balanced and tasty meals prepared fresh every day.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <div className="display-4">🎨</div>
                <h5 className="card-title mt-2">Creative Workshops</h5>
                <p className="card-text">
                  Drawing, music and crafts to develop creativity.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <div className="display-4">😴</div>
                <h5 className="card-title mt-2">Nap Time</h5>
                <p className="card-text">
                  A calm, comfortable space for a good rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}