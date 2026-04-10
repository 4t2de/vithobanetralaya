import React from "react";
import styles from "./diseases.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GeneralEye from "../../images/generaleye.jpg";
import Eyesurgery from "../../images/eyesurgery.jpg";
import Eyecare from "../../images/eyecare.jpg";

const Diseases = () => {
  const categories = [
    {
      title: "General Eye Diseases",
      diseases: ["Myopia", "Hypermetropia", "Pink Eye", "Astigmatism", "Lazy Eyes", "Presbyopia"],
      image: GeneralEye,
    },
    {
      title: "Conditions Requiring Surgery",
      diseases: ["Cataract", "Optic Nerve Disorders", "Glaucoma", "Macular Degeneration", "Squint", "Eye Cancer"],
      image: Eyesurgery,
    },
    {
      title: "Eye Care",
      diseases: ["General Eye Exam", "MISC", "Glaucoma Surgery", "Oculoplasty", "Ocular Prosthesis"],
      image: Eyecare,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>One Stop Solution for All Eye Diseases</h1>
      <div className={styles.cardsContainer}>
        {categories.map((category, index) => (
          <Card key={index} sx={{ maxWidth: 400, width: "100%", height: 500, display: "flex", flexDirection: "column", transition: "transform 0.3s ease, box-shadow 0.3s ease", "&:hover": { transform: "scale(1.05)", boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)" } }}>
            <CardMedia component="img" height="250" image={category.image} alt={category.title} />
            <CardContent style={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div" fontFamily={"Inter"} paddingBottom={1} fontWeight={"bold"}>
                {category.title}
              </Typography>
              <Typography variant="body2" fontSize={17} fontFamily={"Inter"} color="#555">
                <ul>
                  {category.diseases.map((disease, idx) => (
                    <li key={idx}>{disease}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Diseases;
