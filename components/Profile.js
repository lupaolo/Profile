import React from 'react';
import './Profile.css'; 

const Profile = ({ imageUrl, nome, email, idade }) => {
  return (
    <div className="profile">
      <img src={imageUrl} alt="Imagem de perfil" className="profile-image" />
      <div className="profile-details">
        <h2>{nome}</h2>
        <p>{email}</p>
        <p>{idade} anos</p>
      </div>
    </div>
  );
};

export default Profile;
