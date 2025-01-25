let video = document.querySelector(".video");
let imgs = document.querySelectorAll(".navigation>li");

imgs.forEach((img, i) => {
  img.addEventListener("click", () => {
    video.src = `assets/video/video${i+1}.mp4`;
  });
});
