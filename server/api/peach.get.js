import { ofetch } from 'ofetch';
import kebabCase from 'lodash.kebabcase';

const capitalize = (string) => {
  return  string.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ')
}

export default defineEventHandler(async (event) => {

  const response = await ofetch('https://corsproxy.io/?https://api.peachbitcoin.com/v1/info/', {
    headers: {
      accept: 'application/json',
    }
  });

  return response.paymentMethods
    .filter(method => !method.anonymous)
    .map(method => capitalize(kebabCase(method.id).replace('-', ' ')).replace('-', ' '))
    .join(', ')
});