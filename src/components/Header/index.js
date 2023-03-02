import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      
      <p className="website-logo">RAM</p>
      <div className="search">
        <form className="d-flex" >
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ></input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      
      <ul className="nav-menu">
        
        <li>
          <img
            className="social-network-img"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png "
            alt="Linked In"
            width="40" height="50"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://www.kindpng.com/picc/m/255-2558173_github-logo-png-transparent-png.png"
            alt="Git Hub"
            width="40" height="50"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://res.cloudinary.com/dmwrugc6z/image/upload/v1621681890/Background_4x_1_bzyjew.png"
            alt="Twitter"
            width="40" height="50"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header