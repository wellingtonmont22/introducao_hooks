import { rest } from 'msw';

import { setupServer } from 'msw/node';

import { getQuote } from './index';

const response = {
    test: 'testing'
};

const server = setupServer(
    rest.get('http://127.0.0.1:3000/quotes/1', (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('traform json response into object', async () => {
    const quote = await getQuote();

    expect(quote).toStrictEqual(response);

});