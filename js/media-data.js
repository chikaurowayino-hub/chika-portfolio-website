/* ==========================================================
   media-data.js – THE FILE YOU EDIT to add media content.
   You never need to touch media.html. Add an item, save, refresh.
   Leave a link/file as "" and the card shows "coming soon".
   ========================================================== */

/* ---- 1. VIDEOS ------------------------------------------
   Paste a normal YouTube link in youtubeUrl, for example:
   "https://www.youtube.com/watch?v=XXXXXXXXXXX"            */
const VIDEOS = [
  {
    title: "Why I Started Data Science Later in Life – It's Never Too Late",
    description: "My decision to begin a new learning journey in Data Science later in life.",
    youtubeUrl: "https://youtu.be/5t2TxlRYGDE"
  },
  {
    title: "I Almost Quit Learning Data Science in My First Week",
    description: "An honest reflection on the challenges of starting to learn Data Science.",
    youtubeUrl: "https://youtu.be/oUg9aGBjQys"
  },
  {
    title: "Starting Over Is Scary… Staying Stuck Is Worse",
    description: "Why taking a new direction can be difficult but worthwhile.",
    youtubeUrl: "https://youtu.be/TmWq-5KNnqo"
  },
  {
    title: "What Nobody Tells You About Working and Studying at the Same Time",
    description: "Balancing professional responsibilities with academic learning.",
    youtubeUrl: "https://youtu.be/Z-siVCUF2b4"
  },
  {
    title: "I Learned Python Variables and Felt Completely Lost",
    description: "Sharing the realities of learning Python as a beginner.",
    youtubeUrl: "https://youtu.be/tMewk8IUtiw"
  },
  {
    title: "The Python Lesson That Finally Clicked",
    description: "A learning milestone in my journey towards Data Science.",
    youtubeUrl: "https://youtu.be/X9WO9yeYyos"
  },
  {
    title: "NOBODY KNEW I WAS STRUGGLING",
    description: "A personal reflection on the struggles behind starting over.",
    youtubeUrl: "https://youtube.com/shorts/LUY_bNUosrY"
  },
  {
    title: "I THOUGHT I WAS TOO LATE",
    description: "Becoming a student again and discovering that it is not too late to start over.",
    youtubeUrl: "https://youtube.com/shorts/Rq3FStWYyw4"
  }
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
