import {render, screen} from '@testing-library/react';
import App from './App';

describe('render tests', () => {
    test('renders instructions text', () => {
        render(<App/>);
        const instructionsText = screen.getByText(/Please set a minimum/i);
        expect(instructionsText).toBeInTheDocument();
    });

    test('renders minimum input field', () => {
        render(<App/>);
        const minimumInputText = screen.getByText("Minimum");
        expect(minimumInputText).toBeInTheDocument();
    });

    test('renders maximum input field', () => {
        render(<App/>);
        const maximumInputText = screen.getByText("Maximum");
        expect(maximumInputText).toBeInTheDocument();
    });
});

