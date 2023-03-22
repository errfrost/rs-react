import { Outlet, NavLink } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <h1>RSS - React</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="forms">Forms</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
