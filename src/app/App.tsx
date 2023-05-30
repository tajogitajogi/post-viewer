import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

import { NavBar } from '../widgets/NavBar';
import { useTheme } from './providers/ThemeProvider';
import { ClassNames } from '../shared/lib/ClassNames/ClassNames';

interface AppProps {
    className?: string;
}

export const App: FC<AppProps> = (props) => {
    const { theme } = useTheme()
    return (
        <div className={ClassNames('app', {}, [theme])}>
            <NavBar/>
        </div>
    );
}
