// src/utils/textToSpeech.ts
export const textToSpeech = (text: string, lang: string = 'ru-RU') => {
    if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
      };
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Your browser does not support speech synthesis.');
    }
  };
  