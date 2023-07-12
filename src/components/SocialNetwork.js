import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");

    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="http://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>
        <a
          href="http://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          href="http://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;

// ------------------------------------------------ Compléments d'informations -----------------------------------------------------------------

// ATTENTION ici il faut mettre <a> et non un <LINK> car il faut aller sur un autre Simulate.
// target="_blank"  ===> pour ouvrir dans une nouvelle.
// rel="noopener noreferrer"  ===> c'est à mettre car sinon il y a une erreur dans la console.

// il s'agit de la fonction pour faire l'effet d'aimant sur les icones FB...

// const icons = document.querySelectorAll(".social-network a");

//     icons.forEach((link) => {
//       link.addEventListener("mouseover", (e) => {
//         link.style.transform = `translate(${e.offsetX - 20}px, ${
//           e.offsetY - 13
//         }px)`;
//       });
//     });
//   };
