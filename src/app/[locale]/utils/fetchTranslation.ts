import axios from 'axios';

async function fetchTranslation(key: string, targetLanguage: string): Promise<string> {
  const response = await axios.post('https://translation-api.example.com', {
    text: key,
    targetLang: targetLanguage,
  });
  return response.data.translation;
}


export default fetchTranslation