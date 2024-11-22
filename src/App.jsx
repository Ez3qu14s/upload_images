import Form from './Components/Form';
import { Container, Content } from './styles';
import Global from './styles/global';

function App() {
  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  return (
    <>
      <Container>
        <Global />
        <Content>
          <Form />
        </Content>
      </Container>
    </>
  );
}

export default App;
