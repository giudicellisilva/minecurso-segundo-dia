import { Provider } from "react-redux";
import store from "@/redux/store";
import React from "react";

const ProviderRedux = ({children}: React.PropsWithChildren) =>{
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ProviderRedux;