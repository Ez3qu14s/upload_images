import React from 'react';
import { ContainerFile, Sobreposicao } from './style';

const FileComponent = ({ error, image, value, handleChange }) => {
  return (
    <div>
      <ContainerFile error={error} image={image}>
        {!error ? (
          <p>Ponha aqui sua melhor foto</p>
        ) : (
          <p>Formato de imagem inválido</p>
        )}
        <input
          value={value ?? ''}
          onChange={handleChange}
          accept="image/*"
          type="file"
          style={{ display: 'none' }}
        />
        <Sobreposicao image={image}>
          <p>Trocar foto</p>
        </Sobreposicao>
      </ContainerFile>
    </div>
  );
};

export default FileComponent;
