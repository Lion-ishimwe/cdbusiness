/* ============================================================
   CD Business Group - mailer.js
   Sends website messages directly to the company inbox via
   FormSubmit (https://formsubmit.co). No backend needed.
   Callers should fall back to a mailto: link if send() rejects.
   NOTE: the first message triggers a one-time activation email
   to the inbox below - click "Activate" once and you're live.
   ============================================================ */
(function () {
  "use strict";

  var INBOX = "cdbusinessgroupltd@gmail.com";
  var ENDPOINT = "https://formsubmit.co/ajax/" + INBOX;

  function send(fields) {
    var payload = {
      _subject: fields.subject || "New message from the CD Business Group website",
      _template: "table",
      _captcha: "false",
      name: fields.name || "Website visitor",
      message: fields.message || ""
    };
    if (fields.email) payload.email = fields.email; // becomes reply-to
    if (fields.phone) payload.phone = fields.phone;

    return fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    }).then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    }).then(function (data) {
      if (data && (data.success === false || data.success === "false")) {
        throw new Error(data.message || "Send failed");
      }
      return data;
    });
  }

  /* success popup shown after a message is delivered */
  function success(text) {
    var pop = document.getElementById("mailPop");
    if (!pop) {
      var root = document.createElement("div");
      root.innerHTML =
        '<div class="mailpop" id="mailPop" role="alertdialog" aria-live="assertive">' +
          '<div class="mailpop__backdrop" data-mp-close></div>' +
          '<div class="mailpop__panel">' +
            '<span class="mailpop__check">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5.5 5.5L20 6.5"/></svg>' +
            '</span>' +
            '<h3>Message Sent!</h3>' +
            '<p id="mailPopText"></p>' +
            '<button class="btn2 btn2--navy" type="button" data-mp-close>OK</button>' +
          '</div>' +
        '</div>';
      while (root.firstChild) document.body.appendChild(root.firstChild);
      pop = document.getElementById("mailPop");
      pop.querySelectorAll("[data-mp-close]").forEach(function (el) {
        el.addEventListener("click", function () { pop.classList.remove("open"); });
      });
    }
    document.getElementById("mailPopText").textContent =
      text || "Your email was sent successfully. We will get back to you shortly.";
    pop.classList.add("open");
    setTimeout(function () { pop.classList.remove("open"); }, 6000);
  }

  window.CDMail = { send: send, success: success, inbox: INBOX };
})();
