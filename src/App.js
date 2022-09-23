import React from 'react';
import './styles/styles.scss';
import Curso from './Cursos';

const Cursos = [
  {
    "title":"React desde cero",
    "image": "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2Fb4b80bd3-4fc0-45f1-946c-a1386a8e8221.png&w=1920&q=75",
    "price":  50,
    "profesor":"Joaquin Santos"
  },{
    "title":"React desde cero",
    "image": "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2Fb4b80bd3-4fc0-45f1-946c-a1386a8e8221.png&w=1920&q=75",
    "price":  50,
    "profesor":"Joaquin Santos"
  },{
    "title":"React desde cero",
    "image": "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2Fb4b80bd3-4fc0-45f1-946c-a1386a8e8221.png&w=1920&q=75",
    "price":  50,
    "profesor":"Joaquin Santos"
  },{
    "title":"React desde cero",
    "image": "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2Fb4b80bd3-4fc0-45f1-946c-a1386a8e8221.png&w=1920&q=75",
    "price":  50,
    "profesor":"Joaquin Santos"
  }
]


const App = () =>(
<>
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="https://wallpapercave.com/wp/wp5430320.jpg" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Cursos React Enfoco srl</p>
        <p>Tu curso te espera</p>
        <a href="https://ed.team" className="button">Suscribirse</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
{
  Cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor}  />)
}
</div>
</>
) 

export default App;
