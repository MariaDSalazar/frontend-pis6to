import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { findBestMatch } from 'string-similarity';

function Chatbot() {
  const [userInput, setUserInput] = useState('');

  const steps = [
    {
      id: '1',
      message: '¡Hola! Soy el Asistente de Radiación UV. ¿En qué puedo ayudarte hoy?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: 'lexicalValidation',
    },
    {
      id: 'lexicalValidation',
      component: <LexicalValidation setUserInput={setUserInput} />,
      asMessage: true,
      trigger: 'response',
    },
    {
      id: 'response',
      component: <Response />,
      asMessage: true,
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'apiInfo', label: '¿Cómo acceder a la información de la API?', trigger: 'apiInfo' },
        { value: 'procedure', label: '¿Procedimiento para consultar niveles de radiación UV?', trigger: 'procedure' },
        { value: 'doc', label: '¿Dónde encuentro la documentación de la API?', trigger: 'doc' },
        
        { value: 'options2', label: 'Aún más preguntas', trigger: 'options2' },
        { value: '1', label: 'Regresar', trigger: '1' },
      ],
    },
    {
      id: 'options2',
      options: [
        { value: 'parameters', label: '¿Parámetros para obtener datos precisos?', trigger: 'parameters' },
        { value: 'historicalData', label: '¿La API proporciona datos históricos?', trigger: 'historicalData' },
        { value: 'queryLimit', label: '¿Restricciones en el número de consultas?', trigger: 'queryLimit' },
        { value: 'integration', label: '¿Puedo integrar los datos en mi aplicación?', trigger: 'integration' },
        { value: 'notification', label: '¿La API ofrece servicios de notificación?', trigger: 'notification' },
        { value: 'importanceUV', label: '¿Por qué es importante conocer los niveles de radiación UV?', trigger: 'importanceUV' },
        { value: 'appFunctionalities', label: '¿Cuáles son las funcionalidades principales de la aplicación?', trigger: 'appFunctionalities' },
        { value: 'loginProcedure', label: '¿Cómo inicio sesión en la aplicación?', trigger: 'loginProcedure' },
        { value: 'mainScreenInfo', label: '¿Qué información puedo encontrar en la pantalla principal?', trigger: 'mainScreenInfo' },
        { value: 'accountRegistrationInfo', label: '¿Qué información debo proporcionar al registrar mi cuenta?', trigger: 'accountRegistrationInfo' },
        { value: 'technicalProblems', label: '¿Qué debo hacer si experimento problemas técnicos con la aplicación?', trigger: 'technicalProblems' },
        { value: 'dataProtection', label: '¿Cómo se protegen mis datos personales en la aplicación?', trigger: 'dataProtection' },
        { value: '1', label: 'Regresar', trigger: '1' },
      ],
    },
    {
      id: 'apiInfo',
      message: 'Para acceder a la información proporcionada por la API de medición de radiación UV, puedes utilizar las funcionalidades integradas en nuestra página web y aplicación móvil. La API está diseñada para ser accesible a través de consultas específicas que puedes realizar desde nuestra plataforma.',
      trigger: 'moreQuestions',
    },
    {
      id: 'procedure',
      message: 'El procedimiento para consultar los niveles de radiación UV a través de la API implica enviar solicitudes con los parámetros adecuados que especifiquen la ubicación, el período de tiempo y otros criterios relevantes para obtener los datos deseados. Estos datos se proporcionan en formato digital y pueden ser utilizados para diversos fines.',
      trigger: 'moreQuestions',
    },
    {
      id: 'doc',
      message: 'La documentación sobre el uso de la API para obtener datos de radiación UV está disponible en nuestra página web. Puedes encontrar información detallada sobre cómo acceder a la API, los parámetros admitidos y ejemplos de consultas.',
      trigger: 'moreQuestions',
    },
    {
      id: 'parameters',
      message: 'Los parámetros que debes incluir en tu solicitud a la API para obtener datos precisos sobre la radiación UV incluyen la ubicación geográfica específica que deseas monitorear, el período de tiempo deseado y cualquier otro criterio relevante para tu consulta.',
      trigger: 'moreQuestions',
    },
    {
      id: 'historicalData',
      message: 'Sí, la API proporciona datos históricos de radiación UV que pueden ser útiles para análisis y seguimiento a largo plazo. Puedes acceder a estos datos históricos mediante consultas específicas que especifiquen el rango de fechas y otros criterios relevantes para tu investigación.',
      trigger: 'moreQuestions',
    },
    {
      id: 'queryLimit',
      message: 'La cantidad de consultas que puedes hacer a la API puede estar sujeta a ciertas restricciones, dependiendo de la política de uso establecida. Sin embargo, generalmente se proporciona un límite razonable de consultas para garantizar un uso equitativo y eficiente de los recursos del sistema.',
      trigger: 'moreQuestions',
    },
    {
      id: 'integration',
      message: 'Sí, puedes integrar los datos de la API en tu propio software o aplicación, siempre y cuando cumplas con los términos y condiciones de uso establecidos. La API está diseñada para ser compatible con diversas plataformas y sistemas, lo que facilita su integración en aplicaciones personalizadas.',
      trigger: 'moreQuestions',
    },
    {
      id: 'notification',
      message: 'Sí, la API puede ofrecer servicios de notificación o alerta para cambios significativos en los niveles de radiación UV. Esto puede ayudar a los usuarios a estar informados sobre cualquier variación importante que pueda afectar su exposición al sol y tomar las precauciones necesarias.',
      trigger: 'moreQuestions',
    },
    {
      id: 'importanceUV',
      message: 'Es importante conocer los niveles de radiación UV a través de una aplicación contribuye a la promoción de la salud y la prevención de problemas relacionados con la exposición excesiva al sol.',
      trigger: 'moreQuestions',
    },
    {
      id: 'appFunctionalities',
      message: 'La aplicación permite a los usuarios conocer sobre los niveles de radiación UV, permite presentar la ubicación, cuenta con datos históricos, permitiendo realizar un análisis a lo largo del tiempo, indicando patrones y tendencias en los niveles de radiación UV.',
      trigger: 'moreQuestions',
    },
    {
      id: 'loginProcedure',
      message: 'Debes contar con una cuenta, en la página principal te da la opción de registrarte siguiendo algunos pasos.',
      trigger: 'moreQuestions',
    },
    {
      id: 'mainScreenInfo',
      message: 'Puedes encontrar información resumida sobre un conjunto de datos, métricas o indicadores claves para el usuario.',
      trigger: 'moreQuestions',
    },
    {
      id: 'accountRegistrationInfo',
      message: 'Debes proporcionar tus datos personales (nombre, apellido, edad, institución a la que pertenece, rol que desempeña, correo electrónico, contraseña, nombre de usuario).',
      trigger: 'moreQuestions',
    },
    {
      id: 'technicalProblems',
      message: 'Facilitaremos una encuesta de satisfacción con la finalidad de comprender la experiencia que los usuarios tienen al interactuar con la aplicación.',
      trigger: 'moreQuestions',
    },
    {
      id: 'dataProtection',
      message: 'Implementamos diversas medidas de seguridad con la finalidad de garantizar la información presentada por parte de los usuarios.',
      trigger: 'moreQuestions',
    },
    {
      id: 'moreQuestions',
      message: '¿Tienes alguna otra pregunta o hay algo más en lo que pueda ayudarte?',
      trigger: '2',
    },
    {
      id: 'fallbackResponse',
      message: 'Lo siento, no entendí tu pregunta. ¿Puedes intentar con una pregunta diferente?',
      trigger: 'moreQuestions',
    },
  ];

  return (
    <ChatBot
      steps={steps}
      recognitionEnable={true}
      floating={true}
      headerTitle="Asistente de Radiación UV"
      botDelay={100}
      //speechSynthesis={{ enable: true, lang: 'en' }}
      reconocimientoLang="es"
      width="450px"
    />
  );
}

const LexicalValidation = ({ steps, triggerNextStep }) => {
  const userMessage = steps[2].value;

  if (typeof userMessage !== 'string') {
    console.error('Error: La pregunta del usuario no es una cadena válida');
    return null;
  }

  const questionAnswerDictionary = {
    'cuál es el procedimiento para consultar los niveles de radiación uv a través de la api?':'Para consultar los niveles de radiación UV, debes acceder a nuestro Dashboard en donde encontrarás los diferentes sensores de medición con sus respectivos niveles y recomendaciones sobre la radiación UV y recomendaciones.',
    'qué parámetros debo incluir en mi solicitud a la api para obtener datos precisos sobre la radiación uv': 'Los parámetros que debes incluir en tu solicitud a la API para obtener datos precisos sobre la radiación UV incluyen datos de registro (nombres completos, cedula, celular, correo electrónico) y la razón por la cual deseas hacer el consumo de la API.',
    'la api proporciona datos históricos de radiación uv? ¿cómo puedo acceder a ellos':'Sí, la App proporciona datos históricos de radiación UV de forma diaria, semanal y mensual mediante el uso de un gráfico.Para acceder a ella debes estar previamente logeado con tu cuenta de usuario,y luego dirigirte a la sección datos historicos',
    'puedo integrar los datos de la api en mi propio software o aplicación':'Sí, puedes integrar los datos de la API en tu propio software o aplicación. La API está diseñada para ser compatible con diversas plataformas y sistemas, lo que facilita su integración en aplicaciones personalizadas.',
    'la app ofrece algún tipo de servicio de notificación o alerta para cambios significativos en los niveles de radiación uv': 'Sí, la App móvil ofrece el servicio de notificaciones en determinadas horas del día.',
    'por qué es importante conocer los niveles de radiación uv':'Conocer los niveles de radiación UV es importante para prevenir daños en nuestra piel o enfermedades por la exposición excesiva al sol.',
    'cuáles son las funcionalidades principales de la aplicación': 'La aplicación permite a los usuarios conocer sobre los niveles de radiación UV, la ubicación de los sensores, los datos históricos y el API de la App.',
    'cómo inicio sesión en la aplicación': 'Como requisito previo debes estar registrado en la aplicacióm, luego acceder a la sección de Login y ubicar tu usuario o contraseña y dar clic en iniciar sesión.'
  };

  const formattedUserMessage = userMessage.toLowerCase();
  const { bestMatch } = findBestMatch(formattedUserMessage, Object.keys(questionAnswerDictionary).map(question => question.toLowerCase()));

  const similarityThreshold = 0.3;
  const isValid = bestMatch.rating >= similarityThreshold;

  console.log('Best match:', bestMatch, isValid, userMessage);

  return isValid ? questionAnswerDictionary[bestMatch.target.toLowerCase()] : 'No entiendo tu pregunta, aquí tienes algunas preguntas que te pueden ayudar';
};

const Response = () => (
  <div>
    <p>Preguntas...</p>
  </div>
);

export default Chatbot;
