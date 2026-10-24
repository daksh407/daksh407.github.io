/* Daksh Vasudeva — a scrapbook that plays back.
   Plain JS, no build step, works from file:// and any static host. */
(() => {
  "use strict";
  const doc = document.documentElement;
  doc.classList.add("js");
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  const fine = matchMedia("(pointer: fine)");
  const isNarrow = () => innerWidth <= 820;
  const fmt = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

  /* ---------------------------------------------------------
     1 · Torn seams — a new tear on every visit
     --------------------------------------------------------- */
  let seed = (Math.random() * 1e9) | 0;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  function tearPath(w, h) {
    const pts = [];
    let x = 0, y = h * (0.45 + rnd() * 0.2), drift = 0;
    while (x < w) {
      pts.push([x, y]);
      x += 3 + rnd() * (w < 600 ? 9 : 14);
      drift += (rnd() - 0.5) * h * 0.18;
      drift *= 0.82;
      y = Math.min(h * 0.94, Math.max(h * 0.12, y + drift + (rnd() - 0.5) * h * 0.22));
    }
    pts.push([w, y]);
    return pts;
  }
  const toD = (pts, h, dy = 0) =>
    `M0 ${h + 2} L` + pts.map(([x, y]) => `${x.toFixed(1)} ${(y + dy).toFixed(1)}`).join(" L") + ` L${pts[pts.length - 1][0]} ${h + 2} Z`;
  function buildTears() {
    $$(".room:not(.room--cover)").forEach((room) => {
      let svg = room.querySelector(":scope > .tear");
      const w = Math.max(320, Math.round(room.clientWidth));
      const h = parseFloat(getComputedStyle(room).getPropertyValue("--tear")) || 30;
      if (svg && +svg.dataset.w === w) return;
      if (!svg) {
        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "tear");
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("preserveAspectRatio", "none");
        room.prepend(svg);
      }
      const H = 40;
      const bg = getComputedStyle(room).backgroundColor;
      const pts = tearPath(w, H);
      const fringe = pts.map(([x, y]) => [x, y - 1.5 - rnd() * 3.2]);
      svg.dataset.w = w;
      svg.setAttribute("viewBox", `0 0 ${w} ${H}`);
      svg.innerHTML =
        `<path d="${toD(fringe, H)}" fill="rgba(255,252,244,.55)"/>` +
        `<path d="${toD(pts, H)}" fill="${bg}"/>`;
    });
  }

  /* ---------------------------------------------------------
     2 · Fit the stamped name to the column
     --------------------------------------------------------- */
  function fitStamp() {
    const h1 = $("#stamp");
    if (!h1) return;
    const lines = $$(".stamp__line", h1);
    h1.style.fontSize = "";
    const avail = h1.parentElement.clientWidth * (isNarrow() ? 1 : 0.86);
    const base = parseFloat(getComputedStyle(h1).fontSize);
    lines.forEach((l) => (l.style.fontSize = ""));
    // each line gets its own size so the block reads as one stamped poster
    lines.forEach((l, i) => {
      l.style.display = "inline-block";
      const wNow = l.getBoundingClientRect().width || 1;
      const offset = i === 1 ? parseFloat(getComputedStyle(l).marginLeft) || 0 : 0;
      const target = Math.min((avail - offset) / wNow, i === 0 ? 1.25 : 1.02);
      l.style.fontSize = `${(base * target).toFixed(1)}px`;
      l.style.display = "";
    });
  }

  /* ---------------------------------------------------------
     3 · Reveal on scroll
     --------------------------------------------------------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }),
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  $$("[data-reveal]").forEach((el, i) => {
    if (el.closest(".collage")) el.style.transitionDelay = `${80 + i * 90}ms`;
    io.observe(el);
  });

  /* ---------------------------------------------------------
     4 · Collage: drag the prints (fine pointers only)
     --------------------------------------------------------- */
  const reset = $("#reset");
  let moved = false;
  $$("#collage [data-drag]").forEach((el) => {
    let sx, sy, ox, oy, id = null, dragged = false, z = 6;
    el.addEventListener("pointerdown", (e) => {
      if (!fine.matches || e.button !== 0) return;
      id = e.pointerId; dragged = false;
      sx = e.clientX; sy = e.clientY;
      ox = parseFloat(el.style.getPropertyValue("--dx")) || 0;
      oy = parseFloat(el.style.getPropertyValue("--dy")) || 0;
      el.setPointerCapture(id);
    });
    el.addEventListener("pointermove", (e) => {
      if (e.pointerId !== id) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (!dragged && Math.hypot(dx, dy) < 6) return;
      if (!dragged) { dragged = true; el.classList.add("is-drag"); el.style.zIndex = String(++z + 10); }
      el.style.setProperty("--dx", `${ox + dx}px`);
      el.style.setProperty("--dy", `${oy + dy}px`);
    });
    const end = (e) => {
      if (e.pointerId !== id) return;
      id = null;
      el.classList.remove("is-drag");
      if (dragged) { moved = true; reset && reset.classList.add("is-on"); reset && (reset.tabIndex = 0); }
    };
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);
    el.addEventListener("click", (e) => { if (dragged) { e.preventDefault(); dragged = false; } });
    el.addEventListener("dragstart", (e) => e.preventDefault());
  });
  reset && reset.addEventListener("click", () => {
    $$("#collage [data-drag]").forEach((el) => { el.style.setProperty("--dx", "0px"); el.style.setProperty("--dy", "0px"); el.style.zIndex = ""; });
    reset.classList.remove("is-on"); reset.tabIndex = -1; moved = false;
  });

  /* ---------------------------------------------------------
     5 · Nav: current room, theme, hide on scroll down (phones)
     --------------------------------------------------------- */
  const tabs = $$(".tab");
  tabs.forEach((t) => { const l = t.querySelector(".tab__l"); t.querySelector(".tab__n").dataset.l = { film: "film", sem: "sem 3", pencil: "pencil", bed: "bed" }[t.dataset.room] || l.textContent; });
  const rooms = $$(".room");
  function onScrollNav() {
    const probe = innerHeight * 0.4;
    let current = rooms[0];
    for (const r of rooms) if (r.getBoundingClientRect().top <= probe) current = r;
    document.body.dataset.on = current.dataset.theme || "ivory";
    document.body.classList.toggle("past-cover", rooms[0].getBoundingClientRect().bottom < innerHeight * 0.55);
    tabs.forEach((t) => t.classList.toggle("is-current", t.dataset.room === current.id));
  }
  let lastY = scrollY, ticking = false;
  const mast = $("#mast");
  addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      onScrollNav();
      const y = scrollY;
      if (isNarrow()) {
        if (y > lastY + 6 && y > 300) mast.classList.add("is-hidden");
        else if (y < lastY - 6) mast.classList.remove("is-hidden");
      } else mast.classList.remove("is-hidden");
      lastY = y; ticking = false;
    });
  }, { passive: true });

  /* ---------------------------------------------------------
     6 · Players (lazy: nothing downloads until you press play)
     --------------------------------------------------------- */
  const players = [];
  function theatre(on) { document.body.classList.toggle("theatre", on); }
  function setupPlayer(box) {
    const v = box.querySelector("video");
    const btn = box.querySelector(".play");
    if (!v || !btn) return;
    const load = () => { if (!v.getAttribute("src")) { v.src = v.dataset.src; } };
    const start = (t) => {
      load();
      players.forEach((p) => { if (p !== v && !p.paused) p.pause(); });
      v.controls = true;
      box.classList.add("is-playing");
      if (typeof t === "number") {
        const seek = () => { try { v.currentTime = t; } catch (_) {} };
        if (v.readyState >= 1) seek(); else v.addEventListener("loadedmetadata", seek, { once: true });
      }
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };
    btn.addEventListener("click", () => start());
    v.addEventListener("play", () => { box.classList.add("is-playing"); if (box.hasAttribute("data-theatre")) theatre(true); });
    v.addEventListener("pause", () => theatre(false));
    v.addEventListener("ended", () => { theatre(false); });
    players.push(v);
    box._start = start;
  }
  $$(".cinema").forEach(setupPlayer);

  /* CGI film strip — scrub with a cursor, tap to play from there */
  const cgi = $("#cgi");
  const strip = $("#filmstrip");
  if (cgi && strip) {
    const times = [0.8, 2.92, 5.04, 7.16, 9.28, 11.4, 13.52, 15.64, 17.76, 19.88, 22, 24.12, 26.24, 28.36, 30.48, 32.6];
    const still = cgi.querySelector(".cinema__still");
    const stamp = cgi.querySelector(".cinema__time");
    const poster = still.getAttribute("src");
    strip.innerHTML = times.map((t, i) => {
      const n = String(i).padStart(2, "0");
      return `<li><button type="button" data-t="${t}" aria-label="Play from ${fmt(t)}"><img src="../img/cgi-f${n}.webp" width="1280" height="720" alt="" loading="lazy" decoding="async"></button></li>`;
    }).join("");
    const btns = $$("button", strip);
    const preview = (b) => {
      if (cgi.classList.contains("is-playing")) return;
      btns.forEach((x) => x.classList.toggle("is-on", x === b));
      still.src = b.querySelector("img").src;
      stamp.textContent = fmt(+b.dataset.t);
      cgi.classList.add("is-scrub");
    };
    // one tab stop for the whole strip; arrow keys move between frames
    btns.forEach((b, i) => { b.tabIndex = i === 0 ? 0 : -1; });
    strip.addEventListener("keydown", (e) => {
      const i = btns.indexOf(document.activeElement);
      if (i < 0) return;
      const n = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? btns.length - 1 : null;
      if (n === null) return;
      e.preventDefault();
      const k = Math.max(0, Math.min(btns.length - 1, n));
      btns[i].tabIndex = -1; btns[k].tabIndex = 0; btns[k].focus();
    });
    btns.forEach((b) => {
      b.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") preview(b); });
      b.addEventListener("focus", () => preview(b));
      b.addEventListener("click", () => { btns.forEach((x) => x.classList.toggle("is-on", x === b)); cgi._start(+b.dataset.t); });
    });
    strip.addEventListener("pointerleave", () => {
      if (cgi.classList.contains("is-playing")) return;
      still.src = poster; cgi.classList.remove("is-scrub"); btns.forEach((x) => x.classList.remove("is-on"));
    });
    // drag-scrub with mouse across the whole strip
    strip.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const b = el && el.closest("#filmstrip button");
      if (b && !b.classList.contains("is-on")) preview(b);
    });
  }

  /* syringe loop — quiet, muted, only while on screen; pausable */
  const syr = $("#syringe"), syrBtn = $("#syringe-toggle");
  if (syr) {
    let userPaused = false, visible = false;
    const setBtn = () => { const playing = !syr.paused; syrBtn.textContent = playing ? "pause loop" : "play loop"; syrBtn.setAttribute("aria-pressed", String(playing)); };
    const go = () => { if (!syr.getAttribute("src")) syr.src = syr.dataset.src; const p = syr.play(); p && p.catch && p.catch(() => {}); };
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !userPaused && !reduce.matches) go();
      else if (!visible) syr.pause();
    }, { threshold: 0.35 }).observe(syr);
    syrBtn.addEventListener("click", () => { if (syr.paused) { userPaused = false; go(); } else { userPaused = true; syr.pause(); } });
    syr.addEventListener("play", setBtn); syr.addEventListener("pause", setBtn);
  }

  /* ---------------------------------------------------------
     7 · Sem Three — the scroll unrolls straight into reading
     --------------------------------------------------------- */
  const TILE_W = 1000;
  const tiles = Array.from({ length: 23 }, (_, i) => ({ src: `../media/semester-${String(i + 1).padStart(2, "0")}.webp`, h: i === 22 ? 402 : 2000 }));
  const DOC_H = tiles.reduce((a, t) => a + t.h, 0);
  const at = (tile, y) => (tile - 1) * 2000 + y;
  const CHAPTERS = [
    { n: "01", t: "Icon design", y: at(1, 1100), spot: [10, 34.4, 22, 7] },
    { n: "02", t: "Abstract composition", y: at(4, 850), spot: [37.5, 34.4, 25, 7] },
    { n: "03", t: "Event collaterals", y: at(6, 1450), spot: [67, 34.4, 25, 7] },
    { n: "04", t: "Initials monogram", y: at(7, 1960), spot: [10, 43, 23, 6.6] },
    { n: "05", t: "City branding — Kashi", y: at(9, 1030), spot: [38, 43, 24, 6.6] },
    { n: "", t: "research & mood", y: at(10, 260), sub: true },
    { n: "", t: "sketch explorations", y: at(12, 560), sub: true },
    { n: "", t: "logo system", y: at(13, 720), sub: true },
    { n: "", t: "colour & pattern", y: at(14, 720), sub: true },
    { n: "", t: "motion graphics", y: at(16, 0), sub: true },
    { n: "06", t: "Touchpoints", y: at(20, 1320), spot: [68.5, 43, 23, 6.6] },
  ];
  const reader = $("#reader"), rScroll = $("#reader-scroll"), rDoc = $("#reader-doc"), ruler = $("#ruler");
  const rProg = $("#reader-progress"), rChap = $("#reader-chap");
  let readerBuilt = false, opener = null, you = null, pushed = false;

  // chapter index + hotspots on the real cover
  const idx = $("#sem-index"), spots = $("#sem-spots");
  CHAPTERS.filter((c) => !c.sub).forEach((c) => {
    const li = document.createElement("li");
    li.innerHTML = `<button class="chap" type="button"><b>${c.n}</b>${c.t}</button>`;
    li.firstChild.addEventListener("click", (e) => openReader(c.y, e.currentTarget));
    idx.appendChild(li);
    if (c.spot) {
      const s = document.createElement("button");
      s.type = "button"; s.className = "spot";
      s.setAttribute("aria-label", `Open chapter ${c.n}, ${c.t}`);
      const [x, y, w, h] = c.spot;
      Object.assign(s.style, { left: x + "%", top: y + "%", width: w + "%", height: h + "%" });
      s.addEventListener("click", (e) => openReader(c.y, e.currentTarget));
      spots.appendChild(s);
    }
  });
  $("#unroll").addEventListener("click", (e) => openReader(at(2, 0), e.currentTarget));

  function buildReader() {
    if (readerBuilt) return;
    readerBuilt = true;
    rDoc.innerHTML = tiles.map((t, i) =>
      `<img src="${t.src}" width="${TILE_W}" height="${t.h}" alt="${i === 0 ? "Semester Three portfolio — the full continuous scroll, part 1 of 23" : `part ${i + 1} of 23`}" ${i < 3 ? "" : 'loading="lazy"'} decoding="async">`).join("");
    const track = document.createElement("div"); track.className = "ruler__track"; ruler.appendChild(track);
    you = document.createElement("span"); you.className = "ruler__you"; track.appendChild(you);
    CHAPTERS.forEach((c) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "ruler__chap" + (c.sub ? " ruler__chap--sub" : "");
      b.style.top = (c.y / DOC_H) * 100 + "%";
      b.innerHTML = `<span>${c.t}</span><b>${c.n || "·"}</b>`;
      b.setAttribute("aria-label", `${c.n ? c.n + " " : ""}${c.t}`);
      b.addEventListener("click", () => jump(c.y, true));
      c.el = b; ruler.appendChild(b);
    });
    rScroll.addEventListener("scroll", onReaderScroll, { passive: true });
  }
  const scale = () => rDoc.clientWidth / TILE_W;
  function jump(y, smooth) {
    const top = rDoc.offsetTop + y * scale() - (isNarrow() ? 50 : 70);
    rScroll.scrollTo({ top: Math.max(0, top), behavior: smooth && !reduce.matches ? "smooth" : "auto" });
  }
  function onReaderScroll() {
    const y = (rScroll.scrollTop + rScroll.clientHeight * 0.3 - rDoc.offsetTop) / scale();
    const p = Math.max(0, Math.min(1, y / DOC_H));
    rProg.style.width = p * 100 + "%";
    if (you) you.style.top = p * 100 + "%";
    let cur = null;
    CHAPTERS.forEach((c) => { if (y >= c.y - 40) cur = c; });
    CHAPTERS.forEach((c) => c.el && c.el.classList.toggle("is-on", c === cur));
    rChap.textContent = cur ? `· ${cur.n ? cur.n + " " : ""}${cur.t}` : "· cover";
  }
  function openReader(y, from) {
    opener = from || null;
    buildReader();
    reader.hidden = false;
    doc.style.overflow = "hidden";
    $("#main").setAttribute("inert", "");
    $("#mast").setAttribute("inert", "");
    requestAnimationFrame(() => { jump(y, false); onReaderScroll(); $("#reader-close").focus({ preventScroll: true }); });
    if (location.hash !== "#read") { history.pushState({ reader: true }, "", "#read"); pushed = true; } else pushed = false;
  }
  function closeReader(fromPop) {
    if (reader.hidden) return;
    reader.hidden = true;
    doc.style.overflow = "";
    $("#main").removeAttribute("inert");
    $("#mast").removeAttribute("inert");
    if (!fromPop && location.hash === "#read") { if (pushed) history.back(); else history.replaceState(null, "", "#sem"); }
    pushed = false;
    if (opener) opener.focus({ preventScroll: true });
  }
  $("#reader-close").addEventListener("click", () => closeReader(false));
  addEventListener("popstate", () => { if (location.hash !== "#read") closeReader(true); else if (reader.hidden) openReader(0); });
  reader.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { e.preventDefault(); closeReader(false); }
    if (e.key === "Tab") { // keep focus inside
      const f = $$("button, a[href], [tabindex='0']", reader).filter((n) => n.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  if (location.hash === "#read") { requestAnimationFrame(() => openReader(0, $("#unroll"))); }

  /* ---------------------------------------------------------
     8 · Lightbox
     --------------------------------------------------------- */
  const lb = $("#lightbox"), lbImg = $("#lb-img"), lbCap = $("#lb-cap");
  let group = [], gi = 0, lbOpener = null;
  function showLb(i) {
    gi = (i + group.length) % group.length;
    const b = group[gi];
    const w = +b.dataset.w, h = +b.dataset.h;
    lbImg.src = b.dataset.full;
    lbImg.alt = (b.querySelector("img") || {}).alt || "";
    lbCap.textContent = b.dataset.cap || "";
    lbImg.parentElement.classList.toggle("is-wide", w / h > 3 && isNarrow());
    lbImg.parentElement.scrollLeft = 0;
    $("#lb-prev").hidden = $("#lb-next").hidden = group.length < 2;
  }
  $$("[data-lightbox]").forEach((b) => b.addEventListener("click", () => {
    group = $$(`[data-lightbox="${b.dataset.lightbox}"]`);
    lbOpener = b;
    showLb(group.indexOf(b));
    if (typeof lb.showModal === "function") lb.showModal(); else lb.setAttribute("open", "");
  }));
  const closeLb = () => { lb.close ? lb.close() : lb.removeAttribute("open"); };
  $("#lb-close").addEventListener("click", closeLb);
  $("#lb-prev").addEventListener("click", () => showLb(gi - 1));
  $("#lb-next").addEventListener("click", () => showLb(gi + 1));
  lb.addEventListener("close", () => { lbImg.removeAttribute("src"); lbOpener && lbOpener.focus({ preventScroll: true }); });
  lb.addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") showLb(gi - 1); if (e.key === "ArrowRight") showLb(gi + 1); });
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.classList.contains("lightbox__img")) closeLb(); });

  /* ---------------------------------------------------------
     9 · The lever — bed mode ↔ chair mode
     --------------------------------------------------------- */
  const range = $("#lever-range");
  if (range) {
    const L = $("#p-left"), R = $("#p-right"), table = $("#table"), post = $("#post");
    const hpRod = $("#hp-rod"), vpRod = $("#vp-rod"), fluid = $("#vp-fluid"), tLabel = $("#table-label");
    const state = $("#lever-state"), xb = $("#xfade-b");
    const modes = $$(".mode"), ends = $$(".lever__end");
    const ease = (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    const clamp01 = (x) => Math.max(0, Math.min(1, x));
    function draw(v) {
      const t = v / 100;
      const a = ease(clamp01(t / 0.85));
      L.setAttribute("transform", `rotate(${(-20 * a).toFixed(2)} 300 215)`);
      R.setAttribute("transform", `rotate(${(-68 * a).toFixed(2)} 500 215)`);
      // horizontal piston pushes out to the left support
      hpRod.setAttribute("x", (318 - 26 * a).toFixed(1));
      hpRod.setAttribute("width", (70 + 26 * a).toFixed(1));
      // vertical piston: fluid rises, rod lifts the backrest
      const fh = 26 + 44 * a;
      fluid.setAttribute("y", (326 - fh).toFixed(1));
      fluid.setAttribute("height", fh.toFixed(1));
      vpRod.setAttribute("y", (206 - 40 * a).toFixed(1));
      vpRod.setAttribute("height", (46 + 40 * a).toFixed(1));
      // table swings up out of the central slot in the second half
      const b = ease(clamp01((t - 0.45) / 0.55));
      const lift = 112 * b;
      table.setAttribute("transform", `translate(0 ${(-lift).toFixed(1)}) rotate(${(180 * b).toFixed(1)} 330 250)`);
      post.setAttribute("y2", (250 - lift).toFixed(1));
      tLabel.setAttribute("x", (352 - 190 * b).toFixed(1));
      tLabel.setAttribute("y", (150 + 0 * b).toFixed(1));
      tLabel.style.opacity = b > 0.15 ? "1" : "0";
      xb.style.opacity = clamp01((t - 0.3) / 0.4).toFixed(2);
      const label = t < 0.34 ? "bed mode" : t < 0.67 ? "mid transition" : "chair mode";
      const sub = t < 0.34 ? "rest" : t < 0.67 ? "…the commute" : "work";
      state.textContent = `${label} — ${sub}`;
      range.setAttribute("aria-valuetext", label);
      const mi = t < 0.34 ? 0 : t < 0.67 ? 1 : 2;
      modes.forEach((m, i) => m.classList.toggle("is-on", i === mi));
      ends[0].classList.toggle("is-on", t === 0);
      ends[1].classList.toggle("is-on", t === 1);
    }
    let anim = null;
    function tweenTo(target) {
      cancelAnimationFrame(anim);
      const from = +range.value;
      if (reduce.matches) { range.value = target; draw(target); return; }
      const dur = 900 * Math.abs(target - from) / 100 + 200, t0 = performance.now();
      const step = (now) => {
        const k = Math.min(1, (now - t0) / dur);
        const v = from + (target - from) * k;
        range.value = v; draw(v);
        if (k < 1) anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    }
    range.addEventListener("input", () => { cancelAnimationFrame(anim); draw(+range.value); });
    $$("[data-to]", $("#lever")).forEach((b) => b.addEventListener("click", () => tweenTo(+b.dataset.to)));
    draw(0);
  }

  /* ---------------------------------------------------------
     boot
     --------------------------------------------------------- */
  const relayout = () => { buildTears(); fitStamp(); onScrollNav(); };
  let rz;
  addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(relayout, 120); });
  buildTears(); onScrollNav();
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(fitStamp);
  fitStamp();
})();
