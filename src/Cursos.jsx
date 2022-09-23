import React from "react";
import PropTypes from "prop-types"

const Curso = ({title, image, price, profesor}) =>(
   <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>
      <div className="s-main-center">
        {`Prof.: ${profesor}`}
      </div>
      <div className="s-main-center">     
            <a className="button--ghost-alert button--tiny" href="https://ed.team">{price}</a>
       </div>
    </div>
   </article>
)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title: "No se encotro Titulo",
    image: "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2Fd1567356-5b38-432b-a1c9-f135e41b8bbc.png&w=1920&q=75",
    price: "---",
    profesor: ""
}

export default Curso
