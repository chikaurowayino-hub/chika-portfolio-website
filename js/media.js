/* ==========================================================
   media.js – builds the cards on the Media page from the lists
   in media-data.js. Each "build" function loops through an
   array and creates one card per item.
   ========================================================== */

/* Small helper: create an element with a class and text */
function make(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

/* Pull the 11-character video ID out of any YouTube link */
function getYouTubeId(url) {
  const match = String(url).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : null;
}

/* A card that is clearly a placeholder */
function placeholderBadge(text) {
  return make("span", "badge", text);
}

/* ---- Videos ---- */
function buildVideos() {
  const box = document.getElementById("video-grid");
  VIDEOS.forEach(function (video) {
    const card = make("article", "media-card");
    const frame = make("div", "video-frame");
    const id = getYouTubeId(video.youtubeUrl);

    if (id) {
      /* Show a thumbnail first; load the real player only when clicked */
      const thumb = make("button", "thumb-btn");
      thumb.type = "button";
      thumb.setAttribute("aria-label", "Play video: " + video.title);
      const img = document.createElement("img");
      img.src = "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";
      img.alt = "";
      img.loading = "lazy";
      thumb.append(img, make("span", "play"));
      thumb.addEventListener("click", function () {
        const player = document.createElement("iframe");
        player.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1";
        player.title = video.title;
        player.allow = "accelerometer; autoplay; encrypted-media; picture-in-picture";
        player.allowFullscreen = true;
        frame.replaceChildren(player);
      });
      frame.appendChild(thumb);
    } else {
      frame.classList.add("placeholder-frame");
      frame.textContent = "Video placeholder: no link added yet";
    }

    const body = make("div", "body");
    body.append(make("h3", "", video.title), make("p", "", video.description));
    if (!id) body.appendChild(placeholderBadge("Coming soon"));
    card.append(frame, body);
    box.appendChild(card);
  });
}

/* ---- Presentations (table) ---- */
function buildPresentations() {
  const body = document.getElementById("presentation-rows");
  PRESENTATIONS.forEach(function (item) {
    const row = document.createElement("tr");
    row.append(make("td", "", item.title), make("td", "", item.type));
    const action = document.createElement("td");
    if (item.file) {
      const view = make("a", "btn btn-outline", "View");
      view.href = item.file; view.target = "_blank"; view.rel = "noopener";
      view.style.cssText = "padding:.3rem .8rem;font-size:.85rem;margin-right:.4rem";
      const dl = make("a", "btn btn-primary", "Download");
      dl.href = item.file; dl.setAttribute("download", "");
      dl.style.cssText = "padding:.3rem .8rem;font-size:.85rem";
      action.append(view, dl);
    } else {
      action.appendChild(placeholderBadge("Placeholder: not uploaded yet"));
    }
    row.appendChild(action);
    body.appendChild(row);
  });
}

/* ---- Educational content ---- */
function buildEducational() {
  const box = document.getElementById("education-grid");
  EDUCATIONAL.forEach(function (item) {
    const card = make("article", "media-card");
    if (item.image) {
      const img = document.createElement("img");
      img.src = item.image; img.alt = item.title; img.loading = "lazy";
      card.appendChild(img);
    }
    const body = make("div", "body");
    body.append(make("h3", "", item.title), make("p", "", item.description));
    if (item.link) {
      const a = make("a", "btn btn-outline", "Open resource");
      a.href = item.link; a.target = "_blank"; a.rel = "noopener noreferrer";
      body.appendChild(a);
    } else {
      body.appendChild(placeholderBadge("Content coming soon"));
    }
    card.appendChild(body);
    box.appendChild(card);
  });
}

/* ---- Publications ---- */
function buildPublications() {
  const box = document.getElementById("publication-grid");
  PUBLICATIONS.forEach(function (item) {
    const card = make("article", "media-card");
    const body = make("div", "body");
    body.append(make("span", "badge badge-teal", item.type), make("h3", "", item.title), make("p", "", item.description));
    if (item.link) {
      const a = make("a", "btn btn-outline", "Read / watch");
      a.href = item.link; a.target = "_blank"; a.rel = "noopener noreferrer";
      body.appendChild(a);
    }
    card.appendChild(body);
    box.appendChild(card);
  });
}

buildVideos();
buildPresentations();
buildEducational();
buildPublications();
