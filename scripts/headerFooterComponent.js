class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav>
        <div class="nav-left">
          <div class="nav-logo">
            <img src="assets/Vector.svg" alt="oakymart-icon" />
          </div>
          <div class="nav-logo-text">OKAYMART</div>
        </div>
        <div class="nav-center">
          <i class="fa-solid fa-magnifying-glass" style="color: #07090e"></i>
          <input
            type="search"
            name="search-bar"
            id="searchBar"
            placeholder="Search for anything"
          />
        </div>
        <div class="nav-right">
          <div class="categories-toggle">
            <h3>Categories</h3>
            <i
              class="fa-solid fa-angle-down"
              style="color: #07090e"
              id="myArrow"
              onclick="toggleDropdown()"
            ></i>
          </div>

          <i class="fa-solid fa-magnifying-glass" style="color: #07090e"></i>

          <i class="fa-regular fa-user"></i>

          <div class="cart-container">
            <i class="fa-solid fa-shopping-cart"></i>
            <span class="cart-counter">0</span>
          </div>
          <div class="hamburger" onclick="toggleMobileMenu()">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
        <div class="categories-dropdown" id="myDropdown">
          <a href="#">Fashion</a>
          <a href="#">Gadgets</a>
          <a href="#">Beauty</a>
          <a href="#">Sporting Goods</a>
          <a href="#">Electronics</a>
          <a href="#">Supermarket</a>
        </div>

        <div class="mobile-nav" id="mobileMenu">
          <div>
            <a href="#">
              <p>Home</p>
            </a>
          </div>
          <div>
             <a href="#">
               <p>Categories</p>
             </a>
          </div>
          <div>
            <a href="#">
            <p>Contact Us</p>
            </a>
          </div>
        </div>
    </nav>
        `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
        <div class="footer">
        <section>
          <div class="section1">
            <h3>Get In Touch</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div class="social-icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-x-twitter"></i>
            </div>
          </div>
        </section>
        <section>
          <div class="section2">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Furniture</a></li>
              <li><a href="#">Beauty</a></li>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Gadgets</a></li>
            </ul>
          </div>
        </section>
        <section>
          <div class="section3">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Who we are</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Unlimited Support</a></li>
            </ul>
          </div>
        </section>
      </div> `;
  }
}

customElements.define("special-header", SpecialHeader);

customElements.define("special-footer", SpecialFooter);
