import React from 'react';

const LoginPage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '0 1.5rem',
    backgroundColor: 'white',
  };

  const inputStyle = {
    width: '100%',
    borderRadius: '0.375rem',
    border: 'none',
    padding: '0.375rem',
    color: '#1f2937',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.95)',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    marginTop: '0.5rem',
  };

  const buttonStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    borderRadius: '0.375rem',
    backgroundColor: '#4338ca',
    padding: '0.375rem 0.75rem',
    color: 'white',
    fontWeight: 600,
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    outline: 'none',
    transition: 'background-color 0.15s ease-in-out',
  };

  return (
    <div style={containerStyle}>
      
        
        <h2
          style={{
            marginTop: '1rem',
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
          }}
        >
          Sign in to your account
        </h2>
      

      <div style={{ marginTop: '2.5rem', width: '100%', maxWidth: '20rem' }}>
        <form style={{ marginBottom: '1.5rem' }} action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div style={{ marginTop: '0.5rem' }}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label
                style={{ fontSize: '0.875rem', fontWeight: 500, color: '#1f2937' }}
                htmlFor="password"
              >
                Password
              </label>
              <div style={{ fontSize: '0.875rem' }}>
                <a
                  href="#"
                  style={{ fontWeight: 600, color: '#6366f1' }}
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              style={buttonStyle}
            >
              Sign in
            </button>
          </div>
        </form>

        <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
          Not a member?{' '}
          <a
            href="#"
            style={{ fontWeight: 600, color: '#6366f1' }}
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
