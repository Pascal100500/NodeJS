import rvdnhPhoto from "../assets/gallery/rvdnh.jpg";
import cirkPhoto from "../assets/gallery/cirk.jpg";
import dramaPhoto from "../assets/gallery/drama.jpg";
import evpatiyPhoto from "../assets/gallery/evpatiy.jpg";

function Gallery() {
  const images = [
  { src: rvdnhPhoto, alt: "ВДНХ" },
  { src: cirkPhoto, alt: "Цирк" },
  { src: dramaPhoto, alt: "Драмтеатр" },
  { src: evpatiyPhoto, alt: "Евпатий Коловрат" }
];

  return (
    <div>
      <h1>Фотографии Рязани</h1>

      <div className="gallery">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;