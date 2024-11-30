import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>RBAC</div>
        <button style={styles.loginButton} onClick={handleLogin}>
          Login
        </button>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        <h1 style={styles.heading}>Welcome to Role-Based Access Control System</h1>
        <p style={styles.description}>
          Manage user roles and permissions with precision. Our system ensures secure access to resources based on role-based rules. Simplify your security management and enhance user experience with our RBAC implementation.
        </p>
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#6200ea',
    color: 'white',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'white',
    color: '#6200ea',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  },
  loginButtonHover: {
    backgroundColor: '#f0f0f0',
  },
  main: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '0 20px',
  },
  heading: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default Home;


