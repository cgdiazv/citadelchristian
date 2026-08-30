import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://citadelchristian.org";
  const currentDate = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about/biblical", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about/classical", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about/exceptional", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about/employment", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/academics", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/admissions", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/admissions/schedule-a-tour", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/admissions/steps-to-apply", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/admissions/can-i-afford", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/admissions/virtual-tour", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/admissions/free-resources", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/early-education-readiness", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/campus-life", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/news-media", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/support-ccs", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/university-model", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact-us", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
