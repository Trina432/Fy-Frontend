# Welcome to IntervueX
TODO: Document your project here

# NeoHire — Neobrutalist Recruitment Platform

## Design System
- **Neobrutalism style**: 3-5px black borders, flat colors, hard offset shadows, sharp corners, bold typography
- **Colors**: Black, White, Yellow (#FACC15), Blue (#3B82F6), Purple (#7C3AED), plus status colors
- **Backgrounds**: `.bg-grid` (hero), `.bg-polka` (sections), `.bg-polka-purple` (highlights)
- **Dark mode**: Inverted backgrounds, same accents
- **Micro-interactions**: Hover shift (2-4px), click inset, skeleton loading, bold toasts

## Global Layout
- **Sticky Navbar**: "NeoHire" logo, nav links with thick underline hover, profile avatar + role badge, theme toggle, logout
- **Footer**: Grid layout, bold type, thick-bordered social icons, polka background

## Auth System (Mock)
- Login page with role selection (User/Admin/Recruiter), email/password form
- Role stored in React context, redirect by role

## User Panel (`/user/*`)
- **Homepage**: Hero with grid bg ("Get Hired Smarter" + CTAs), features section (purple polka), job listing cards, recent openings
- **Resume Upload**: Drag-drop with dashed border, file preview + progress bar
- **Track Openings**: Table with status badges (Applied, Interview, Offered, Rejected)
- **Profile**: Card layout + application timeline

## AI Interview System (`/user/interview/:id`) — Core Feature
- **Permission Modal**: Camera/mic request with Allow/Deny; denied → text-only mode
- **Split Layout** on purple polka background:
  - LEFT: Live camera feed with "YOU (LIVE)" label, thick border, red REC indicator
  - RIGHT: AI question panel with bold question text, timer countdown, status badges (Listening/Recording/Processing)
- **Bottom Control Bar**: Mic toggle, Camera toggle, Text input field, Submit button
- Camera/mic activate only during interview, auto-disable after
- Optional audio waveform visualization
- Smooth question transitions

## Admin Panel (`/admin/*`)
- **Dashboard**: Stats cards (Users, Jobs, Recruiters, Applications), chart containers
- **User Management**: Table with View/Edit/Delete actions
- **Recruiter Details**: Recruiter cards + campaign summaries

## Recruiter Panel (`/recruiter/*`)
- **Homepage**: CTA to create campaign
- **Dashboard**: Metrics + campaign stats
- **Campaign Flow** (`/recruiter/campaign/:id`): Description form → Scoreboard (cutoff=70 highlighted) → AI Interview section → Merit List → Verification → Rounds → Offer Letter modal
- **Scoreboard**: Interview Score, AI Rating, Video Available columns
- **Candidate Review** (`/recruiter/candidate/:id`): Candidate header, video player for recorded interview, answer breakdown cards (question, text answer, audio playback, AI score, tags), AI summary with strengths/weaknesses

## Rec Panel (`/recruiter/rec/*`)
- Dashboard with interview overview
- Calendar grid with interview slots
- Scheduling with time picker + candidate selector

## Component Library
- Neobrutalist: Buttons, Cards, Inputs, Tables, Modals, Video Frame, Audio Waveform, Recording Badge, Interview Control Bar

## Responsive Design
- Desktop: split layouts
- Tablet: adjusted grid
- Mobile: stacked (video → question → controls)

## Pages & Routes Summary
1. `/login` — Auth page
2. `/user` — User homepage
3. `/user/resume` — Resume upload
4. `/user/track` — Track openings
5. `/user/profile` — User profile
6. `/user/interview/:id` — Live AI interview
7. `/admin` — Admin dashboard
8. `/admin/users` — User management
9. `/admin/recruiters` — Recruiter details
10. `/recruiter` — Recruiter homepage
11. `/recruiter/dashboard` — Recruiter dashboard
12. `/recruiter/campaign/:id` — Campaign flow
13. `/recruiter/candidate/:id` — Interview review
14. `/recruiter/rec` — Rec dashboard
15. `/recruiter/rec/calendar` — Calendar
16. `/recruiter/rec/schedule` — Scheduling
