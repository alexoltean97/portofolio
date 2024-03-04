import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useThemeColor = (colorHexValues) => {
  const [activeColor, setActiveColor] = useState('main-color');

  useEffect(() => {
    const savedColor = Cookies.get('activeColor');
    if (savedColor && colorHexValues[savedColor]) {
      setActiveColor(savedColor);
      document.documentElement.style.setProperty('--main-color', colorHexValues[savedColor]);
    }
  }, [colorHexValues]);

  const updateThemeColor = (color) => {
    setActiveColor(color);
    document.documentElement.style.setProperty('--main-color', colorHexValues[color]);
    Cookies.set('activeColor', color, { expires: 7 });
  };

  return [activeColor, updateThemeColor];
};

export default useThemeColor;