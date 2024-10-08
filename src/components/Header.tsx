import atlasLogo from "../assets/logo.png"
const Header = () => {

    return (
        <div className="header">
        <header className="sticky top-0 border-b-2 border-blue bg-off-white-light pb-8 pt-8">
          <img className="logo mx-auto w-56" src={atlasLogo} alt="logo" />
        </header>
      </div>
    )
}

export default Header;
