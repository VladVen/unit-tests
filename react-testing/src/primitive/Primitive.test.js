import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Primitive from "./Primitive";

describe('React App Test', function () {

    beforeEach(() => {
        render(<Primitive/>);
    })


    test('regular test', () => {
        //screen.debug() - to get HTML for debug
        const helloElem = screen.getByText(/hello world/i);
        const btnElem = screen.getByRole('button');
        const inputElem = screen.getByPlaceholderText('Type');
        expect(helloElem).toBeInTheDocument();
        expect(btnElem).toBeInTheDocument();
        expect(inputElem).toBeInTheDocument();
        expect(inputElem).toMatchSnapshot();
    });

    test('async test', async () => {
        const asyncEl = await screen.findByText(/AsyncDiv/i);
        expect(asyncEl).toBeInTheDocument()
    });

    test('Click event', () => {
        const btn = screen.getByTestId('toggle-btn');
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
    });

    test('input event', () => {
        const inputElem = screen.getByPlaceholderText('Type');
        expect(screen.queryByTestId('value-elem')).toContainHTML('')
        fireEvent.input(inputElem, {
            target: {value: 'someData'}
        })
        expect(screen.queryByTestId('value-elem')).toContainHTML('someData')
    });
    test('input event by userEvent', () => {
        const inputElem = screen.getByPlaceholderText('Type');
        expect(screen.queryByTestId('value-elem')).toContainHTML('')
        userEvent.type(inputElem, 'someData')
        expect(screen.queryByTestId('value-elem')).toContainHTML('someData')
    });
});

