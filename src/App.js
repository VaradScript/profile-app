import { useState } from 'react';
import './App.css';

function App() {
  const [profile, setProfile] = useState({
    name: 'Varad',
    title: 'Web Developer',
    bio: 'I build awesome web applications',
    imageUrl: 'https://i.imgur.com/mCHMpLT.jpg'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfile(prev => ({ ...prev, imageUrl: event.target.result }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
     <div className="profile-container">
       <div className="profile-header">
        <h1>Profile </h1>
      </div>
    <div className="container">
      <div className="profile">
        <div className="picture">
          <img src={profile.imageUrl} alt="Profile" />
          {isEditing && (
            <input type="file" accept="image/*" onChange={handleImageChange} />
          )}
        </div>
        <div className="info">
          {isEditing ? (
            <>
              <input name="name" value={profile.name} onChange={handleChange} />
              <input name="title" value={profile.title} onChange={handleChange} />
              <textarea name="bio" value={profile.bio} onChange={handleChange} />
            </>
          ) : (
            <>
              <h2>{profile.name}</h2>
              <p>{profile.title}</p>
              <p>{profile.bio}</p>
            </>
          )}
        </div>
      </div>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
    </div>
  );
}

export default App;