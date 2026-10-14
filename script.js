/* Birthday website for Diksha — plain JavaScript, no dependencies. */
(() => {
  "use strict";
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rand = (a, b) => Math.random() * (b - a) + a;
  const CONFIG = {
    startDate: { year: 2026, month: 6, day: 1 },
    message: [
      "Happy birthday, my Diksha. ❤️",
      "I made this little corner of the internet for you because sometimes my heart has more to say than I manage to put into words.",
      "Since 1 June 2026, you have been a special part of my life. I’m grateful for the memories we have already made, and I hope there are many more beautiful ones ahead.",
      "I know we have been fighting a lot lately. It hurts when we misunderstand each other, and I know that both of us have feelings that deserve to be heard. I’m trying my best, and I also know I have things to learn.",
      "I don’t want us to focus on winning an argument. I want us to understand each other, speak with kindness, and make room for honest conversations—even when they are difficult.",
      "I hope we can both keep choosing patience, respect, and effort. Not perfection, just a genuine willingness to listen, apologise when we need to, and grow together.",
      "Today is your day, and above everything else, I hope you feel loved. You deserve happiness, peace, laughter, and a year full of moments that make your eyes sparkle.",
      "Happy birthday, Diksha. I love you so much, and I truly hope the days ahead are softer, happier, and more beautiful for both of us."
    ],
    timeline: [
      { title: "THE DAY WE BEGAN", text: "1 June 2026 — the beginning of our relationship and a new chapter in our lives." },
      { title: "YOU BECAME MY PERSON", text: "You became someone whose happiness matters deeply to me, someone I want to share the little things with." },
      { title: "OUR FAMILIES KNOW", text: "Our families know about us, and that makes this journey feel meaningful and real." },
      { title: "WE ARE STILL LEARNING", text: "We don't always agree. Sometimes we misunderstand each other, but I hope we can learn to listen with more patience." },
      { title: "THE HOPE I KEEP", text: "I hope we make more memories, communicate with kindness, and face difficult moments as a team." }
    ],
    letter: [
      "My Dearest Diksha,",
      "Happy birthday, my love. I wanted to make something personal for you, something you could open and know that it was made with care, just for you.",
      "Since 1 June 2026, you have been a special part of my life. I still hope our story grows into something beautiful, with more laughter, understanding, and memories we can look back on with a smile.",
      "I know we have been fighting a lot lately. Sometimes we misunderstand each other, sometimes we struggle to explain what we feel, and sometimes our words hurt more than we intended. It makes me sad when things between us aren't okay.",
      "I am trying my best, my love. I know I am not perfect either. There may be moments when I don't explain myself well or don't understand your feelings the way I should. I want to keep learning, too.",
      "I don't want us to spend our time trying to prove who is right. I want us to understand why the other person feels the way they do. I want us to listen to understand, not just to reply.",
      "I hope we can speak honestly without being unkind, say sorry when we need to, and make space for each other's feelings. We don't have to solve everything in one day. Small, sincere efforts matter too.",
      "Our families know about our relationship, and I think about the beautiful future we could build if we keep growing together. I know a relationship takes effort from both people, and I hope we can both keep showing up with patience and care.",
      "I hope these difficult days don't define our whole story. I hope they become a chapter we learn from—a time when we discover how to communicate better and take care of each other's hearts.",
      "For your birthday, I wish you happiness that feels peaceful, dreams that come closer, people who make you feel valued, and countless reasons to smile. I hope this new year of your life brings you the good things you deserve.",
      "Diksha, I love you so much. I can't promise that we will never disagree, but I hope we can choose respect, kindness, and honest effort when things get difficult.",
      "Thank you for being a part of my life. I hope everything becomes okay between us, and I hope we have many beautiful days ahead.",
      "With all my love and hope,",
      "Yours,\nNikhil ❤️"
    ],
    memories: [
      { src: "images/couple-1.jpg", caption: "A little piece of our story", description: "One of our special moments" },
      { src: "images/grass-1.jpg", caption: "A memory close to my heart" },
      { src: "images/couple-2.jpg", caption: "Side by side" },
      { src: "images/memory-1.jpg", caption: "Us, together" },
      { src: "images/couple-3.jpg", caption: "More beautiful days ahead" },
      { src: "images/memory-2.jpg", caption: "Just the two of us" },
      { src: "images/memory-3.png", caption: "You and me" },
      { src: "images/grass-3.jpg", caption: "Close to you" }
    ],
    reasons: [
      ["♡", "Your smile", "It can make an ordinary day feel a little brighter."],
      ["✧", "Your heart", "I love the person you are and the feelings you carry."],
      ["☼", "Our little moments", "The simple memories are often the ones I treasure most."],
      ["∞", "Your place in my life", "You matter to me in ways that are hard to put into words."],
      ["🌷", "Your individuality", "You deserve space to be yourself and follow your dreams."],
      ["♥", "The hope we share", "I hope we keep learning, growing, and understanding each other."]
    ]
  };
  const make = (tag, cls, text) => { const el = document.createElement(tag); if (cls) el.className = cls; if (text !== undefined) el.textContent = text; return el; };
  function burst(x, y, count = 18, container = document.body) {
    if (reduced()) return;
    const symbols = ["♡", "♥", "✦", "✧", "✨"];
    for (let i = 0; i < count; i++) {
      const el = make("span", "spark", symbols[Math.floor(Math.random() * symbols.length)]);
      el.style.left = x + "px"; el.style.top = y + "px";
      const a = rand(0, Math.PI * 2), d = rand(45, 160);
      el.style.setProperty("--dx", Math.cos(a) * d + "px"); el.style.setProperty("--dy", Math.sin(a) * d + "px");
      el.style.fontSize = rand(13, 26) + "px"; container.appendChild(el);
      el.addEventListener("animationend", () => el.remove(), { once: true });
    }
  }
  function initLoader() {
    const loader = $("#loader");
    window.setTimeout(() => { loader?.classList.add("is-done"); document.body.classList.remove("is-loading"); $("#nav").hidden = false; $("#content").classList.remove("locked"); window.setTimeout(() => loader?.remove(), 800); }, reduced() ? 100 : 1400);
  }
  function initAmbient() {
    if (reduced()) return;
    const box = $("#ambient");
    for (let i = 0; i < (innerWidth < 650 ? 8 : 16); i++) {
      const h = make("span", "float-heart", Math.random() > .5 ? "♡" : "♥");
      h.style.left = rand(0, 100) + "%"; h.style.fontSize = rand(13, 28) + "px";
      h.style.setProperty("--drift", rand(-70, 70) + "px"); h.style.animationDuration = rand(12, 22) + "s"; h.style.animationDelay = rand(0, 15) + "s"; box.appendChild(h);
    }
  }
  function initNav() {
    const nav = $("#nav"), toggle = $("#navToggle"), links = $("#navLinks");
    const setMenu = open => { links.classList.toggle("open", open); toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
    toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
    $$("a", links).forEach(a => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("click", e => { if (!nav.contains(e.target)) setMenu(false); });
    const onScroll = () => nav.classList.toggle("scrolled", scrollY > 25); addEventListener("scroll", onScroll, { passive: true }); onScroll();
    if ("IntersectionObserver" in window) {
      const map = new Map($$("a[href^='#']", links).map(a => [a.getAttribute("href").slice(1), a]));
      const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { map.forEach(a => a.classList.remove("active")); map.get(entry.target.id)?.classList.add("active"); } }), { rootMargin: "-40% 0px -50% 0px" });
      map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    }
  }
  function initReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window) || reduced()) { items.forEach(el => el.classList.add("in")); return; }
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
    items.forEach(el => io.observe(el));
  }
  function initDayCounter() {
    const update = () => {
      const now = new Date(), s = CONFIG.startDate;
      const days = Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(s.year, s.month - 1, s.day)) / 86400000);
      $("#dayCount").textContent = days < 0 ? "Coming soon ♡" : days.toLocaleString();
      $("#dayLabel").textContent = days < 0 ? "Our beginning is just ahead" : days === 1 ? "day since our beginning" : "days since our beginning";
    }; update(); setInterval(update, 60000);
  }
  function buildMessage() {
    const box = $("#msgBody");
    CONFIG.message.forEach((text, i) => { const p = make("p", i === 0 || i === CONFIG.message.length - 1 ? "" : "", text); box.appendChild(p); });
    if (reduced()) { $$("p", box).forEach(p => p.classList.add("shown")); }
    else {
      const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("shown"); io.unobserve(e.target); } }), { threshold: .2 });
      $$("p", box).forEach(p => io.observe(p));
    }
    const wish = $("#wishText");
    ["On your birthday, I wish you a year filled with calm mornings, genuine laughter, exciting dreams, and people who remind you how wonderful you are.", "For us, I hope for gentler conversations, more patience, and the courage to understand each other even when it takes time.", "I don't expect perfection. I hope we keep making sincere efforts and create a relationship where both of us feel heard, respected, and loved.", "Have the loveliest birthday, Diksha. You deserve so much happiness. With love, Nikhil ♡"].forEach(t => wish.appendChild(make("p", "", t)));
  }
  function buildTimeline() {
    const list = $("#timeline");
    CONFIG.timeline.forEach(item => { const li = make("li", "tl-item reveal"), card = make("article", "tl-card glass"); card.append(make("h3", "", item.title), make("p", "", item.text)); li.appendChild(card); list.appendChild(li); });
  }
  function buildReasons() {
    const grid = $("#reasonsGrid");
    CONFIG.reasons.forEach(([icon, title, copy], i) => {
      const card = make("article", "reason-card reveal"); card.append(make("div", "reason-icon", icon), make("h3", "", title), make("p", "", copy));
      card.style.transitionDelay = (i % 3) * 70 + "ms"; grid.appendChild(card);
    });
  }
  function openModal(modal, focus) {
    modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false"); document.body.classList.add("modal-open");
    if (focus) setTimeout(() => focus.focus({ preventScroll: true }), 50);
  }
  function closeModal(modal) {
    if (!modal?.classList.contains("is-open")) return;
    modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true");
    if (!$(".modal.is-open")) document.body.classList.remove("modal-open");
  }
  function initModals() {
    $$(".modal").forEach(modal => $$("[data-close]", modal).forEach(el => el.addEventListener("click", () => closeModal(modal))));
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") { const modal = $$(".modal.is-open").at(-1); if (modal) closeModal(modal); }
      if ($("#lightbox").classList.contains("is-open")) { if (e.key === "ArrowLeft") showPhoto(currentPhoto - 1); if (e.key === "ArrowRight") showPhoto(currentPhoto + 1); }
    });
    $("#openSurprise").addEventListener("click", () => openSurprise());
    $("#surpriseBtn").addEventListener("click", () => openSurprise());
    $("#surpriseClose").addEventListener("click", () => closeModal($("#surpriseModal")));
    $("#wishBtn").addEventListener("click", () => { $("#wishNote").textContent = "Make a wish, my love. May this year be kind to you. ✨"; $("#heroCake").textContent = "🎂✨"; burst(innerWidth / 2, innerHeight * .55, 28); });
    $("#toTop").addEventListener("click", () => scrollTo({ top: 0, behavior: reduced() ? "auto" : "smooth" }));
  }
  let letterTimers = [];
  function buildLetter() {
    const body = $("#letterBody");
    CONFIG.letter.forEach((text, i) => body.appendChild(make("p", "line" + (i === 0 || i === CONFIG.letter.length - 1 ? " special" : ""), text)));
    $("#envelope").addEventListener("click", () => {
      $("#envelope").classList.add("open");
      setTimeout(() => { openModal($("#letterModal"), $("#letterPaper")); playLetter(); }, reduced() ? 0 : 450);
    });
    $("#letterClose").addEventListener("click", () => closeModal($("#letterModal")));
    $("#letterSkip").addEventListener("click", showWholeLetter);
    $("#letterReplay").addEventListener("click", playLetter);
    $("#letterModal").addEventListener("transitionend", () => { if (!$("#letterModal").classList.contains("is-open")) { $("#envelope").classList.remove("open"); letterTimers.forEach(clearTimeout); } });
  }
  function showWholeLetter() { letterTimers.forEach(clearTimeout); letterTimers = []; $$(".letter-body .line").forEach(el => el.classList.add("shown")); $("#letterSignature").classList.add("shown"); }
  function playLetter() {
    letterTimers.forEach(clearTimeout); letterTimers = []; const lines = $$(".letter-body .line"), sig = $("#letterSignature"), paper = $("#letterPaper");
    lines.forEach(el => el.classList.remove("shown")); sig.classList.remove("shown"); paper.scrollTop = 0;
    if (reduced()) { showWholeLetter(); return; }
    lines.forEach((line, i) => letterTimers.push(setTimeout(() => { line.classList.add("shown"); }, 220 + i * 340)));
    letterTimers.push(setTimeout(() => sig.classList.add("shown"), 300 + lines.length * 340));
  }
  let currentPhoto = 0;
  function buildGallery() {
    const grid = $("#galleryGrid");
    CONFIG.memories.forEach((m, i) => {
      const card = make("button", "polaroid"); card.type = "button"; card.style.setProperty("--rot", (i % 2 ? 1 : -1) * (1 + (i % 3) * .6) + "deg"); card.setAttribute("aria-label", "Open photo: " + m.caption);
      const frame = make("span", "polaroid-frame"), img = new Image(); img.loading = "lazy"; img.src = m.src; img.alt = m.description || m.caption; img.addEventListener("error", () => card.classList.add("is-missing")); frame.appendChild(img);
      const missing = make("span", "polaroid-missing"); missing.append(make("span", "", "♡"), make("span", "", "Add your photo here")); frame.appendChild(missing);
      card.append(frame, make("span", "polaroid-caption", m.caption)); card.addEventListener("click", () => openLightbox(i)); grid.appendChild(card);
    });
  }
  function showPhoto(index) {
    const list = CONFIG.memories; currentPhoto = (index + list.length) % list.length; const m = list[currentPhoto], img = $("#lbImg");
    img.hidden = false; img.onerror = () => { img.hidden = true; }; img.src = m.src; img.alt = m.description || m.caption;
    $("#lbCaption").textContent = m.caption; $("#lbDesc").textContent = m.description || ""; $("#lbCount").textContent = (currentPhoto + 1) + " / " + list.length;
  }
  function openLightbox(i) { showPhoto(i); openModal($("#lightbox"), $("#lbClose")); }
  function initLightbox() {
    const box = $("#lightbox"); $("#lbClose").addEventListener("click", () => closeModal(box)); $("#lbPrev").addEventListener("click", () => showPhoto(currentPhoto - 1)); $("#lbNext").addEventListener("click", () => showPhoto(currentPhoto + 1));
    let x = 0, y = 0; box.addEventListener("touchstart", e => { x = e.changedTouches[0].clientX; y = e.changedTouches[0].clientY; }, { passive: true });
    box.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - x, dy = e.changedTouches[0].clientY - y; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) showPhoto(currentPhoto + (dx < 0 ? 1 : -1)); }, { passive: true });
  }
  let fireTimer = null;
  function openSurprise() {
    const modal = $("#surpriseModal"); openModal(modal, $("#surprisePanel"));
    const text = $("#surpriseText"); if (!text.childElementCount) {
      ["I hope your birthday reminds you how special you are.", "I hope your dreams find their way to you, your heart feels lighter, and this next chapter brings you reasons to smile.", "And for us, I hope for understanding, kindness, and beautiful days we can build together—one step at a time.", "Happy Birthday, my Diksha. I love you. ♡"].forEach(t => text.appendChild(make("p", "", t)));
    }
    if (!reduced()) {
      clearInterval(fireTimer); fireTimer = setInterval(() => burst(rand(innerWidth * .15, innerWidth * .85), rand(innerHeight * .15, innerHeight * .65), 12, $("#fireworks")), 800);
    }
    modal.addEventListener("transitionend", () => { if (!modal.classList.contains("is-open")) clearInterval(fireTimer); }, { once: true });
    burst(innerWidth / 2, innerHeight / 2, 36);
  }
  document.addEventListener("DOMContentLoaded", () => {
    initLoader(); initAmbient(); initNav(); initDayCounter(); buildMessage(); buildTimeline(); buildReasons(); buildLetter(); buildGallery(); initModals(); initLightbox();
    // Reveal generated cards as well as static sections after content is built.
    initReveal();
  });
})();