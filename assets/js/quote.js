/* ============================================================
   CD Business Group - quote.js
   Site-wide quote basket: localStorage cart, floating button,
   slide-in drawer, WhatsApp / email enquiry composer.
   Requires assets/data/products.js when product images are shown.
   ============================================================ */
(function () {
  "use strict";

  var WA_NUMBER = "250788647027";
  var EMAIL = "cdbusinessgroupltd@gmail.com";
  var KEY = "cd_quote_v1";
  var FORM_KEY = "cd_quote_form_v1";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }
  function save(items) { localStorage.setItem(KEY, JSON.stringify(items)); }

  function findProduct(code) {
    if (typeof CD_PRODUCTS === "undefined") return null;
    for (var i = 0; i < CD_PRODUCTS.length; i++) {
      if (CD_PRODUCTS[i].code === code) return CD_PRODUCTS[i];
    }
    return null;
  }

  var basket = {
    items: load(),
    count: function () {
      return this.items.reduce(function (n, it) { return n + it.qty; }, 0);
    },
    add: function (code, name, qty) {
      qty = qty || 1;
      var found = null;
      this.items.forEach(function (it) { if (it.code === code) found = it; });
      if (found) { found.qty += qty; }
      else { this.items.push({ code: code, name: name, qty: qty }); }
      save(this.items);
      render();
      toast(name + " added to quote (" + this.count() + " item" + (this.count() > 1 ? "s" : "") + ")");
    },
    setQty: function (code, qty) {
      this.items = this.items.filter(function (it) {
        if (it.code === code) { it.qty = qty; }
        return it.qty > 0;
      });
      save(this.items);
      render();
    },
    remove: function (code) {
      this.items = this.items.filter(function (it) { return it.code !== code; });
      save(this.items);
      render();
    },
    clear: function () { this.items = []; save(this.items); render(); }
  };

  window.CDQuote = basket; // public API for product page

  /* ---------- markup ---------- */
  function buildUI() {
    var root = document.createElement("div");
    root.innerHTML =
      '<button class="qfab" id="qfabBtn" aria-label="Open quote basket" title="My Quote List">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M9 2h6l1 3h4l-2 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L4 5h4z"/><path d="M9 9v2a3 3 0 0 0 6 0V9"/>' +
        '</svg>' +
        '<span class="qfab__count" id="qfabCount">0</span>' +
      '</button>' +
      '<div class="qdrawer__backdrop" id="qBackdrop"></div>' +
      '<aside class="qdrawer" id="qDrawer" aria-label="Quote basket">' +
        '<div class="qdrawer__head"><h3>MY QUOTE LIST</h3><button id="qClose" aria-label="Close">&times;</button></div>' +
        '<div class="qdrawer__items" id="qItems"></div>' +
        '<div class="qdrawer__form">' +
          '<input id="qName" type="text" placeholder="Your name / company">' +
          '<input id="qDate" type="text" placeholder="Event date (e.g. 15 Aug 2026)">' +
          '<input id="qVenue" type="text" placeholder="Venue or city">' +
          '<select id="qType">' +
            '<option value="">Event type (optional)</option>' +
            '<option>Conference</option>' +
            '<option>Exhibition / Trade show</option>' +
            '<option>Wedding / Social</option>' +
            '<option>Outdoor event</option>' +
            '<option>Other</option>' +
          '</select>' +
        '</div>' +
        '<div class="qdrawer__foot">' +
          '<button class="btn2 btn2--wa" id="qSendWa">Send via WhatsApp</button>' +
          '<button class="btn2 btn2--ghost" id="qSendMail">Send via Email</button>' +
          '<div class="qdrawer__hint">Free delivery in Kigali &middot; Prices per day, 18% VAT inclusive &middot; Discounts for 2+ days</div>' +
        '</div>' +
      '</aside>' +
      '<div class="toast" id="cdToast"></div>';
    while (root.firstChild) document.body.appendChild(root.firstChild);
  }

  /* ---------- rendering ---------- */
  function render() {
    var countEl = document.getElementById("qfabCount");
    var itemsEl = document.getElementById("qItems");
    if (!countEl || !itemsEl) return;
    var c = basket.count();
    countEl.textContent = c;
    countEl.style.display = c ? "flex" : "none";
    document.dispatchEvent(new CustomEvent("cdquote:change", { detail: { count: c } }));

    if (!basket.items.length) {
      itemsEl.innerHTML = '<div class="qdrawer__empty">Your quote list is empty.<br>' +
        'Browse the <a href="products.html" style="color:var(--red);font-weight:700;">Furniture catalogue</a> and tap ' +
        '<b>Add to Quote</b> on anything you need.</div>';
      return;
    }

    var html = "";
    basket.items.forEach(function (it) {
      var p = findProduct(it.code);
      var img = p ? '<img src="assets/products/' + p.imgs[0] + '" alt="">' : "";
      html +=
        '<div class="qitem">' +
          '<div class="qitem__img">' + img + '</div>' +
          '<div class="qitem__info"><b>' + it.name + '</b><small>' + it.code + '</small></div>' +
          '<div class="qitem__qty">' +
            '<button data-act="dec" data-code="' + it.code + '" aria-label="Decrease">&minus;</button>' +
            '<span>' + it.qty + '</span>' +
            '<button data-act="inc" data-code="' + it.code + '" aria-label="Increase">+</button>' +
          '</div>' +
          '<button class="qitem__rm" data-act="rm" data-code="' + it.code + '" aria-label="Remove">&#10005;</button>' +
        '</div>';
    });
    itemsEl.innerHTML = html;
  }

  /* ---------- message composer ---------- */
  function composeMessage() {
    var name = (document.getElementById("qName") || {}).value || "";
    var date = (document.getElementById("qDate") || {}).value || "";
    var venue = (document.getElementById("qVenue") || {}).value || "";
    var type = (document.getElementById("qType") || {}).value || "";

    var lines = [];
    lines.push("Hello CD Business Group, I would like a quotation for:");
    lines.push("");
    basket.items.forEach(function (it) {
      lines.push("- " + it.qty + " x " + it.name + " (" + it.code + ")");
    });
    lines.push("");
    if (name) lines.push("Name/Company: " + name);
    if (date) lines.push("Event date: " + date);
    if (venue) lines.push("Venue: " + venue);
    if (type) lines.push("Event type: " + type);
    lines.push("");
    lines.push("Sent from the CD Business Group website catalogue.");
    return lines.join("\n");
  }

  function persistForm() {
    try {
      localStorage.setItem(FORM_KEY, JSON.stringify({
        name: (document.getElementById("qName") || {}).value || "",
        date: (document.getElementById("qDate") || {}).value || "",
        venue: (document.getElementById("qVenue") || {}).value || "",
        type: (document.getElementById("qType") || {}).value || ""
      }));
    } catch (e) {}
    document.dispatchEvent(new CustomEvent("cdctx:change", { detail: { source: "drawer" } }));
  }
  function restoreForm() {
    try {
      var f = JSON.parse(localStorage.getItem(FORM_KEY));
      if (!f) return;
      if (f.name) document.getElementById("qName").value = f.name;
      if (f.date) document.getElementById("qDate").value = f.date;
      if (f.venue) document.getElementById("qVenue").value = f.venue;
      if (f.type) document.getElementById("qType").value = f.type;
    } catch (e) {}
  }

  /* ---------- drawer + toast ---------- */
  function openDrawer(open) {
    document.getElementById("qDrawer").classList.toggle("open", open);
    document.getElementById("qBackdrop").classList.toggle("open", open);
  }

  var toastTimer = null;
  function toast(msg) {
    var t = document.getElementById("cdToast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }
  window.CDToast = toast;

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    buildUI();
    restoreForm();
    render();

    document.getElementById("qfabBtn").addEventListener("click", function () { openDrawer(true); });
    document.getElementById("qClose").addEventListener("click", function () { openDrawer(false); });
    document.getElementById("qBackdrop").addEventListener("click", function () { openDrawer(false); });

    ["qName", "qDate", "qVenue"].forEach(function (id) {
      document.getElementById(id).addEventListener("input", persistForm);
    });
    document.getElementById("qType").addEventListener("change", persistForm);

    document.getElementById("qItems").addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-act]");
      if (!btn) return;
      var code = btn.getAttribute("data-code");
      var item = null;
      basket.items.forEach(function (it) { if (it.code === code) item = it; });
      if (!item) return;
      if (btn.getAttribute("data-act") === "inc") basket.setQty(code, item.qty + 1);
      if (btn.getAttribute("data-act") === "dec") basket.setQty(code, item.qty - 1);
      if (btn.getAttribute("data-act") === "rm") basket.remove(code);
    });

    document.getElementById("qSendWa").addEventListener("click", function () {
      if (!basket.items.length) { toast("Add products to your quote list first"); return; }
      window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(composeMessage()), "_blank");
    });
    document.getElementById("qSendMail").addEventListener("click", function () {
      if (!basket.items.length) { toast("Add products to your quote list first"); return; }
      var subject = "Quotation request - " + basket.count() + " item(s) from website catalogue";
      window.location.href = "mailto:" + EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(composeMessage());
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") openDrawer(false);
    });

    // allow pages to open the drawer via .js-open-quote
    document.querySelectorAll(".js-open-quote").forEach(function (el) {
      el.addEventListener("click", function (e) { e.preventDefault(); openDrawer(true); });
    });
  });
})();
