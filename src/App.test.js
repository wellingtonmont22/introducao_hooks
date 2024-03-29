import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

const response = { speaker: 'Speaker', quote: 'test quote' };

const server = setupServer(
    rest.get('http://127.0.0.1:3000/quotes/1', (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app with a button, a quote and a button', () => {

    render(<App />);

    const buttonEl = screen.getByRole('button');

    const imageEl = screen.getByRole('img');

    const textEl = screen.getByText(/loading speaker/);

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();

});

test('calls api on button click and update its text', async () => {
    render(<App />);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);
    //findByText é assincrono e getByText é para ser usando de forma sincrona;
    const quoteEl = await screen.findByText(response.quote);

    expect(quoteEl).toBeInTheDocument();
});

test('calls api on startup and renders it response', async () => {
    render(<App />);

    const quoteEl = await screen.findByText(response.quote);

    expect(quoteEl).toBeInTheDocument();
});