"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react"; // Ensure you're importing Motion correctly.
import { useRouter } from "next/navigation";

// Sample uploads data (clips)
const sampleUploads = [
  {
    id: 1,
    title: "Street Skateboarding Vibes",
    subtitle: "Cruising the streets",
    description: "An energetic street skate session in downtown.",
    imgurl: "https://via.placeholder.com/600x400?text=Street+Skate",
    videourl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    categories: "Documentary",
  },
  {
    id: 2,
    title: "Skatepark Trick Showcase",
    subtitle: "Awesome flips and grinds",
    description: "Best moments from the local skatepark.",
    imgurl: "https://via.placeholder.com/600x400?text=Skatepark",
    videourl: "https://youtu.be/jNQXAC9IVRw",
    categories: "Music Video",
  },
  // … add more sample uploads as needed.
];

// Categories for filtering uploads.
const categoriesOptions = [
  { label: "All", value: "All" },
  { label: "Documentary", value: "Documentary" },
  { label: "Music Video", value: "Music Video" },
  { label: "Branded & Corporate", value: "Branded And corporate" },
  { label: "News and Podcast", value: "news and podcast" },
];

// --- Clips Component ---
const Clips = ({ uploads, onUpdateClip }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentClip, setCurrentClip] = useState < any > null;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedSubtitle, setEditedSubtitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedImgUrl, setEditedImgUrl] = useState("");
  const [editedVideoUrl, setEditedVideoUrl] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check login status via a cookie, for example.
    const isUserLoggedIn = document.cookie.includes("isLoggedin=true");
    setIsLoggedIn(isUserLoggedIn);
  }, []);

  // Open the modal and convert the video URL to an embed URL if needed.
  const openModal = (clip) => {
    let videoUrl = clip.videourl;
    const youtubeRegex =
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = videoUrl.match(youtubeRegex);
    if (match) {
      const videoId = match[1];
      videoUrl = `https://www.youtube.com/embed/${videoId}`;
      setCurrentClip({ ...clip, videourl: videoUrl });
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      window.open(videoUrl, "_blank");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentClip(null);
    document.body.style.overflow = "auto";
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditedTitle("");
    setEditedSubtitle("");
    setEditedDescription("");
    setEditedImgUrl("");
    setEditedVideoUrl("");
    setEditedCategory("");
  };

  const openEditModal = (clip) => {
    setCurrentClip(clip);
    setEditedTitle(clip.title);
    setEditedSubtitle(clip.subtitle);
    setEditedDescription(clip.description);
    setEditedImgUrl(clip.imgurl);
    setEditedVideoUrl(clip.videourl);
    setEditedCategory(clip.categories);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/upload/", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: currentClip.id,
          title: editedTitle,
          subtitle: editedSubtitle,
          description: editedDescription,
          imgurl: editedImgUrl,
          videourl: editedVideoUrl,
          categories: editedCategory,
        }),
      });
      if (!response.ok) throw new Error("Failed to update clip.");
      alert("Clip updated successfully!");
      closeEditModal();
      // Optional: trigger a refresh or callback.
      onUpdateClip && onUpdateClip();
    } catch (error) {
      console.error("Error updating clip:", error);
      alert("Error updating clip.");
    }
  };

  const handleDelete = async (clipId) => {
    if (!confirm("Are you sure you want to delete this clip?")) return;
    try {
      const response = await fetch(`/api/upload/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: clipId }),
      });
      if (!response.ok) throw new Error("Failed to delete clip.");
      alert("Clip deleted successfully!");
      closeEditModal();
      onUpdateClip && onUpdateClip();
    } catch (error) {
      console.error("Error deleting clip:", error);
    }
  };

  // Filter and sort uploads.
  const filteredUploads = uploads
    .filter(
      (upload) =>
        selectedCategory === "All" || upload.categories === selectedCategory
    )
    .sort((a, b) => {
      // Example: Prioritize lower IDs (customize as needed)
      return a.id - b.id;
    });

  return (
    <div className="w-full px-4">
      {/* Category filter */}
      <div className="flex flex-wrap justify-center mb-10">
        {categoriesOptions.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-6 py-2 text-white uppercase m-1 transition-colors duration-200 ${
              selectedCategory === cat.value
                ? "bg-blue-800"
                : "bg-gray-500 hover:bg-blue-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Upload grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUploads.map((upload) => (
          <motion.div
            key={upload.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg"
            onClick={() => openModal(upload)}
          >
            <img
              src={upload.imgurl}
              alt={upload.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h1 className="text-3xl font-bold mb-2">{upload.title}</h1>
              <h3 className="text-xl mb-2">{upload.subtitle}</h3>
              <p className="px-4">{upload.description}</p>
            </div>
            {isLoggedIn && (
              <button
                className="absolute top-4 left-4 bg-blue-800 text-white p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  openEditModal(upload);
                }}
              >
                Edit
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      {isModalOpen && currentClip && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative bg-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={currentClip.videourl}
              title={currentClip.title}
              className="w-screen md:w-[60rem] h-[35rem]"
              frameBorder="0"
              allow="autoplay"
            ></iframe>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && currentClip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-[50rem] text-black">
            <h2 className="text-2xl font-bold mb-4">Edit Clip</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subtitle" className="block text-sm font-medium">
                  Subtitle
                </label>
                <input
                  type="text"
                  id="subtitle"
                  value={editedSubtitle}
                  onChange={(e) => setEditedSubtitle(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="imgurl" className="block text-sm font-medium">
                  Image URL
                </label>
                <input
                  type="text"
                  id="imgurl"
                  value={editedImgUrl}
                  onChange={(e) => setEditedImgUrl(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="videourl" className="block text-sm font-medium">
                  Video URL
                </label>
                <input
                  type="text"
                  id="videourl"
                  value={editedVideoUrl}
                  onChange={(e) => setEditedVideoUrl(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="categories"
                  className="block text-sm font-medium"
                >
                  Category
                </label>
                <select
                  id="categories"
                  value={editedCategory}
                  onChange={(e) => setEditedCategory(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                >
                  {categoriesOptions.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-between space-x-2">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-800 text-white rounded"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(currentClip.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main Skateboard Blog Page Component ---
export default function SkateBlogPage() {
  const [theme, setTheme] = (useState < "light") | ("dark" > "light");

  // Toggle dark mode (applied to html element)
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Framer Motion variants for the header and navigation
  const headerVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#FFFCF2] dark:bg-[#252422] dark:text-[#FFFCF2] font-sans">
      {/* Header with Dark/Light Mode Toggle */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariant}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-[#CCC5B9] to-[#EB5E28] dark:from-[#403D39] dark:to-[#252422] text-white py-16"
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-[#FFFCF2] dark:bg-[#403D39] text-[#403D39] dark:text-[#FFFCF2] px-4 py-2 rounded shadow hover:opacity-80 transition-opacity"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Super Skate</h1>
          <p className="text-xl md:text-2xl">
            The Ultimate Skateboard Blog & Video Showcase
          </p>
        </div>
      </motion.header>

      {/* Navigation */}
      <nav className="bg-[#FFFCF2] dark:bg-[#403D39] shadow">
        <div className="max-w-6xl mx-auto px-4">
          <motion.ul
            className="flex space-x-8 py-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {["Videos", "Skaters", "Blog", "Contact"].map((section) => (
              <li
                key={section}
                className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <a href={`#${section.toLowerCase()}`}>{section}</a>
              </li>
            ))}
          </motion.ul>
        </div>
      </nav>

      {/* Main Content Section (Videos using Clips Component) */}
      <section id="videos" className="py-12">
        <Clips
          uploads={sampleUploads}
          onUpdateClip={() => {
            /* Optional refetch or update state here */
          }}
        />
      </section>

      {/* You could add additional sections (Skaters, Blog, Contact) below as needed */}
      <footer className="bg-[#CCC5B9] dark:bg-[#403D39] py-6 shadow mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-[#403D39] dark:text-[#FFFCF2]">
          &copy; {new Date().getFullYear()} Super Skate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
