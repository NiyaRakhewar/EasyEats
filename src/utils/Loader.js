// Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 8px solid #d1914b;
          box-sizing: border-box;
          --c:no-repeat radial-gradient(farthest-side, #d64123 94%,#0000);
          --b:no-repeat radial-gradient(farthest-side, #000 94%,#0000);
          background:
            var(--c) 11px 15px,
            var(--b) 6px 15px,    
            var(--c) 35px 23px,
            var(--b) 29px 15px,    
            var(--c) 11px 46px,
            var(--b) 11px 34px,    
            var(--c) 36px 0px,
            var(--b) 50px 31px,
            var(--c) 47px 43px,
            var(--b) 31px 48px,    
            #f6d353; 
          background-size: 15px 15px,6px 6px;
          animation: l4 3s infinite;
        }
        @keyframes l4 {
          0%     {-webkit-mask:conic-gradient(#0000 0     ,#000 0)}
          16.67% {-webkit-mask:conic-gradient(#0000 60deg ,#000 0)}
          33.33% {-webkit-mask:conic-gradient(#0000 120deg,#000 0)}
          50%    {-webkit-mask:conic-gradient(#0000 180deg,#000 0)}
          66.67% {-webkit-mask:conic-gradient(#0000 240deg,#000 0)}
          83.33% {-webkit-mask:conic-gradient(#0000 300deg,#000 0)}
          100%   {-webkit-mask:conic-gradient(#0000 360deg,#000 0)}
        }
      `}</style>
    </div>
  );
};

export default Loader;
