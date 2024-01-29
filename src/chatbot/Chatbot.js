import ChatBot from 'react-simple-chatbot';

function Chatbot() {

  const pasos = [
    {
      id: '1',
      message: 'Escoge un número',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Number 1', trigger: '4' },
        { value: 2, label: 'Number 2', trigger: '3' },
        { value: 3, label: 'Number 3', trigger: '3' },
      ],
    },
    {
      id: '3',
      message: 'Wrong answer, try again.',
      trigger: '2',
    },
    {
      id: '4',
      message: 'Awesome! You are a telepath!',
      end: true,
    },
  ]


  return (
    <ChatBot
      steps={pasos}
      floating={true}
      headerTitle="Asistente de Radiación UV"
      botDelay={100}
      reconocimientoLang="es"
      width="400px"
    />
  )
}
export default Chatbot;