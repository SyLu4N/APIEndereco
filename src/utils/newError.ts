export function newError(msg: string): void {
  const form = document.querySelector('.form') as HTMLFormElement;
  const p = document.createElement('p');
  const result = document.querySelector('.result') as HTMLDivElement;
  const e = document.querySelector('.CEP') as HTMLInputElement;

  p.classList.add('errorParagraph');
  p.innerText = msg;
  form.insertAdjacentElement('afterend', p);

  e.classList.add('errorInput');
  e.classList.remove('success');
  result.classList.add('hidden');
}
