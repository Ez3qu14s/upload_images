import React from 'react';
import Input from '../Inputs';
import FileComponent from '../File';
import Button from '../Button';

const Form = () => {
  const [data, setData] = React.useState({
    nome: '',
    email: '',
    senha: '',
    foto: {
      filename: '',
      size: '',
      file: '',
    },
  });
  const [error, setError] = React.useState(false);

  function handleChange({ target }) {
    const { id, value } = target;

    setData({ ...data, [id]: value });
  }

  function handleChangeImage({ target }) {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const file = target.files[0];

    if (!allowedTypes.includes(file.type)) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setData({
        ...data,
        foto: { filename: file.name, size: file.size, file: reader.result },
      });
    };
    reader.readAsDataURL(file);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id={'nome'}
        label={'Nome'}
        placeholder={'Digite seu nome'}
        value={data.nome}
        onChange={handleChange}
      />
      <Input
        id={'email'}
        label={'Email'}
        placeholder={'Digite seu melhor email'}
        value={data.email}
        onChange={handleChange}
      />
      <Input
        id={'senha'}
        label={'Senha'}
        placeholder={'Digite sua senha'}
        type={'password'}
        value={data.senha}
        onChange={handleChange}
      />

      <FileComponent
        error={error}
        image={data.foto.file}
        handleChange={handleChangeImage}
      />

      <Button />
    </form>
  );
};

export default Form;
