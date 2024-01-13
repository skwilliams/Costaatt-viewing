import React from 'react';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
//the buttom ro be added
<button className="fixed bottom-0 right-0 p-10" onClick={scrollToTop}>
  <FaArrowUp/>
</button>;
