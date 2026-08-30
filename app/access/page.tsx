"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  KeyRound,
  HelpCircle,
  LogOut,
  ExternalLink,
  Users,
  HeartHandshake,
  FileText,
  ImageIcon,
  LayoutDashboard,
  Globe,
  Search,
  Menu,
  X,
  ChevronRight,
  Save,
  ArrowLeft,
  Check,
  CheckCircle2,
  RefreshCw,
  FolderOpen,
  Edit3,
  Folder,
  Copy,
  Download,
  FileCode,
  Upload,
  UploadCloud,
  Loader2,
  Sparkles,
  Cloud,
  Plus,
  Trash2,
  Info,
} from "lucide-react";
import {
  EditablePage,
  getEditablePage,
} from "@/lib/pageContent";
import {
  allMediaAssets,
  mediaFolders,
  MediaItem,
  getCustomMediaAssets,
  saveCustomMediaAsset,
} from "@/lib/mediaAssets";

// List of all Citadel Christian School website pages
const websitePages = [
  { title: "Home", path: "/", section: "Main", status: "Published" },
  { title: "Support CCS & 2026 Gala", path: "/support-ccs", section: "Giving", status: "Published" },
  { title: "About CCS", path: "/about", section: "About", status: "Published" },
  { title: "Classical Education", path: "/about/classical", section: "About", status: "Published" },
  { title: "Biblical Worldview", path: "/about/biblical", section: "About", status: "Published" },
  { title: "Exceptional Academics", path: "/about/exceptional", section: "About", status: "Published" },
  { title: "Employment", path: "/about/employment", section: "About", status: "Published" },
  { title: "Academics", path: "/academics", section: "Academics", status: "Published" },
  { title: "University-Model", path: "/university-model", section: "Academics", status: "Published" },
  { title: "Admissions Overview", path: "/admissions", section: "Admissions", status: "Published" },
  { title: "Schedule a Tour", path: "/admissions/schedule-a-tour", section: "Admissions", status: "Published" },
  { title: "Steps to Apply", path: "/admissions/steps-to-apply", section: "Admissions", status: "Published" },
  { title: "Can I Afford This?", path: "/admissions/can-i-afford", section: "Admissions", status: "Published" },
  { title: "Virtual Tour", path: "/admissions/virtual-tour", section: "Admissions", status: "Published" },
  { title: "Free Resources", path: "/admissions/free-resources", section: "Admissions", status: "Published" },
  { title: "Early Education Readiness", path: "/early-education-readiness", section: "Admissions", status: "Published" },
  { title: "Campus Life", path: "/campus-life", section: "Student Life", status: "Published" },
  { title: "News & Media", path: "/news-media", section: "News", status: "Published" },
  { title: "Contact Us", path: "/contact-us", section: "Contact", status: "Published" },
];

export default function AdminAccessPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"dashboard" | "pages" | "media">("media");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string>("all");
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  // Custom Uploaded Media & Cloud State
  const [customMedia, setCustomMedia] = useState<MediaItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedUploadFolder, setSelectedUploadFolder] = useState<
    "images" | "logos" | "headers" | "campus-life" | "files" | "brand"
  >("images");
  const [selectedUploadCategory, setSelectedUploadCategory] = useState("Uploaded Asset");
  const [fieldUploadingId, setFieldUploadingId] = useState<string | null>(null);

  // Selected Page for Content Editing
  const [editingPage, setEditingPage] = useState<EditablePage | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [mediaPickerTargetField, setMediaPickerTargetField] = useState<{
    sectionIndex: number;
    fieldIndex: number;
  } | null>(null);
  const [mediaPickerFolder, setMediaPickerFolder] = useState<string>("all");

  // Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Check existing session & load custom media
  useEffect(() => {
    const session = sessionStorage.getItem("ccs_admin_authenticated");
    const localSession = localStorage.getItem("ccs_admin_authenticated");
    if (session === "true" || localSession === "true") {
      setIsAuthenticated(true);
    }
    setCustomMedia(getCustomMediaAssets());
  }, []);

  // Upload handler for files to Vercel Blob / Cloud Storage
  const handleUploadFile = async (
    file: File,
    folder: "images" | "logos" | "headers" | "campus-life" | "files" | "brand" = "images",
    category = "Uploaded Asset"
  ): Promise<string | null> => {
    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(null);
    setUploadProgress(`Uploading ${file.name}...`);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", folder);
      formData.append("category", category);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to upload file to cloud storage.");
      }

      const newItem: MediaItem = {
        name: data.name,
        path: data.url,
        folder: data.folder,
        category: data.category,
        type: data.type,
      };

      const updated = saveCustomMediaAsset(newItem);
      setCustomMedia(updated);
      setUploadSuccess(`Successfully uploaded ${data.name}!`);
      setTimeout(() => setUploadSuccess(null), 4000);
      return data.url;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to upload file.";
      setUploadError(msg);
      return null;
    } finally {
      setIsUploading(false);
      setUploadProgress(null);
    }
  };

  // Open Page Content Editor for a given page
  const handleOpenPageEditor = (pageInfo: { path: string; title: string; section: string }) => {
    const saved = localStorage.getItem(`ccs_page_content_${pageInfo.path}`);
    if (saved) {
      try {
        setEditingPage(JSON.parse(saved));
      } catch {
        setEditingPage(getEditablePage(pageInfo.path, pageInfo.title, pageInfo.section));
      }
    } else {
      setEditingPage(getEditablePage(pageInfo.path, pageInfo.title, pageInfo.section));
    }
    setSaveSuccess(false);
  };

  // Update field in editor
  const handleFieldChange = (sectionIndex: number, fieldIndex: number, newValue: string) => {
    if (!editingPage) return;

    const updated = { ...editingPage };
    updated.sections = [...updated.sections];
    updated.sections[sectionIndex] = { ...updated.sections[sectionIndex] };
    updated.sections[sectionIndex].fields = [...updated.sections[sectionIndex].fields];
    updated.sections[sectionIndex].fields[fieldIndex] = {
      ...updated.sections[sectionIndex].fields[fieldIndex],
      value: newValue,
    };

    setEditingPage(updated);
    setSaveSuccess(false);
  };

  // Save changes
  const handleSavePageContent = () => {
    if (!editingPage) return;

    localStorage.setItem(`ccs_page_content_${editingPage.path}`, JSON.stringify(editingPage));
    setSaveSuccess(true);

    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  // Reset to default content
  const handleResetToDefault = () => {
    if (!editingPage) return;
    if (confirm("Reset all fields for this page back to original defaults?")) {
      localStorage.removeItem(`ccs_page_content_${editingPage.path}`);
      setEditingPage(getEditablePage(editingPage.path, editingPage.title, editingPage.section));
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }
  };

  // Copy path helper
  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password;

    if (!cleanEmail || !cleanPassword) {
      setErrorMessage("Please enter both your school email and password.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      if (
        cleanEmail === "info@citadelchristian.org" &&
        cleanPassword === "citadel2026!"
      ) {
        setIsAuthenticated(true);
        if (rememberMe) {
          localStorage.setItem("ccs_admin_authenticated", "true");
        }
        sessionStorage.setItem("ccs_admin_authenticated", "true");
      } else {
        setErrorMessage(
          "Access denied: Invalid credentials. Only authorized Citadel Christian School administrators may access this portal."
        );
      }
    }, 600);
  };

  const handleSignOut = () => {
    sessionStorage.removeItem("ccs_admin_authenticated");
    localStorage.removeItem("ccs_admin_authenticated");
    setIsAuthenticated(false);
    setEditingPage(null);
    setEmail("");
    setPassword("");
    setErrorMessage(null);
  };

  // Filtered pages for the Pages tab
  const filteredPages = websitePages.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.section.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Combined media assets (static + cloud uploaded)
  const allCombinedMedia = [...customMedia, ...allMediaAssets];

  // Dynamic media folder counts including uploaded files
  const dynamicMediaFolders = [
    { id: "all", label: "All Folders", icon: "Folder", count: allCombinedMedia.length },
    { id: "images", label: "/images", icon: "ImageIcon", count: allCombinedMedia.filter((m) => m.folder === "images").length },
    { id: "logos", label: "/logos", icon: "Shield", count: allCombinedMedia.filter((m) => m.folder === "logos").length },
    { id: "headers", label: "/headers", icon: "Layout", count: allCombinedMedia.filter((m) => m.folder === "headers").length },
    { id: "campus-life", label: "/campus-life", icon: "Camera", count: allCombinedMedia.filter((m) => m.folder === "campus-life").length },
    { id: "files", label: "/files (PDFs)", icon: "FileText", count: allCombinedMedia.filter((m) => m.folder === "files").length },
    { id: "brand", label: "Brand Assets", icon: "Sparkles", count: allCombinedMedia.filter((m) => m.folder === "brand").length },
  ];

  // Filtered media by selected folder and search query
  const filteredMedia = allCombinedMedia.filter((m) => {
    const matchesFolder = selectedFolder === "all" || m.folder === selectedFolder;
    const matchesQuery =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.path.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFolder && matchesQuery;
  });

  // Filtered media for the inline picker
  const pickerMedia = allCombinedMedia.filter((m) => {
    const isImage = m.type === "image";
    const matchesFolder = mediaPickerFolder === "all" || m.folder === mediaPickerFolder;
    return isImage && matchesFolder;
  });

  // Authenticated Administration Dashboard with Sidebar
  if (isAuthenticated) {
    return (
      <div className="w-full min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
        {/* Mobile Header */}
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 p-1.5 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/favicon.png"
                  alt="Citadel Christian School"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="font-bold text-white text-sm">Citadel Admin</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Sidebar */}
        <aside
          className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between transition-transform duration-200 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="p-5 space-y-6">
            {/* Branding */}
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-2 flex items-center justify-center flex-shrink-0 border border-white/10 shadow-sm">
                <div className="relative w-full h-full">
                  <Image
                    src="/favicon.png"
                    alt="Citadel Christian School"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="overflow-hidden">
                <h1 className="font-extrabold text-white text-sm tracking-tight truncate">
                  Citadel Christian
                </h1>
                <span className="text-[11px] text-purple-300 font-medium block">
                  Admin Portal
                </span>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <nav className="space-y-1.5">
              <button
                onClick={() => {
                  setActiveTab("dashboard");
                  setEditingPage(null);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === "dashboard" && !editingPage
                    ? "bg-[#581076] text-white shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("pages");
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === "pages"
                    ? "bg-[#581076] text-white shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Pages</span>
                <span className="ml-auto bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  19
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("media");
                  setEditingPage(null);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === "media"
                    ? "bg-[#581076] text-white shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Media</span>
                <span className="ml-auto bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  {allMediaAssets.length}
                </span>
              </button>

              <div className="pt-3 pb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3.5">
                  External Portals
                </span>
              </div>

              <a
                href="https://givebutter.com/CitadelDonate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-amber-300 hover:bg-slate-800/80 transition"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Givebutter</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
              </a>

              <Link
                href="/"
                target="_blank"
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-blue-300 hover:bg-slate-800/80 transition"
              >
                <Globe className="w-4 h-4" />
                <span>Live Website</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
              </Link>
            </nav>
          </div>

          {/* User Profile & Sign Out Footer */}
          <div className="p-4 border-t border-slate-800 bg-slate-900/60">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#581076] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                CC
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-white truncate">Citadel Admin</p>
                <p className="text-[11px] text-slate-400 truncate">info@citadelchristian.org</p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-red-950/40 hover:text-red-300 text-slate-300 text-xs font-semibold border border-slate-700 transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-slate-950 p-6 sm:p-8 md:p-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* VIEW 1: INDIVIDUAL PAGE CONTENT EDITOR */}
            {activeTab === "pages" && editingPage && (
              <div className="space-y-6 animate-in fade-in">
                {/* Editor Header Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="space-y-1">
                    <button
                      onClick={() => setEditingPage(null)}
                      className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 font-semibold mb-2 cursor-pointer transition"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Pages List</span>
                    </button>
                    <div className="flex items-center gap-3">
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Edit {editingPage.title}
                      </h1>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                        {editingPage.path}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Manage and update live text copy, headlines, and image assets for this page.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <button
                      onClick={handleResetToDefault}
                      type="button"
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-800 transition cursor-pointer flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>

                    <Link
                      href={editingPage.path}
                      target="_blank"
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-800 transition flex items-center gap-1.5"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Preview Page</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>

                    <button
                      onClick={handleSavePageContent}
                      type="button"
                      className="px-5 py-2 rounded-xl bg-[#581076] hover:bg-[#470a60] text-white text-xs font-bold shadow-lg shadow-purple-900/30 transition flex items-center gap-2 cursor-pointer"
                    >
                      {saveSuccess ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-300" />
                          <span>Saved!</span>
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4" />
                          <span>Save Changes</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Save Confirmation Banner */}
                {saveSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>
                      <strong>Changes Saved!</strong> All text and image updates for <strong>{editingPage.title}</strong> have been saved.
                    </span>
                  </div>
                )}

                {/* Editable Sections List */}
                <div className="space-y-6">
                  {editingPage.sections.map((section, sIdx) => (
                    <div
                      key={section.id}
                      className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-md"
                    >
                      <div className="border-b border-slate-800/80 pb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                          Section {sIdx + 1}
                        </span>
                        <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                          {section.title}
                        </h2>
                        {section.description && (
                          <p className="text-xs text-slate-400 mt-1 font-light">
                            {section.description}
                          </p>
                        )}
                      </div>

                      {/* Section Fields */}
                      <div className="space-y-5">
                        {section.fields.map((field, fIdx) => (
                          <div key={field.id} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
                                <span>{field.label}</span>
                                <span className="text-[10px] font-mono text-slate-500">
                                  ({field.id})
                                </span>
                              </label>
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-800 px-2 py-0.5 rounded">
                                {field.type}
                              </span>
                            </div>

                            {/* FIELD TYPE: TEXTAREA */}
                            {field.type === "textarea" && (
                              <textarea
                                rows={4}
                                value={field.value}
                                onChange={(e) =>
                                  handleFieldChange(sIdx, fIdx, e.target.value)
                                }
                                className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition leading-relaxed"
                              />
                            )}

                            {/* FIELD TYPE: TEXT & URL */}
                            {(field.type === "text" || field.type === "url") && (
                              <input
                                type={field.type === "url" ? "url" : "text"}
                                value={field.value}
                                onChange={(e) =>
                                  handleFieldChange(sIdx, fIdx, e.target.value)
                                }
                                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition"
                              />
                            )}

                            {/* FIELD TYPE: IMAGE */}
                            {field.type === "image" && (
                              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                  {/* Live Thumbnail */}
                                  <div className="relative w-28 h-20 bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex-shrink-0 flex items-center justify-center">
                                    {field.value ? (
                                      <Image
                                        src={field.value}
                                        alt={field.label}
                                        fill
                                        className="object-contain p-1"
                                      />
                                    ) : (
                                      <ImageIcon className="w-6 h-6 text-slate-600" />
                                    )}
                                  </div>

                                  {/* Path Input, Direct Cloud Upload, & Media Picker Button */}
                                  <div className="flex-1 w-full space-y-2">
                                    <div className="flex items-center gap-2">
                                      <input
                                        type="text"
                                        value={field.value}
                                        onChange={(e) =>
                                          handleFieldChange(sIdx, fIdx, e.target.value)
                                        }
                                        placeholder="/images/example.jpg or https://..."
                                        className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-100 font-mono focus:outline-none focus:border-purple-500"
                                      />
                                      {field.value?.startsWith("http") && (
                                        <span className="flex-shrink-0 px-2 py-1 rounded bg-purple-900/60 border border-purple-500/40 text-[10px] font-bold text-purple-300 flex items-center gap-1">
                                          <Cloud className="w-3 h-3" />
                                          CDN
                                        </span>
                                      )}
                                    </div>

                                    <div className="flex items-center gap-2 flex-wrap">
                                      <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white text-xs font-semibold shadow-sm transition cursor-pointer">
                                        {fieldUploadingId === `${sIdx}-${fIdx}` ? (
                                          <>
                                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                            <span>Uploading...</span>
                                          </>
                                        ) : (
                                          <>
                                            <UploadCloud className="w-3.5 h-3.5" />
                                            <span>Upload &amp; Replace</span>
                                          </>
                                        )}
                                        <input
                                          type="file"
                                          accept="image/*"
                                          className="hidden"
                                          disabled={isUploading}
                                          onChange={async (e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                              const fieldKey = `${sIdx}-${fIdx}`;
                                              setFieldUploadingId(fieldKey);
                                              const uploadedUrl = await handleUploadFile(
                                                file,
                                                "images",
                                                editingPage?.title || "Page Content"
                                              );
                                              setFieldUploadingId(null);
                                              if (uploadedUrl) {
                                                handleFieldChange(sIdx, fIdx, uploadedUrl);
                                              }
                                            }
                                          }}
                                        />
                                      </label>

                                      <button
                                        type="button"
                                        onClick={() =>
                                          setMediaPickerTargetField({
                                            sectionIndex: sIdx,
                                            fieldIndex: fIdx,
                                          })
                                        }
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition cursor-pointer"
                                      >
                                        <FolderOpen className="w-3.5 h-3.5 text-purple-400" />
                                        <span>Select from Library</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {field.helpText && (
                              <p className="text-[11px] text-slate-500 italic">
                                {field.helpText}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Save Bar */}
                <div className="p-4 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 flex items-center justify-between sticky bottom-4 z-20 shadow-xl">
                  <div className="text-xs text-slate-400">
                    Editing <strong>{editingPage.title}</strong>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setEditingPage(null)}
                      type="button"
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSavePageContent}
                      type="button"
                      className="px-6 py-2 rounded-xl bg-[#581076] hover:bg-[#470a60] text-white text-xs font-bold shadow-lg shadow-purple-900/30 transition flex items-center gap-2 cursor-pointer"
                    >
                      {saveSuccess ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-300" />
                          <span>Saved!</span>
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4" />
                          <span>Save Changes</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: PAGES LIST */}
            {activeTab === "pages" && !editingPage && (
              <div className="space-y-6">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                      Content Management
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                      Website Pages ({websitePages.length})
                    </h1>
                    <p className="text-xs text-slate-400 mt-1">
                      Click any page to edit and update all text, headlines, and images on that page.
                    </p>
                  </div>

                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search pages by name or path..."
                      className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-800/80 text-slate-300 uppercase tracking-wider font-semibold border-b border-slate-800">
                        <tr>
                          <th className="py-3.5 px-5">Page Name</th>
                          <th className="py-3.5 px-5">URL Path</th>
                          <th className="py-3.5 px-5">Department</th>
                          <th className="py-3.5 px-5">Status</th>
                          <th className="py-3.5 px-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {filteredPages.map((page) => (
                          <tr
                            key={page.path}
                            className="hover:bg-slate-800/50 transition cursor-pointer group"
                            onClick={() => handleOpenPageEditor(page)}
                          >
                            <td className="py-4 px-5 font-bold text-white flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-purple-900/30 text-purple-400 flex items-center justify-center flex-shrink-0 group-hover:bg-[#581076] group-hover:text-white transition">
                                <Edit3 className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="text-sm font-bold text-white group-hover:text-purple-300 transition">
                                  {page.title}
                                </span>
                                <span className="block text-[11px] text-slate-400 font-normal">
                                  Click to edit content
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-5 font-mono text-slate-400">{page.path}</td>
                            <td className="py-4 px-5 text-slate-300">{page.section}</td>
                            <td className="py-4 px-5">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                {page.status}
                              </span>
                            </td>
                            <td className="py-4 px-5 text-right" onClick={(e) => e.stopPropagation()}>
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={() => handleOpenPageEditor(page)}
                                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white font-semibold transition cursor-pointer"
                                >
                                  <Edit3 className="w-3 h-3" />
                                  <span>Edit</span>
                                </button>
                                <Link
                                  href={page.path}
                                  target="_blank"
                                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition"
                                >
                                  <span>View</span>
                                  <ExternalLink className="w-3 h-3" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: DASHBOARD OVERVIEW */}
            {activeTab === "dashboard" && (
              <div className="space-y-8">
                {/* Stats row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div
                    onClick={() => setActiveTab("pages")}
                    className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-md flex items-center gap-4 hover:border-purple-500/50 cursor-pointer transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-900/40 text-purple-300 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">{websitePages.length}</div>
                      <div className="text-xs text-slate-400">Editable Pages</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setActiveTab("media")}
                    className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-md flex items-center gap-4 hover:border-blue-500/50 cursor-pointer transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-900/40 text-blue-300 flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">{allMediaAssets.length}</div>
                      <div className="text-xs text-slate-400">Total Media Files</div>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-md flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-900/40 text-emerald-300 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-emerald-400">Active</div>
                      <div className="text-xs text-slate-400">Forms &amp; Resend Email</div>
                    </div>
                  </div>
                </div>

                {/* Quick Navigation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    onClick={() => setActiveTab("pages")}
                    className="bg-slate-900/80 hover:bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-purple-500/50 shadow-md space-y-4 cursor-pointer transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#581076]/40 text-purple-300 flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">Manage Website Pages</h2>
                      <p className="text-xs text-slate-400 mt-1">
                        Click any page to edit text, headlines, paragraphs, and image assets.
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => setActiveTab("media")}
                    className="bg-slate-900/80 hover:bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-purple-500/50 shadow-md space-y-4 cursor-pointer transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-900/40 text-blue-300 flex items-center justify-center">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">Media Assets Library</h2>
                      <p className="text-xs text-slate-400 mt-1">
                        Browse all photography, student graphics, sponsor logos, and downloadable documents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 4: MEDIA LIBRARY ORGANIZED BY FOLDERS */}
            {activeTab === "media" && (
              <div className="space-y-6">
                {/* Header info & Upload Button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                        Asset Manager
                      </span>
                      {customMedia.length > 0 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-200 border border-purple-500/30 flex items-center gap-1">
                          <Cloud className="w-3 h-3" />
                          {customMedia.length} Uploaded
                        </span>
                      )}
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                      Media Library ({filteredMedia.length})
                    </h1>
                    <p className="text-xs text-slate-400 mt-1">
                      Browse, upload, and manage assets organized by cloud storage &amp; repository folders.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                      <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search files..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setUploadError(null);
                        setUploadSuccess(null);
                        setUploadModalOpen(true);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#581076] hover:bg-[#470a60] text-white text-xs font-bold shadow-lg shadow-purple-950/40 transition cursor-pointer flex-shrink-0"
                    >
                      <UploadCloud className="w-4 h-4" />
                      <span>Upload to Cloud</span>
                    </button>
                  </div>
                </div>

                {/* Upload feedback banners */}
                {uploadSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{uploadSuccess}</span>
                  </div>
                )}

                {uploadError && (
                  <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span>{uploadError}</span>
                  </div>
                )}

                {/* Folder Navigation Filter Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {dynamicMediaFolders.map((f) => {
                    const isActive = selectedFolder === f.id;
                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setSelectedFolder(f.id)}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                          isActive
                            ? "bg-[#581076] text-white shadow-md"
                            : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                        }`}
                      >
                        <Folder className="w-3.5 h-3.5" />
                        <span>{f.label}</span>
                        {f.count !== undefined && (
                          <span
                            className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                              isActive ? "bg-purple-900/60 text-purple-200" : "bg-slate-800 text-slate-400"
                            }`}
                          >
                            {f.count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Copied Path Notification */}
                {copiedPath && (
                  <div className="p-3 rounded-xl bg-purple-950/70 border border-purple-500/50 text-purple-200 text-xs flex items-center gap-2 animate-in fade-in">
                    <Check className="w-4 h-4 text-purple-300" />
                    <span>Copied file path to clipboard: <strong className="font-mono">{copiedPath}</strong></span>
                  </div>
                )}

                {/* Media Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredMedia.map((media) => {
                    const isCustomUploaded = customMedia.some((c) => c.path === media.path);

                    return (
                      <div
                        key={media.path}
                        className={`bg-slate-900 rounded-2xl border ${
                          isCustomUploaded ? "border-purple-500/60 shadow-purple-950/20" : "border-slate-800"
                        } overflow-hidden shadow-md group hover:border-purple-500/80 transition flex flex-col justify-between`}
                      >
                        {/* Image Preview or Document Icon */}
                        {media.type === "image" ? (
                          <div className="relative w-full h-44 bg-slate-950 p-2 flex items-center justify-center overflow-hidden">
                            <Image
                              src={media.path}
                              alt={media.name}
                              fill
                              className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                            />
                            {isCustomUploaded && (
                              <div className="absolute top-2 right-2 bg-[#581076] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                                <Cloud className="w-3 h-3" />
                                <span>Cloud CDN</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="relative w-full h-36 bg-slate-950/70 p-4 flex flex-col items-center justify-center text-center border-b border-slate-800/80">
                            <div className="w-12 h-12 rounded-xl bg-red-950/40 text-red-400 flex items-center justify-center border border-red-500/20 mb-2">
                              <FileText className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-mono uppercase bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                              PDF Document
                            </span>
                            {isCustomUploaded && (
                              <span className="mt-1 text-[9px] font-bold text-purple-300 flex items-center gap-1">
                                <Cloud className="w-2.5 h-2.5" />
                                Cloud Upload
                              </span>
                            )}
                          </div>
                        )}

                        {/* Media Details */}
                        <div className="p-4 border-t border-slate-800 flex-1 flex flex-col justify-between space-y-3 bg-slate-900">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-purple-300">
                                /{media.folder}
                              </span>
                              <span className="text-[10px] text-slate-400 font-semibold truncate">
                                {media.category}
                              </span>
                            </div>
                            <h3 className="text-xs font-bold text-white truncate" title={media.name}>
                              {media.name}
                            </h3>
                            <p className="text-[10px] font-mono text-slate-500 truncate mt-0.5" title={media.path}>
                              {media.path}
                            </p>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs">
                            <button
                              type="button"
                              onClick={() => handleCopyPath(media.path)}
                              className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition cursor-pointer"
                            >
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Path</span>
                            </button>

                            <div className="flex items-center gap-3">
                              {isCustomUploaded && (
                                <button
                                  type="button"
                                  title="Remove from custom list"
                                  onClick={() => {
                                    if (confirm(`Remove ${media.name} from your uploaded list?`)) {
                                      const filtered = customMedia.filter((c) => c.path !== media.path);
                                      setCustomMedia(filtered);
                                      localStorage.setItem("ccs_custom_media_assets", JSON.stringify(filtered));
                                    }
                                  }}
                                  className="text-[11px] text-slate-500 hover:text-red-400 transition cursor-pointer p-1"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              )}

                              <a
                                href={media.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] text-purple-400 hover:text-purple-300 font-bold transition"
                              >
                                <span>Open</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {filteredMedia.length === 0 && (
                  <div className="text-center py-16 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
                    <Folder className="w-10 h-10 text-slate-600 mx-auto" />
                    <p className="text-sm text-slate-400">No media files found matching your search.</p>
                    <button
                      onClick={() => {
                        setSelectedFolder("all");
                        setSearchQuery("");
                      }}
                      className="text-xs text-purple-400 font-bold hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>
        </main>

        {/* Media Picker Modal (when selecting image in Page Editor) */}
        {mediaPickerTargetField && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 rounded-2xl max-w-3xl w-full p-6 shadow-2xl space-y-4 border border-slate-800 max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="font-bold text-white text-base flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-purple-400" />
                    Select an Image from Media Library
                  </h3>
                  <p className="text-xs text-slate-400">Choose an image organized by folder to swap into this field.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMediaPickerTargetField(null)}
                  className="text-slate-400 hover:text-white p-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Folder switcher inside media picker */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {["all", "images", "logos", "headers", "campus-life"].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setMediaPickerFolder(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer capitalize ${
                      mediaPickerFolder === f
                        ? "bg-[#581076] text-white"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {f === "all" ? "All Images" : `/${f}`}
                  </button>
                ))}
              </div>

              <div className="overflow-y-auto flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pr-1">
                {pickerMedia.map((asset) => (
                  <div
                    key={asset.path}
                    onClick={() => {
                      if (mediaPickerTargetField) {
                        handleFieldChange(
                          mediaPickerTargetField.sectionIndex,
                          mediaPickerTargetField.fieldIndex,
                          asset.path
                        );
                        setMediaPickerTargetField(null);
                      }
                    }}
                    className="bg-slate-950 hover:bg-slate-800 rounded-xl p-2.5 border border-slate-800 hover:border-purple-500 transition cursor-pointer flex flex-col space-y-2 group"
                  >
                    <div className="relative w-full h-24 bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center">
                      <Image
                        src={asset.path}
                        alt={asset.name}
                        fill
                        className="object-contain p-1 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-purple-400 block">/{asset.folder}</span>
                      <p className="text-[11px] font-bold text-white truncate" title={asset.name}>
                        {asset.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                <label className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white text-xs font-semibold shadow-sm transition cursor-pointer">
                  {isUploading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Uploading...</span>
                    </>
                  ) : (
                    <>
                      <UploadCloud className="w-3.5 h-3.5" />
                      <span>Upload New Image</span>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={isUploading}
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = await handleUploadFile(
                          file,
                          "images",
                          editingPage?.title || "Page Media"
                        );
                        if (url && mediaPickerTargetField) {
                          handleFieldChange(
                            mediaPickerTargetField.sectionIndex,
                            mediaPickerTargetField.fieldIndex,
                            url
                          );
                          setMediaPickerTargetField(null);
                        }
                      }
                    }}
                  />
                </label>

                <button
                  type="button"
                  onClick={() => setMediaPickerTargetField(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Upload Media to Cloud Modal */}
        {uploadModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-slate-900 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 border border-slate-800 animate-in zoom-in-95">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/40 text-purple-300 flex items-center justify-center">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Upload Asset to Cloud Storage</h3>
                    <p className="text-xs text-slate-400">Add images, photos, or documents to high-speed CDN.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setUploadModalOpen(false);
                    setUploadError(null);
                  }}
                  className="text-slate-400 hover:text-white p-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Upload Drop / Picker Area */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Target Destination Folder
                  </label>
                  <select
                    value={selectedUploadFolder}
                    onChange={(e) =>
                      setSelectedUploadFolder(
                        e.target.value as
                          | "images"
                          | "logos"
                          | "headers"
                          | "campus-life"
                          | "files"
                          | "brand"
                      )
                    }
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-purple-500"
                  >
                    <option value="images">/images (General Photos &amp; Banners)</option>
                    <option value="campus-life">/campus-life (Student &amp; Campus Grid)</option>
                    <option value="headers">/headers (Hero Sliders &amp; Page Headers)</option>
                    <option value="logos">/logos (Sponsors, Accreditations &amp; Partners)</option>
                    <option value="brand">/brand (School Logo &amp; Emblems)</option>
                    <option value="files">/files (PDF Documents, Schedules &amp; Handbooks)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Category Tag / Description
                  </label>
                  <input
                    type="text"
                    value={selectedUploadCategory}
                    onChange={(e) => setSelectedUploadCategory(e.target.value)}
                    placeholder="e.g. 2026 Gala, Academic Calendar, Athletics..."
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-purple-500"
                  />
                </div>

                {/* File Dropzone */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Select File (Images or PDF, max 15MB)
                  </label>
                  <label className="border-2 border-dashed border-slate-700 hover:border-purple-500 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition bg-slate-950/60 hover:bg-slate-950 group">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/50 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      {isUploading ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : (
                        <UploadCloud className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-sm font-bold text-white group-hover:text-purple-300">
                      {isUploading ? "Uploading to Cloud Storage..." : "Click or Drag File to Upload"}
                    </span>
                    <span className="text-xs text-slate-400 mt-1">
                      Supports JPG, PNG, WEBP, GIF, SVG, and PDF
                    </span>
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      disabled={isUploading}
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const url = await handleUploadFile(
                            file,
                            selectedUploadFolder,
                            selectedUploadCategory
                          );
                          if (url) {
                            setUploadModalOpen(false);
                          }
                        }
                      }}
                    />
                  </label>
                </div>

                {/* Status messages */}
                {isUploading && (
                  <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs flex items-center gap-2 animate-pulse">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{uploadProgress || "Uploading file..."}</span>
                  </div>
                )}

                {uploadError && (
                  <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-500/40 text-red-300 text-xs space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>Upload Error</span>
                    </div>
                    <p className="text-[11px] text-red-300/90">{uploadError}</p>
                  </div>
                )}

                {/* Cloud Setup Help Note */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                  <div className="flex items-center gap-1 text-slate-300 font-semibold">
                    <Info className="w-3.5 h-3.5 text-purple-400" />
                    <span>Vercel Blob / Cloud Storage Info</span>
                  </div>
                  <p>
                    Uploaded assets receive a global high-performance CDN URL and appear immediately in your Media Library and Page Content Editor.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setUploadModalOpen(false);
                    setUploadError(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    );
  }

  // Unauthenticated Login Form
  return (
    <div className="w-full flex-1 min-h-screen bg-gradient-to-b from-slate-900 via-[#1a1028] to-slate-950 flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#581076]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-900/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
        {/* Header Branding */}
        <div className="text-center space-y-4">
          <Link href="/" className="inline-block transition-transform hover:scale-105">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 p-3.5 backdrop-blur-md border border-white/15 shadow-xl flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/favicon.png"
                  alt="Citadel Christian School Emblem"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </Link>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/20 text-purple-200 border border-purple-400/30">
              <Lock className="w-3.5 h-3.5" />
              Administrative Portal
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
              Staff &amp; Admin Access
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-sm mx-auto font-light">
              Restricted portal for Citadel Christian School faculty, staff, and leadership.
            </p>
          </div>
        </div>

        {/* Login Card */}
        <div className="mt-8 bg-white/95 backdrop-blur-xl py-8 px-6 sm:px-10 shadow-2xl rounded-2xl border border-slate-200/80">
          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs sm:text-sm animate-in fade-in">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="leading-snug">{errorMessage}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                School Email Address
              </label>
              <div className="relative rounded-lg shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="username@citadelchristian.org"
                  className="block w-full pl-10 pr-3.5 py-2.5 sm:py-3 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#581076] focus:border-[#581076] transition-all bg-white"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowHelpModal(true)}
                  className="text-xs text-[#581076] hover:text-[#470a60] font-semibold hover:underline cursor-pointer"
                >
                  Need help?
                </button>
              </div>
              <div className="relative rounded-lg shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <KeyRound className="h-4 w-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="block w-full pl-10 pr-10 py-2.5 sm:py-3 text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#581076] focus:border-[#581076] transition-all bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-[#581076] focus:ring-[#581076] cursor-pointer"
                />
                <span className="ml-2 text-xs text-slate-600 select-none">
                  Remember this workstation
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-white font-bold text-sm bg-[#581076] hover:bg-[#470a60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#581076] shadow-md hover:shadow-lg transition-all duration-150 disabled:opacity-70 cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </div>
                ) : (
                  <>
                    <span>Sign In to Admin Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Security Assurance Footer */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-500 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>256-Bit Encrypted Institutional Access</span>
          </div>
        </div>

        {/* Back to Public Site Link */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            &larr; Return to Citadel Christian School Homepage
          </Link>
        </div>
      </div>

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <HelpCircle className="w-5 h-5 text-[#581076]" />
                Administrative Access Assistance
              </div>
              <button
                type="button"
                onClick={() => setShowHelpModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="text-slate-600 text-sm space-y-3 leading-relaxed">
              <p>
                Access to this section is restricted solely to authorized Citadel Christian School administrators, faculty, and leadership.
              </p>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <p className="font-semibold text-slate-800">
                  Authorized Administrator Account:
                </p>
                <p>
                  Username: <strong className="text-[#581076]">info@citadelchristian.org</strong>
                </p>
                <p>Direct Campus Phone: (979) 830-1177</p>
              </div>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowHelpModal(false)}
                className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wide uppercase transition cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
