export const Header = () => {
    return (
        <>
            {/* INTERNAL CSS – ONLY THIS FILE */}
            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: "Segoe UI", Arial, sans-serif;
                }

                .header {
                    background: linear-gradient(135deg, #0b3d2e, #145a32, #1e8449);
                    border-bottom: 4px solid #ff9933;
                    color: white;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }

                .outer {
                    padding: 18px 50px;
                }

                .row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                /* BRANDING */
                .branding h1 {
                    font-size: 28px;
                    color: #ffcc00;
                    letter-spacing: 1px;
                    text-shadow: 0 2px 6px rgba(0,0,0,0.3);
                }

                .branding h2 {
                    font-size: 15px;
                    font-weight: 400;
                    color: #eaeaea;
                    margin-top: 4px;
                    letter-spacing: 0.5px;
                }

                /* NAV */
                .nav {
                    display: flex;
                    align-items: center;
                    gap: 40px;
                }

                .nav-links a {
                    text-decoration: none;
                    color: white;
                    font-size: 15px;
                    font-weight: 500;
                    margin-right: 22px;
                    position: relative;
                    padding-bottom: 5px;
                }

                .nav-links a::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0%;
                    height: 2px;
                    background: #ffcc00;
                    transition: 0.3s ease;
                }

                .nav-links a:hover::after {
                    width: 100%;
                }

                /* BUTTONS */
                .auth-buttons button {
                    padding: 7px 18px;
                    margin-left: 10px;
                    border-radius: 20px;
                    border: none;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .signup {
                    background: #ff9933;
                    color: #000;
                }

                .login {
                    background: transparent;
                    color: white;
                    border: 1px solid white;
                }

                .auth-buttons button:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                }

                /* MENU ICON */
                .menu-btn {
                    font-size: 26px;
                    background: transparent;
                    border: none;
                    color: white;
                    cursor: pointer;
                    display: none;
                }

                /* RESPONSIVE */
                @media (max-width: 900px) {
                    .nav {
                        display: none;
                    }
                    .menu-btn {
                        display: block;
                    }
                }
            `}</style>

            {/* HEADER JSX – STRUCTURE UNCHANGED */}
            <header className="header">
                <div className="outer">
                    <div className="container">
                        <div className="row">

                            <div className="branding">
                                <div className="title-box">
                                    <span>
                                        <h1>Ram Ram JII 🔱🚩</h1>
                                    </span>
                                </div>
                                <h2>Jharkhand Tourism</h2>
                            </div>

                            <nav className="nav">
                                <div className="nav-links">
                                    <a href="#destinations">Destinations</a>
                                    <a href="#plan-trip">Plan Trip</a>
                                    <a href="#marketplace">Marketplace</a>
                                    <a href="#about">About Us</a>
                                </div>

                                <div className="auth-buttons">
                                    <button className="signup">Sign Up</button>
                                    <button className="login">Login</button>
                                </div>
                            </nav>

                            <button className="menu-btn">☰</button>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
