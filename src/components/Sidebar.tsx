import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="row">
        <Image
          className="dev-img"
          src="/images/dev-photo.jpg"
          alt="Emilyn Pieritz"
          width={100}
          height={100}
        />

        <div className="info">
          <h2>Emilyn Caroline Pieritz</h2>
          <p>Ananindeua / PA</p>

          <div className="row">
            <Image
              className="info-icon"
              src="/images/icon-github.png"
              alt="github"
              width={24}
              height={24}
            />
            <a
              className="info-link"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              /ecpieritz
            </a>
          </div>

          <div className="row">
            <Image
              className="info-icon"
              src="/images/icon-linkedin.png"
              alt="linkedin"
              width={24}
              height={24}
            />
            <a
              className="info-link"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              /in/ecpieritz
            </a>
          </div>

          <div className="row">
            <Image
              className="info-icon"
              src="/images/icon-mail.png"
              alt="e-mail"
              width={24}
              height={24}
            />
            <a className="info-link" href="mailto:ecpieritz@gmail.com">
              ecpieritz@gmail.com
            </a>
          </div>
        </div>
      </div>

      <h1 className="hello-text">
        Olá! Sou <strong>dev front-end</strong> com experiência em{" "}
        <strong>design e criação de sites, sistemas e ecommerces</strong>.
        Sempre busco me atualizar com cursos e desafios.
      </h1>
    </aside>
  );
};

export default Sidebar;
