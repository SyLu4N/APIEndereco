import { newError } from '../utils/newError';

export async function searchCep(cep: string) {
  try {
    const script = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(script).then((response) => response.json);

    const data = await fetch(script);
    const location = await data.json();

    return location;
  } catch (err) {
    return newError('Algo deu errado, tente novamente mais tarde!');
  }
}
