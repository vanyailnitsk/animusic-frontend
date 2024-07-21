import {Navigate, Outlet} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {LOGIN} from "./routes";
import {Context} from "@/main.tsx";

export const PrivateRoute = observer(() => {
    const {userStore} = useContext(Context)
    if (userStore.isAuth) {
        return <Outlet/>
    } else {
        return <Navigate to={LOGIN} replace/>;
    }
});

