import './styles/global.css'
import {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {AppRouter} from "@/app/routers";
import {Context} from "@/main.tsx";

function App() {
    const { userStore } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                await userStore.checkAuth();
                setLoading(false);
            } catch (error) {
                console.error("Произошла ошибка при проверке авторизации:", error);
                setLoading(false);
            }
        };

        if (localStorage.getItem('token')) {
            checkAuthentication();
        } else {
            setLoading(false);
        }
    }, [userStore]);
    if (!loading) {
        return (
            <div className='app'>
                <AppRouter />
            </div>
        );
    }

    return null;
}

export default observer(App);
