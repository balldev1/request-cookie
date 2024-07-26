"use client";

import React, { useState, useEffect } from 'react';

// Component props
interface CookieConsentProps {
    onAccept: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // ตรวจสอบคุกกี้ว่ามีการตอบสนองมาก่อนหรือไม่
        const consent = document.cookie.split('; ').find(row => row.startsWith('cookie-consent='));
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        // ตั้งค่า cookie เพื่อบันทึกการตอบสนอง
        document.cookie = "cookie-consent=true; path=/; max-age=" + 60*60*24*365; // cookie จะหมดอายุหลังจาก 1 ปี
        setShowBanner(false);
        onAccept();
    };

    if (!showBanner) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px',
            textAlign: 'center'
        }}>
            <p>
                เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณบนเว็บไซต์นี้
                <button onClick={handleAccept} style={{ marginLeft: '10px' }}>
                    ยอมรับ
                </button>
            </p>
        </div>
    );
};

export default CookieConsent;
