// A simple login form using bootstrap's Card and Form compoonents.

const LoginForm = () => {
  return (
    <div className="card">
      <form>
        <div className="card-header">
          <h3>Log In</h3>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text" id="username" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" id="password" className="form-control" />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
