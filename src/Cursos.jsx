import React from "react";

const Curso = () =>(
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2Fb12a78d6-cbcc-4cb3-a8d2-02b7df099efa.jpg&w=1920&q=75" alt="paython" />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
        Programación orientada a objetos con Go
        </h3>
        <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
            <div className="circle img-container">
                <img src="https://edteam-media.s3.amazonaws.com/users/avatar/0b5fec83-84c8-4651-8984-a71f18bcf286.jpg" alt="Profesor" />
            </div>
            </div>
            <span className="small">Alexys Lozada</span>
        </div>
        </div>
        <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
        </div>
    </div>
    </article>
)

export default Curso
