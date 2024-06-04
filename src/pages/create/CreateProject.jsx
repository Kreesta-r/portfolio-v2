import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../../firebase-config';
import './create.css';

function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const postCollectionRef = collection(db, "projects");

  const createProject = async (event) => {
    event.preventDefault();

    try {
      let imageUrl = "";

      // Upload image to Firebase Storage if an image is selected
      if (image) {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(image.name);
        await fileRef.put(image);
        imageUrl = await fileRef.getDownloadURL();
      }

      // Add project data to Firestore
      await addDoc(postCollectionRef, {
        title,
        description,
        imageUrl,
      });

      // Clear input fields
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (err) {
      console.error("Error creating project:", err);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className='create-project-page'>
      <div className="create-project-container">
        <h1 className="create-project-title">Create Project</h1>
        <form onSubmit={createProject} className="create-project-form">
          <div className="create-project-form-group">
            <label className='create-project-label'>Title:</label>
            <input
              type="text"
              placeholder="Title"
              className="create-project-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="create-project-form-group">
            <label className='create-project-label'>Description:</label>
            <textarea
              placeholder="Description"
              className="create-project-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="create-project-form-group">
            <label className='create-project-label'>Upload Image:</label>
            <input type="file" onChange={handleImageChange} className="create-project-input" />
          </div>
          <button type="submit" className="create-project-button">Publish</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;
