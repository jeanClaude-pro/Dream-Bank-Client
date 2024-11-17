document.addEventListener("DOMContentLoaded", () => {
    const videoContainer = document.querySelector(".video-container");
    const videos = document.querySelectorAll(".video-container iframe");
    const prevButton = document.querySelector(".carousel-btn.left");
    const nextButton = document.querySelector(".carousel-btn.right");

    let currentIndex = 0;

    const updateCarousel = () => {
        const offset = currentIndex * -100;
        videoContainer.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : videos.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < videos.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});
