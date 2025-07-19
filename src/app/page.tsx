export const metadata = {
  title: "AN94 Rifle",
  description: "Information about the AN94 rifle in Girls Frontline",
};
import Image from "next/image";
import "./an94.css";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Timeline } from "@/components/ui/timeline";


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
              <a href="#variants" className="navbar-link">Mission Timeline</a>
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
          squareSize={6}
          gridGap={20}
          flickerChance={0.1}
          color="rgba(255, 255, 255, 0.08)"
          width={1600}
          height={600}
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

 <section id="history" className="specs-section">
        <div className="specs-container">
          <h2 className="specs-title relative z-10">PRODUCTION HISTORY</h2>
          
          <div className="relative z-10 space-y-6">
            <div className="detail-box">
              <h4>1987</h4>
              <p>Development Begins</p>
              <div className="text-sm text-gray-400 mt-2">Gennadiy Nikonov starts development of the AN-94 "Abakan" rifle in response to Soviet military requirements.</div>
            </div>

            <div className="detail-box">
              <h4>1991</h4>
              <p>Prototype Testing</p>
              <div className="text-sm text-gray-400 mt-2">First prototypes undergo rigorous testing, showcasing the innovative 2-round burst mechanism.</div>
            </div>

            <div className="detail-box">
              <h4>1994</h4>
              <p>Official Adoption</p>
              <div className="text-sm text-gray-400 mt-2">The AN-94 is officially adopted by the Russian Armed Forces, replacing select AK-74 units.</div>
            </div>

            <div className="detail-box">
              <h4>2060s</h4>
              <p>T-Doll Creation</p>
              <div className="text-sm text-gray-400 mt-2">ALVA (AN-94) is created as an elite T-Doll in the Neo Soviet Union by Dr. Samantha Shaw.</div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Mission Timeline Section */}
      <section id="variants" className="specs-section">
        <div className="specs-container">
          <h2 className="specs-title relative z-10">MISSION TIMELINE</h2>
          <div className="relative z-10">
            <Timeline data={[
              {
                title: "2062",
                content: (
                  <div>
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">SINGULARITY</h1>
                    <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
                    AK-12 and AN-94 made up the DEFY squadron that served Angelia and fought against the SOCOM, later on ST AR-15 and M4A1 also joined DEFY out of their own reasons and interests. 
                    </p>
                    <div className="w-full">
                      <img
                        src="https://media.discordapp.net/attachments/1203994284974547016/1396182052256088166/maxresdefault.png?ex=687d275d&is=687bd5dd&hm=e0e7bf747035c0516be907f726638b806773e4a7750c887684c5160d41c9c2db&=&format=webp&quality=lossless"
                        alt="ALVA First Deployment"
                        className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-white"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "2063",
                content: (
                  <div>
                      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">DUAL RANDOMNESS</h1>
                    <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
                    Participated in a chain of investigations, following a Paradeus trail, leading the team to Flora botanical institute in Bremen. At the institute AN-94 paired with AK-15 find Epiphyllum in vast quantities. After confronting Leone, AN-94 contacts Angelia and informs her that a large number of armed personnel are lying ambush under the research facility, after that Leone activates pollen traps which leaves Angelia, Morridow and Hopps lying on the ground, hallucinating. 
                    </p>
                    <div className="w-full">
                      
                      <img
                        src="https://media.discordapp.net/attachments/1203994284974547016/1396182304879018025/s0ufp8r6ksd81.png?ex=687d2799&is=687bd619&hm=30fdf85c4d70a2451a03d09384f4900095017dffaffc3c2355ba16db8dd11669&=&format=webp&quality=lossless&width=1522&height=856"
                        alt="Operation Crimson Dawn"
                        className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-white"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "2064",
                content: (
                  <div>
                      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">MIRROR STAGE</h1>
                    <p className="mb-4 text-xs font-normal text-gray-300 md:text-sm">
                     On 17 September, Angelia is brought to Berlin by the Stasi. On 20 September 2064,the Commander captures Machlian in Bohnsdorf. In the following days, they foil several Paradeus terrorist attacks around Berlin and fall into Morridow's trap to capture Dandelion, while Angelia investigates Lady Gray and is captured by Paradeus at the von Oberstein mansion in Berlin. Angelia arrives at Avernus on 16 October.
                    </p>
                    <div className="w-full">
                      <img
                        src="https://media.discordapp.net/attachments/1203994284974547016/1396179878386073660/H5z_subQmufbE7hOdiYdIs2zO6uAR6DB6czwupvIFjX9pXjBS8u6IFnqS8ZHa8iZ1znvia_nUdpL7CteBJ6u9w.png?ex=687d2556&is=687bd3d6&hm=e62fdda2c8387a4b3a1a23189d175a5fc205a08e9142a870944823775253d5c6&=&format=webp&quality=lossless"
                        className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-white"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "2065",
                content: (
                  <div>
                      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">POINCARÉ RECURRENCE</h1>
                    <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
                       In early October, the Commander and the Stasi intercept a cargo of Iaso's Boxes leaving Berlin, but fail to find Angelia and lose their hostage Morridow. Rebel special forces troops in the Neo-Soviet Union cause the Fireworks Incident at the Western border and destroy Griffin & Kryuger's HQ, but fail to kill Griffin's leadership.
                    </p>

                    <div className="w-full">
                      <img
                        src="https://media.discordapp.net/attachments/1203994284974547016/1396180209526505472/maxresdefault.png?ex=687d25a5&is=687bd425&hm=13619c47f55bb545d13278e156150c0413c8b586bc5ce23d1a43d66b5da79c33&=&format=webp&quality=lossless&width=550&height=309"
                        alt="Operation Steel Tempest"
                        className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-white"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "2066",
                content: (
                  <div>
                      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">SLOW SHOCK</h1>
                    <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
                     During one of Angelia's implanted memories while she was lying on operation table in Avernus, she recollects the moment when she and Task Force DEFY launched an operation to discover what lies in William's mansion, but this time with AK-12 with them. Angelia and her team proceed into the building as usual, but then encounter Gray, during a fight, AK-15 gets a hold of Gray's mechanical arms, while 12 plants a grenade where Gray's tail connects to a blade, destroying it.
                    </p>
                    <div className="w-full">
                      <img
                        src="https://media.discordapp.net/attachments/1203994284974547016/1396180467681853440/1920px-Login_Slow_Shock.png?ex=687d25e3&is=687bd463&hm=382908ec6c54fff4952a9d2f9a5b368d248f9d3669861e3fcef54e3dcc86591f&=&format=webp&quality=lossless&width=550&height=312"
                        alt="Systems Integration"
                        className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-white"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "2067",
                content: (
                  <div>
                      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">ZERO CHARGE</h1>
                    <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
                     The forces of StateSec, the Stasi and the remnants of Paradeus converge in Frankfurt. On 31 October, Task Force DEFY kills Embla.
                    </p>
                    <div className="w-full">
                      <img
                        src="https://media.discordapp.net/attachments/1203994284974547016/1396180659755548804/mKiNaRx4RvlSLO7rsg0aYgtQe-yPeKIsxXCiq_CCUvwoozTzMWk_ftwMlPi3eD42Izq_ioOM92hZJ1_QqOEqmg.png?ex=687d2611&is=687bd491&hm=196ece945cc47a15a788f47b9394962f3505b83e02ca8cdb0ec81e6c5731f089&=&format=webp&quality=lossless"
                        alt="Operation Northern Star"
                        className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-white"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "2068",
                content: (
                  <div>
                      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">ISOLATION FOREST</h1>
                    <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
                      Gray is reanimated under the Commander's orders by Nele. Concerted efforts by the Commander, Statesec and the Stasi prevents the deployment of Iaso's Boxes in Frankfurt. Missiles strike Frankfurt on 15 November.
                    </p>
                    <div className="w-full">
                      <img
                        src="https://media.discordapp.net/attachments/1203994284974547016/1396181381821894816/Girls_Frontline_2025-05-05-15-18-43.jpg?ex=687d26bd&is=687bd53d&hm=b5a5e73a56b3cc2e1c40704df31397ab3b58a2789b0b3a1e39061e209d7570c7&=&format=webp&width=2895&height=856"
                        alt="Training Program"
                        className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-white"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "2069",
                content: (
                  <div>
                      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">REDACTED</h1>
                    <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
                     ███ █████████ █████████ ███ █████████
                    </p>
                    <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
                    █████████ ██████████████████ █████████ █████████
                    </p>
                    <div className="w-full">
                      <img
                        src="https://cdn.discordapp.com/attachments/1203994284974547016/1396175274340520157/latest.png?ex=687d210d&is=687bcf8d&hm=2b219463f6a0532847aa04cb1279388980d6dec46b6ac9fe8d53917bcef2d273&"
                        alt="Operation Final Dawn"
                        className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-white"
                      />
                    </div>
                  </div>
                ),
              },
            
            ]} />
          </div>
        </div>
      </section>





</div>

  );
}
