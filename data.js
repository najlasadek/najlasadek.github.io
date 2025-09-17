// Enhanced data.js — Complete Customization Control with ALL original content

window.DATA = {
  /* ==================== SITE CONFIGURATION ==================== */
  site: {
    title: "Najla Sadek - Engineering & Arts",
    heroTitle: "Najla Sadek",
    heroSubtitle: "R&D Engineer & Prestigious Musical Performer",
    heroDescription: "From engineering at BMW and CERN to standing ovations at AUB's Founder's Day. Bridging the worlds of engineering and classical performance with precision and passion.",
    heroButtons: [
      { text: "View Engineering Work", page: "engineering", style: "primary" },
      { text: "Discover Performances", page: "art", style: "secondary" }
    ]
  },

  /* ==================== CONTACT / SOCIALS ==================== */
  // contact: {
  //   email: "sadek.najla@gmail.com",
  //   linkedin: "https://www.linkedin.com/in/najla-sadek-086224270",
  //   instagram: "https://instagram.com/najla__sadek",
  //   youtube: "https://youtube.com/@najlasadek",
  //   github: "" // optional
  //  },

  resumePdfUrl: "./NajlaSadek-CV.pdf",

  /* ==================== HERO CONTROL ==================== */
  // Explicit picks for the two hero cards (by id, any collection)
  hero_features: [
    { ref: "feat-cern-talk" },
    { ref: "rec-founders-day" }
  ],

  // Items for the vertical image carousel in the hero (right side)
  // carousel_ids: ["rec-founders-day", "feat-cern-talk", "exp-cern", "exp-bmw","rec-commence-2024"],

  // /* ==================== COINS (faces rotate automatically) ==================== */
  // coins: {
  //   techFaces: ["./assets/cern1.jpg"],
  //   musicFaces: ["./assets/exp2.jpg"]
  // },

  /* ==================== HOMEPAGE PREVIEW SECTIONS ==================== */
  homepage_sections: [
    {
      id: "experience",
      title: "Engineering Experience", 
      data_source: "experience_full",
      target_page: "engineering",
      display: { 
        ids: ["exp-cern", "exp-bmw"], 
        mode: "both",
        grid: "grid-2"
      }
    },
    
      {
      id: "competitions",
      title: "Competitions and Hackathons",
      data_source: "competitions_full",
      target_page: "engineering", 
      display: { 
        limit: 2,
        mode: "text",
        grid: "grid-2" 
      }
    },



    // {
    //   id: "education",
    //   title: "Engineering Education",
    //   data_source: "education_full", 
    //   target_page: "engineering",
    //   display: { 
    //     ids: ["edu-aub", "edu-math-min"],
    //     mode: "text",
    //     grid: "grid-2" 
    //   }
    // },
    // {
    //   id: "projects",
    //   title: "Projects",
    //   data_source: "projects_full",
    //   target_page: "engineering", 
    //   display: { 
    //     ids: ["proj-kcolor"],
    //     limit: 1,
    //     mode: "text",
    //     grid: "grid-1" 
    //   }
    // },
    {
      id: "recitals",
      title: "Musical Performances",
      data_source: "recitals_full",
      target_page: "art",
      display: { 
        ids: ["rec-founders-day", "rec-11th"],
        mode: "both",
        grid: "grid-2" 
      }
    },
    // {
    //   id: "masterclasses",
    //   title: "Musical Education & Masterclasses",
    //   data_source: "masterclasses_full",
    //   target_page: "art",
    //   display: { 
    //     limit: 2,
    //     mode: "text",
    //     grid: "grid-2" 
    //   }
    // },
    // {
    //   id: "honors",
    //   title: "Honors & Awards",
    //   data_source: "honors_full",
    //   target_page: "art",
    //   display: { 
    //     limit: 2,
    //     mode: "text",
    //     grid: "grid-4" 
    //   }
    // },
    {
      id: "events",
      title: "Upcoming Events",
      data_source: "events_full",
      target_page: "events",
      display: { 
        limit: 2,
        mode: "text",
        grid: "grid-2" 
      }
    },

    {
      id: "contact-preview",
      title: "Let's Connect",
      data_source: "contact_info",
      target_page: "contact",
      display: {
        mode: "text",
        grid: "grid-1",
        cssClass: "contact-preview-section" // This would require a small JS modification
      }
    }

    
  ],

  /* ==================== BACKWARD COMPATIBILITY ==================== */
  // Keep original preview structure for existing scripts
  // preview: {
  //   experience:    { ids: ["exp-cern", "exp-bmw"],                 mode: "both"   },
  //   education:     { ids: ["edu-aub", "edu-math-min"],              mode: "text"   },
  //   projects:      { limit: 3,                                     mode: "text"   },
  //   recitals:      { ids: ["rec-founders-day", "rec-bmw-collab"],  mode: "images" },
  //   masterclasses: { limit: 2,                                     mode: "text"   },
  //   honors:        { limit: 2,                                     mode: "text" },
  //   events:        { limit: 2,                                     mode: "text"   }
  // },

  /* ==================== PAGE CONFIGURATIONS ==================== */
  pages: {
    engineering: {
      title: "Engineering Excellence",
      subtitle: "Cutting-edge machine learning and AI development across leading organizations",
      sections: [
        {
          title: "Professional Experience",
          data_source: "experience_full",
          display: { mode: "both", grid: "grid-2" }
        },
        {
          title: "Engineering Education", 
          data_source: "education_full",
          display: { mode: "text", grid: "grid-2" }
        },
        {
          title: "Featured Projects",
          data_source: "projects_full", 
          display: { mode: "text", grid: "grid-3" }
        },

        {
          title: "Competitions & Hackathons",
          data_source: "competitions_full", 
          display: { mode: "text", grid: "grid-2" }
        }


      ]
    },
    art: {
      title: "Musical Artistry",
      subtitle: "Professional performances at prestigious venues and cultural institutions",
      sections: [
        {
          title: "Performances & Recitals",
          data_source: "recitals_full",
          display: { mode: "both", grid: "grid-3" }
        },
        {
          title: "Music Education & Masterclasses", 
          data_source: "masterclasses_full",
          display: { mode: "text", grid: "grid-2" }
        },
        {
          title: "Honors & Awards",
          data_source: "honors_full",
          display: { mode: "text", grid: "grid-3" }
        }
      ]
    },
    features: {
      title: "Features & Media",
      subtitle: "Highlighted work and media coverage across engineering and performance",
      sections: [
        {
          title: "Featured Content",
          data_source: "features_full",
          display: { mode: "both", grid: "grid-2" }
        }
      ]
    },
    events: {
      title: "Events & Talks", 
      subtitle: "Speaking engagements, performances, and upcoming events",
      sections: [
        {
          title: "Upcoming Events",
          data_source: "events_full",
          display: { mode: "text", grid: "grid-2" }
        },
        {
          title: "Recent Events",
          data_source: "talks_done",
          display: { mode: "text", grid: "grid-2" }
        }
      ]
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Open to collaborations in machine learning, AI research, and classical performance opportunities.",
      custom_content: `
        <p style="margin: 2rem 0; font-size: 1.1rem;">
          Whether you're interested in discussing machine learning research, AI applications, 
          classical music collaborations, or performance opportunities, I'd love to hear from you.
        </p>
      `
    }
  },

  /* ==================== VISUAL CUSTOMIZATION ==================== */
  theme: {
    colors: {
      primary: "#6366f1",
      secondary: "#8b5cf6", 
      background: "#0a0a0f"
    },
    card_settings: {
      show_badges: true,
      show_dates: true,
      hover_effects: true,
      image_lazy_load: true
    }
  },

  /* ==================== FEATURES & INTERVIEWS ==================== */
  features_full: [
    {
      id: "feat-cern-talk",
      kind: "Video",
      title: "CERN — When Science and Arts Collide",
      subtitle: "Exploring quantization strategies for next-generation triggers",
      img: "./assets/cern2.jpg",
      url: "https://www.youtube.com/watch?v=lG9DBXQAngw",
      embed: "https://www.youtube-nocookie.com/embed/lG9DBXQAngw?rel=0&modestbranding=1",
      // tags: ["hero", "carousel"],
      featured_rank: 1
      // mode : "text"
    },
    {
      id: "feat-bmw-article", 
      kind: "Video",
      title: "BMW Group IT Music Collaboration — Because We Believe",
      subtitle: "Munich, 2025 - Created and performed an original rendition of Andrea Bocelli’s “Because We Believe” as part of a first-of-its-kind music collaboration within BMW Group IT. Filmed near the iconic Four Cylinder Building in Munich, Germany, the project has been continuously broadcast internally across BMW.",
      img: "./assets/exp2.jpg",
      url: "https://www.youtube.com/watch?v=YRxYB59D5CI",
      embed: "https://www.youtube-nocookie.com/embed/YRxYB59D5CI?rel=0&modestbranding=1"
    },

    {
      id: "feat-day-cern", 
      kind: "Video",
      title: "A Day in a life of a CERN Summer Student - Featured on all CERN Official Social Media",
      subtitle: "August, 2025 ",
      img: "./assets/CERN-2025/socialmedia.jpg"
    }

    // {
    //   id: "feat-pierre-rabbat", 
    //   kind: "Video",
    //   title: "MTV Lebanon — Min el Ekhir Interview with Pierre Rabbat",
    //   subtitle: "July, 2017",
    //   embed: "https://www.youtube-nocookie.com/embed/1kLWBi_HUfg?modestbranding=1&rel=0"
    // }
  ],

  /* ==================== ENGINEERING EXPERIENCE ==================== */
  experience_full: [
    {
      id: "exp-cern",
      title: "R&D ML Intern — CERN openlab (Top 1%, 37/3800)",
      subtitle: "Jun—Aug 2025 • Geneva, Switzerland",
      text: "Next Generation Triggers (NGT): quantization strategies; Kubeflow automation; latency/accuracy benchmarking.",
      img: "./assets/cern1.jpg",
      links: [{ label: "More", url: "features.html" }]
    },
    {
      id: "exp-bmw",
      title: "ML Engineer Intern — BMW Group IT", 
      subtitle: "Jan—Jun 2025 • Munich, Germany",
      text: "Multi-agent AI for synthetic data (LangFlow + local LLMs) with FastAPI, Docker, and SQLAlchemy.",
      img: "./assets/bmw1.jpg"
    },
    {
      id: "exp-inmind",
      title: "Advanced ML Intern — inmind.ai",
      subtitle: "Jul—Aug 2024 • Beirut", 
      text: "YOLO/UNet on BMW SORDi; augmentation across 2D/3D (images & point clouds).",
      img: "./assets/inmind.jpg"
      // mode:"text"
    }
  ],

  education_full: [
    { 
      id: "edu-aub", 
      title: "B.Eng. Computer Science & Engineering — GPA 4.2/4", 
      subtitle: "American University of Beirut (AUB), 2022—2026", 
      text: "", 
      img: "" 
    },
    { 
      id: "edu-math-min", 
      title: "Minor in Applied Mathematics — GPA 4.3/4", 
      subtitle: "American University of Beirut (AUB), 2022—2026", 
      text: "", 
      img: "" 
    }
  ],

  projects_full: [
    { 
      id: "proj-cern-quant", 
      title: "Quantization @ CERN NGT", 
      text: "Automated PTQ/AWQ sweeps on Kubeflow; latency—accuracy trade-offs on constrained hardware.", 
      // img: "./assets/thumb-proj-1.jpg" 
      mode: "text"
    },
    { 
      id: "proj-bmw-agents", 
      title: "Agents for Synthetic Data (BMW)", 
      text: "LangFlow-orchestrated multi-agent pipeline with local LLMs; FastAPI/Docker/SQLAlchemy stack."
      // img: "./assets/thumb-proj-2.jpg" 
    },
    { 
      id: "proj-bmw-cv", 
      title: "Computer Vision on BMW SORDi", 
      text: "YOLOv7 detection + U-Net segmentation for logistics/warehouse evaluation."
      // img: "./assets/thumb-proj-4.jpg" 
    },
    { 
      id: "proj-kcolor", 
      title: "Estimating the Number of k-Colorings in Low-Degree Graphs",
      text: "An implementation of Jerrum’s “very simple” MCMC algorithm to approximate the count of valid k-colorings on sparse graphs, paired with a Manim demo animation. The animation illustrates Glauber dynamics step by step—vertex recoloring, constraint checks, and convergence—to make the estimator’s behavior visually clear.",
      img: "./assets/markov.jpg" 
      
    },
    { 
      id: "proj-bach-lstm", 
      title: "Music Genesis (Bach LSTM)", 
      text: "LSTM-based generation; standardized MIDI tempo; creative evaluation." 
      // img: "./assets/thumb-proj-3.jpg" 
    },
    { 
      id: "proj-flutter", 
      title: "FlutterForecast (Amazon Industry Program 1st Place Winners)", 
      text: "GEO-AI locust movement prediction with custom insect2vec; mentorship deliverable."
      // img: "./assets/thumb-proj-5.jpg" 
      // links: [{ label: "More", url: "engineering.html" }]
    }

  ],

  competitions_full: [
    { 
      id: "comp-amazon", 
      title: "1st place - 2024 Amazon Industry Program 3.0 - out of 23 teams", 
      text: " Completed a 6-week mentorship with Amazon, combining workshops on software development, product management, and machine learning, and played a key role in the ML development of FlutterForecast — a GEO AI-powered platform predicting locust movement through a custom insect2vec model integrated into real-world agricultural forecasting.", 
      // img: "./assets/thumb-proj-1.jpg" 
      mode: "text"
    },
    { 
      id: "comp-nasa", 
      title: "Global Nominee - 2024 NASA Space Apps Challenge - Top 1 locally", 
      text: "Led team efforts to integrate NASA’s real-time Earth observation datasets into a user-friendly platform and engineered machine learning models to predict environmental changes, enhancing resource management for farmers and improving the accuracy of crop yield forecasts. "
      // img: "./assets/thumb-proj-2.jpg" 
    }
  ],

  /* ==================== ART & PERFORMANCES ==================== */
  recitals_full: [
    {
      id: "rec-founders-day",
      title: "Founder's Day 2024 — The Prayer",
      subtitle: "American University of Beirut — December 2024",
      text: "Performed “The Prayer” of Andrea Bocceli during AUB Founder's Day 2024, the university's most prestigious event standing amidst an inspiring community of academic excellence and leadership. “Najla Sadek who’s an engineering student and a star performer at AUB in so many ways” as President Khuri Said",
      img: "./assets/FoundersDay-2024/2.jpg",
      gallery: [
        "./assets/FoundersDay-2024/1.jpg",
        "./assets/FoundersDay-2024/3.jpg", 
        "./assets/FoundersDay-2024/4.jpg",
        "./assets/FoundersDay-2024/5.jpg",
        "./assets/FoundersDay-2024/6.jpg",
        "./assets/FoundersDay-2024/7.jpg",
        "./assets/FoundersDay-2024/8.jpg",
        "./assets/FoundersDay-2024/10.jpg"
      ],
      date: "2024-12-01",
      links: [
        { label: "Watch", url: "https://www.youtube.com/watch?v=PNsH9fyMnnU" },
        { label: "Linkedin", url: "https://www.linkedin.com/posts/najlasadek_aubfoundersday-theprayer-foundersday2024-activity-7269623358760128513-k9KI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEI9lWYBr8jjtdt7bK3ett58JB0Fxw_HFUY" },
        { label: "Article", url: "https://www.aub.edu.lb/articles/Pages/American-University-of-Beirut-marks-158th-Founders-Day.aspx" }
      ],
      // tags: ["performance", "carousel"]
      mode: "embed"
    },
    {
      id: "rec-bmw-collab",
      title: "BMW Group IT Music Collaboration — Because We Believe",
      subtitle: "Munich, 2025 - Created and performed an original rendition of Andrea Bocelli’s “Because We Believe” as part of a first-of-its-kind music collaboration within BMW Group IT. Filmed near the iconic Four Cylinder Building in Munich, Germany, the project has been continuously broadcast internally across BMW.", 
      img: "./assets/.jpg",
      date: "2025-03-12",
      url: "https://www.youtube.com/watch?v=YRxYB59D5CI",
      embed: "https://www.youtube-nocookie.com/embed/YRxYB59D5CI?rel=0&modestbranding=1"
    },
    { 
      id: "rec-alumni-2024", 
      title: "Alumni Reunion 2024", 
      subtitle: "AUB — June 2024", 
      img: "./assets/exp32.jpg",
      url: "https://www.youtube.com/watch?v=_s-DY4uiUYo",
      embed: "https://www.youtube-nocookie.com/embed/_s-DY4uiUYo?rel=0&modestbranding=1"
    },
    { 
      id: "rec-commence-2024", 
      title: "Commencement Ceremony 2024", 
      subtitle: "AUB — May 2024", 
      img: "./assets/exp5.jpg" 
    },
    { 
      id: "ev-msfea-rl", 
      title: "Musical Thursdays — MSFEA Re-launch", 
      subtitle: "Sep 2024 • AUB"
      // img: "./assets/thumb-perf-2.jpg" 
    },
    { 
      id: "rec-fas-gala", 
      title: "FAS Gala", 
      subtitle: "AUB — May 2024", 
      img: "./assets/FasGala-2024/1.jpg" 
    },
    { 
      id: "rec-outdoors-gala", 
      title: "AUB Outdoors Gala", 
      subtitle: "AUB — May 2024", 
      img: "./assets/exp9.jpg" 
    },
    { 
      id: "rec-outdoors-d2", 
      title: "AUB Outdoors Day 2", 
      subtitle: "AUB — May 2024", 
      img: "./assets/exp8.jpg" 
    },
    { 
      id: "rec-outdoors-d1", 
      title: "AUB Outdoors Day 1", 
      subtitle: "AUB — May 2024", 
      img: "./assets/exp23.jpg" 
    },
    { 
      id: "rec-msfea-gala", 
      title: "MSFEA Gala", 
      subtitle: "AUB — May 2024", 
      img: "./assets/exp6.jpg" 
    },
    { 
      id: "rec-asce-gala", 
      title: "ASCE Gala", 
      subtitle: "AUB — May 2024" 
      // img: "./assets/thumb-perf-10.jpg" 
    },
    { 
      id: "rec-msfea-gather", 
      title: "MSFEA Gathering", 
      subtitle: "AUB — Apr 2024", 
      img: "./assets/MSFEAsinging.jpg" 
    },
    { 
      id: "rec-11th", 
      title: "11th Classical Recital", 
      subtitle: "AUB CMC — Apr 2024", 
      img: "./assets/exp10.jpg" 
    },
    { 
      id: "rec-philokalia", 
      title: "Classical Recital", 
      subtitle: "Philokalia Inst. — Feb 2024", 
      img: "./assets/exp11.jpg" 
    },
    { 
      id: "rec-ugt-final", 
      title: "Universities Got Talent — Finalist", 
      subtitle: "Feb 2024", 
      img: "./assets/exp12.jpg" 
    },
    { 
      id: "rec-10th", 
      title: "10th Classical Recital", 
      subtitle: "AUB CMC — Nov 2023", 
      img: "./assets/exp34.jpg" ,
      links: [{ label: "Watch", url: "https://www.youtube.com/watch?v=a5EQ046FBN4 " }]

    },
    { 
      id: "rec-baakline", 
      title: "Baakline Classical Music Recital", 
      subtitle: "Aug 2023", 
      // img: "./assets/thumb-perf-14.jpg" 
      embed: "https://www.youtube-nocookie.com/embed/AU-JVpzCIqk?modestbranding=1&rel=0"

    },
    { 
      id: "rec-baskinta", 
      title: "Baskinta Classical Music Recital", 
      subtitle: "Aug 2023"
      // img: "./assets/thumb-perf-15.jpg" 
    },
    { 
      id: "rec-9th", 
      title: "9th Classical Recital", 
      subtitle: "AUB CMC — Mar 2023", 
      img: "./assets/exp14.jpg" ,
      links: [{ label: "Watch", url: "https://youtu.be/HYGJWvdAn_w " }]


    },
    { 
      id: "rec-solo-fund", 
      title: "Solo Fundraising Concert — Je Chante pour mon École", 
      subtitle: "Sainte Anne — Feb 2023", 
      img: "./assets/exp16.jpg" 
    },
    { 
      id: "ev-oiec", 
      title: "OIEC World Congress Performance", 
      subtitle: "Dec 2022 • Marseille, France", 
      img: "./assets/exp18.jpg" 
    },
    { 
      id: "rec-8th", 
      title: "8th Classical Recital", 
      subtitle: "AUB CMC — Oct 2022", 
      // img: "./assets/thumb-perf-17.jpg",
      embed: "https://www.youtube-nocookie.com/embed/q5KrPaVChtM?modestbranding=1&rel=0" 

    },
    { 
      id: "rec-aubmcare", 
      title: "Fundraising Classical Concert × AUBMCare", 
      subtitle: "Oct 2022", 
      img: "./assets/exp20.jpg" 
    },
    { 
      id: "rec-baskinta-2022", 
      title: "Baskinta Classical Music Recital", 
      subtitle: "Aug 2022", 
      img: "./assets/exp21.jpg" 
    },
    { 
      id: "rec-7th", 
      title: "7th Classical Recital", 
      subtitle: "AUB CMC — Apr 2022", 
      img: "./assets/exp22.jpg" ,

      },
    { 
      id: "rec-oiec", 
      title: "OIEC World Congress — Musical Performance", 
      subtitle: "Marseille, France — Dec 2022", 
      img: "./assets/exp18.jpg" 
    },
    { 
      id: "rec-hiba", 
      title: "Duet with Hiba Tawaji — Yemken Habbaytak", 
      subtitle: "Nov 2017 - A live singing duet with international artist Hiba Tawaji, with the great Oussama El Rahbani on the piano.",
      url: "https://youtu.be/B0YXC9PXpWI?si=p5s2W7_vZwLuQBxz",
      embed: "https://www.youtube-nocookie.com/embed/B0YXC9PXpWI?rel=0&modestbranding=1"
    },
    { 
      id: "rec-agt", 
      title: "Arabs Got Talent — Der Holle Rache - Opera", 
      subtitle: "2017 Season", 
      embed: "https://www.youtube-nocookie.com/embed/xvoKa1e-yc4?modestbranding=1"
    }
  ],

  masterclasses_full: [
    { 
      id: "edu-voice", 
      title: "Voice & Opera Studies", 
      subtitle: "Ecole des Arts Ghassan Yammine, 2024—present", 
      text: "", 
      img: "" 
    },
    { 
      id: "edu-piano", 
      title: "Baccalaureate in Classical Piano — Excellent", 
      subtitle: "Lebanese National Conservatory of Music, 2013—2023", 
      text: "", 
      img: "" 
    },
    { 
      id: "mc-melodies", 
      title: "Mélodies Françaises", 
      subtitle: "Marie-Josée Matar & Elie Sawma — 2024", 
      img: "./assets/thumb-mc-1.jpg" 
    },
    { 
      id: "mc-opera", 
      title: "Private Opera Masterclasses", 
      subtitle: "Eliya Francis — 2022—2023", 
      img: "./assets/thumb-mc-2.jpg" 
    },
    { 
      id: "mc-flamenco", 
      title: "Flamenco Rhythms", 
      subtitle: "Nacho Arimany — Dec 2022", 
      img: "./assets/thumb-mc-3.jpg" 
    },
    { 
      id: "mc-percussion", 
      title: "Percussion Rhythms", 
      subtitle: "Arturo Stable — Dec 2022", 
      img: "./assets/thumb-mc-4.jpg" 
    },
    { 
      id: "mc-fournel", 
      title: "Piano Masterclass", 
      subtitle: "Jonathan Fournel — Dec 2022", 
      img: "./assets/thumb-mc-5.jpg" 
    },
    { 
      id: "mc-sunwoo", 
      title: "Piano Masterclass", 
      subtitle: "Yekwon Sunwoo — Dec 2022", 
      img: "./assets/thumb-mc-6.jpg" 
    },
    { 
      id: "mc-zhao", 
      title: "Piano Masterclass", 
      subtitle: "Chengcheng Zhao — May 2022", 
      img: "./assets/thumb-mc-7.jpg" 
    },
    { 
      id: "mc-agopian", 
      title: "Piano Masterclass", 
      subtitle: "Dr. Vartan Agopian — Dec 2019", 
      img: "./assets/thumb-mc-8.jpg" 
    },
    { 
      id: "mc-rahbani", 
      title: "OW Vocal Workshop", 
      subtitle: "Oussama Rahbani & Wadih Abi Raad — Jan 2019", 
      img: "./assets/thumb-mc-9.jpg" 
    },
    { 
      id: "mc-mora", 
      title: "Conducting Masterclass", 
      subtitle: "Maestro Jordi Mora — Oct 2016", 
      img: "./assets/thumb-mc-10.jpg" 
    },
    { 
      id: "mc-eidi", 
      title: "Piano Masterclass", 
      subtitle: "Billy Eidi — Apr 2015", 
      img: "./assets/thumb-mc-11.jpg" 
    },
    { 
      id: "mc-bottcher", 
      title: "Piano Masterclass", 
      subtitle: "Gerlint Böttcher — Oct 2014", 
      img: "./assets/thumb-mc-12.jpg" 
    }
  ],

  honors_full: [
    { 
      id: "hon-aub-honors", 
      title: "Honors List — AUB (every semester)", 
      img: "./assets/thumb-hon-1.jpg" 
    },
    { 
      id: "hon-aub-early", 
      title: "Early Admission Excellence Scholarship — AUB (2022)", 
      img: "./assets/thumb-hon-2.jpg" 
    },
    { 
      id: "hon-acad", 
      title: "Certificate of Academic Excellence & Perfectionism (2022)", 
      img: "./assets/thumb-hon-3.jpg" 
    },
    { 
      id: "hon-art-prize", 
      title: "Prize of Art (2022)", 
      img: "./assets/thumb-hon-4.jpg" 
    },
    { 
      id: "hon-oasis-piano", 
      title: "1st Prize — Oasis Piano Competition (2017)", 
      img: "./assets/thumb-hon-5.jpg" 
    },
    { 
      id: "hon-oasis-sing", 
      title: "1st Prize — Oasis Singing Competition (2016)", 
      img: "./assets/thumb-hon-6.jpg" 
    },
    { 
      id: "hon-sainte-anne", 
      title: "Diploma for Artistic Excellence — Sainte Anne des Soeurs (2018)", 
      img: "./assets/thumb-hon-7.jpg" 
    }
  ],

  events_full: [
    { 
      id: "ev-ieee", 
      title: "Guest Talk — IEEE Internship Panel", 
      subtitle: "Sep 2025 • AUB — ELH"
      // img: "./assets/thumb-ev-1.jpg" 
    },
    { 
      id: "ev-founders-25", 
      title: "AUB Founder's Day 2025", 
      subtitle: "Dec 1, 2025 • Assembly Hall"
      // img: "./assets/thumb-ev-2.jpg" 
    }
  ],

  contact_info: [
  {
    id: "contact-main",
    title: "Ready to Collaborate?",
    subtitle: "Machine Learning • Classical Music • Speaking Engagements",
    text: "Whether you're interested in discussing machine learning research, AI applications, classical music collaborations, or performance opportunities, I'd love to connect with you.",
    links: [
      { label: "Email", url: "mailto:sadek.najla@gmail.com" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/najla-sadek-086224270" },
      { label: "DownloadResume", url: "./NajlaSadek-CV.pdf" },
      { label: "Youtube", url: "https://youtube.com/@najlasadek" },
      { label:  "Instagram", url: "https://instagram.com/najla__sadek",}
    ]
  }
],


};




// Optional: Custom display functions (advanced customization)
window.DISPLAY_OVERRIDES = {
  // Custom rendering for specific items
  "rec-founders-day": {
    // Custom HTML template for this specific item
    template: (item) => `
      <div class="custom-founders-card">
        <div class="featured-badge">⭐ FEATURED PERFORMANCE</div>
        ${item.embed ? `<iframe src="${item.embed}"></iframe>` : `<img src="${item.img}">`}
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `
  }
};