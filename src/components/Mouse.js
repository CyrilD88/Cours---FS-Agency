import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const curseur = document.querySelector(".cursor");

    // Ici on utilise window pour que le rond suive la souri sur tout l'écran
    window.addEventListener("mousemove", (e) => {
      curseur.style.top = e.y + "px";
      curseur.style.left = e.x + "px";
    });

    // Fonction pour faire grossir et ensuite rétrécir le cercle autour de la souri. On rajoute la classe "hovered" qui a été mise en css
    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", () => {
        curseur.classList.add("hovered");
      });

      link.addEventListener("mouseleave", () => {
        curseur.style.transition = ".3s ease-out";
        curseur.classList.remove("hovered");
      });
    });
  }, []);

  return (
    <div>
      <span className="cursor"></span>
    </div>
  );
};

export default Mouse;
