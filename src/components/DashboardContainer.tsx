import { useState, type ChangeEvent } from "react";
import api from "../services/api";

function ImageUpload() {
  const [image, setImage] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Selecione uma imagem!");

    const formData = new FormData();
    formData.append('file', image); // O nome 'file' deve ser igual ao do @RequestParam no Java

    try {
      const response = await api.post('/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data)
      alert(response.data);
    } catch (error) {
      console.error("Erro no upload", error);
    }
  };

  return (
    <div style={{ padding: '4em' }}>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Enviar Imagem</button>
    </div>
  );
}
export default ImageUpload;