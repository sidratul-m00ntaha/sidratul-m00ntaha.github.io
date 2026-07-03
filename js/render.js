/* ============================================================
   Renderer — reads window.DATA (from data/*.js) and builds the
   page. You should rarely need to touch this file: to change
   content, edit the files in data/.
   ============================================================ */
(function () {
  const D = window.DATA;
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));

  const tags = (items, cls) =>
    (items || []).map((t) => `<span class="${cls}">${esc(t)}</span>`).join("");

  const sectionHead = (num, title) => `
    <div class="section-head reveal">
      <span class="section-num">${num}</span>
      <h2 class="section-title">${title}</h2>
    </div>`;

  /* ---------- hero ---------- */
  const p = D.profile;
  $("#hero").innerHTML = `
    <p class="hero-greeting">${esc(p.greeting)} <span class="wave" id="wave">👋</span></p>
    <h1 class="hero-name">${esc(p.name)}<span class="accent">.</span></h1>
    <div class="hero-roles">${tags(p.roles, "role-chip")}</div>
    <p class="hero-headline"><span class="accent">${esc(p.headline)}</span></p>
    <p class="hero-tagline">${esc(p.tagline)}</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="#projects">See my work ↓</a>
      <a class="btn btn-ghost" href="${esc(p.links.github)}" target="_blank" rel="noopener">GitHub</a>
      <a class="btn btn-ghost" href="${esc(p.links.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
    </div>`;

  /* ---------- ticker ---------- */
  const tickerWords = [...p.ticker, ...p.ticker] // duplicated for seamless loop
    .map((w) => `<span>${esc(w)}</span><span class="dot">✦</span>`)
    .join("");
  $("#ticker").innerHTML = `<div class="ticker-track">${tickerWords}</div>`;

  /* ---------- about ---------- */
  $("#about").innerHTML = `
    ${sectionHead("01", "About me")}
    <div class="about-grid">
      <div class="about-text reveal">
        ${p.about.map((par) => `<p>${esc(par)}</p>`).join("")}
      </div>
      <aside class="traits-card reveal">
        <h3>How people describe me</h3>
        <div class="traits">${tags(p.traits, "trait")}</div>
        <div class="open-to"><b>Open to</b>${esc(p.openTo)}</div>
      </aside>
    </div>`;

  /* ---------- research & honors ---------- */
  $("#research").innerHTML = `
    ${sectionHead("02", "Research &amp; honors")}
    <div class="ach-list">
      ${D.achievements.map((a) => `
        <article class="ach-card reveal">
          <div class="ach-year">${esc(a.year)}</div>
          <div>
            <span class="ach-type ${esc(a.type)}">${a.type === "publication" ? "Publication" : "Award"}</span>
            <h3 class="ach-title">${esc(a.title)}</h3>
            <p class="ach-venue">${esc(a.venue)}</p>
            <p class="ach-detail">${esc(a.detail)}</p>
            ${a.link ? `<a class="ach-link" href="${esc(a.link)}" target="_blank" rel="noopener">View →</a>` : ""}
          </div>
        </article>`).join("")}
    </div>`;

  /* ---------- projects ---------- */
  const featured = D.projects.find((pr) => pr.featured);
  const rest = D.projects.filter((pr) => !pr.featured);

  const linkRow = (pr) => `
    <div class="project-links">
      ${pr.github ? `<a href="${esc(pr.github)}" target="_blank" rel="noopener">GitHub →</a>` : ""}
      ${pr.live ? `<a href="${esc(pr.live)}" target="_blank" rel="noopener">Live demo →</a>` : ""}
    </div>`;

  $("#projects").innerHTML = `
    ${sectionHead("03", "Projects")}
    ${featured ? `
      <div class="project-featured reveal">
        <div class="project-featured-inner">
          <span class="project-flag">★ Featured</span>
          <h3>${esc(featured.title)}</h3>
          <p class="blurb">${esc(featured.blurb)}</p>
          ${featured.points ? `<ul class="project-points">${featured.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>` : ""}
          <div class="tech-tags">${tags(featured.tech, "tech-tag")}</div>
          ${linkRow(featured)}
        </div>
      </div>` : ""}
    <div class="projects-grid">
      ${rest.map((pr) => `
        <article class="project-card reveal">
          <div class="project-card-top">
            <h3>${esc(pr.title)}</h3>
            <span class="project-year">${esc(pr.year)}</span>
          </div>
          <p class="blurb">${esc(pr.blurb)}</p>
          <div class="tech-tags">${tags(pr.tech, "tech-tag")}</div>
          ${linkRow(pr)}
        </article>`).join("")}
    </div>`;

  /* ---------- experience ---------- */
  $("#experience").innerHTML = `
    ${sectionHead("04", "Experience")}
    <div class="exp-list">
      ${D.experience.map((e) => `
        <article class="exp-card reveal">
          <div class="exp-head">
            <h3 class="exp-role">${esc(e.role)}</h3>
            <span class="exp-period">${esc(e.period)}</span>
          </div>
          <p class="exp-org">${esc(e.org)}${e.where ? ` · ${esc(e.where)}` : ""}</p>
          ${e.points ? `<ul class="exp-points">${e.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>` : ""}
          ${e.tech ? `<div class="tech-tags">${tags(e.tech, "tech-tag")}</div>` : ""}
        </article>`).join("")}
    </div>`;

  /* ---------- skills ---------- */
  $("#skills").innerHTML = `
    ${sectionHead("05", "Skills")}
    <div class="skills-grid">
      ${D.skills.map((g) => `
        <div class="skill-group reveal">
          <h3>${esc(g.group)}</h3>
          <div class="skill-items">${tags(g.items, "skill-chip")}</div>
        </div>`).join("")}
    </div>`;

  /* ---------- education ---------- */
  $("#education").innerHTML = `
    ${sectionHead("06", "Education")}
    <div class="edu-list">
      ${D.education.map((e) => `
        <article class="edu-card reveal">
          <h3>${esc(e.school)}</h3>
          <p class="edu-degree">${esc(e.degree)}</p>
          <p class="edu-period">${esc(e.period)}</p>
          ${e.note ? `<p class="edu-note">${esc(e.note)}</p>` : ""}
        </article>`).join("")}
    </div>`;

  /* ---------- blog ---------- */
  const posts = D.blog || [];
  $("#blog").innerHTML = `
    ${sectionHead("07", "Writing")}
    ${posts.length === 0 ? `
      <div class="blog-empty reveal">
        <span class="big">✍️</span>
        <p><b>First post loading…</b></p>
        <p>Thoughts on machine learning, research, and learning in public — coming soon.</p>
      </div>` : `
      <div class="blog-grid">
        ${posts.map((b) => `
          <a class="blog-card reveal" href="${esc(b.url)}"${/^https?:/.test(b.url) ? ' target="_blank" rel="noopener"' : ""}>
            <p class="blog-date">${esc(b.date)}</p>
            <h3>${esc(b.title)}</h3>
            <p>${esc(b.summary)}</p>
          </a>`).join("")}
      </div>`}`;

  /* ---------- contact ---------- */
  $("#contact").innerHTML = `
    ${sectionHead("08", "Contact")}
    <h2 class="contact-title reveal">Let's build something<br /><span class="accent">meaningful</span> together.</h2>
    <p class="contact-sub reveal">${esc(p.openTo)} — or just say salaam. My inbox is open, and I reply.</p>
    <div class="contact-links reveal">
      <a class="btn btn-primary" href="mailto:${esc(p.email)}">✉️ ${esc(p.email)}</a>
      <a class="btn btn-ghost" href="${esc(p.links.github)}" target="_blank" rel="noopener">GitHub</a>
      <a class="btn btn-ghost" href="${esc(p.links.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
    </div>`;

  /* ---------- footer ---------- */
  $("#footer").innerHTML = `
    <p class="cat-line">Crafted with kindness, curiosity &amp; a serious love for cats
      <em class="cat" id="cat" title="pet the cat">🐈‍⬛</em>
    </p>
    <p>© ${new Date().getFullYear()} ${esc(p.name)} · ${esc(p.location)}</p>`;

  /* ============================================================
     Behaviour
     ============================================================ */

  // sticky nav + scroll progress
  const nav = $("#nav");
  const progress = $("#scroll-progress");
  addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", scrollY > 30);
    const h = document.documentElement;
    progress.style.width = `${(h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100}%`;
  }, { passive: true });

  // mobile menu
  const burger = $("#nav-burger");
  const links = $("#nav-links");
  burger.addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") links.classList.remove("open");
  });

  // reveal on scroll
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // cat easter egg 🐾
  const meows = ["meow~", "purrr…", "mrrp!", "🐟?", "*headbutt*"];
  let meowCount = 0;
  function pawBurst(x, y) {
    for (let i = 0; i < 5; i++) {
      const paw = document.createElement("span");
      paw.className = "paw";
      paw.textContent = "🐾";
      paw.style.left = `${x + (Math.random() - 0.5) * 140}px`;
      paw.style.top = `${y + (Math.random() - 0.5) * 90}px`;
      paw.style.animationDelay = `${i * 90}ms`;
      document.body.appendChild(paw);
      setTimeout(() => paw.remove(), 1800);
    }
    const toast = document.createElement("div");
    toast.className = "meow-toast";
    toast.textContent = meows[meowCount++ % meows.length];
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1900);
  }
  document.addEventListener("click", (e) => {
    if (e.target.id === "cat" || e.target.id === "wave") {
      const r = e.target.getBoundingClientRect();
      pawBurst(r.left + r.width / 2, r.top);
    }
  });
})();
