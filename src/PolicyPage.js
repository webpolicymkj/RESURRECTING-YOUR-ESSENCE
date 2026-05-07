import React, { useEffect, useState } from 'react';
import './App.css'; // dùng lại CSS hiện tại

function PolicyPage() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/policy.html') // Lấy từ thư mục public
      .then((res) => res.text())
      .then((text) => setHtmlContent(text))
      .catch((err) => console.error('Failed to load policy.html:', err));
  }, []);

  return (
    <div className="container policy-page" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default PolicyPage;