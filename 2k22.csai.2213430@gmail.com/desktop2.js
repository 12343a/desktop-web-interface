//   const video = document.getElementById("myVideo");
//                         const playIcon = document.getElementById("playIcon");

//                         function togglePlay() {
//                             if (video.paused) {
//                                 video.play();
//                                 playIcon.style.display = "none";
//                             } else {
//                                 video.pause();
//                                 playIcon.style.display = "flex";
//                             }
//                         }

//                         // Show play icon on load
//                         video.addEventListener("pause", () => {
//                             playIcon.style.display = "block";
//                             playIcon.src = ""; // optional, if you want icon to show play
//                         });

//                         // Hide icon when video is playing
//                         video.addEventListener("play", () => {
//                             playIcon.style.display = "none";
//                         });

//   <script>

                        const video = document.getElementById("myVideo");
                        const playIcon = document.getElementById("playIcon");

                        function togglePlay() {
                            if (video.paused) {
                                video.play();
                                playIcon.style.display = "none";
                            } else {
                                video.pause();
                                playIcon.style.display = "flex";
                            }
                        }

                        // Show play icon on load
                        video.addEventListener("pause", () => {
                            playIcon.style.display = "block";
                            playIcon.src = ""; // optional, if you want icon to show play
                        });

                        // Hide icon when video is playing
                        video.addEventListener("play", () => {
                            playIcon.style.display = "none";
                        });


             
  const container = document.querySelector('.testimonial-container');
  const buttons = document.querySelectorAll('.action-master-button');

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      container.style.transform = `translateX(-${index * 100}%)`;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

