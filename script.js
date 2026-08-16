const covers = document.querySelectorAll(".cover");

covers.forEach(cover => {

    const audio = cover.parentElement.querySelector("audio");
    const icon = cover.querySelector(".play-icon");

    cover.addEventListener("click", () => {

        // Pausar todos los demás
        document.querySelectorAll("audio").forEach(player => {

            if(player !== audio){

                player.pause();

            }

        });

        // Reiniciar todos los íconos
        document.querySelectorAll(".cover").forEach(c => {

            c.classList.remove("playing");

            const i = c.querySelector(".play-icon");

            if(i){

                i.textContent = "▶";

            }

        });

        // Play / Pause
        if(audio.paused){

            audio.play();

        }else{

            audio.pause();

        }

    });

    // Cuando empieza a reproducir
    audio.addEventListener("play", () => {

        cover.classList.add("playing");

        if(icon){

            icon.textContent = "⏸";

        }

    });

    // Cuando se pausa
    audio.addEventListener("pause", () => {

        cover.classList.remove("playing");

        if(icon){

            icon.textContent = "▶";

        }

    });

    // Cuando termina
    audio.addEventListener("ended", () => {

        cover.classList.remove("playing");

        if(icon){

            icon.textContent = "▶";

        }

    });

});