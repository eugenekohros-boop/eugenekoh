// Small enhancements; the site works fully without JavaScript.
(function () {
  "use strict";

  /* Mobile menu */
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    header.querySelectorAll(".site-nav a").forEach((a) =>
      a.addEventListener("click", () => {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* Copy-to-clipboard buttons: <button data-copy="#element-id"> */
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const target = document.querySelector(btn.getAttribute("data-copy"));
      if (!target) return;
      const label = btn.querySelector("span");
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        if (label) label.textContent = "Copied";
        btn.classList.add("copied");
      } catch (e) {
        // Clipboard blocked: select the text so it can be copied by hand
        const range = document.createRange();
        range.selectNodeContents(target);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        if (label) label.textContent = "Press Ctrl+C";
      }
      setTimeout(() => {
        if (label) label.textContent = "Copy";
        btn.classList.remove("copied");
      }, 2200);
    });
  });

  /* Research page: filter publications by thread */
  const chips = document.querySelectorAll(".filters .chip");
  if (chips.length) {
    const cards = document.querySelectorAll(".pub-years .pub-card");
    const groups = document.querySelectorAll(".pub-years .year-group");
    const blurbs = document.querySelectorAll("[data-blurb]");

    const apply = (key) => {
      chips.forEach((c) => {
        const on = c.dataset.filter === key;
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-pressed", String(on));
      });
      cards.forEach((card) => {
        card.hidden = !(key === "all" || card.dataset.thread === key);
      });
      groups.forEach((g) => {
        g.hidden = !g.querySelector(".pub-card:not([hidden])");
      });
      blurbs.forEach((b) => {
        b.hidden = b.dataset.blurb !== key;
      });
    };

    chips.forEach((c) =>
      c.addEventListener("click", () => {
        const key = c.dataset.filter;
        apply(key);
        try {
          history.replaceState(null, "", key === "all" ? location.pathname : "#" + key);
        } catch (e) {}
      })
    );

    const fromHash = location.hash.replace("#", "");
    if ([...chips].some((c) => c.dataset.filter === fromHash)) apply(fromHash);
  }
})();
