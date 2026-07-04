/* ============================================================
   Renderer — reads window.DATA (from data/*.js) and builds each
   page. Every section renders only if its container exists, so
   all pages share this one file. To change content, edit data/.
   ============================================================ */
(function () {
  const D = window.DATA;
  const $ = (sel) => document.querySelector(sel);
  const page = document.body.dataset.page || "home";

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

  const p = D.profile;

  /* ---------- nav (all pages) ---------- */
  const NAV = [
    ["index.html", "home", "Home"],
    ["projects.html", "projects", "Projects"],
    ["research.html", "research", "Research"],
    ["design.html", "design", "Design"],
    ["resume.html", "resume", "Resume"],
    ["blog.html", "blog", "Blog"],
  ];
  $("#nav").innerHTML = `
    <a class="nav-logo" href="index.html">SM<span class="accent">.</span></a>
    <nav class="nav-links" id="nav-links">
      ${NAV.map(([href, key, label]) =>
        `<a href="${href}" ${key === page ? 'class="active"' : ""}>${label}</a>`).join("")}
      <a href="index.html#contact" class="nav-cta">Contact</a>
    </nav>
    <button class="nav-burger" id="nav-burger" aria-label="Menu">☰</button>`;

  /* ---------- hero (home) ---------- */
  if ($("#hero")) {
    $("#hero").innerHTML = `
      <div class="hero-text">
        <p class="hero-greeting">${esc(p.greeting)} <span class="wave" id="wave">👋</span></p>
        <h1 class="hero-name">${esc(p.name)}<span class="accent">.</span></h1>
        <div class="hero-roles">${tags(p.roles, "role-chip")}</div>
        <p class="hero-headline"><span class="accent">${esc(p.headline)}</span></p>
        <p class="hero-tagline">${esc(p.tagline)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="projects.html">See my work →</a>
          <a class="btn btn-ghost" href="${esc(p.links.github)}" target="_blank" rel="noopener">GitHub</a>
          <a class="btn btn-ghost" href="${esc(p.links.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
      <div class="hero-figure">
        <div class="hero-avatar-frame">
          <img src="${esc(p.avatar)}" alt="Illustration of ${esc(p.name)}"
               onerror="this.closest('.hero-figure').style.display='none'" />
        </div>
      </div>`;
  }

  /* ---------- stats strip (home) ---------- */
  if ($("#stats") && p.stats) {
    $("#stats").innerHTML = p.stats.map((s) => `
      <div class="stat reveal">
        <span class="stat-num">${esc(s.num)}</span>
        <span class="stat-label">${esc(s.label)}</span>
      </div>`).join("");
  }

  /* ---------- ticker (home) ---------- */
  if ($("#ticker")) {
    const words = [...p.ticker, ...p.ticker]
      .map((w) => `<span>${esc(w)}</span><span class="dot">✦</span>`)
      .join("");
    $("#ticker").innerHTML = `<div class="ticker-track">${words}</div>`;
  }

  /* ---------- about (home) ---------- */
  if ($("#about")) {
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
  }

  /* ---------- achievement card (shared) ---------- */
  const achCard = (a) => `
    <article class="ach-card reveal">
      <div class="ach-year">${esc(a.year)}</div>
      <div>
        <span class="ach-type ${esc(a.type)}">${a.type === "publication" ? "Publication" : "Award"}</span>
        <h3 class="ach-title">${esc(a.title)}</h3>
        <p class="ach-venue">${esc(a.venue)}</p>
        <p class="ach-detail">${esc(a.detail)}</p>
        ${a.link ? `<a class="ach-link" href="${esc(a.link)}" target="_blank" rel="noopener">View →</a>` : ""}
      </div>
    </article>`;

  /* ---------- highlights (home: compact) ---------- */
  if ($("#highlights")) {
    const top = D.achievements.filter((a) => a.home);
    $("#highlights").innerHTML = `
      ${sectionHead("02", "Highlights")}
      <div class="highlight-grid">
        ${top.map((a) => `
          <a class="highlight-card reveal" href="research.html">
            <span class="ach-type ${esc(a.type)}">${a.type === "publication" ? "Publication" : "Award"}</span>
            <h3>${esc(a.title)}</h3>
            <p>${esc(a.venue)} · ${esc(a.year)}</p>
          </a>`).join("")}
      </div>
      <p class="see-more reveal"><a class="btn btn-ghost" href="research.html">Full research &amp; honors →</a></p>`;
  }

  /* ---------- project cards (shared) ---------- */
  const linkRow = (pr) => `
    <div class="project-links">
      ${pr.github ? `<a href="${esc(pr.github)}" target="_blank" rel="noopener">GitHub →</a>` : ""}
      ${pr.live ? `<a href="${esc(pr.live)}" target="_blank" rel="noopener">Live demo →</a>` : ""}
      ${pr.link ? `<a href="${esc(pr.link)}">Gallery →</a>` : ""}
    </div>`;

  const projectCard = (pr) => `
    <article class="project-card reveal">
      <div class="project-card-top">
        <h3>${esc(pr.title)}</h3>
        <span class="project-year">${esc(pr.year)}</span>
      </div>
      <p class="blurb">${esc(pr.blurb)}</p>
      <div class="tech-tags">${tags(pr.tech, "tech-tag")}</div>
      ${linkRow(pr)}
    </article>`;

  const featuredCard = (pr) => `
    <div class="project-featured reveal">
      <div class="project-featured-inner">
        <span class="project-flag">★ Featured</span>
        <h3>${esc(pr.title)}</h3>
        <p class="blurb">${esc(pr.blurb)}</p>
        ${pr.points ? `<ul class="project-points">${pr.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>` : ""}
        <div class="tech-tags">${tags(pr.tech, "tech-tag")}</div>
        ${linkRow(pr)}
      </div>
    </div>`;

  /* ---------- featured projects (home: spotlight + picks) ---------- */
  if ($("#projects-featured")) {
    const featured = D.projects.find((pr) => pr.featured);
    const picks = D.projects.filter((pr) => pr.home && !pr.featured);
    $("#projects-featured").innerHTML = `
      ${sectionHead("03", "Selected projects")}
      ${featured ? featuredCard(featured) : ""}
      <div class="projects-grid">${picks.map(projectCard).join("")}</div>
      <p class="see-more reveal"><a class="btn btn-ghost" href="projects.html">All ${D.projects.length} projects →</a></p>`;
  }

  /* ---------- all projects, grouped (projects page) ---------- */
  if ($("#projects-all")) {
    const cats = D.projectCategories || [...new Set(D.projects.map((pr) => pr.category))];
    $("#projects-all").innerHTML = cats.map((cat) => {
      const list = D.projects.filter((pr) => pr.category === cat);
      if (!list.length) return "";
      const feat = list.find((pr) => pr.featured);
      const rest = list.filter((pr) => !pr.featured);
      return `
        <h2 class="category-title reveal">${esc(cat)}</h2>
        ${feat ? featuredCard(feat) : ""}
        <div class="projects-grid">${rest.map(projectCard).join("")}</div>`;
    }).join("");
  }

  /* ---------- research page ---------- */
  if ($("#research-all")) {
    const pubs = D.achievements.filter((a) => a.type === "publication");
    const awards = D.achievements.filter((a) => a.type === "award");
    $("#research-all").innerHTML = `
      <h2 class="category-title reveal">Publications</h2>
      <div class="ach-list">${pubs.map(achCard).join("")}</div>
      <h2 class="category-title reveal">Honors &amp; awards</h2>
      <div class="ach-list">${awards.map(achCard).join("")}</div>`;
  }

  /* ---------- experience (resume page) ---------- */
  if ($("#experience")) {
    $("#experience").innerHTML = `
      ${sectionHead("01", "Experience")}
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
  }

  /* ---------- skills (resume page) ---------- */
  if ($("#skills")) {
    $("#skills").innerHTML = `
      ${sectionHead("02", "Skills")}
      <div class="skills-grid">
        ${D.skills.map((g) => `
          <div class="skill-group reveal">
            <h3>${esc(g.group)}</h3>
            <div class="skill-items">${tags(g.items, "skill-chip")}</div>
          </div>`).join("")}
      </div>`;
  }

  /* ---------- education (resume page) ---------- */
  if ($("#education")) {
    $("#education").innerHTML = `
      ${sectionHead("03", "Education")}
      <div class="edu-list">
        ${D.education.map((e) => `
          <article class="edu-card reveal">
            <h3>${esc(e.school)}</h3>
            <p class="edu-degree">${esc(e.degree)}</p>
            <p class="edu-period">${esc(e.period)}</p>
            ${e.note ? `<p class="edu-note">${esc(e.note)}</p>` : ""}
          </article>`).join("")}
      </div>`;
  }

  /* ---------- certifications (resume page) ---------- */
  if ($("#certs") && D.certifications) {
    $("#certs").innerHTML = `
      ${sectionHead("04", "Certifications &amp; courses")}
      <div class="cert-list">
        ${D.certifications.map((c) => `
          <div class="cert-item reveal">
            <span class="cert-name">${esc(c.name)}</span>
            <span class="cert-org">${esc(c.org)}</span>
          </div>`).join("")}
      </div>`;
  }

  /* ---------- download CV button (resume page) ---------- */
  if ($("#cv-download") && p.cv) {
    $("#cv-download").innerHTML = `
      <a class="btn btn-primary" href="${esc(p.cv)}" download>⬇ Download my CV (PDF)</a>`;
  }

  /* ---------- design gallery (design page) ---------- */
  if ($("#design-gallery") && D.designs) {
    $("#design-gallery").innerHTML = `
      <div class="design-grid">
        ${D.designs.map((d, i) => `
          <figure class="design-card reveal" data-index="${i}">
            <img src="${esc(d.image)}" alt="${esc(d.title)}" loading="lazy" />
            <figcaption>
              <h3>${esc(d.title)}</h3>
              <p>${esc(d.caption)}</p>
              <span class="design-meta">${esc(d.tools)} · ${esc(d.year)}</span>
            </figcaption>
          </figure>`).join("")}
      </div>`;

    // lightbox
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = `<img alt="" /><p class="lightbox-caption"></p>`;
    document.body.appendChild(lb);
    $("#design-gallery").addEventListener("click", (e) => {
      const card = e.target.closest(".design-card");
      if (!card) return;
      const d = D.designs[+card.dataset.index];
      lb.querySelector("img").src = d.image;
      lb.querySelector(".lightbox-caption").textContent = `${d.title} — ${d.caption}`;
      lb.classList.add("open");
    });
    lb.addEventListener("click", () => lb.classList.remove("open"));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lb.classList.remove("open");
    });
  }

  /* ---------- blog page ---------- */
  if ($("#blog")) {
    const posts = D.blog || [];
    $("#blog").innerHTML = posts.length === 0 ? `
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
      </div>`;
  }

  /* ---------- contact (home) ---------- */
  if ($("#contact")) {
    $("#contact").innerHTML = `
      ${sectionHead("04", "Contact")}
      <h2 class="contact-title reveal">Let's build something<br /><span class="accent">meaningful</span> together.</h2>
      <p class="contact-sub reveal">${esc(p.openTo)} — or just say salaam. My inbox is open, and I reply.</p>
      <div class="contact-links reveal">
        <a class="btn btn-primary" href="mailto:${esc(p.email)}">✉️ ${esc(p.email)}</a>
        <a class="btn btn-ghost" href="${esc(p.links.github)}" target="_blank" rel="noopener">GitHub</a>
        <a class="btn btn-ghost" href="${esc(p.links.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
      </div>`;
  }

  /* ---------- footer (all pages) ---------- */
  $("#footer").innerHTML = `
    <p class="cat-line">Crafted with kindness, curiosity &amp; a serious love for cats
      <em class="cat" id="cat" title="pet the cat">🐈‍⬛</em>
    </p>
    <p>© ${new Date().getFullYear()} ${esc(p.name)} · ${esc(p.location)} ·
      <a href="mailto:${esc(p.email)}">${esc(p.email)}</a></p>`;

  /* ============================================================
     Behaviour
     ============================================================ */

  // sticky nav + scroll progress
  const nav = $("#nav");
  const progress = $("#scroll-progress");
  addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", scrollY > 30);
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    progress.style.width = max > 0 ? `${(h.scrollTop / max) * 100}%` : "0";
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
