import { newError } from './newError';

export async function searchCep(cep: string) {
  try {
    const result = document.querySelector('.result') as HTMLDivElement;

    const script = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(script).then((response) => response.json);

    const data = await fetch(script);
    const location = await data.json();

    const { erro } = location;

    if (erro) {
      result.classList.add('teste');
      return newError('Não foi possível localizar um endereço com esse CEP.');
    }

    result.classList.remove('teste');

    return location;
  } catch (err) {
    return newError('Algo deu errado, tente novamente mais tarde!');
  }
}
