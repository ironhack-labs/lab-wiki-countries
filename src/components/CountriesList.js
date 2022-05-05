import { Link } from 'react-router-dom';

function CountriesList() {
    return (
        <nav className="CountriesList">
        <ul>
          <Link to="/"> Home </Link>           
          <div class="col-5" style="max-height: 90vh; overflow: scroll">
            <div class="list-group">
              <Link to="/ABW" class="list-group-item list-group-item-action"
                >🇦🇼 Aruba</Link>
              <Link to="/AFG" class="list-group-item list-group-item-action"
                >🇦🇫 Afghanistan</Link>
              <Link to="/AGO" class="list-group-item list-group-item-action"
                >🇦🇴 Angola</Link>
              <Link to="/AIA" class="list-group-item list-group-item-action"
                >🇦🇮 Anguilla</Link>
              <Link to="/ALA" class="list-group-item list-group-item-action"
                >🇦🇽 Åland Islands</Link>
              <Link to="/ALB" class="list-group-item list-group-item-action"
                >🇦🇱 Albania</Link>
              <Link to="/AND" class="list-group-item list-group-item-action"
                >🇦🇩 Andorra</Link>
              <Link to="/ARE" class="list-group-item list-group-item-action"
                >🇦🇪 United Arab Emirates</Link>
              <Link to="/ARG" class="list-group-item list-group-item-action"
                >🇦🇷 Argentina</Link>
              <Link to="/ARM" class="list-group-item list-group-item-action" 
                >🇦🇲 Armenia</Link>
              <Link to="/ASM" class="list-group-item list-group-item-action"
                >🇦🇸 American Samoa</Link>
              <Link to="/ATA" class="list-group-item list-group-item-action" 
                >🇦🇶 Antarctica</Link>
              <Link to="/FLK" class="list-group-item list-group-item-action" 
                >🇫🇰 Falkland Islands</Link>
              <Link to="/FRA" class="list-group-item list-group-item-action active"
                >🇫🇷 France</Link>
              <Link to="/ZWE" class="list-group-item list-group-item-action"
                >🇿🇼 Zimbabwe</Link>
            </div>
          </div>
        </ul>
      </nav>
    );
}

export default Navbar;