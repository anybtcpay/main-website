import { ofetch } from 'ofetch'
import shuffle from 'lodash.shuffle'
const {
  shapeshiftKey
} = useRuntimeConfig();

export default defineEventHandler(async (event) => {

  const response = await ofetch('https://exchange.shapeshift.com/api/v1/assets', {
    headers: {
      accept: 'application/json',
      'x-api-key': shapeshiftKey
    }
  });

  const currencies = Object.keys(response)
    .filter(key => response[key].symbol !== 'BTC')
    .map(key => response[key].name)

  const truncate = shuffle(currencies).slice(0, 40);

  return truncate.join(', ');
});