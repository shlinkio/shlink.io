import React, { useState, useEffect } from 'react';

const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const shuffle = (str) => str.split('').sort(() => 0.5 - Math.random()).join('');

const ShortCodeChars = () => {
  const [ charset, setCharset ] = useState('');

  useEffect(() => setCharset(shuffle(BASE62)), []);

  return <p style={{ color: 'black', margin: '20px' }}>{charset}</p>;
};

export default ShortCodeChars;
