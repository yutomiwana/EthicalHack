// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EthicalHackForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EthicalHackForge/i);
    expect(titleElement).toBeInTheDocument();
});
