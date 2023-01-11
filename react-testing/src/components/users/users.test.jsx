import {fireEvent, render, screen} from "@testing-library/react";
import axios from "axios";
import {MemoryRouter} from "react-router-dom";
import Router from "../../router/Router";
import Users from "./Users";
import {renderWIthRouter} from "../../tests/helpers/renderWIthRouter";

jest.mock('axios')


describe('Users Test', function () {

    let response
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                }
            ]
        }
        axios.get.mockReturnValue(response)

    })
    afterEach(() => {
        jest.clearAllMocks()
    })

    test('users check', async () => {
        render(
            <MemoryRouter initialEntries={['/users']}>
                <Router />
            </MemoryRouter>
        )
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
    })


    test('click and rout another page', async () => {
        renderWIthRouter(<Users />)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
          fireEvent.click( users[0])
        expect(screen.getByTestId('detailed-page')).toBeInTheDocument()
    })
});