import React, { useState } from 'react';
import EmailInput from './components/EmailInput/EmailInput';
import StyleSelector from './components/StyleSelector/StyleSelector';
import ResponseOutput from './components/ResponseOutput/ResponseOutput';
import './App.css';

function App() {
  const [emailText, setEmailText] = useState('');
  const [responseStyle, setResponseStyle] = useState('Professional');
  const [generatedResponse, setGeneratedResponse] = useState('');

  const handleGenerate = () => {
    const simulatedResponse = `Here is a ${responseStyle.toLowerCase()} response based on your request: "${emailText}"`;
    setGeneratedResponse(emailText ? simulatedResponse : "Please enter some text to generate a response.");
  };

  return (
    <div className="appContainer">
      <header className="appHeader">
        <div>
          <h1>REPLIO</h1>
        </div>
        <div>
          
        </div>
      </header>

      <main>
        <EmailInput 
          emailText={emailText} 
          setEmailText={setEmailText} 
        />
        <StyleSelector 
          selectedStyle={responseStyle}
          onStyleChange={setResponseStyle}
        />
        
        <button className="generateBtn" onClick={handleGenerate}>
          Generate Response
        </button>

        <ResponseOutput generatedResponse={generatedResponse} />
      </main>
    </div>
  );
}

export default App;
