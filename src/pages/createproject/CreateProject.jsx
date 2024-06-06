import React, { useState } from "react";
import { addDoc, collection } from 'firebase/firestore'
import './createpost.css'
import {  db, storage } from "../../firebase"; 
import { useNavigate } from "react-router-dom";
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // New state for image URL
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission status
  const navigate = useNavigate();

  const postCollectionRef = collection(db, "projects");

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0]; // Get the first selected file

    if (!imageFile) return; // Early return if no file is selected

    const storageRef = ref(storage, `images/${imageFile.name}`); // Create a reference in storage

    try {
      setIsSubmitting(true); // Set submitting state to true

      // Upload the image to Firebase Storage
      await uploadBytes(storageRef, imageFile);

      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(storageRef);

      setImageUrl(imageUrl); // Update state with the download URL
      setIsSubmitting(false); // Set submitting state to false (after successful upload)
    } catch (error) {
      console.error("Error uploading image:", error);
      setIsSubmitting(false); // Set submitting state to false (after upload error)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions while uploading

    try {
      // Add project data to Firestore with the imageUrl
      await addDoc(postCollectionRef, {
        title,
        description,
        imageUrl,
      });

      navigate("/"); // Redirect after successful submission
    } catch (err) {
      console.error("Error adding project:", err);
    }
  };

  return (
    <div className="createpost">
      <h2>Post a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={handleImageUpload}
        />
        <button type="submit" disabled={isSubmitting || !imageUrl}>
          {isSubmitting ? "Image Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
