import { newError } from './newError';

export async function searchCep(cep: string) {
  const result = document.querySelector('.result') as HTMLDivElement;
  try {
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
    result.classList.add('teste');
    return newError('Algo deu errado, tente novamente mais tarde!');
  }
}
