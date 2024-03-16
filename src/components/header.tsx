"use client"
import { useState, useEffect } from 'react';
import NavBarLg from './navBarlg';
import  NavBarSm  from './navBarsm';


export function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      {isLargeScreen ? <NavBarLg /> : <NavBarSm />}
    </header>
  );
}
