/* The important data flow here is the transformation 
of username/password into an access token, which then 
becomes the key to accessing the rest of the application.*/

const handleLogin = async (e: FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/token/', {
      username,
      password,
    });

    const { token } = response.data;

    // Store token in localStorage for persistence
    localStorage.setItem('token', token);

    dispatch(
      login({
        user: response.data.user,
        token,
      })
    );

    window.location.href = '/dashboard';  // Redirect to the dashboard
  } catch (error) {
    console.error('Login failed', error);
    alert('Login failed! Please check your credentials.');
  }
};