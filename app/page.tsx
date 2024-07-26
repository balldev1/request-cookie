"use client"
import CookieConsent from "@/app/components/CookieConsent";
// import useCookies from "@/app/hooks/useCookies";
export default function Home() {

    // useCookies();

    const handleCookieConsent = () => {
    // ทำบางสิ่งหลังจากที่ผู้ใช้ยอมรับคุกกี้
    console.log('Cookie consent given');
  };

  return (
      <div>
        <h1>Welcome to My Website</h1>
        <CookieConsent onAccept={handleCookieConsent} />
      </div>
  );
}
