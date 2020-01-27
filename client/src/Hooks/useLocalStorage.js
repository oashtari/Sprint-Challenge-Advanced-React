import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

    const [storedPlayer, setStoredPlayer] = useState(() => {

        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue))
        return initialValue;
    })

    const setValue = value => {
        setStoredPlayer(value);

        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedPlayer, setValue]
}

export default useLocalStorage;