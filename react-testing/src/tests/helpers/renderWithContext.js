import {Provider} from "react-redux";
import {createStore} from "../../store/store";
import {render} from "@testing-library/react";

export const renderWithContext = (children, initialState = {}) => {
    return render(<Provider store={createStore(initialState)} >
        {children}
    </Provider>)
}