import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { auth, storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadURL, setUploadURL] = useState("");
  const [gallery, setGallery] = useState([]);

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  // Handle logout
  const handleLogout = async () => {
    await signOut(auth);
    setLoggedIn(false);
  };

  // Handle file change
  const handleFileChange = (e) => setFile(e.target.files[0]);

  // Upload image to Firebase Storage
  const handleUpload = async () => {
    if (!file) return alert("Select a file first!");

    const fileRef = ref(storage, `gallery/${uuidv4()}-${file.name}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    setUploadURL(url);
    alert("Image uploaded successfully!");
    setFile(null);
    fetchGallery(); // refresh gallery
  };

  // Fetch all gallery images
  const fetchGallery = async () => {
    const galleryRef = ref(storage, "gallery/");
    const result = await listAll(galleryRef);
    const urls = await Promise.all(
      result.items.map((item) => getDownloadURL(item))
    );
    setGallery(urls.reverse()); // newest first
  };

  useEffect(() => {
    if (loggedIn) fetchGallery();
  }, [loggedIn]);

  // Login form
  if (!loggedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Admin Login
          </h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-3"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-blue-900 text-white w-64 p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
        <nav className="flex flex-col gap-4 text-lg">
          <a href="/" className="hover:text-yellow-300">
            Main Site
          </a>
          <a href="/kinder" className="hover:text-yellow-300">
            Kinder Site
          </a>
          <button
            onClick={handleLogout}
            className="mt-auto bg-red-600 hover:bg-red-700 py-2 rounded"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, Admin 🎉
          </h1>
          <p className="text-gray-500">
            Upload and manage school gallery images below.
          </p>
        </header>

        {/* Upload Form */}
        <section className="bg-white p-6 rounded shadow max-w-2xl mb-10">
          <h2 className="text-xl font-semibold mb-4">Upload Gallery Image</h2>
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-4 block w-full text-sm text-gray-700"
          />
          <button
            onClick={handleUpload}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Upload Image
          </button>
          {uploadURL && (
            <div className="mt-6">
              <p className="mb-2 text-gray-600">Last Uploaded:</p>
              <a
                href={uploadURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline break-all"
              >
                {uploadURL}
              </a>
            </div>
          )}
        </section>

        {/* Gallery Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((url, index) => (
              <div key={index} className="rounded overflow-hidden shadow">
                <img
                  src={url}
                  alt={`Gallery ${index}`}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
