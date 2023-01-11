import {Provider} from "react-redux";
import {createStore} from "../../store/store";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Router from "../../router/Router";

export const renderTestApp = (children, options) => {
    return render(
            <Provider store={createStore(options?.state)}>
                <MemoryRouter initialEntries={[options?.route]}>
                    <Router />
                {children}
                </MemoryRouter>
            </Provider>
        )
}