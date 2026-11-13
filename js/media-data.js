/* ==========================================================
   media-data.js – THE FILE YOU EDIT to add media content.
   You never need to touch media.html. Add an item, save, refresh.
   Leave a link/file as "" and the card shows "coming soon".
   ========================================================== */

/* ---- 1. VIDEOS ------------------------------------------
   Paste a normal YouTube link in youtubeUrl, for example:
   "https://www.youtube.com/watch?v=XXXXXXXXXXX"            */
const VIDEOS = [
  { title: "Wastewater treatment education",        description: "Plain-language lessons on how wastewater is treated.", youtubeUrl: "" },
  { title: "Brewery wastewater treatment processes", description: "How brewery effluent is handled in practice.",        youtubeUrl: "" },
  { title: "Anaerobic wastewater treatment",         description: "How anaerobic reactors work and what affects them.",   youtubeUrl: "" },
  { title: "My data science learning journey",       description: "Progress updates from my BSc Data Science studies.",   youtubeUrl: "" },
  { title: "AI and environmental technology",        description: "Ideas for applying AI to environmental problems.",     youtubeUrl: "" },
  { title: "Industrial process monitoring",          description: "Monitoring plant processes and spotting abnormalities.", youtubeUrl: "" }
];

/* ---- 2. PRESENTATIONS ------------------------------------
   Put your file inside the media/ folder, then write its path,
   e.g. file: "media/wastewater-fundamentals.pdf"             */
const PRESENTATIONS = [
  { title: "Fundamentals of Wastewater Treatment",        type: "PDF / PowerPoint", file: "" },
  { title: "Brewery Wastewater Treatment",                type: "PDF / PowerPoint", file: "" },
  { title: "Anaerobic Digestion and Biogas Production",   type: "PDF / PowerPoint", file: "" },
  { title: "Wastewater Treatment Plant Operations",       type: "PDF / PowerPoint", file: "" },
  { title: "SCADA in Industrial Wastewater Treatment",    type: "PDF / PowerPoint", file: "" },
  { title: "Data Analytics for Environmental Monitoring", type: "PDF / PowerPoint", file: "" },
  { title: "AI Applications in Wastewater Treatment",     type: "PDF / PowerPoint", file: "" }
];

/* ---- 3. EDUCATIONAL CONTENT ------------------------------
   image: "images/your-picture.jpg" (optional)
   link: a video, article or resource (optional)              */
const EDUCATIONAL = [
  { title: "Wastewater Simplified",                          description: "Making wastewater treatment easy to understand.", image: "", link: "" },
  { title: "Data Science for Environmental Applications",    description: "Using data skills on environmental questions.",   image: "", link: "" },
  { title: "Industrial Data Analytics",                      description: "Finding insight in plant and process data.",      image: "", link: "" },
  { title: "AI for Water and Wastewater Management",         description: "How AI could support water operations.",          image: "", link: "" }
];

/* ---- 4. PUBLICATIONS & APPEARANCES -----------------------
   Only add real items. Examples of "type": Article,
   Technical write-up, Interview, Webinar, Conference.       */
const PUBLICATIONS = [
  { type: "Article",            title: "Articles",             description: "No articles published yet.",                  link: "" },
  { type: "Technical write-up", title: "Technical write-ups",  description: "No write-ups published yet.",                 link: "" },
  { type: "Interview",          title: "Professional interviews", description: "No interviews to show yet.",               link: "" },
  { type: "Webinar",            title: "Webinar appearances",  description: "No webinar appearances to show yet.",         link: "" },
  { type: "Conference",         title: "Conference presentations", description: "No conference presentations to show yet.", link: "" }
];
