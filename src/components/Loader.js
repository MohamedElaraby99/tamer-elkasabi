import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loader = ({ loading }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--bg-color)',
        display: loading ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        transition: 'opacity 0.3s ease-in-out',
        opacity: loading ? 1 : 0,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <BounceLoader
          color="var(--text-color-3)"
          loading={loading}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p
          style={{
            color: 'var(--text-color)',
            marginTop: '20px',
            fontSize: '1.2rem',
            fontFamily: 'Noto Kufi Arabic, Cairo, sans-serif',
            fontWeight: '600',
          }}
        >
          جاري التحميل...
        </p>
      </div>
    </div>
  );
};

export default Loader;
