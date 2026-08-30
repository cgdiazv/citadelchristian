export interface MediaItem {
  name: string;
  path: string;
  folder: "images" | "logos" | "headers" | "campus-life" | "files" | "brand";
  category: string;
  type: "image" | "document";
}

export const allMediaAssets: MediaItem[] = [
  // Brand / Root
  { name: "logo.webp", path: "/logo.webp", folder: "brand", category: "Logo & Brand", type: "image" },
  { name: "favicon.png", path: "/favicon.png", folder: "brand", category: "Emblem Icon", type: "image" },

  // Headers folder (Hero Sliders)
  { name: "header-classical.webp", path: "/headers/header-classical.webp", folder: "headers", category: "Hero Slider", type: "image" },
  { name: "header-biblical.webp", path: "/headers/header-biblical.webp", folder: "headers", category: "Hero Slider", type: "image" },
  { name: "header-exceptional.webp", path: "/headers/header-exceptional.webp", folder: "headers", category: "Hero Slider", type: "image" },

  // Logos folder (Sponsors & Accreditations)
  { name: "Blue-Bell-Halfmoon-Color-scaled.png", path: "/logos/Blue-Bell-Halfmoon-Color-scaled.png", folder: "logos", category: "Gala Platinum Sponsor", type: "image" },
  { name: "GalaSponsorLogo_BluebonnetAbstractTitle.png", path: "/logos/GalaSponsorLogo_BluebonnetAbstractTitle.png", folder: "logos", category: "Gala Platinum Sponsor", type: "image" },
  { name: "GalaSponsorLogo-MeyerCarrington.png", path: "/logos/GalaSponsorLogo-MeyerCarrington.png", folder: "logos", category: "Gala Gold Sponsor", type: "image" },
  { name: "Pencco.png", path: "/logos/Pencco.png", folder: "logos", category: "Gala Gold Sponsor", type: "image" },
  { name: "o3_logo_gold1.png", path: "/logos/o3_logo_gold1.png", folder: "logos", category: "Gala Silver Sponsor", type: "image" },
  { name: "GalaSponsorLogo_VeraBank.png", path: "/logos/GalaSponsorLogo_VeraBank.png", folder: "logos", category: "Gala Sponsor", type: "image" },
  { name: "Old-Three-Striving-for-the-Irreplaceable-2.png", path: "/logos/Old-Three-Striving-for-the-Irreplaceable-2.png", folder: "logos", category: "Gala Sponsor", type: "image" },
  { name: "accs.png", path: "/logos/accs.png", folder: "logos", category: "Accreditation", type: "image" },
  { name: "acsi.jpg", path: "/logos/acsi.jpg", folder: "logos", category: "Accreditation", type: "image" },
  { name: "amazon-png-logo.png", path: "/logos/amazon-png-logo.png", folder: "logos", category: "Giving Wishlist", type: "image" },
  { name: "logo-amazon-smile.png", path: "/logos/logo-amazon-smile.png", folder: "logos", category: "Giving Wishlist", type: "image" },
  { name: "WashCoChamber_Logo-Fall_2018.jpg", path: "/logos/WashCoChamber_Logo-Fall_2018.jpg", folder: "logos", category: "Community Partner", type: "image" },

  // Campus-Life folder (3x3 Grid Photos)
  { name: "campus01.webp", path: "/campus-life/campus01.webp", folder: "campus-life", category: "Campus Photo Gallery", type: "image" },
  { name: "campus02.webp", path: "/campus-life/campus02.webp", folder: "campus-life", category: "Campus Photo Gallery", type: "image" },
  { name: "campus03.webp", path: "/campus-life/campus03.webp", folder: "campus-life", category: "Campus Photo Gallery", type: "image" },
  { name: "campus04.webp", path: "/campus-life/campus04.webp", folder: "campus-life", category: "Campus Photo Gallery", type: "image" },
  { name: "campus05.webp", path: "/campus-life/campus05.webp", folder: "campus-life", category: "Campus Photo Gallery", type: "image" },
  { name: "campus06.webp", path: "/campus-life/campus06.webp", folder: "campus-life", category: "Campus Photo Gallery", type: "image" },
  { name: "campus07.webp", path: "/campus-life/campus07.webp", folder: "campus-life", category: "Campus Photo Gallery", type: "image" },
  { name: "campus08.webp", path: "/campus-life/campus08.webp", folder: "campus-life", category: "Campus Photo Gallery", type: "image" },
  { name: "campus09.webp", path: "/campus-life/campus09.webp", folder: "campus-life", category: "Campus Photo Gallery", type: "image" },

  // Images folder
  { name: "CCS-Grads-scaled.jpg", path: "/images/CCS-Grads-scaled.jpg", folder: "images", category: "Graduates & Events", type: "image" },
  { name: "support-future-leaders.png", path: "/images/support-future-leaders.png", folder: "images", category: "Support CCS", type: "image" },
  { name: "Donations-1024x768-1.jpg", path: "/images/Donations-1024x768-1.jpg", folder: "images", category: "Support CCS", type: "image" },
  { name: "calendar.jpg", path: "/images/calendar.jpg", folder: "images", category: "Academic Calendar", type: "image" },
  { name: "A-Unique-Educational-Model.png", path: "/images/A-Unique-Educational-Model.png", folder: "images", category: "University-Model", type: "image" },
  { name: "About-Our-Story-1280x720-1.jpg", path: "/images/About-Our-Story-1280x720-1.jpg", folder: "images", category: "About Us", type: "image" },
  { name: "About-Distinctives-Classical-1280x720-1.jpg", path: "/images/About-Distinctives-Classical-1280x720-1.jpg", folder: "images", category: "Classical Distinctive", type: "image" },
  { name: "About-Distinctives-Biblical-1280-720.jpg", path: "/images/About-Distinctives-Biblical-1280-720.jpg", folder: "images", category: "Biblical Distinctive", type: "image" },
  { name: "About-Distinctives-Exceptional-1280-720.jpg", path: "/images/About-Distinctives-Exceptional-1280-720.jpg", folder: "images", category: "Exceptional Distinctive", type: "image" },
  { name: "About-Mission-Values-640x360-A.jpg", path: "/images/About-Mission-Values-640x360-A.jpg", folder: "images", category: "About Us", type: "image" },
  { name: "Academics-Preschool-1024x768-1.jpg", path: "/images/Academics-Preschool-1024x768-1.jpg", folder: "images", category: "Academics", type: "image" },
  { name: "Academics-Elementary-1024x768-1.jpg", path: "/images/Academics-Elementary-1024x768-1.jpg", folder: "images", category: "Academics", type: "image" },
  { name: "Academics-Junior-1024x768-1.jpg", path: "/images/Academics-Junior-1024x768-1.jpg", folder: "images", category: "Academics", type: "image" },
  { name: "Academics-HighSchool-1024x768-1.jpg", path: "/images/Academics-HighSchool-1024x768-1.jpg", folder: "images", category: "Academics", type: "image" },
  { name: "Admission-AdmissionProcess.jpg", path: "/images/Admission-AdmissionProcess.jpg", folder: "images", category: "Admissions", type: "image" },
  { name: "Admissions-FAQ.jpg", path: "/images/Admissions-FAQ.jpg", folder: "images", category: "Admissions", type: "image" },
  { name: "Longterm-kids-cropped-scaled.jpg", path: "/images/Longterm-kids-cropped-scaled.jpg", folder: "images", category: "Admissions", type: "image" },
  { name: "CCSLife-Intro-1280x720-A.jpg", path: "/images/CCSLife-Intro-1280x720-A.jpg", folder: "images", category: "Campus Life", type: "image" },
  { name: "CCSLife-Intro-1280x720-B.jpg", path: "/images/CCSLife-Intro-1280x720-B.jpg", folder: "images", category: "Campus Life", type: "image" },
  { name: "CCSLife-Athletics-1024x768-1.jpg", path: "/images/CCSLife-Athletics-1024x768-1.jpg", folder: "images", category: "Campus Life Athletics", type: "image" },
  { name: "CCSLife-Chapel-1024x768-1.jpg", path: "/images/CCSLife-Chapel-1024x768-1.jpg", folder: "images", category: "Campus Life Chapel", type: "image" },
  { name: "CCSLife-Culture-1024x768-1.jpg", path: "/images/CCSLife-Culture-1024x768-1.jpg", folder: "images", category: "Campus Life Culture", type: "image" },
  { name: "CCSLife-Fine-Arts-1-1024x768-1.jpg", path: "/images/CCSLife-Fine-Arts-1-1024x768-1.jpg", folder: "images", category: "Campus Life Fine Arts", type: "image" },
  { name: "CCSLife-Fine-Arts-2-1024x768-1.jpg", path: "/images/CCSLife-Fine-Arts-2-1024x768-1.jpg", folder: "images", category: "Campus Life Fine Arts", type: "image" },
  { name: "CCSLife-Fine-Arts-3-1024x768-1.jpg", path: "/images/CCSLife-Fine-Arts-3-1024x768-1.jpg", folder: "images", category: "Campus Life Fine Arts", type: "image" },
  { name: "CCSLife-Fine-Arts-4-1024x768-1.jpg", path: "/images/CCSLife-Fine-Arts-4-1024x768-1.jpg", folder: "images", category: "Campus Life Fine Arts", type: "image" },
  { name: "CCSLife-Fine-Arts-5-1024x768-1.jpg", path: "/images/CCSLife-Fine-Arts-5-1024x768-1.jpg", folder: "images", category: "Campus Life Fine Arts", type: "image" },
  { name: "CCSLife-Fine-Arts-6-1024x768-1.jpg", path: "/images/CCSLife-Fine-Arts-6-1024x768-1.jpg", folder: "images", category: "Campus Life Fine Arts", type: "image" },
  { name: "CCSLife-Scripture-Memorization-1024x768-1.jpg", path: "/images/CCSLife-Scripture-Memorization-1024x768-1.jpg", folder: "images", category: "Campus Life", type: "image" },
  { name: "CCSLife-Spirit-Week-1280x720-1.jpg", path: "/images/CCSLife-Spirit-Week-1280x720-1.jpg", folder: "images", category: "Campus Life Spirit Week", type: "image" },
  { name: "CCSLife-Spirit-Week-2-819x1024-1.jpg", path: "/images/CCSLife-Spirit-Week-2-819x1024-1.jpg", folder: "images", category: "Campus Life Spirit Week", type: "image" },
  { name: "CCSLife-Spirit-Week-3-819x1024-1.jpg", path: "/images/CCSLife-Spirit-Week-3-819x1024-1.jpg", folder: "images", category: "Campus Life Spirit Week", type: "image" },
  { name: "CCSLife-Spirit-Week-4-819x1024-1.jpg", path: "/images/CCSLife-Spirit-Week-4-819x1024-1.jpg", folder: "images", category: "Campus Life Spirit Week", type: "image" },
  { name: "CCSLife-Spiritual-Development-1024x768-1.jpg", path: "/images/CCSLife-Spiritual-Development-1024x768-1.jpg", folder: "images", category: "Campus Life", type: "image" },
  { name: "Citadel-Combined-Mockup.webp", path: "/images/Citadel-Combined-Mockup.webp", folder: "images", category: "Readiness Guide", type: "image" },
  { name: "Citadel-Kinder-Mockup-1.webp", path: "/images/Citadel-Kinder-Mockup-1.webp", folder: "images", category: "Readiness Guide", type: "image" },
  { name: "Citadel_-LP-Banners.webp", path: "/images/Citadel_-LP-Banners.webp", folder: "images", category: "Landing Banners", type: "image" },
  { name: "Home-Classical-1280x720-A.jpg", path: "/images/Home-Classical-1280x720-A.jpg", folder: "images", category: "Home Pillars", type: "image" },
  { name: "Home-Biblical-1280x720-A.jpg", path: "/images/Home-Biblical-1280x720-A.jpg", folder: "images", category: "Home Pillars", type: "image" },
  { name: "Home-Exceptional-1280x720-A.jpg", path: "/images/Home-Exceptional-1280x720-A.jpg", folder: "images", category: "Home Pillars", type: "image" },
  { name: "Kinder-teacher-scaled.jpg", path: "/images/Kinder-teacher-scaled.jpg", folder: "images", category: "Academics", type: "image" },
  { name: "1st2nd-on-playground-scaled.jpg", path: "/images/1st2nd-on-playground-scaled.jpg", folder: "images", category: "Student Life", type: "image" },
  { name: "3rd-4th-with-skeleton-edited-1.jpg", path: "/images/3rd-4th-with-skeleton-edited-1.jpg", folder: "images", category: "Academics", type: "image" },
  { name: "5D4_5565-ZF-9463-28749-1-012-scaled.jpg", path: "/images/5D4_5565-ZF-9463-28749-1-012-scaled.jpg", folder: "images", category: "Classroom", type: "image" },
  { name: "pic01.png", path: "/images/pic01.png", folder: "images", category: "Home Cards", type: "image" },
  { name: "pic02.png", path: "/images/pic02.png", folder: "images", category: "Home Cards", type: "image" },
  { name: "pic03.png", path: "/images/pic03.png", folder: "images", category: "Home Cards", type: "image" },
  { name: "Thank-you-scaled.jpg", path: "/images/Thank-you-scaled.jpg", folder: "images", category: "General", type: "image" },
  { name: "At-the-Cross1.jpg", path: "/images/At-the-Cross1.jpg", folder: "images", category: "General", type: "image" },
  { name: "BVG-Giving.jpg", path: "/images/BVG-Giving.jpg", folder: "images", category: "Giving", type: "image" },
  { name: "Engaging-Anatomy.jpg", path: "/images/Engaging-Anatomy.jpg", folder: "images", category: "Classroom", type: "image" },
  { name: "Fun-Day.jpg", path: "/images/Fun-Day.jpg", folder: "images", category: "Student Life", type: "image" },
  { name: "Happily-working-1.jpg", path: "/images/Happily-working-1.jpg", folder: "images", category: "Classroom", type: "image" },
  { name: "qr-code.png", path: "/images/qr-code.png", folder: "images", category: "Graphics", type: "image" },
  { name: "Schedule-a-Tour.png", path: "/images/Schedule-a-Tour.png", folder: "images", category: "Admissions", type: "image" },
  { name: "New-Student-Discount-Flyer-1.png", path: "/images/New-Student-Discount-Flyer-1.png", folder: "images", category: "Flyers", type: "image" },
  { name: "Social-Citadel-Early-Education-Readiness-1.webp", path: "/images/Social-Citadel-Early-Education-Readiness-1.webp", folder: "images", category: "Social Graphics", type: "image" },
  { name: "Social-Citadel-Kinder-Checklist-2.webp", path: "/images/Social-Citadel-Kinder-Checklist-2.webp", folder: "images", category: "Social Graphics", type: "image" },

  // Files folder (PDFs & Documents)
  { name: "2026-2027-School-Calendar.pdf", path: "/files/2026-2027-School-Calendar.pdf", folder: "files", category: "Academic Calendar", type: "document" },
  { name: "Fee-and-Tuition-Schedule-2026-2027.pdf", path: "/files/Fee-and-Tuition-Schedule-2026-2027.pdf", folder: "files", category: "Tuition & Fees", type: "document" },
  { name: "Parent-Student-Handbook-2026-27.pdf", path: "/files/Parent-Student-Handbook-2026-27.pdf", folder: "files", category: "Handbooks", type: "document" },
  { name: "Parent-Student-Handbook-2025-2026.pdf", path: "/files/Parent-Student-Handbook-2025-2026.pdf", folder: "files", category: "Handbooks", type: "document" },
  { name: "Dress-Code-26-27.pdf", path: "/files/Dress-Code-26-27.pdf", folder: "files", category: "Guidelines & Dress Code", type: "document" },
  { name: "admissions_process.pdf", path: "/files/admissions_process.pdf", folder: "files", category: "Admissions", type: "document" },
  { name: "2026-2027-Upper-School-Supply-Lists.pdf", path: "/files/2026-2027-Upper-School-Supply-Lists.pdf", folder: "files", category: "Supply Lists", type: "document" },
  { name: "26-27-Schoolwide-Scripture-Memorization-Passages.pdf", path: "/files/26-27-Schoolwide-Scripture-Memorization-Passages.pdf", folder: "files", category: "Scripture & Academics", type: "document" },
  { name: "CCS-Hymns-2026-2027.pdf", path: "/files/CCS-Hymns-2026-2027.pdf", folder: "files", category: "Music & Chapel", type: "document" },
  { name: "Athletic-Handbook-25-26.pdf", path: "/files/Athletic-Handbook-25-26.pdf", folder: "files", category: "Athletics", type: "document" },
  { name: "Athletics-Philosophy-2025.pdf", path: "/files/Athletics-Philosophy-2025.pdf", folder: "files", category: "Athletics", type: "document" },
  { name: "CCS-Physical-Examination-Form.pdf", path: "/files/CCS-Physical-Examination-Form.pdf", folder: "files", category: "Athletics & Medical", type: "document" },
  { name: "CCS-Athlete-Information-Form.pdf", path: "/files/CCS-Athlete-Information-Form.pdf", folder: "files", category: "Athletics", type: "document" },
  { name: "Application-Teacher-Form-1.pdf", path: "/files/Application-Teacher-Form-1.pdf", folder: "files", category: "Employment Forms", type: "document" },
  { name: "Classified-Personnel-Application.pdf", path: "/files/Classified-Personnel-Application.pdf", folder: "files", category: "Employment Forms", type: "document" },
  { name: "Job-Description-Teacher.pdf", path: "/files/Job-Description-Teacher.pdf", folder: "files", category: "Employment", type: "document" },
  { name: "Principal-at-CCS.pdf", path: "/files/Principal-at-CCS.pdf", folder: "files", category: "Employment", type: "document" },
  { name: "Development-Director-Job-Description-1.pdf", path: "/files/Development-Director-Job-Description-1.pdf", folder: "files", category: "Employment", type: "document" },
  { name: "Business-Manager-1.pdf", path: "/files/Business-Manager-1.pdf", folder: "files", category: "Employment", type: "document" },
  { name: "VolunteerDriverFormCCS.pdf", path: "/files/VolunteerDriverFormCCS.pdf", folder: "files", category: "Volunteer & Parent Forms", type: "document" },
  { name: "Parent-Association-2026-27.pdf", path: "/files/Parent-Association-2026-27.pdf", folder: "files", category: "Parent Association", type: "document" },
  { name: "Why-Classical-Education-Matters-More-in-the-Age-of-AI.pdf", path: "/files/Why-Classical-Education-Matters-More-in-the-Age-of-AI.pdf", folder: "files", category: "Articles & Resources", type: "document" },
  { name: "How-Classical-Education-Forms-Character-Not-Just-Knowledge-_-CCS.pdf", path: "/files/How-Classical-Education-Forms-Character-Not-Just-Knowledge-_-CCS.pdf", folder: "files", category: "Articles & Resources", type: "document" },
  { name: "What-the-University-Model-Offers-_-CCS-Article.pdf", path: "/files/What-the-University-Model-Offers-_-CCS-Article.pdf", folder: "files", category: "Articles & Resources", type: "document" },
  { name: "CCS-Blog-_-Why-We-Study-Latin.pdf", path: "/files/CCS-Blog-_-Why-We-Study-Latin.pdf", folder: "files", category: "Articles & Resources", type: "document" },
  { name: "Rising-1st-Grade-Summer-Plan.pdf", path: "/files/Rising-1st-Grade-Summer-Plan.pdf", folder: "files", category: "Summer Reading", type: "document" },
  { name: "Rising-2nd-Grade-Summer-Reading.pdf", path: "/files/Rising-2nd-Grade-Summer-Reading.pdf", folder: "files", category: "Summer Reading", type: "document" },
  { name: "Rising-3rd-Grade-Summer-Reading.pdf", path: "/files/Rising-3rd-Grade-Summer-Reading.pdf", folder: "files", category: "Summer Reading", type: "document" },
  { name: "Rising-4th-Grade-Summer-Reading.pdf", path: "/files/Rising-4th-Grade-Summer-Reading.pdf", folder: "files", category: "Summer Reading", type: "document" },
  { name: "Rising-5th-and-6th-Grade-Summer-Reading-Even-Year.pdf", path: "/files/Rising-5th-and-6th-Grade-Summer-Reading-Even-Year.pdf", folder: "files", category: "Summer Reading", type: "document" },
  { name: "Rising-7th-and-8th-Grade-Summer-Reading-Even-Year.pdf", path: "/files/Rising-7th-and-8th-Grade-Summer-Reading-Even-Year.pdf", folder: "files", category: "Summer Reading", type: "document" },
  { name: "Rising-9th-Summer-Reading-Suggestions-and-Required.pdf", path: "/files/Rising-9th-Summer-Reading-Suggestions-and-Required.pdf", folder: "files", category: "Summer Reading", type: "document" },
  { name: "Rising-10th-Grade-Summer-Reading.pdf", path: "/files/Rising-10th-Grade-Summer-Reading.pdf", folder: "files", category: "Summer Reading", type: "document" },
  { name: "Rising-11th-Grade-Summer-Reading.pdf", path: "/files/Rising-11th-Grade-Summer-Reading.pdf", folder: "files", category: "Summer Reading", type: "document" },
  { name: "Rising-12th-Grade-Summer-Reading.pdf", path: "/files/Rising-12th-Grade-Summer-Reading.pdf", folder: "files", category: "Summer Reading", type: "document" },
  { name: "Main-PDF-for-Summer-Reading-and-Suggestion-2024.pdf", path: "/files/Main-PDF-for-Summer-Reading-and-Suggestion-2024.pdf", folder: "files", category: "Summer Reading", type: "document" },
];

export const mediaFolders = [
  { id: "all", label: "All Folders", icon: "Folder" },
  { id: "images", label: "/images", icon: "ImageIcon", count: allMediaAssets.filter((m) => m.folder === "images").length },
  { id: "logos", label: "/logos", icon: "Shield", count: allMediaAssets.filter((m) => m.folder === "logos").length },
  { id: "headers", label: "/headers", icon: "Layout", count: allMediaAssets.filter((m) => m.folder === "headers").length },
  { id: "campus-life", label: "/campus-life", icon: "Camera", count: allMediaAssets.filter((m) => m.folder === "campus-life").length },
  { id: "files", label: "/files (PDFs)", icon: "FileText", count: allMediaAssets.filter((m) => m.folder === "files").length },
  { id: "brand", label: "Brand Assets", icon: "Sparkles", count: allMediaAssets.filter((m) => m.folder === "brand").length },
];

export function getCustomMediaAssets(): MediaItem[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem("ccs_custom_media_assets");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function saveCustomMediaAsset(item: MediaItem): MediaItem[] {
  if (typeof window === "undefined") return [item];
  try {
    const current = getCustomMediaAssets();
    const filtered = current.filter((m) => m.path !== item.path);
    const updated = [item, ...filtered];
    localStorage.setItem("ccs_custom_media_assets", JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Failed to save custom media asset:", err);
    return [item];
  }
}

