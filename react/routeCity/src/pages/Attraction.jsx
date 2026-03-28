import cremlinPhoto from "../assets/gallery/cremlin.jpg";
import { useParams } from "react-router-dom";

function Attraction() {
     const { id } = useParams();

     let title;
     let description;
     let image;

     if (id === "1") {
       title = "Рязанский Кремль";
       description = "При основании кремль назывался Переяславльским, пока в 1778 году Екатерина II не переименовала город в Рязань. Согласно Следованой псалтыри — был основан в 1095 году на высоком холме!";
       image = cremlinPhoto;
     } 
     else {
      title = "Неизвестная достопримечательность";
      description = "Информация отсутствует";
    }
    
  return (

     <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {image && (
        <img src={cremlinPhoto} alt={title} width="500" />
      )}
    </div>
  );
}

export default Attraction;