(function () {
  "use strict";

  var storageKey = "makubex-color-mode";
  var stylesheet = document.getElementById("journal-dark-stylesheet");
  var systemPreference = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  function currentMode() {
    return document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark" : "light";
  }

  function storedMode() {
    try {
      var value = window.localStorage.getItem(storageKey);
      return value === "dark" || value === "light" ? value : null;
    } catch (error) {
      return null;
    }
  }

  function applyMode(mode) {
    var isDark = mode === "dark";
    document.documentElement.setAttribute("data-theme", mode);
    if (stylesheet) {
      stylesheet.media = isDark ? "all" : "not all";
    }

    var themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute("content", isDark ? "#252a34" : "#15273d");
    }

    var button = document.getElementById("journal-theme-toggle");
    if (button) {
      var label = isDark ? "Modo claro" : "Modo escuro";
      button.setAttribute("aria-label", "Ativar " + label.toLowerCase());
      button.setAttribute("title", "Ativar " + label.toLowerCase());
      button.querySelector(".theme-toggle__icon").textContent = isDark ? "☀" : "☾";
      button.querySelector(".theme-toggle__label").textContent = label;
    }
  }

  function createToggle() {
    if (document.getElementById("journal-theme-toggle")) return;

    var button = document.createElement("button");
    button.id = "journal-theme-toggle";
    button.type = "button";
    button.className = "theme-toggle";
    button.innerHTML = '<span class="theme-toggle__icon" aria-hidden="true">☾</span>' +
      '<span class="theme-toggle__label">Modo escuro</span>';

    button.addEventListener("click", function () {
      var next = currentMode() === "dark" ? "light" : "dark";
      applyMode(next);
      try {
        window.localStorage.setItem(storageKey, next);
      } catch (error) {
        // Mesmo com armazenamento bloqueado, o seletor funciona nesta página.
      }
    });

    document.body.appendChild(button);
    applyMode(currentMode());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createToggle);
  } else {
    createToggle();
  }

  // Acompanha mudanças no sistema somente quando não há escolha manual.
  if (systemPreference) {
    var onSystemChange = function (event) {
      if (!storedMode()) applyMode(event.matches ? "dark" : "light");
    };
    if (typeof systemPreference.addEventListener === "function") {
      systemPreference.addEventListener("change", onSystemChange);
    } else if (typeof systemPreference.addListener === "function") {
      systemPreference.addListener(onSystemChange);
    }
  }

  // Sincroniza a preferência entre abas abertas no mesmo domínio.
  window.addEventListener("storage", function (event) {
    if (event.key === storageKey) {
      applyMode(storedMode() || (systemPreference && systemPreference.matches ? "dark" : "light"));
    }
  });
}());
