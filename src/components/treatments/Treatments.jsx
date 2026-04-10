import React from "react";
import styles from "./treatments.module.css";
import medicBg from "../../images/medicines.jpg";
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import eyeExam from "../../images/eyeexam.jpg";
import lasik from "../../images/lasik.jpg";
import cataract from "../../images/cataract.jpg";
import refractive from "../../images/refractive.jpg";
import dryEye from "../../images/dryeye.webp";
import stye from "../../images/dacr.jpg";
import csr from "../../images/diabretin.jpg";
import glaucoma from "../../images/glaucoma.jpg";
import macular from "../../images/macular.jpg";
import stye2 from "../../images/stye.jpg";
import eyebag from "../../images/eyebag.png";
import squint from "../../images/squint.png";

const Treatments = () => {
  return (
    <div className={styles.principle}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${medicBg})` }}
      >
        <div className={styles.container}>
          <div className={styles.heading}>Treatments</div>
        </div>
      </div>
      <div className={styles.descrips}>
        <div className={styles.description}>
          <h1 style={{ color: "black" }}>Treatments</h1>
          <h2>
            North Karnataka's only Eye Hospital with Laser Treatments for
            Watering of Eyes
          </h2>
          <p>
            The Hospital provides comprehensive ophthalmic care, ranging from
            routine eye examinations to advanced surgical interventions. A full
            spectrum of diagnostic and therapeutic services is offered, ensuring
            that each patient receives tailored treatment based on their
            specific condition. With a strong emphasis on clinical precision,
            modern technology, and patient-centered care, the Hospital maintains
            the highest standards of excellence in every aspect of service
            delivery.
          </p>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.space}>
          <Card variant="soft" sx={{ width: "100%", maxWidth: 360 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img src={eyeExam} alt="Eye exam" loading="lazy" />;
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" sx={{ fontSize: "1.3rem" }}>
                Comprehensive Eye Exams
              </Typography>
              <Typography level="body-sm" sx={{ fontSize: "1.0rem" }}>
                A thorough evaluation of your vision and eye health, aimed at
                detecting refractive errors, eye diseases, and early signs of
                systemic conditions affecting the eyes.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="soft" sx={{ width: "100%", maxWidth: 360 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img src={lasik} alt="Lasik" loading="lazy" />;
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" sx={{ fontSize: "1.3rem" }}>
                Laser Treatments
              </Typography>
              <Typography level="body-sm" sx={{ fontSize: "1.0rem" }}>
                Laser treatments for diabetic retinopathy involve using focused
                light beams to seal or shrink abnormal blood vessels in the
                retina. This helps prevent further leakage, reduce swelling, and
                slow down vision loss.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="soft" sx={{ width: "100%", maxWidth: 360 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img src={cataract} alt="Cataract" loading="lazy" />;
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" sx={{ fontSize: "1.3rem" }}>
                Cataract Surgery
              </Typography>
              <Typography level="body-sm" sx={{ fontSize: "1.0rem" }}>
                A quick and effective procedure to remove the clouded natural
                lens of the eye and replace it with a clear artificial one,
                restoring sharp vision.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="soft" sx={{ width: "100%", maxWidth: 360 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img src={stye} alt="stye" loading="lazy" />;
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" sx={{ fontSize: "1.3rem" }}>
                Chronic Dacryocystitis
              </Typography>
              <Typography level="body-sm" sx={{ fontSize: "1.0rem" }}>
                Chronic dacryocystitis is a persistent infection of the tear
                sac, causing constant tearing, swelling near the eye, and
                occasional discharge.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="soft" sx={{ width: "100%", maxWidth: 360 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img
                  src={refractive}
                  alt="Refractive Error Treatments"
                  loading="lazy"
                />
                ;
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" sx={{ fontSize: "1.3rem" }}>
                Refractive Error Treatments
              </Typography>
              <Typography level="body-sm" sx={{ fontSize: "1.0rem" }}>
                Correction of vision problems like nearsightedness,
                farsightedness, and astigmatism using glasses, contact lenses,
                or refractive surgery.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="soft" sx={{ width: "100%", maxWidth: 360 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img src={dryEye} alt="Dry Eye" loading="lazy" />;
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" sx={{ fontSize: "1.3rem" }}>
                Dry Eye Treatment
              </Typography>
              <Typography level="body-sm" sx={{ fontSize: "1.0rem" }}>
                Relief for irritated, dry eyes through lubricating drops,
                medications, or procedures that improve tear production and
                retention.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="soft" sx={{ width: "100%", maxWidth: 360 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img src={csr} alt="csr" loading="lazy" />;
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" sx={{ fontSize: "1.3rem" }}>
                Diabetic Retinopathy
              </Typography>
              <Typography level="body-sm" sx={{ fontSize: "1.0rem" }}>
                A condition where damaged blood vessels in the retina leak fluid
                or blood, leading to vision problems—managed through blood sugar
                control, regular monitoring, and treatments like laser therapy
                or injections as needed.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="soft" sx={{ width: "100%", maxWidth: 360 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img src={glaucoma} alt="glaucoma" loading="lazy" />;
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" sx={{ fontSize: "1.3rem" }}>
                Glaucoma
              </Typography>
              <Typography level="body-sm" sx={{ fontSize: "1.0rem" }}>
                A group of eye conditions that damage the optic nerve, often
                linked to high eye pressure. Early diagnosis and treatment help
                prevent vision loss.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="soft" sx={{ width: "100%", maxWidth: 360 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img src={macular} alt="macular" loading="lazy" />;
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" sx={{ fontSize: "1.3rem" }}>
                Macular Degeneration
              </Typography>
              <Typography level="body-sm" sx={{ fontSize: "1.0rem" }}>
                A progressive condition affecting the central retina, leading to
                blurred or distorted vision. Early detection helps slow vision
                loss and preserve quality of life.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="soft" sx={{ width: "100%", maxWidth: 360 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img src={stye2} alt="stye" loading="lazy" />;
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" sx={{ fontSize: "1.3rem" }}>
                Stye Treatment
              </Typography>
              <Typography level="body-sm" sx={{ fontSize: "1.0rem" }}>
                Targeted care for red, painful eyelid bumps—using warm
                compresses, hygiene, or minor procedures to ease discomfort and
                speed healing.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="soft" sx={{ width: "100%", maxWidth: 360 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img src={eyebag} alt="eyebag removal" loading="lazy" />;
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" sx={{ fontSize: "1.3rem" }}>
                Aesthetic Surgeries
              </Typography>
              <Typography level="body-sm" sx={{ fontSize: "1.0rem" }}>
                Eyebag removal surgery (lower blepharoplasty) reduces under-eye
                puffiness by removing or adjusting fat and tightening the skin
                for a smoother, refreshed look.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="soft" sx={{ width: "100%", maxWidth: 360 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img src={squint} alt="squint correction" loading="lazy" />;
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" sx={{ fontSize: "1.3rem" }}>
                Squint Correction
              </Typography>
              <Typography level="body-sm" sx={{ fontSize: "1.0rem" }}>
                Squint correction surgery aligns the eyes by adjusting the eye muscles, helping improve vision and restore proper eye coordination.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
