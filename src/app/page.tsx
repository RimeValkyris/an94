export const metadata = {
  title: "AN94 Rifle",
  description: "Information about the AN94 rifle in Girls Frontline",
};
import Image from "next/image";
import "./an94.css";
import { FlickeringGrid } from "@/components/ui/flickering-grid";


export default function Home() {
  return (
<div className="page-container">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-logo"> автомат Никонова - 1987</div>
            <div className="navbar-links">
              <a href="#tdoll" className="navbar-link">Home</a>
              <a href="#specs" className="navbar-link">About</a>
              <a href="#history" className="navbar-link">Production History</a>
              <a href="#variants" className="navbar-link">Gallery</a>
            </div>
          </div>
        </div>
      </nav>

{  /*Anna Nikonova Vid BG*/}
      <section id="tdoll" className="tdoll-section">
      <video 
  autoPlay 
  muted 
  loop 
  className="tdoll-video"
>
  <source src="/AN94.mp4" type="video/mp4" />
</video>
        <div className="tdoll-content">
          <h1 className="tdoll-title">
            АН-94
            <span className="tdoll-subtitle">«Абака́н»</span>
          </h1>
          <p className="tdoll-description">
            CODENAME "ALVA"
          </p>
          <div className="tdoll-badge">
            <p className="tdoll-badge-text">ESTABLISHED 1994</p>
          </div>
        </div>
      </section>


  {/* FLIKERING GROD FORM MAGIK*/}
      <section id="specs" className="specs-section">
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="rgba(255, 255, 255, 0.1)"
          width={2400}
          height={800}
        />

        {/* About Section*/}

        <div className="specs-container">
          <h2 className="specs-title relative z-10">ABOUT</h2>
          <div className="specs-content relative z-10">
            <div className="specs-image-container">
              <img
                src="/Alva_S.png"
                alt="AN-94"
                className="specs-image"
              />
            </div>
            <div className="story-layout">
              <div className="story-main">
                <h3>ALVA'S PERSONALITY</h3>
                <p>AN-94 is an elite T-doll from Defiance squadron. She believes that she is a side product and a reference model of AK-12, she constantly and quietly provides AK-12 with supports and help. She has a doll-like behaviour and can only react with her cold, emotionless expressions and speech, effectively masking over all her detailed thoughts and emotions. But all of her actions still prove that even as a doll incapable of laughter and tears, she is still an unyielding character who moves ever forward.</p>
              </div>
              <div className="story-details">
                <div className="detail-box">
                  <h4>Development</h4>
                  <p>2060s Neo Soviet Union</p>
                </div>
                <div className="detail-box">
                  <h4>Designer</h4>
                  <p>Dr. Samantha Shaw</p>
                </div>
                <div className="detail-box">
                  <h4>Status</h4>
                  <p>ALIVE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

</div>

  );
}
