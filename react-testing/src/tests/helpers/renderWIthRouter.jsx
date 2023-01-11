import {MemoryRouter} from "react-router-dom";
import Router from "../../router/Router";
import {render} from "@testing-library/react";

export const renderWIthRouter = (children, initialRoute = '/ ') => {
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <Router />
            {children}
        </MemoryRouter>
    )
}