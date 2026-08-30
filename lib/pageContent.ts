export interface ContentField {
  id: string;
  label: string;
  type: "text" | "textarea" | "image" | "url";
  value: string;
  helpText?: string;
}

export interface ContentSection {
  id: string;
  title: string;
  description?: string;
  fields: ContentField[];
}

export interface EditablePage {
  id: string;
  title: string;
  path: string;
  section: string;
  status: string;
  lastModified: string;
  meta: {
    title: string;
    description: string;
  };
  sections: ContentSection[];
}

export const defaultPageContents: Record<string, EditablePage> = {
  "/support-ccs": {
    id: "/support-ccs",
    title: "Support CCS & 2026 Gala",
    path: "/support-ccs",
    section: "Giving",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Support CCS | Citadel Christian School",
      description: "Investing in the Lives of our Future Leaders. Support Citadel Christian School through your gift of time, talent, and treasure.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        description: "The top hero banner for the Support CCS page.",
        fields: [
          { id: "banner_badge", label: "Badge Label", type: "text", value: "Partner With Us" },
          { id: "banner_title", label: "Banner Title", type: "text", value: "Support CCS" },
          { id: "banner_subtitle", label: "Banner Subtitle", type: "text", value: "Investing in the lives of our future leaders." },
          { id: "banner_image", label: "Banner Background Image", type: "image", value: "/images/Donations-1024x768-1.jpg" },
        ],
      },
      {
        id: "future_leaders",
        title: "Future Leaders Story & CTA",
        description: "Main message and call to action to donate to Citadel Christian School.",
        fields: [
          { id: "story_headline", label: "Main Headline", type: "text", value: "Investing in the Lives of our Future Leaders" },
          {
            id: "story_p1",
            label: "Paragraph 1 (Letter Intro)",
            type: "textarea",
            value: "As one who cares about investing in the future of our great nation and recognizes the need to support exceptional education for children, you have an opportunity to join us in the work we are doing at Citadel Christian School (CCS). At CCS we are busy inspiring students to learn and make a difference in the world for Christ—not just in the future, but now.",
          },
          {
            id: "story_p2",
            label: "Paragraph 2 (Mission & Giving)",
            type: "textarea",
            value: "Your gift of time, talent, and treasure is critical in allowing us to continue our mission to equip students for life by providing an exceptional education with a biblical worldview in a supportive, loving atmosphere.",
          },
          {
            id: "story_p3",
            label: "Paragraph 3 (Closing)",
            type: "textarea",
            value: "Thank you so much for partnering with Citadel Christian. We appreciate your support.",
          },
          { id: "story_image", label: "Student Learning Image", type: "image", value: "/images/support-future-leaders.png" },
          { id: "cta_text", label: "CTA Button Text", type: "text", value: "Click Here to Support CCS" },
          { id: "cta_url", label: "CTA Donation URL", type: "url", value: "https://givebutter.com/CitadelDonate" },
        ],
      },
      {
        id: "graduates_showcase",
        title: "Young Graduates Showcase",
        description: "Featured photo showcase of young graduates.",
        fields: [
          { id: "grads_image", label: "Graduates Photo", type: "image", value: "/images/CCS-Grads-scaled.jpg" },
        ],
      },
      {
        id: "gala_sponsors",
        title: "2026 Gala Sponsors Section",
        description: "Sponsors recognition header and descriptions.",
        fields: [
          { id: "sponsors_badge", label: "Badge Text", type: "text", value: "Community Partnerships" },
          { id: "sponsors_headline", label: "Section Headline", type: "text", value: "Thank you to our 2026 Gala Sponsors!" },
          {
            id: "sponsors_desc",
            label: "Introduction Paragraph",
            type: "textarea",
            value: "We are deeply grateful for our corporate partners and generous friends whose faithful support empowers Citadel Christian School to equip the next generation.",
          },
          { id: "plat_donor1", label: "Platinum Benefactor 1", type: "text", value: "Diane and Les Armstrong" },
          { id: "plat_donor2", label: "Platinum Benefactor 2", type: "text", value: "A Generous Friend of Citadel" },
          { id: "plat_logo1", label: "Platinum Corporate Logo 1", type: "image", value: "/logos/GalaSponsorLogo_BluebonnetAbstractTitle.png" },
          { id: "plat_logo2", label: "Platinum Corporate Logo 2", type: "image", value: "/logos/Blue-Bell-Halfmoon-Color-scaled.png" },
          { id: "gold_donor1", label: "Gold Benefactor 1", type: "text", value: "Julia Brewster" },
          { id: "gold_donor2", label: "Gold Benefactor 2", type: "text", value: "Paravel Ventures" },
          { id: "gold_logo1", label: "Gold Corporate Logo 1", type: "image", value: "/logos/GalaSponsorLogo-MeyerCarrington.png" },
          { id: "gold_credit1", label: "Gold Corporate Credit 1", type: "text", value: "Kenneth Meyer" },
          { id: "gold_logo2", label: "Gold Corporate Logo 2", type: "image", value: "/logos/Pencco.png" },
          { id: "gold_credit2", label: "Gold Corporate Credit 2", type: "text", value: "Ron and Aline Horne" },
          { id: "silver_logo", label: "Silver Corporate Logo", type: "image", value: "/logos/o3_logo_gold1.png" },
          { id: "silver_credit", label: "Silver Benefactor Credit", type: "text", value: "Jill & Kerr Taylor" },
        ],
      },
    ],
  },
  "/": {
    id: "/",
    title: "Home",
    path: "/",
    section: "Main",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Citadel Christian School | Classical • Biblical • Exceptional",
      description: "Citadel Christian School is an accredited, Classical Christian school delivering holistic, life-equipping education to PK-12th grade students through highly-qualified, caring teachers.",
    },
    sections: [
      {
        id: "hero_slider",
        title: "Header Slider (3 Rotating Slides)",
        description: "Homepage header hero carousel with 3 rotating slides. Each slide contains a Title, Subtext, and Background Image (no CTAs).",
        fields: [
          { id: "slide1_title", label: "Slide 1 Title", type: "text", value: "CLASSICAL" },
          { id: "slide1_subtitle", label: "Slide 1 Subtext", type: "textarea", value: "Cultivating wisdom and virtue in students at each developing stage." },
          { id: "slide1_image", label: "Slide 1 Background Image", type: "image", value: "/headers/header-classical.webp" },
          { id: "slide2_title", label: "Slide 2 Title", type: "text", value: "BIBLICAL" },
          { id: "slide2_subtitle", label: "Slide 2 Subtext", type: "textarea", value: "Discovering God's design throughout every subject." },
          { id: "slide2_image", label: "Slide 2 Background Image", type: "image", value: "/headers/header-biblical.webp" },
          { id: "slide3_title", label: "Slide 3 Title", type: "text", value: "EXCEPTIONAL" },
          { id: "slide3_subtitle", label: "Slide 3 Subtext", type: "textarea", value: "Motivating students to achieve their highest potential." },
          { id: "slide3_image", label: "Slide 3 Background Image", type: "image", value: "/headers/header-exceptional.webp" },
        ],
      },
      {
        id: "overview",
        title: "3-Column Overview Cards",
        fields: [
          { id: "card1_title", label: "Card 1 Title", type: "text", value: "Academics" },
          { id: "card1_image", label: "Card 1 Image", type: "image", value: "/images/pic01.png" },
          { id: "card2_title", label: "Card 2 Title", type: "text", value: "Admissions" },
          { id: "card2_image", label: "Card 2 Image", type: "image", value: "/images/pic02.png" },
          { id: "card3_title", label: "Card 3 Title", type: "text", value: "Campus Life" },
          { id: "card3_image", label: "Card 3 Image", type: "image", value: "/images/pic03.png" },
        ],
      },
      {
        id: "calendar",
        title: "School Calendar Download Section",
        fields: [
          { id: "cal_title", label: "Calendar Section Title", type: "text", value: "2026 - 2027 Academic Calendar" },
          { id: "cal_image", label: "Calendar Background Image", type: "image", value: "/images/calendar.jpg" },
          { id: "cal_button", label: "Download Button Label", type: "text", value: "Download Calendar" },
        ],
      },
    ],
  },
  "/about": {
    id: "/about",
    title: "About CCS",
    path: "/about",
    section: "About",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "About Us | Citadel Christian School",
      description: "Discover Citadel Christian School's mission, history, and commitment to cultivating wisdom and virtue in Brenham, TX.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Page Title", type: "text", value: "About Citadel Christian School" },
          { id: "subtitle", label: "Subtitle", type: "text", value: "Inspiring Students to Learn & Make a Difference for Christ." },
          { id: "image", label: "Banner Image", type: "image", value: "/images/About-Our-Story-1280x720-1.jpg" },
        ],
      },
      {
        id: "mission",
        title: "Mission & Purpose",
        fields: [
          { id: "mission_title", label: "Mission Headline", type: "text", value: "Our Mission & Biblical Vision" },
          { id: "mission_text", label: "Mission Statement", type: "textarea", value: "Equipping students for life by providing an exceptional education with a biblical worldview in a supportive, loving atmosphere." },
        ],
      },
    ],
  },
  "/about/classical": {
    id: "/about/classical",
    title: "Classical Education",
    path: "/about/classical",
    section: "About",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Classical Education | Citadel Christian School",
      description: "Learn about the Classical Trivium method (Grammar, Logic, and Rhetoric) at Citadel Christian School.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Page Title", type: "text", value: "Classical Education" },
          { id: "subtitle", label: "Subtitle", type: "text", value: "Cultivating wisdom, eloquence, and critical thinking through the Trivium." },
          { id: "image", label: "Banner Image", type: "image", value: "/images/About-Distinctives-Classical-1280x720-1.jpg" },
        ],
      },
    ],
  },
  "/about/biblical": {
    id: "/about/biblical",
    title: "Biblical Worldview",
    path: "/about/biblical",
    section: "About",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Biblical Worldview | Citadel Christian School",
      description: "Anchoring all learning in God's eternal Truth and biblical principles at Citadel Christian School.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Page Title", type: "text", value: "Biblical Worldview" },
          { id: "subtitle", label: "Subtitle", type: "text", value: "Teaching students to see and understand all reality through God's Word." },
          { id: "image", label: "Banner Image", type: "image", value: "/images/About-Distinctives-Biblical-1280-720.jpg" },
        ],
      },
    ],
  },
  "/about/exceptional": {
    id: "/about/exceptional",
    title: "Exceptional Academics",
    path: "/about/exceptional",
    section: "About",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Exceptional Academics | Citadel Christian School",
      description: "Rigorous standards and personalized mentorship for students from Kindergarten through 12th Grade.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Page Title", type: "text", value: "Exceptional Academics" },
          { id: "subtitle", label: "Subtitle", type: "text", value: "Nurturing intellectual mastery, character, and lifelong leadership." },
          { id: "image", label: "Banner Image", type: "image", value: "/images/About-Distinctives-Exceptional-1280-720.jpg" },
        ],
      },
    ],
  },
  "/university-model": {
    id: "/university-model",
    title: "University-Model",
    path: "/university-model",
    section: "Academics",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "University-Model® School | Citadel Christian School",
      description: "Combining the best attributes of traditional schooling with the strengths of home education.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Page Title", type: "text", value: "University-Model® Education" },
          { id: "subtitle", label: "Subtitle", type: "text", value: "Professional classroom instruction combined with parental involvement." },
          { id: "image", label: "Banner Image", type: "image", value: "/images/CCS-Grads-scaled.jpg" },
        ],
      },
      {
        id: "diagram",
        title: "Educational Model Diagram",
        fields: [
          { id: "diagram_image", label: "Model Architecture Diagram", type: "image", value: "/images/A-Unique-Educational-Model.png" },
        ],
      },
    ],
  },
  "/admissions": {
    id: "/admissions",
    title: "Admissions Overview",
    path: "/admissions",
    section: "Admissions",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Admissions | Citadel Christian School",
      description: "Join the Citadel family. Discover admissions requirements, tour scheduling, and enrollment steps.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Page Title", type: "text", value: "Admissions at Citadel" },
          { id: "subtitle", label: "Subtitle", type: "text", value: "We welcome prospective families seeking a Christ-centered educational partnership." },
          { id: "image", label: "Banner Image", type: "image", value: "/images/Longterm-kids-cropped-scaled.jpg" },
        ],
      },
    ],
  },
  "/admissions/schedule-a-tour": {
    id: "/admissions/schedule-a-tour",
    title: "Schedule a Tour",
    path: "/admissions/schedule-a-tour",
    section: "Admissions",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Schedule a Tour | Citadel Christian School",
      description: "Schedule your personal campus tour and see our classical classrooms in action.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Page Title", type: "text", value: "Schedule a Campus Tour" },
          { id: "subtitle", label: "Subtitle", type: "text", value: "Experience our classrooms, meet our teachers, and ask questions." },
          { id: "image", label: "Banner Image", type: "image", value: "/images/About-Our-Story-1280x720-1.jpg" },
        ],
      },
    ],
  },
  "/campus-life": {
    id: "/campus-life",
    title: "Campus Life",
    path: "/campus-life",
    section: "Student Life",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Campus Life | Citadel Christian School",
      description: "Athletics, fine arts, weekly chapel, spiritual formation, and community life at Citadel.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Page Title", type: "text", value: "Campus Life at Citadel" },
          { id: "subtitle", label: "Subtitle", type: "text", value: "Where faith, friendship, and student leadership flourish." },
          { id: "image", label: "Banner Image", type: "image", value: "/images/CCSLife-Intro-1280x720-A.jpg" },
        ],
      },
    ],
  },
  "/news-media": {
    id: "/news-media",
    title: "News & Media",
    path: "/news-media",
    section: "News",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "News & Media | Citadel Christian School",
      description: "Latest news, event highlights, press releases, and media from Citadel Christian School.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Page Title", type: "text", value: "News & Campus Media" },
          { id: "subtitle", label: "Subtitle", type: "text", value: "Stay connected with upcoming events and announcements." },
          { id: "image", label: "Banner Image", type: "image", value: "/images/CCSLife-Spirit-Week-1280x720-1.jpg" },
        ],
      },
    ],
  },
  "/contact-us": {
    id: "/contact-us",
    title: "Contact Us",
    path: "/contact-us",
    section: "Contact",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Contact Us | Citadel Christian School",
      description: "Get in touch with Citadel Christian School in Brenham, TX. Direct contact information, directions, and inquiry form.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Page Title", type: "text", value: "Contact Citadel Christian School" },
          { id: "subtitle", label: "Subtitle", type: "text", value: "We are here to answer your questions and help your family." },
          { id: "image", label: "Banner Image", type: "image", value: "/images/About-Our-Story-1280x720-1.jpg" },
          { id: "phone", label: "School Phone", type: "text", value: "(979) 830-1177" },
          { id: "email", label: "General Email", type: "text", value: "info@citadelchristian.org" },
          { id: "address", label: "Physical Address", type: "text", value: "1005 N Park St, Brenham, TX 77833" },
        ],
      },
    ],
  },
};

// Function to generate a baseline editable page for any page not explicitly configured
export function getEditablePage(path: string, title: string, section: string): EditablePage {
  if (defaultPageContents[path]) {
    return defaultPageContents[path];
  }

  return {
    id: path,
    title,
    path,
    section,
    status: "Published",
    lastModified: "Today",
    meta: {
      title: `${title} | Citadel Christian School`,
      description: `Official ${title} page for Citadel Christian School in Brenham, TX.`,
    },
    sections: [
      {
        id: "banner",
        title: "Page Header & Banner",
        fields: [
          { id: "title", label: "Page Title", type: "text", value: title },
          { id: "subtitle", label: "Subtitle", type: "text", value: "Equipping students for life with an exceptional Christian education." },
          { id: "image", label: "Banner Background Image", type: "image", value: "/images/About-Our-Story-1280x720-1.jpg" },
        ],
      },
      {
        id: "content",
        title: "Main Content",
        fields: [
          { id: "headline", label: "Main Headline", type: "text", value: title },
          { id: "body", label: "Main Body Text", type: "textarea", value: `Welcome to the ${title} page at Citadel Christian School. Here you can explore our programs, values, and community.` },
          { id: "feature_image", label: "Feature Photo", type: "image", value: "/images/CCS-Grads-scaled.jpg" },
        ],
      },
    ],
  };
}
