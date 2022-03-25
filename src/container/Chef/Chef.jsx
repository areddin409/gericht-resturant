import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='Chef' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>
            So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen
            Kreis der Schöpfung ausel.
          </p>
        </div>
        <p className='p__opensans'>
          Es irrt der Mensch, wenn er sie beim Kragen hätte. So schreitet in dem
          engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus,
          Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt zur
          Hölle. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei
          doch auch was denken lassen. Vernunft fängt wieder an zu sprechen Und
          Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner
          Baum. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu
          sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu
          blühn;
        </p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
