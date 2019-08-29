import React, { useState, useEffect, FunctionComponent } from 'react';

const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const shuffle = (str: string): string => str.split('').sort(() => 0.5 - Math.random()).join('');

const ShortCodeChars: FunctionComponent = () => {
  const [ charset, setCharset ] = useState('');

  useEffect(() => setCharset(shuffle(BASE62)), []);

  return <p style={{ color: 'black', margin: '20px' }}>{charset}</p>;
};

export default ShortCodeChars;
