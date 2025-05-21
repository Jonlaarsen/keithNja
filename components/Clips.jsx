"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const Clips = ({ uploads, onUpdateClip }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentClip, setCurrentClip] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedSubtitle, setEditedSubtitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedImgUrl, setEditedImgUrl] = useState("");
  const [editedVideoUrl, setEditedVideoUrl] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const router = useRouter();

  // const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/(watch\?v=|embed\/)([a-zA-Z0-9_-]{11})/;

  useEffect(() => {
    const isUserLoggedIn = document.cookie.includes("isLoggedin=true");
    setIsLoggedIn(isUserLoggedIn);
  }, []);

  const openModal = (clip) => {
    let videoUrl = clip.videourl;

    // Regex to match both normal and short YouTube URLs
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
        body: JSON.stringify({
          id: clipId,
        }),
      });

      if (!response.ok) throw new Error("Failed to delete clip.");
      alert("Clip deleted successfully!");
      closeEditModal(); // Close the edit modal after deletion
    } catch (error) {
      console.error("Error deleting clip:", error);
    }
  };

  const filteredUploads = uploads
    .filter(
      (upload) =>
        selectedCategory === "All" || upload.categories === selectedCategory
    )
    .sort((a, b) => {
      // Prioritize IDs 1 to 6
      const isAInPriority = a.id >= 1 && a.id <= 6;
      const isBInPriority = b.id >= 1 && b.id <= 6;

      if (isAInPriority && isBInPriority) return a.id - b.id; // Sort priority items by ID ascending
      if (isAInPriority) return -1; // a comes first
      if (isBInPriority) return 1; // b comes first

      // For other items, sort by ID descending
      return b.id - a.id;
    });

  const categories = [
    { label: "All", value: "All" },
    { label: "Documentary", value: "docummentary" },
    { label: "Music Video", value: "MusicVideo" },
    { label: "Branded And Corporate", value: "Branded And corporate" },
    { label: "News and Podcast", value: "news and podcast" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileInView={true}
      className="flex flex-col justify-center w-screen md:w-full overflow-x-hidden items-center md:pt-0 pt-[10rem] "
    >
      <div className="flex flex-wrap md:flex-row flex-col justify-center md:border-2 border-blue-800 mb-10 md:mb-[2rem] ">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`md:px-6 px-2 text-white py-2 md:text-xl font-[400] uppercase ${
              selectedCategory === category.value
                ? "bg-blue-800 border-blue-800 text-white transition-all ease-in-out duration-200"
                : "hover:text-blue-800 transition-all ease-in-out duration-200 "
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center lg:mx-10">
        {filteredUploads.map((upload) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={upload.id}
            className="cursor-pointer overflow-hidden relative group w-screen h-auto md:max-w-[25rem] lg:max-w-[27rem] 2xl:max-w-[31rem] md:h-[13.5rem] lg:h-[15rem]  2xl:h-[16.5rem]"
            onClick={() => openModal(upload)}
          >
            <img
              src={upload.imgurl}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:brightness-[.25] group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center mx-8 text-center text-white">
              <h1 className="hidden group-hover:block text-3xl mb-2 font-bold">
                {upload.title}
              </h1>
              <h3 className="hidden group-hover:block text-[1.25rem] font-semibold w-[24rem]">
                "{upload.subtitle}"
              </h3>
              <p className="hidden group-hover:block text-slate-200 font-semibold">
                {`{ `}
                {upload.description}
                {` }`}
              </p>
            </div>

            {isLoggedIn && (
              <div>
                <button
                  className="absolute top-4 left-4 text-white bg-blue-800 p-2 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    openEditModal(upload);
                  }}
                >
                  Edit
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white  overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              controls
              autoPlay
              className="w-screen md:w-[60rem] h-[35rem]"
              allow="autoplay"
              src={currentClip.videourl}
              type="video/mp4"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-[50rem] text-black ">
            <h2 className="text-2xl font-bold mb-4">Edit Clip</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="subtitle"
                  className="block text-sm font-medium text-gray-700"
                >
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
                  className="block text-sm font-medium text-gray-700"
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
                <label
                  htmlFor="imgurl"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="videourl"
                  className="block text-sm font-medium text-gray-700"
                >
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
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="categories"
                  value={editedCategory}
                  onChange={(e) => setEditedCategory(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
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
    </motion.div>
  );
};

export default Clips;
