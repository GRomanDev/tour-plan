var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  effect: "fade",
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button__next",
    prevEl: ".slider-button__prev",
  },
});

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  var myMap = new ymaps.Map(
    "map",
    {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [7.890703, 98.294772],
      zoom: 15,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [7.890703, 98.294772], // координаты точки
    },
    properties: {
      iconCaption: "DoubleTree by Hilton Phuket Banthai Resort",
    },
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);
}
