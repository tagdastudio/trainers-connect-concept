export type Discipline = {
  index: string;
  name: string;
  blurb: string;
  topics: string[];
  image: string;
  alt: string;
};

export const stats = [
  { value: "500+", label: "Training topics" },
  { value: "30+", label: "Domains covered" },
  { value: "14", label: "Discipline groups" },
  { value: "1", label: "Place to find the expert" },
] as const;

export const disciplines: Discipline[] = [
  {
    index: "01",
    name: "Corporate & Business",
    blurb: "The capability building that moves an organisation forward.",
    topics: ["Leadership", "Management", "Sales", "HR", "Communication", "Team building"],
    image: "/images/141262.jpg",
    alt: "A facilitator leading a leadership session with a group of professionals",
  },
  {
    index: "02",
    name: "Soft Skills & Personal Development",
    blurb: "The human skills that make technical skill count.",
    topics: ["Public speaking", "Emotional intelligence", "Confidence", "Life skills", "Personality development"],
    image: "/images/14090.jpg",
    alt: "A trainer presenting to a seated group",
  },
  {
    index: "03",
    name: "Technology & Digital Skills",
    blurb: "Practical fluency for a changing workplace.",
    topics: ["Technology", "Digital skills", "Artificial intelligence", "Data", "Cybersecurity"],
    image: "/images/blog6.jpg",
    alt: "A person working through a training interface on a desktop computer",
  },
  {
    index: "04",
    name: "Fitness, Health & Wellness",
    blurb: "Energy, resilience and wellbeing for everyday life.",
    topics: ["Fitness", "Yoga", "Nutrition", "Personal training", "Meditation", "Wellness"],
    image: "/images/blog2.jpg",
    alt: "A wellbeing professional using a tablet",
  },
  {
    index: "05",
    name: "Creative & Performing Arts",
    blurb: "Craft, expression and the discipline of practice.",
    topics: ["Dance", "Music", "Theatre", "Art", "Photography", "Creative skills"],
    image: "/images/20266.jpg",
    alt: "A group of professionals collaborating in a bright studio",
  },
  {
    index: "06",
    name: "Sports & Recreation",
    blurb: "Coaching for performance, technique and character.",
    topics: ["Cricket", "Football", "Badminton", "Swimming", "Athletics", "Martial arts"],
    image: "/images/133859.jpg",
    alt: "A speaker in conversation with a room of listeners",
  },
  {
    index: "07",
    name: "Education & Career",
    blurb: "Guidance from the classroom to the first job.",
    topics: ["Academic skills", "Career guidance", "Employability", "Interview skills", "Study skills"],
    image: "/images/blog5.jpg",
    alt: "Two colleagues reviewing notes together",
  },
  {
    index: "08",
    name: "Coaching & Mentoring",
    blurb: "A structured space for judgement and growth.",
    topics: ["Life coaching", "Career coaching", "Business coaching", "Executive coaching", "Mentoring"],
    image: "/images/how-it-works-300x300.gif",
    alt: "A trainer mid-session with participants",
  },
];

export const steps = [
  {
    index: "01",
    title: "Search",
    text: "Tell us what kind of trainer, coach, mentor or expert you need. Start with the requirement, not a name you happen to know.",
  },
  {
    index: "02",
    title: "Filter",
    text: "Refine by expertise, category, specialisation, location, experience, audience, language and delivery format.",
  },
  {
    index: "03",
    title: "Discover",
    text: "Explore professional profiles and understand each professional's expertise, experience, approach and audience.",
  },
  {
    index: "04",
    title: "Connect",
    text: "Shortlist the professionals who match your requirement and send an enquiry directly from the platform.",
  },
  {
    index: "05",
    title: "Get started",
    text: "Discuss the programme, schedule and engagement directly with the selected professional.",
  },
] as const;

export const trainerSteps = [
  "Create your profile.",
  "Showcase your experience.",
  "Share your expertise.",
  "Join the network.",
  "Let your expertise be discovered.",
] as const;

export const audiences = [
  "Corporate",
  "School",
  "College",
  "Institution",
  "NGO",
  "Community",
  "Family",
  "Personal requirement",
] as const;

export type Trainer = {
  slug: string;
  name: string;
  category: string;
  city: string;
  state: string;
  languages: string[];
  formats: string[];
  audiences: string[];
  topics: string[];
  years: string;
  image: string;
  added: string;
  headline: string;
  bio: string[];
  credentials: string[];
  quote: string;
};

export const trainers: Trainer[] = [
  {
    slug: "sundaram-manikantan",
    name: "Sundaram Manikantan",
    category: "Career Development & Employability",
    city: "Chennai",
    state: "Tamil Nadu",
    languages: ["English", "Hindi", "Tamil"],
    formats: ["Online", "In-person", "Hybrid"],
    audiences: ["Working professionals", "Managers & leaders", "College students"],
    topics: ["Career transitions", "Employability", "Interview readiness", "Professional development"],
    years: "15+ years",
    image: "/images/file_00000000fe5471fbb7dfcc63c100c59e-8vvnto-207x300.png",
    added: "November 2026",
    headline: "Career development coach helping professionals make considered transitions.",
    bio: [
      "Sundaram works with professionals and emerging talent on the decisions that shape a career: where to go next, how to present the value of their experience, and how to prepare for the conversations that matter.",
      "His practice combines career coaching with practical employability work — profiling, interview preparation and the language of professional confidence.",
    ],
    credentials: ["Harrison Assessments Certified Employee Development Coach"],
    quote: "Clarity about your experience is the first step to being able to offer it well.",
  },
  {
    slug: "asha-jain",
    name: "Asha Jain",
    category: "Soft Skills & Personal Development",
    city: "Bengaluru",
    state: "Karnataka",
    languages: ["English", "Hindi", "Kannada"],
    formats: ["Online", "In-person"],
    audiences: ["Working professionals", "Women", "Groups & communities"],
    topics: ["Communication", "Confidence building", "Personal development", "Workplace effectiveness"],
    years: "10+ years",
    image: "/images/IMG-20231114-WA0049-ozfzhk-200x300.jpg",
    added: "November 2026",
    headline: "Soft-skills facilitator working on communication, confidence and presence.",
    bio: [
      "Asha facilitates learning spaces where participants can rehearse the everyday skills of professional life — speaking clearly, listening well, and holding a room with calm.",
      "Her sessions are built around conversation and practice rather than lecture, with room for participants to work on their own real situations.",
    ],
    credentials: ["Soft skills facilitation", "Group learning design"],
    quote: "Confidence is rarely a personality trait. More often, it is preparation repeated.",
  },
  {
    slug: "samatha-vectrine",
    name: "Samatha Vectrine",
    category: "Education & Academic Learning",
    city: "Mandya",
    state: "Karnataka",
    languages: ["English", "Hindi", "Kannada"],
    formats: ["In-person", "Online"],
    audiences: ["School students", "College students", "Teachers & educators"],
    topics: ["Academic skills", "Study skills", "Classroom practice", "Learning support"],
    years: "8+ years",
    image: "/images/Screenshot_2024_0301_155305-7tv2ol-269x300.jpg",
    added: "November 2026",
    headline: "Educator working across academic learning and classroom practice.",
    bio: [
      "Samatha works with learners and educators on the fundamentals of how learning actually happens — study habits, comprehension, classroom engagement and the confidence to ask better questions.",
      "She works closely with schools and colleges to adapt programmes to the level and context of the learner group.",
    ],
    credentials: ["Academic learning support", "Educator development"],
    quote: "A good learning habit outlasts a good lesson.",
  },
  {
    slug: "abisha",
    name: "Abisha",
    category: "Career Development & Employability",
    city: "Bengaluru",
    state: "Karnataka",
    languages: ["English"],
    formats: ["Online", "Hybrid"],
    audiences: ["College students", "Job seekers", "Graduates"],
    topics: ["Interview skills", "Employability", "Career guidance", "Workplace readiness"],
    years: "5+ years",
    image: "/images/3-zgpfom-400x267.jpg",
    added: "November 2026",
    headline: "Employability facilitator preparing graduates for the world of work.",
    bio: [
      "Abisha helps students and early-career professionals translate their education into employable capability — a clear CV, a considered interview, and a realistic view of the opportunities in front of them.",
      "Her sessions are practical and direct, built around the questions employers actually ask.",
    ],
    credentials: ["Career readiness facilitation"],
    quote: "The first job is not the destination. It is the beginning of a working vocabulary.",
  },
  {
    slug: "arjun",
    name: "Arjun",
    category: "Coaching & Mentoring",
    city: "Mumbai",
    state: "Maharashtra",
    languages: ["English", "Hindi"],
    formats: ["Online", "Hybrid"],
    audiences: ["Managers & leaders", "Business owners", "Individuals"],
    topics: ["Coaching", "Mentoring", "Leadership", "Decision making"],
    years: "9+ years",
    image: "/images/arjun-kjsocv-400x300.jpg",
    added: "November 2026",
    headline: "Coach and mentor supporting leaders through moments of transition.",
    bio: [
      "Arjun works one-to-one with leaders and founders on the questions that are difficult to think through alone: a new role, a difficult decision, a team that needs rebuilding.",
      "His coaching practice is conversational and structured, with clear commitments between sessions.",
    ],
    credentials: ["Professional coaching practice"],
    quote: "A good coach does not hand you an answer. They help you hear your own thinking.",
  },
];

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; text: string };

export type Post = {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  category: "For trainers" | "For organisations" | "Industry";
  date: string;
  dateISO: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "from-trainer-to-training-business-how-independent-trainers-can-build-a-sustainable-professional-practice",
    title: "From Trainer to Training Business: How Independent Trainers Can Build a Sustainable Professional Practice",
    shortTitle: "From trainer to training business",
    excerpt:
      "Becoming a good trainer and building a sustainable practice are two different challenges. A practical guide to positioning, programmes, profile and discoverability.",
    category: "For trainers",
    date: "19 October 2026",
    dateISO: "2026-10-19",
    readTime: "12 min read",
    image: "/images/blog6.jpg",
    imageAlt: "A professional reviewing training levels on a desktop screen",
    featured: true,
    body: [
      { type: "p", text: "programmes, networking, content and discoverability." },
      {
        type: "p",
        text: "Becoming a good trainer and building a sustainable training practice are two different challenges. A trainer may be excellent in a classroom and still struggle with finding clients, defining a niche, pricing programmes, building a professional profile, developing repeat business or managing irregular opportunities.",
      },
      {
        type: "p",
        text: "This does not mean every trainer needs to become a large training company. It means independent trainers increasingly need to think about their work as a professional practice.",
      },
      { type: "h2", text: "1. Start with expertise" },
      { type: "p", text: "The foundation is expertise. Ask: what can I genuinely help people learn or improve? Then: who needs this expertise? And: what problem does my expertise help solve?" },
      { type: "p", text: "Instead of “I conduct soft-skills training,” consider “I help first-time managers improve communication, delegation and difficult-conversation skills.” The second statement gives a potential client a clearer reason to contact you." },
      { type: "h2", text: "2. Choose a positioning direction" },
      { type: "p", text: "You do not have to restrict yourself to one topic forever. But your professional identity should be understandable. You might position yourself around a subject, an audience, an industry, a problem, a methodology, or a combination." },
      { type: "ul", items: ["Subject: Leadership", "Audience: First-time managers", "Industry: Technology", "Problem: Transitioning from individual contributor to people manager"] },
      { type: "p", text: "That creates a clear professional proposition." },
      { type: "h2", text: "3. Build signature programmes" },
      { type: "p", text: "Instead of offering an endless list of topics, develop a few clearly defined programmes: First-Time Manager Essentials, Difficult Conversations at Work, Leading High-Performing Teams." },
      { type: "p", text: "Each programme can include a target audience, duration, learning objectives, module structure, methodology, outcomes and delivery format. This makes it easier for organisations to understand what they are engaging you for." },
      { type: "h2", text: "4. Build a professional trainer profile" },
      { type: "p", text: "Your profile should communicate who you are, what you specialise in, who you train, industries served, qualifications, experience, methodology, location, languages, delivery formats and experience." },
      { type: "p", text: "NSDC's Takshashila portal illustrates the value of structured information about trainer qualifications and roles, with certified trainer and assessor information organised across states, sectors and job roles. For independent trainers, the broader lesson is simple: make your professional information easy to understand and discover." },
      { type: "h2", text: "5. Build a portfolio — not just a CV" },
      { type: "p", text: "A CV tells people about your career. A trainer portfolio tells them about your training practice. Consider including a trainer bio, core expertise, programme catalogue, sample workshop outlines, audience types, industry experience, delivery formats, languages, relevant certifications and facilitation experience." },
      { type: "h2", text: "6. Develop your online presence" },
      { type: "p", text: "You do not need to be everywhere. Choose platforms where your audience is likely to look for you: LinkedIn, a professional website, trainer networks, industry communities and professional associations. Keep your professional identity consistent across platforms." },
      { type: "h2", text: "7. Create useful content" },
      { type: "p", text: "Content can demonstrate expertise before a client contacts you. Instead of posting only “I conducted a training today,” consider sharing a useful insight, a common workplace challenge, a practical framework, a case example or a learning resource. The goal is not to post every day. It is to give people a reason to understand your expertise." },
      { type: "h2", text: "8. Build relationships with organisations" },
      { type: "p", text: "Don't wait until you need an assignment. Develop professional relationships with HR professionals, L&D teams, school administrators, college leadership, NGO programme managers, training companies, consultants and other trainers. A relationship may not create an immediate assignment. It can still create familiarity and future opportunities." },
      { type: "h2", text: "9. Collaborate with other trainers" },
      { type: "p", text: "Independent trainers sometimes see other trainers only as competitors. But many requirements are broader than one person's expertise. A programme involving leadership, communication, coaching and assessments may need a team of specialists." },
      { type: "h2", text: "10. Think beyond one-off workshops" },
      { type: "p", text: "A one-day workshop can be valuable, but some needs require longer engagement. Depending on your expertise, you could develop multi-session programmes, coaching packages, manager development journeys, certification programmes, retainers, follow-up workshops, assessment packages or train-the-trainer programmes." },
      { type: "h2", text: "11. Understand what organisations are looking for" },
      { type: "p", text: "The World Economic Forum's Future of Jobs Report 2025 reports that employers expect substantial changes in core skills by 2030 and identifies upskilling and reskilling as important workforce strategies. Trainers should regularly ask: what problems are organisations facing now? Which capabilities are becoming more important? How does my expertise connect to those needs?" },
      { type: "h2", text: "12. Keep learning yourself" },
      { type: "p", text: "A trainer's credibility depends partly on continuing professional development. Stay current through research, industry developments, certifications, books and journals, professional communities, conferences and participant feedback." },
      { type: "h2", text: "13. Track your professional work" },
      { type: "p", text: "Keep a simple record of programmes conducted, participants trained, industries served, topics delivered, locations, formats, repeat clients, new certifications, feedback and case examples. This helps with proposals, profiles and understanding where your practice is developing." },
      { type: "h2", text: "14. Build multiple routes to opportunity" },
      { type: "p", text: "Do not depend on a single source of assignments. Possible channels include existing clients, referrals, LinkedIn, direct outreach, training companies, professional associations, schools and colleges, NGOs, trainer networks, speaking opportunities and partnerships." },
      { type: "h2", text: "15. Become discoverable, not just visible" },
      { type: "p", text: "Visibility means people see you. Discoverability means the right people can find you when they are looking for what you do. Imagine an HR manager searches “leadership trainer for first-time managers in Bengaluru.” Your professional information should make it possible to determine whether you fit." },
      { type: "quote", text: "You bring the expertise. Build the professional ecosystem around it." },
      { type: "p", text: "That is the thinking behind Trainers Connect: creating a professional environment where trainers, coaches, mentors, consultants, facilitators and subject-matter experts can be easier to discover and connect with organisations and individuals looking for expertise." },
    ],
  },
  {
    slug: "how-hr-teams-can-save-time-finding-the-right-trainer",
    title: "How HR Teams Can Save Time Finding the Right Trainer",
    shortTitle: "How HR teams save time",
    excerpt:
      "Finding a trainer can look easy. But when the requirement is specific, it becomes a matching problem. A structured approach to search, shortlist and selection.",
    category: "For organisations",
    date: "19 October 2026",
    dateISO: "2026-10-19",
    readTime: "10 min read",
    image: "/images/blog5.jpg",
    imageAlt: "Two colleagues reviewing a document together",
    featured: true,
    body: [
      { type: "p", text: "Finding a trainer can look easy. Search online. Ask a colleague. Post in a WhatsApp group. Call someone you know. But when the requirement is specific, the process can quickly become time-consuming." },
      { type: "p", text: "An HR or L&D professional may need someone with the right subject expertise, experience with a particular audience, industry knowledge, a specific delivery format, a particular location, relevant qualifications, availability on certain dates and the ability to customise. That is no longer simply a “find a trainer” task. It is a matching problem." },
      { type: "h2", text: "1. Define the requirement before searching" },
      { type: "p", text: "Start with five questions: What skill or subject is required? Who needs the training? What outcome is expected? Where will it happen? How should it be delivered?" },
      { type: "callout", text: "“We need a one-day communication programme for 40 first-time managers in Bengaluru, preferably offline.” That is much more useful than “We need a communication trainer.”" },
      { type: "p", text: "ATD recommends needs assessment as a way to understand the gap between current and desired results before selecting a learning intervention." },
      { type: "h2", text: "2. Separate the topic from the actual need" },
      { type: "p", text: "Sometimes the topic requested by a stakeholder is not the whole problem. A manager might ask for “team-building training,” while the underlying issue is poor collaboration, communication gaps, conflict or a newly formed team. The search should follow the actual requirement. Ask: what do we want participants to do differently after the programme?" },
      { type: "h2", text: "3. Search by specialisation" },
      { type: "p", text: "“Leadership trainer” can produce a large pool. Your actual requirement may be leadership for first-time managers, leadership for women leaders, leadership in manufacturing, strategic leadership for senior executives or team leadership for project managers. This is why structured trainer discovery should allow domain, category, sub-category and specialisation — rather than relying only on a free-text keyword." },
      { type: "h2", text: "4. Search by audience" },
      { type: "p", text: "The same subject can require different expertise depending on participants. Communication for college students is different from communication for senior leaders. Leadership for first-time managers is different from leadership for CXOs. Ask: has this person worked with our participant group?" },
      { type: "h2", text: "5. Add industry context" },
      { type: "p", text: "Industry experience can be useful when the subject depends on the work environment: IT and ITES, banking and finance, healthcare, manufacturing, education, retail, hospitality, pharmaceuticals, government, NGOs and startups. Industry experience should not automatically exclude someone. It is one contextual factor in a broader match." },
      { type: "h2", text: "6. Search by delivery format" },
      { type: "p", text: "Decide whether you need online, offline or hybrid delivery, then consider the format: workshop, seminar, keynote, bootcamp, coaching, masterclass, certification programme or long-term programme. This can prevent a suitable subject expert from entering a shortlist when the practical delivery requirement does not fit." },
      { type: "h2", text: "7. Location still matters" },
      { type: "p", text: "Even with online training, location can matter for in-person delivery, travel, regional language requirements, repeated programmes and long-term engagements. For offline programmes, consider city, state and willingness to travel. “Bengaluru, willing to travel within Karnataka” is more useful than simply “Bengaluru.”" },
      { type: "h2", text: "8. Language can be an important filter" },
      { type: "p", text: "India's linguistic diversity means language can affect participant engagement. An organisation may need English and Kannada, Hindi and English, or Tamil. Make language a structured search field instead of leaving it hidden inside a biography." },
      { type: "h2", text: "9. Look at experience — but look at relevance" },
      { type: "p", text: "Years of experience can be useful, but it should not be the only criterion. A trainer with 15 years of experience may have limited experience with your participant group. Another trainer with five years of highly relevant experience may have conducted exactly the programme you need." },
      { type: "h2", text: "10. Review methodology" },
      { type: "p", text: "Once you have a shortlist, understand how each trainer conducts programmes. Is the session lecture-based? Are there activities? Are case studies used? Are role plays included? Is there assessment? Are examples customised? Is follow-up available? The method should connect to the objective." },
      { type: "h2", text: "11. Ask for a programme outline" },
      { type: "p", text: "A professional trainer should generally be able to explain the proposed structure: learning objectives, topics, methodology, duration, participant requirements, expected outcomes and assessment or follow-up where applicable. This makes comparison easier." },
      { type: "h2", text: "12. Don't compare only on price" },
      { type: "p", text: "Price is a legitimate business consideration, but comparing trainers only on fees can obscure other important factors: expertise, relevance, experience, methodology, delivery, customisation and commercial fit. A lower fee does not automatically mean a better fit, and a higher fee does not automatically mean a better fit." },
      { type: "h2", text: "13. Build a reusable trainer database" },
      { type: "p", text: "If your organisation conducts training regularly, don't start from zero every time. Maintain structured information such as trainer name, expertise, specialisation, audience, industry experience, location, languages, delivery mode, programme formats, contact details and previous engagement notes. This turns trainer sourcing into an organisational capability." },
      { type: "h2", text: "14. A practical HR trainer-search checklist" },
      { type: "ul", items: ["Requirement: subject, problem, expected outcome", "Participants: number, level, role, location", "Trainer: expertise, specialisation, relevant experience, qualifications", "Delivery: online/offline/hybrid, duration, language, group size", "Programme: customisation, assessment, follow-up", "Commercial: budget, travel, procurement requirements"] },
      { type: "quote", text: "Spend less time searching. Spend more time finding the right expertise." },
      { type: "p", text: "That is the experience Trainers Connect is designed to support: structured trainer information brought together so organisations and individuals can search on expertise, audience, experience, location, language and delivery preferences." },
    ],
  },
  {
    slug: "how-to-make-your-trainer-profile-stand-out-a-practical-guide-for-trainers",
    title: "How to Make Your Trainer Profile Stand Out: A Practical Guide for Trainers",
    shortTitle: "Make your profile stand out",
    excerpt:
      "Your profile is your professional introduction when you are not in the room. A field guide to headlines, expertise, audience, evidence and methodology.",
    category: "For trainers",
    date: "19 October 2026",
    dateISO: "2026-10-19",
    readTime: "9 min read",
    image: "/images/blog4.jpg",
    imageAlt: "A training professional working at a desk",
    featured: true,
    body: [
      { type: "p", text: "A trainer can have excellent knowledge, years of experience and strong facilitation skills. But when an organisation searches for a trainer online, it may have only a few minutes to understand whether that trainer is relevant. That is why your professional profile matters." },
      { type: "p", text: "Your trainer profile is not just an online biography. It is your professional introduction when you are not in the room." },
      { type: "p", text: "A useful profile should make it easy to answer five questions: Who are you? What do you specialise in? Who do you train? What experience do you bring? How can someone work with you?" },
      { type: "h2", text: "1. Start with a clear professional headline" },
      { type: "p", text: "Compare “Trainer | Speaker | Consultant” with “Corporate Leadership Trainer | First-Time Manager Development | Communication & Team Effectiveness.” The second tells a potential client more immediately." },
      { type: "p", text: "A useful formula is Role + Core Expertise + Specialisation + Audience." },
      { type: "ul", items: ["Corporate Trainer | Communication & Presentation Skills | Graduate Employability", "Leadership Facilitator | First-Time Managers | Team Effectiveness", "Technology Trainer | Data Analytics & AI Tools | Working Professionals", "Wellness Coach | Workplace Wellbeing | Corporate Teams"] },
      { type: "h2", text: "2. Don't make your profile an autobiography" },
      { type: "p", text: "Your About section should establish your professional identity before telling your story. Start with: “I am a leadership and communication trainer with 10 years of experience working with managers, professionals and graduate talent.” Then explain expertise, audience, experience, approach, programme areas and types of organisations served." },
      { type: "h2", text: "3. Define expertise clearly" },
      { type: "p", text: "One common profile mistake is being too broad. A statement such as “I conduct training on soft skills, personality development, communication, leadership, motivation, sales, career development and teamwork” may be accurate but difficult to search and remember." },
      { type: "callout", text: "Primary domain: Business & Professional Development. Categories: Leadership; Management Development; Workplace Effectiveness. Specialisations: First-Time Manager Development; Difficult Conversations; Team Leadership." },
      { type: "h2", text: "4. Tell organisations who you train" },
      { type: "p", text: "Audience is as important as topic. A leadership trainer for senior executives is not necessarily the same fit as a leadership trainer for college students. Mention audiences that genuinely reflect your experience: school students, college students, graduates, working professionals, first-time employees, managers, senior leaders, entrepreneurs, teachers, parents and individuals." },
      { type: "h2", text: "5. Show relevant experience" },
      { type: "p", text: "Avoid only writing “I have extensive experience.” Give context: years of professional experience, years of training experience, programme types, group sizes, industries, participant types and geographic experience." },
      { type: "h2", text: "6. Use qualifications to support your positioning" },
      { type: "p", text: "List relevant degrees, professional qualifications, industry certifications, trainer certifications, coaching credentials, licences and professional memberships. NSDC uses benchmark standards and certification processes for trainers and assessors through its Sector Skill Councils. Not every trainer needs an NSDC credential; relevance depends on the field and assignment." },
      { type: "h2", text: "7. Explain your methodology" },
      { type: "p", text: "Your methodology can differentiate you from another trainer teaching the same subject. Do you use case studies, role plays, simulations, activities, storytelling, group discussions, practical exercises, assessments, coaching or projects?" },
      { type: "p", text: "“My programmes use case studies, role plays and reflection exercises so participants can apply concepts to workplace situations” is more informative than “My sessions are interactive.”" },
      { type: "h2", text: "8. Show the formats you offer" },
      { type: "p", text: "Organisations may need workshops, seminars, keynotes, corporate training, classroom programmes, one-to-one coaching, group coaching, bootcamps, masterclasses, certification programmes, mentoring, consultation or long-term programmes. If you offer online and offline delivery, say so clearly." },
      { type: "h2", text: "9. Mention location and travel preferences" },
      { type: "p", text: "Your profile should mention base city, state, online availability, offline availability, hybrid availability and willingness to travel. A trainer based in Bengaluru who travels across Karnataka is a different search result from a trainer who works only online." },
      { type: "h2", text: "10. Don't forget languages" },
      { type: "p", text: "If you can deliver in multiple languages, make them visible. This can be useful for schools, colleges, NGOs, regional organisations and geographically distributed teams." },
      { type: "h2", text: "11. Describe what makes your approach different" },
      { type: "p", text: "Avoid unsupported claims such as “India's No. 1 trainer.” Describe your actual approach. Perhaps you customise programmes, use industry case studies, work with small groups, combine coaching with workshops, specialise in experiential learning or deliver in regional languages." },
      { type: "h2", text: "12. Think like the person searching" },
      { type: "p", text: "Imagine an HR manager searches “leadership trainer for first-time managers in Bengaluru.” Would your profile make the relevance obvious? Then try “communication trainer for college students in Karnataka” and “online compliance trainer for corporate employees.” This is why structured information matters." },
      { type: "h2", text: "Trainer-profile checklist" },
      { type: "ul", items: ["Professional headline", "Clear bio", "Primary training domain", "Categories and specialisations", "Target audiences and industries", "Experience, qualifications and certifications", "Training formats and delivery mode", "Location and languages", "Methodology and availability", "Contact method"] },
      { type: "quote", text: "The best profile is not necessarily the one with the most words. It is the one that makes your expertise easiest to understand." },
      { type: "p", text: "Your expertise is the foundation. Your professional profile helps people find it." },
    ],
  },
  {
    slug: "the-changing-landscape-of-corporate-training-in-india-what-trainers-and-organisations-need-to-know",
    title: "The Changing Landscape of Corporate Training in India: What Trainers and Organisations Need to Know",
    shortTitle: "The changing landscape",
    excerpt:
      "Workplace learning is becoming broader as organisations respond to technology, hybrid work and evolving employee expectations. What that means for trainers.",
    category: "Industry",
    date: "19 October 2026",
    dateISO: "2026-10-19",
    readTime: "8 min read",
    image: "/images/blog3.jpg",
    imageAlt: "A facilitator writing on a whiteboard during a workshop",
    body: [
      { type: "p", text: "Corporate training is changing. The traditional picture was simple: employees gathered in a room, a trainer delivered a presentation, participants listened, and the programme ended. That model still has a place. But workplace learning is becoming broader as organisations respond to technology, changing roles, hybrid work and evolving employee expectations." },
      { type: "h2", text: "Technology is a major factor" },
      { type: "p", text: "The World Economic Forum's Future of Jobs Report 2025 identifies technological change, the green transition, economic uncertainty, geoeconomic fragmentation and demographic shifts among forces expected to transform labour markets through 2030. Skills therefore cannot be treated as static." },
      { type: "p", text: "Upskilling means developing additional capabilities for an existing role. Reskilling means developing new capabilities for a different role or responsibility. Both broaden the role of trainers." },
      { type: "h2", text: "The demand is broad — and specialised" },
      { type: "p", text: "Organisations may need expertise in leadership, communication, digital skills, AI, data, sales, customer service, project management, workplace behaviour, compliance, wellness, career development, technical skills and industry-specific capabilities. The training ecosystem therefore needs both breadth and specialisation." },
      { type: "h2", text: "One topic is not one programme" },
      { type: "p", text: "The same communication programme will not necessarily work equally well for graduates, sales professionals, team leaders and senior executives. A senior manager may need executive communication and difficult-conversation skills. A new employee may need workplace communication fundamentals." },
      { type: "p", text: "For trainers, the lesson is that a programme may be described as an activity while the actual requirement is an outcome. A strong training conversation should explore what is happening now, what needs to change, who needs the training, what behaviours need to improve, what skills are missing and what success would look like." },
      { type: "h2", text: "External expertise remains valuable" },
      { type: "p", text: "Not every organisation needs to build every capability internally. External trainers can provide specialised knowledge, different perspectives and flexible programme design. They may be useful when an organisation needs a specialised subject expert, a short-term intervention, an external perspective, a customised programme, a large-event facilitator, a leadership programme, a behavioural intervention or a technical specialist." },
      { type: "h2", text: "Geography is less of a constraint" },
      { type: "p", text: "A trainer based in Bengaluru can potentially conduct an online programme for employees in Delhi. A specialist based in Mysuru can work with participants across India. Organisations can combine online learning, in-person workshops, follow-up sessions, coaching, digital resources and assessments." },
      { type: "p", text: "This creates opportunities beyond a trainer's immediate city, while also making clear positioning and discoverability more important." },
      { type: "h2", text: "Trainers need a professional identity" },
      { type: "p", text: "Compare “I am a trainer” with “I help first-time managers in technology organisations lead teams, hold difficult conversations and delegate effectively.” The second description gives an organisation more information. Not every trainer needs a narrow niche, but organisations should be able to understand where the expertise fits." },
      { type: "h2", text: "Structured information at scale" },
      { type: "p", text: "NSDC's Takshashila portal is a dedicated platform for managing trainers and assessors in India's short-term skill ecosystem. It provides information about Training of Trainers and Assessors programmes and lists certified trainers and assessors across states, sectors and job roles." },
      { type: "p", text: "These figures relate to the NSDC certification ecosystem, not to every trainer in India. The broader point is that trainer development and trainer information are already being organised at scale in parts of the ecosystem." },
      { type: "h2", text: "From searching names to searching expertise" },
      { type: "p", text: "As the number of trainers and expertise areas grows, HR and L&D teams need practical ways to identify suitable professionals. Instead of searching only for “trainer,” organisations may need “leadership trainer for first-time managers in Bengaluru, offline, English and Kannada.” Structured discovery can make this easier." },
      { type: "quote", text: "Different expertise. One powerful network." },
      { type: "p", text: "The practical challenge is helping the right expertise reach the right opportunity. That is the idea behind Trainers Connect — a connected ecosystem for trainers, coaches, mentors and the organisations looking for them." },
    ],
  },
  {
    slug: "why-trainers-need-a-professional-network-in-todays-training-industry",
    title: "Why Trainers Need a Professional Network in Today's Training Industry",
    shortTitle: "Why trainers need a network",
    excerpt:
      "Expertise and opportunity do not always meet in the same place. The case for structured profiles, professional relationships and a connected ecosystem.",
    category: "For trainers",
    date: "19 October 2026",
    dateISO: "2026-10-19",
    readTime: "7 min read",
    image: "/images/blog2.jpg",
    imageAlt: "A professional holding a tablet with a network of faces",
    body: [
      { type: "p", text: "Being a good trainer is only one part of building a training career. The other part is being discoverable." },
      { type: "p", text: "A trainer can have excellent qualifications, strong facilitation skills and years of experience, yet still struggle to consistently find new assignments. The reason is simple: expertise and opportunity do not always meet in the same place." },
      { type: "p", text: "Many trainers build their careers through referrals, WhatsApp groups, LinkedIn, former clients, friends, training companies and word of mouth. These channels can be useful, but they are fragmented. One organisation may know a trainer through a colleague. A school may ask for a recommendation. An HR professional may search LinkedIn. Meanwhile, another capable trainer may remain invisible simply because the right person has never heard of them." },
      { type: "h2", text: "Expertise alone does not create discoverability" },
      { type: "p", text: "Professional networking does not replace expertise. It creates more opportunities for expertise to be seen. A trainer with strong expertise but a small network may hear about fewer opportunities than a trainer whose work is known across HR, L&D, schools, colleges, NGOs, consultants and other trainers. This is not a ranking of trainers. It is a reminder that professional visibility is part of independent practice." },
      { type: "h2", text: "India's trainer ecosystem is already substantial" },
      { type: "p", text: "NSDC reports that 60,000 trainers and 40,000 assessors have been granted certifications through its Training of Trainers and Training of Assessors programmes across 36 states and union territories. NSDC's Takshashila portal functions as a structured platform for trainer and assessor information within the Indian short-term skill ecosystem." },
      { type: "p", text: "These figures relate to the NSDC certification ecosystem, not to every trainer in India. But they illustrate the scale of structured trainer development in one part of the market. Professionals work across corporate learning, leadership, communication, technology, sales, education, employability, wellness, fitness, compliance, entrepreneurship and career development. The challenge is increasingly one of connection and discoverability." },
      { type: "h2", text: "What should a professional trainer network do?" },
      { type: "h3", text: "Become discoverable" },
      { type: "p", text: "A structured profile can show who you are, what you specialise in, who you train, where you operate, your qualifications, experience, formats and methodology. That is more useful than simply saying, “I am a trainer.”" },
      { type: "h3", text: "Build professional relationships" },
      { type: "p", text: "Training is often collaborative. A leadership trainer may need a coach. A communication trainer may work with a career specialist. A corporate programme may need several subject experts. A network can create more opportunities for these connections." },
      { type: "h3", text: "Make collaboration a growth strategy" },
      { type: "p", text: "A three-month leadership programme might involve leadership workshops, communication, coaching, assessments, team building and manager mentoring. One professional may not specialise in all of these areas. A network can help trainers co-facilitate programmes, refer assignments, build joint workshops, share expertise and create specialised solutions." },
      { type: "h2", text: "The importance of a structured profile" },
      { type: "ul", items: ["Expertise: What do you specialise in?", "Experience: How long have you been training?", "Audience: Who do you train?", "Industry: Which sectors have you worked with?", "Format: What programmes do you deliver?", "Location: Where can you work?", "Delivery: Online, offline or hybrid?", "Language: Which languages can you deliver in?", "Qualifications: What relevant credentials do you have?", "Methodology: How do you conduct your sessions?"] },
      { type: "p", text: "Structured information makes professional discovery more precise." },
      { type: "h2", text: "Networking should not mean chasing opportunities every day" },
      { type: "p", text: "A professional network is not simply a place to ask: “Any training requirement?” Good networking creates professional visibility before an opportunity exists. An organisation may not need a trainer today but may need one three months later. A college may not have a programme this month but may plan one next semester. Being discoverable means your expertise can remain visible when a relevant need appears." },
      { type: "h2", text: "From individual trainers to a connected ecosystem" },
      { type: "p", text: "The traditional model often looks like: organisation asks someone, gets a referral, contacts trainer. A professional network can create another route: organisation searches expertise, discovers trainers, evaluates profiles, connects. Neither route needs to replace the other. The goal is to create more ways for the right people to find each other." },
      { type: "quote", text: "The expertise already exists. The opportunities already exist. The missing piece is often the connection." },
      { type: "p", text: "That is the thinking behind Trainers Connect — not simply another listing, but a professional network bringing trainers, coaches, mentors, consultants, facilitators and subject-matter experts closer to organisations and individuals looking for expertise." },
    ],
  },
  {
    slug: "how-to-choose-the-right-corporate-trainer-for-your-organisation",
    title: "How to Choose the Right Corporate Trainer for Your Organisation",
    shortTitle: "Choose the right corporate trainer",
    excerpt:
      "The goal is not simply to find someone who can deliver a presentation. It is to find the right expertise, for the right audience, addressing the right problem.",
    category: "For organisations",
    date: "16 October 2026",
    dateISO: "2026-10-16",
    readTime: "8 min read",
    image: "/images/14090.jpg",
    imageAlt: "A corporate trainer presenting to a seated team",
    body: [
      { type: "p", text: "A company decides that its employees need training. Perhaps managers need leadership development. A sales team needs negotiation skills. New employees need workplace readiness. The next question sounds simple: “Who should conduct the training?” That is where the search can become difficult." },
      { type: "h2", text: "1. Start with the problem, not the trainer" },
      { type: "p", text: "A common starting point is: “We need a communication trainer.” A better starting point is: “What problem are we trying to solve?” Employees may struggle to communicate with customers. First-time managers may find it difficult to lead teams. Sales professionals may need stronger negotiation skills. Graduates may need interview preparation." },
      { type: "p", text: "The Association for Talent Development describes needs assessment as a way of identifying the gap between the current situation and the desired result before deciding on a learning intervention. Before searching for a trainer, define the outcome: what should participants know, do or behave differently after the programme?" },
      { type: "h2", text: "2. Match subject expertise to the requirement" },
      { type: "p", text: "A trainer who is excellent at public speaking is not automatically the right person for a cybersecurity programme. Corporate experience alone does not necessarily make someone the right fit for a programme involving children or teachers. Look at core expertise, specialisation, industry experience, qualifications, certifications, training experience, audience experience and previous programme types." },
      { type: "h2", text: "3. Look beyond qualifications" },
      { type: "p", text: "A qualification tells you something about what a professional has studied. It does not, by itself, explain how that person facilitates learning. Ask how many years they have been training, whether they have worked with similar participants, handled similar group sizes, delivered online and offline, customised programmes and worked in your industry. Relevant experience matters more than a large number without context." },
      { type: "h2", text: "4. Consider the audience" },
      { type: "p", text: "The same topic may require very different approaches. A communication programme for college students will not necessarily look like a communication programme for senior executives. Ask the trainer: “Have you worked with people like our participants?”" },
      { type: "h2", text: "5. Understand methodology" },
      { type: "p", text: "Two trainers can teach the same subject using very different approaches: case studies, role plays, simulations, group discussions, activities, storytelling, demonstrations, assessments, experiential learning, coaching or practical exercises. There is no single method that works for every programme. The key question is whether the methodology fits the objective. Ask the trainer to explain how the programme will be delivered, not just what topics will be covered." },
      { type: "h2", text: "6. Ask whether the programme can be customised" },
      { type: "p", text: "Organisations are not identical. Ask whether the trainer can adapt examples to your industry, use relevant case studies, adjust the programme to participant level, include organisational scenarios, change duration, add assessments or include follow-up activities." },
      { type: "h2", text: "7. Check delivery flexibility" },
      { type: "p", text: "Training may be online, offline, hybrid, at the organisation's premises, at an offsite venue, across several cities, a short workshop or a longer learning journey. Check location, travel, languages, group size and duration. A trainer can be an excellent subject fit but still be unsuitable for the practical requirements of the assignment." },
      { type: "h2", text: "8. Look beyond the training day" },
      { type: "p", text: "Depending on the objective, an organisation may consider pre-training assessments, participant surveys, post-training assessments, assignments, follow-up sessions, coaching, manager feedback and action plans. Not every programme needs all of these, but the organisation should be clear about what success looks like." },
      { type: "h2", text: "9. Build a structured shortlist" },
      { type: "ul", items: ["Expertise: Does the trainer specialise in our requirement?", "Experience: Have they handled similar programmes?", "Audience: Have they worked with our participants?", "Methodology: Does their approach fit the objective?", "Customisation: Can the programme be adapted?", "Delivery: Can they work in the required format and location?", "Credentials: Are relevant qualifications available?", "Outcomes: Can the programme be connected to clear objectives?"] },
      { type: "h2", text: "10. Watch how they respond" },
      { type: "p", text: "The selection process itself can reveal useful information. Do they ask questions before sending a standard proposal? Do they understand the participant profile? Do they clarify the desired outcome? Do they explain what they can and cannot customise? Do they provide a proposal that actually reflects the requirement? These are practical indicators of whether the trainer has understood the assignment." },
      { type: "h2", text: "11. Think about fit at three levels" },
      { type: "p", text: "Subject fit: does the trainer have relevant expertise? Audience fit: do they have experience with these participants? Context fit: can they work within the organisation's location, format, language, duration and practical requirements? A trainer may have excellent subject expertise but limited audience experience. Looking at all three levels creates a more complete picture." },
      { type: "h2", text: "12. Keep the shortlist manageable" },
      { type: "p", text: "A common problem in online searches is having too many options. The objective is not to contact fifty trainers. It is to create a manageable shortlist of professionals who genuinely appear relevant. A structured search can move an organisation from hundreds of possible profiles to a small group of relevant professionals." },
      { type: "quote", text: "There is no universal definition of the right trainer. The relevant question is: who is the right trainer for this particular requirement?" },
      { type: "p", text: "The goal is not simply to find someone who can deliver a presentation. It is to find the right expertise, for the right audience, addressing the right problem, using the right approach." },
    ],
  },
];

export const faqGroups = [
  {
    label: "For trainers",
    items: [
      {
        q: "Who can join Trainers Connect?",
        a: "Trainers Connect is open to professionals who train, coach, mentor, teach or develop others. This includes corporate trainers, soft-skills trainers, leadership coaches, fitness trainers, dance instructors, sports coaches, nutrition professionals, wellness experts, technical trainers, career coaches, mentors and other subject-matter experts.",
      },
      {
        q: "Why should I join Trainers Connect?",
        a: "Trainers Connect gives you a professional digital presence and an opportunity to become discoverable to organisations and individuals looking for training, coaching or mentoring services. Instead of relying only on referrals, WhatsApp groups or social media, you can showcase your expertise, experience, certifications, training areas and location in one professional profile.",
      },
      {
        q: "How does Trainers Connect help organisations find me?",
        a: "Once your profile is published, organisations and individuals can search for trainers based on factors such as expertise, category, location and other relevant profile information. A well-completed profile helps potential clients understand your background and determine whether your expertise matches their requirement.",
      },
      {
        q: "What information can I include in my trainer profile?",
        a: "Your profile can showcase professional experience, areas of expertise, training topics, qualifications, certifications, industries or audiences served, training methodology, languages, location, online and offline availability, travel availability, a professional introduction and other relevant achievements. The more complete and accurate your profile is, the easier it is for potential clients to understand your expertise.",
      },
      {
        q: "Do I have to be a full-time trainer to join?",
        a: "No. Trainers Connect can be useful for both full-time and part-time trainers, coaches, mentors, instructors and subject-matter experts. If training, coaching or mentoring is part of your professional offering, you can create a profile and showcase your expertise.",
      },
      {
        q: "Can trainers from outside major cities join?",
        a: "Absolutely. Trainers Connect is intended to connect trainers across India, not just professionals from major metropolitan cities. You can specify your location, preferred training areas and whether you are available for online, local or travel-based assignments.",
      },
      {
        q: "Is there a fee to join Trainers Connect?",
        a: "Trainers Connect operates on an annual membership model for trainers. The applicable membership fee and benefits will be communicated during registration.",
      },
      {
        q: "Does joining Trainers Connect guarantee me training assignments?",
        a: "No. Membership gives you a platform to showcase your expertise and become discoverable; it does not guarantee a specific number of enquiries, clients or assignments. Opportunities depend on factors such as your expertise, profile quality, location, client requirements, availability and market demand.",
      },
      {
        q: "Will Trainers Connect take a commission from my training fee?",
        a: "Trainers Connect's annual membership gives trainers access to the platform without a commission being charged on their professional fees. Any future services or commercial arrangements, if introduced, will be communicated clearly to members in advance.",
      },
      {
        q: "How can I make my profile stand out?",
        a: "Complete your profile professionally and keep it updated. We recommend adding a clear professional photograph, a strong introduction, relevant qualifications and certifications, specific areas of expertise, training experience, industries served, languages, training formats and other information that helps clients understand what you offer. Think of your Trainers Connect profile as your professional training portfolio.",
      },
    ],
  },
  {
    label: "For organisations & individuals",
    items: [
      {
        q: "Who can use Trainers Connect to find a trainer?",
        a: "Trainers Connect can be used by corporates, businesses, schools, colleges, educational institutions, NGOs, government and community organisations, training departments, HR and L&D teams, and individuals looking for trainers, coaches, mentors or subject-matter experts.",
      },
      {
        q: "What types of trainers can I find on Trainers Connect?",
        a: "You can discover professionals across a wide range of categories, including corporate and soft skills, leadership, team building, sales, communication, technical skills, fitness, sports, dance, nutrition, wellness, education, career coaching, life coaching, mentoring and many other areas. The categories will continue to expand as the trainer network grows.",
      },
      {
        q: "How do I find the right trainer?",
        a: "Begin by searching for the skill, subject or expertise you require. Depending on the platform's available filters, you can narrow your search by location, category, expertise, experience, language, delivery format and other relevant requirements. You can then review trainer profiles and identify professionals who match your needs.",
      },
      {
        q: "Can I find trainers in my city?",
        a: "Yes. Location-based discovery is one of the key features of Trainers Connect. You can search for trainers based on your preferred city or location. You can also identify professionals who offer online training or are willing to travel, depending on their profile.",
      },
      {
        q: "Can I find trainers for online programmes?",
        a: "Yes. Trainers can specify whether they offer online, offline or both formats. When searching, you can consider the trainer's preferred delivery mode and connect with professionals who suit your programme requirements.",
      },
      {
        q: "Is it free for organisations to search for trainers?",
        a: "Trainers Connect does not charge organisations or individuals simply to search and discover trainers on the platform. Any professional fee for the actual training engagement will be discussed between the client and the selected trainer, subject to the terms of the engagement.",
      },
      {
        q: "How do I know whether a trainer is qualified?",
        a: "Trainer profiles are designed to provide relevant professional information such as experience, qualifications, certifications, expertise and other details submitted by the trainer. Organisations should review the trainer's profile and credentials and clarify any requirements directly with the trainer before finalising an engagement.",
      },
      {
        q: "Can I request a specific type of training programme?",
        a: "Yes. You can communicate your specific requirement, including training topic, target audience, number of participants, location, preferred date, duration, online or offline format, expected outcomes and any specific qualification or experience required.",
      },
      {
        q: "Can I hire a trainer for a customised programme?",
        a: "Yes. Many training requirements are organisation-specific. You can discuss your objectives, audience, duration, delivery format and expected outcomes with the trainer and determine whether they can customise their programme to meet your requirements.",
      },
      {
        q: "Does Trainers Connect conduct the training or employ the trainers?",
        a: "Trainers Connect is a platform that connects organisations and individuals with independent trainers, coaches and mentors. The actual training engagement, scope of work, professional fees, schedule and other commercial terms are agreed between the client and the selected professional, unless a specific Trainers Connect-managed service states otherwise.",
      },
    ],
  },
] as const;

export const domainOptions = [
  "Art, Craft & Creative Skills",
  "Beauty, Image & Personal Care",
  "Business & Professional Development",
  "Career Development & Employability",
  "Coaching & Mentoring",
  "Dance, Music & Performing Arts",
  "Education & Academic Learning",
  "Health, Fitness & Wellness",
  "Legal, Compliance & Safety Awareness",
  "Nutrition & Lifestyle",
  "Soft Skills & Personal Development",
  "Specialised & Other Skills",
  "Sports & Physical Skills",
  "Technology & Digital Skills",
] as const;

export const principles = [
  {
    index: "I",
    title: "Quality",
    text: "A network where professional information is presented clearly, helping users understand a trainer's expertise and experience.",
  },
  {
    index: "II",
    title: "Transparency",
    text: "Profiles designed to provide meaningful information about qualifications, experience, specialisations, audience and training areas.",
  },
  {
    index: "III",
    title: "Choice",
    text: "Different requirements need different professionals. We bring diverse expertise together so users can make informed choices.",
  },
] as const;
