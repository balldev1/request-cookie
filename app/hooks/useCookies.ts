import { useEffect } from 'react';

const useCookies = () => {
    useEffect(() => {
        const consent = document.cookie.split('; ').find(row => row.startsWith('cookie-consent='));
        if (consent) {
            // ใช้คุกกี้ที่ได้รับอนุญาต
            console.log('Cookie consent is given');
        }
    }, []);
};

export default useCookies;
