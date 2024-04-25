import React from 'react';
import './error.scss';
import { useNavigate } from 'react-router-dom';
function Error() {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <img src="./img/error.png" alt="err_png" width={500} height={500} />
      <button onClick={() => navigate('/introduction')} className="error-btn">
        Back to Home Page
      </button>
    </div>
  );
}

export default Error;
