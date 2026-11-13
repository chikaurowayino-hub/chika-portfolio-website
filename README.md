# Chika Bridget Urowayino-Nduaguba – Portfolio & Academic Planner
COS 106 – Introduction to Web Technologies, MIVA Open University.
Built with HTML5, CSS3 and vanilla JavaScript (no frameworks).

## Folder guide
```
portfolio-website/
├── index.html      Home          ├── planner.html   Academic Planner
├── about.html      About Me      ├── contact.html   Contact (Netlify form)
├── projects.html   Projects      └── thank-you.html Shown after a Netlify submission
├── media.html      Media & Presentations
├── css/style.css   ONE stylesheet for every page (colours are variables at the top)
├── js/main.js        menu, footer year, LinkedIn/GitHub links
├── js/planner.js     task manager (array + localStorage)
├── js/contact.js     form validation + Netlify submission
├── js/media-data.js  YOUR file: add videos, slides, articles here
├── js/media.js       builds the Media page cards from media-data.js
├── images/           photo (3 sizes), intro-poster.jpg
└── media/            intro-placeholder.mp4 (replace later), your PDFs/PPTs
```

## 1. Run it on your computer
1. Unzip the folder. In VS Code: **File → Open Folder** → choose `portfolio-website`.
2. Install the **Live Server** extension (Ritwick Dey) if you do not have it.
3. Right-click `index.html` → **Open with Live Server**.

## 2. Things to update (all easy)
| What | Where |
|---|---|
| LinkedIn / GitHub links | Top of `js/main.js` – paste URLs between the quotes |
| YouTube videos, PDFs, slides, articles | `js/media-data.js` (instructions are in the file and on the Media page) |
| Your own intro video | Save as `media/intro.mp4`, then change `intro-placeholder.mp4` to `intro.mp4` in `media.html` |
| Project screenshots | Copy into `images/`, then replace the illustration in `projects.html` |
| Personal interests | `about.html`, section "Professional and Personal Interests" – copy a card and edit |
| Colours | `:root { ... }` at the top of `css/style.css` |

## 3. Upload to GitHub
1. Create a new empty repository on github.com (e.g. `portfolio-website`).
2. In VS Code open **Terminal → New Terminal** and run:
```
git init
git add .
git commit -m "Complete portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
git push -u origin main
```
(Replace the URL with the one GitHub shows you.)

## 4. Deploy on Netlify
Easiest: connect GitHub. Netlify → **Add new site → Import an existing project → GitHub** → pick the repository → leave build settings empty → **Deploy**.
To update your existing site (`chika-bridget-portfolio`): open it → **Deploys** tab → drag the project folder onto the deploy box, or link it to the GitHub repository under **Site configuration → Build & deploy**.

## 5. Make the contact form deliver real messages
The form is already marked for Netlify (`data-netlify="true"`). After a deploy:
1. In Netlify open your site → **Forms**. You should see a form called **contact**. (If not, redeploy; Netlify detects forms on each deploy.)
2. Go to **Forms → Form notifications → Add notification → Email notification**. Choose the form **contact** and enter `chikaurowayino@gmail.com`.
3. **Test a real submission:** open your live site, send a message with valid details, then check **Forms → contact → Submissions** and your Gmail inbox (also check Spam).

On Live Server the form only validates and says clearly that nothing was sent. The "message received" notice appears only when Netlify confirms receipt, so you will never see a false success.
The visitor's phone number is collected only in the form submission; it is never displayed on the site.

## 6. How the main parts work
- **Navigation:** the same `<nav>` is in every page. `aria-current="page"` highlights the current link; the ☰ button toggles the class `open` (main.js).
- **Planner:** tasks live in an array. Add/complete/delete change the array → `saveTasks()` stores it in localStorage → `render()` redraws the list and counters.
- **Contact:** `checkField()` tests each field; `validateAll()` runs all four; only a valid form is sent.
- **Media:** `media.js` loops over the arrays in `media-data.js` and creates one card per item. A YouTube thumbnail loads the real player only when clicked.

## COS 106 requirements checklist
| Requirement | Done in |
|---|---|
| Home: name, photo, welcome, navigation, bio, professional layout | index.html |
| About: education, aspirations, skills, interests | about.html |
| Projects: 3+ projects, descriptions, images, links | projects.html |
| Planner: add, complete, delete (JavaScript) | planner.html + planner.js |
| Contact form with name, email, phone, message | contact.html |
| Validation: not empty, valid email, digits-only phone | contact.js |
| Semantic HTML (header, nav, main, section, article, aside, footer, figure) | all pages |
| Forms, tables, images, hyperlinks, lists | planner/contact, about + media tables, all pages |
| Multimedia (video) | media.html `<video>` + YouTube embeds |
| External CSS, responsive, Flexbox/Grid | css/style.css |
| Navigation styling, transitions/animations, consistent colours | css/style.css |
| Events, DOM manipulation, dynamic updates, arrays, functions | planner.js, contact.js, media.js, main.js |
| Hosted link + GitHub link | Sections 3–4 above |
