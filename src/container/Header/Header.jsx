import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavor' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: "2rem 0" }}>
        Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen
        Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen
        Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle
        hin. Ich bin von je der Ordnung Freund gewesen. Wenn sich der Mensch,
        wenn er sie beim Kragen hätte.
      </p>
      <button type='button' className='custom__button'>
        Explore Menu
      </button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
