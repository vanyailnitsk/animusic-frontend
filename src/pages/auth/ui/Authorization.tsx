import styles from './Authorization.module.css'
import {SignIn} from "@/widgets/sign-in";
import {SignUp} from "@/widgets/sign-up";

export const Authorization = () => {
    return (
        <div className={styles.authorization__wrapper}>
            <SignIn/>
            <SignUp/>
            <button onClick={() => localStorage.removeItem('token')}>Logout</button>
        </div>
    );
};

