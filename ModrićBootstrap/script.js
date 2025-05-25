// Inicijaliziraj carousel s automatskim vrtnjama svakih 3 sekunde (3000 ms)
const carouselElement = document.querySelector("#carouselExample");
const carousel = new bootstrap.Carousel(carouselElement, {
  interval: 3000, // vrijeme u ms između slajdova
  ride: "carousel", // automatski start
});
