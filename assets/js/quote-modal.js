/* ============================================================
   CD Business Group - quote-modal.js
   Site-wide "Request a Quote" modal: injected on every page,
   opened by any element with class .js-quote-open.
   Shares event context (name / date / venue / type) with the
   quote drawer via the same localStorage key.
   ============================================================ */
(function () {
  "use strict";

  var WA_NUMBER = "250788647027";
  var EMAIL = "cdbusinessgroupltd@gmail.com";
  var FORM_KEY = "cd_quote_form_v1";

  function loadCtx() {
    try { return JSON.parse(localStorage.getItem(FORM_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveCtx(patch) {
    var ctx = loadCtx();
    for (var k in patch) ctx[k] = patch[k];
    try { localStorage.setItem(FORM_KEY, JSON.stringify(ctx)); } catch (e) {}
  }

  function buildModal() {
    var root = document.createElement("div");
    root.innerHTML =
      '<div class="qmodal" id="quoteModal" role="dialog" aria-modal="true" aria-labelledby="quoteModalTitle">' +
        '<div class="qmodal__backdrop" data-close></div>' +
        '<div class="qmodal__panel">' +
          '<button class="qmodal__close" type="button" data-close aria-label="Close">&times;</button>' +
          '<span class="qmodal__eyebrow">Request a Quote</span>' +
          '<h2 id="quoteModalTitle">Tell us about your event</h2>' +
          '<p class="qmodal__sub">Share a few details and we’ll come back to you with a written quotation.</p>' +
          '<form id="quoteForm" novalidate>' +
            '<div class="qmodal__grid">' +
              '<label>Name / Company *<input type="text" id="qmName" autocomplete="name" placeholder="e.g. Jane - Acme Ltd"></label>' +
              '<label>Phone / WhatsApp *<input type="tel" id="qmPhone" autocomplete="tel" placeholder="+250 7xx xxx xxx"></label>' +
              '<label>Email<input type="email" id="qmEmail" autocomplete="email" placeholder="you@company.com"></label>' +
              '<label>Event date<input type="text" id="qmDate" placeholder="e.g. 15 Aug 2026"></label>' +
              '<label>Venue / City<input type="text" id="qmVenue" placeholder="e.g. Kigali Convention Centre"></label>' +
              '<label>What do you need?' +
                '<select id="qmNeed">' +
                  '<option>VIP &amp; VVIP furniture</option>' +
                  '<option>Exhibition booth</option>' +
                  '<option>Tents &amp; outdoor</option>' +
                  '<option>AV &amp; technology</option>' +
                  '<option>Full event setup</option>' +
                  '<option>Something else</option>' +
                '</select>' +
              '</label>' +
            '</div>' +
            '<label class="qmodal__full">Anything else we should know?' +
              '<textarea id="qmMsg" rows="3" placeholder="Guest numbers, layout ideas, timings..."></textarea>' +
            '</label>' +
            '<div class="qmodal__actions">' +
              '<button type="submit" class="btn2 btn2--wa">Send via WhatsApp</button>' +
              '<button type="button" class="btn2 btn2--ghost" id="qmSendMail">Send via Email</button>' +
            '</div>' +
            '<div class="qmodal__hint">Free delivery &amp; setup in Kigali &middot; Written quotation for every request</div>' +
          '</form>' +
        '</div>' +
      '</div>';
    while (root.firstChild) document.body.appendChild(root.firstChild);
  }

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  function notify(msg) {
    if (window.CDToast) window.CDToast(msg);
    else alert(msg);
  }

  function restoreCtx() {
    var ctx = loadCtx();
    if (ctx.name) document.getElementById("qmName").value = ctx.name;
    if (ctx.date) document.getElementById("qmDate").value = ctx.date;
    if (ctx.venue) document.getElementById("qmVenue").value = ctx.venue;
  }

  function openModal(need) {
    var modal = document.getElementById("quoteModal");
    restoreCtx();
    if (need) {
      var sel = document.getElementById("qmNeed");
      for (var i = 0; i < sel.options.length; i++) {
        if (sel.options[i].text === need) { sel.selectedIndex = i; break; }
      }
    }
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(function () {
      var first = document.getElementById("qmName");
      if (first) first.focus();
    }, 120);
  }
  function closeModal() {
    var modal = document.getElementById("quoteModal");
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  window.CDQuoteModal = { open: openModal, close: closeModal };

  function validate() {
    if (!val("qmName") || !val("qmPhone")) {
      notify("Please fill in your name and phone number");
      return false;
    }
    return true;
  }

  function composeMessage() {
    var lines = ["Hello CD Business Group, I would like a quotation.", ""];
    lines.push("Name/Company: " + val("qmName"));
    lines.push("Phone: " + val("qmPhone"));
    if (val("qmEmail")) lines.push("Email: " + val("qmEmail"));
    if (val("qmDate")) lines.push("Event date: " + val("qmDate"));
    if (val("qmVenue")) lines.push("Venue: " + val("qmVenue"));
    lines.push("Looking for: " + val("qmNeed"));
    if (val("qmMsg")) {
      lines.push("");
      lines.push("Details: " + val("qmMsg"));
    }
    lines.push("");
    lines.push("Sent from the CD Business Group website.");
    return lines.join("\n");
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildModal();
    var modal = document.getElementById("quoteModal");

    modal.querySelectorAll("[data-close]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });

    // keep shared event context in sync with the drawer / event bar
    [["qmName", "name"], ["qmDate", "date"], ["qmVenue", "venue"]].forEach(function (pair) {
      document.getElementById(pair[0]).addEventListener("input", function () {
        var patch = {};
        patch[pair[1]] = val(pair[0]);
        saveCtx(patch);
        document.dispatchEvent(new CustomEvent("cdctx:change", { detail: { source: "modal" } }));
      });
    });

    document.getElementById("quoteForm").addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) return;
      window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(composeMessage()), "_blank");
      closeModal();
    });

    document.getElementById("qmSendMail").addEventListener("click", function () {
      if (!validate()) return;
      var subject = "Quotation request from the website - " + val("qmName");
      window.location.href = "mailto:" + EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(composeMessage());
      closeModal();
    });
  });

  // any .js-quote-open element opens the modal (data-need preselects the dropdown)
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".js-quote-open");
    if (!btn) return;
    e.preventDefault();
    openModal(btn.getAttribute("data-need") || "");
  });
})();
