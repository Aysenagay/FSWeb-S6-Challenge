import React from "react";
export default function Karakter(props) {
  const { karakterler } = props;
  return (
    <div className="content">
      <h1>KARAKTERLER</h1>
      {karakterler.map((karakter) => (
        <div className="karakterBilgileri">
          <h3>{karakter.name}</h3>
          <p>{karakter.height}</p>
          <p>{karakter.mass}</p>
          <p>{karakter.hair_color}</p>
          <p>{karakter.skin_color}</p>
        </div>
      ))}
    </div>
  );
}
