(function (window, document) {
  'use strict';

  const $toggles = document.querySelectorAll(".toggle");
  const $toggleBtn = document.querySelector("#toggle-btn");

  $toggleBtn.addEventListener("click", function () {
    toggleElenets();
  });

  function toggleElenets() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle("on");
    });
  }
})(window, document)