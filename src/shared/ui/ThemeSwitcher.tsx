import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { Theme, useTheme } from '../../app/providers/ThemeProvider';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div >
            <Button variant={theme} onClick={toggleTheme} >
                Theme {theme === Theme.DARK ? 'Dark' : 'Light'}
            </Button>

        </div>
    );
}
