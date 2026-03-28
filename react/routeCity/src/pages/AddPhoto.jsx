import { useState } from "react";

function AddPhoto({ photos, setPhotos }) {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ВАЛИДАЦИЯ
    if (!nickname || !password || !email || !file) {
      setError("Заполните все обязательные поля");
      return;
    }

    if (!email.includes("@")) {
      setError("Введите корректный email");
      return;
    }

    const newPhoto = {
      id: Date.now(),
      nickname,
      email,
      description,
      tags,
      image: URL.createObjectURL(file) 
    };

    // сохранение
    setPhotos([...photos, newPhoto]);

    setNickname("");
    setPassword("");
    setEmail("");
    setFile(null);
    setDescription("");
    setTags("");
    setError("");
  };

  return (
    <div className="form-container">
      <h1>Добавить фотографию</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ник"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        /><br /><br />

        <textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br /><br />

        <input
          type="text"
          placeholder="Теги"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        /><br /><br />

        <button type="submit">Добавить</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default AddPhoto;