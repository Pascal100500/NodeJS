function UserPhotos({ photos = [] }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Фотографии пользователей</h1>

      {photos.length === 0 && (
        <p style={{ textAlign: "center" }}>Нет добавленных фото</p>
      )}

      <div className="user-gallery">
        {photos.map((photo) => (
          <div key={photo.id} className="user-card">
            <img src={photo.image} alt="user" />

            <h3>{photo.nickname}</h3>

            {photo.description && <p>{photo.description}</p>}

            {photo.tags && (
              <p>
                <b>Теги:</b> {photo.tags}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPhotos;