import {renderWithContext} from "../../tests/helpers/renderWithContext";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('counter UI test', function () {
    test('increment', () => {
        const {getByTestId} = renderTestApp(null, {
            state: {
                counter: {
                    value: 15
                }
            },
            route: '/'
        })
        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toContainHTML('Value = 15')
        userEvent.click(incrementBtn)
        expect(getByTestId('value-title')).toContainHTML('Value = 16')
    })
    test('decrement', () => {
        const {getByTestId} = renderWithContext(<Counter/>, {
            counter: {
                value: 12
            }
        })
        const decrementBtn = getByTestId('decrement-btn')
        expect(getByTestId('value-title')).toContainHTML('Value = 12')
        userEvent.click(decrementBtn)
        expect(getByTestId('value-title')).toContainHTML('Value = 11')
    })
});