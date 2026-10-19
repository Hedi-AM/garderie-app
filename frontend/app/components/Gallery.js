const photos = [
  { src: "/gallery/photo1.jpg", alt: "Children painting together" },
  { src: "/gallery/photo2.jpg", alt: "Story time in the classroom" },
  { src: "/gallery/photo3.jpg", alt: "Playing outside in the garden" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-5 bg-baby-soft">
      <div className="container">
        <h2 className="text-center mb-5">Our Gallery</h2>
        <div className="row g-4">
          {photos.map((photo) => (
            <div className="col-12 col-md-4" key={photo.src}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="img-fluid rounded shadow-sm gallery-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}