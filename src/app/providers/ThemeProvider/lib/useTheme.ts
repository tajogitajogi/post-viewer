import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from './ThemeContext';

export interface UseThemeResponse {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResponse => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme?.(newTheme);
    }

    return {
        theme: theme ?? (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT,
        toggleTheme
    }
}
