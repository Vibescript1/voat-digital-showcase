import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Menu,
  X,
  Search,
  ChevronDown,
} from "lucide-react";
import "./index.css";

class NavBar extends Component {
  state = {
    isMobile: false,
    menuOpen: false,
    showSpecialOffer: true,
    searchQuery: "",
    activeMenu: "",
    currentMessageIndex: 0,
    showPortfolioDropdown: false,
  };

  componentDidMount() {
    this.checkScreenSize();
    this.updateActiveMenu();

    window.addEventListener("resize", this.checkScreenSize);
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("mousedown", this.handleClickOutside);

    // Start the carousel
    this.startCarousel();
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.portfolioDropdownRef && !this.portfolioDropdownRef.contains(event.target)) {
      this.setState({ showPortfolioDropdown: false });
    }
  };

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const { prevScrollPos } = this.state;

    // Determine whether to show or hide the special offer based on scroll direction and position
    const isScrollingDown = prevScrollPos < currentScrollPos;
    const isScrolledPastThreshold = currentScrollPos > 50;

    const shouldShowOffer = !isScrollingDown && !isScrolledPastThreshold;

    // Add/remove class from body for megamenu positioning
    if (shouldShowOffer) {
      document.body.classList.remove('navbar-sticky');
    } else {
      document.body.classList.add('navbar-sticky');
    }

    this.setState({
      showSpecialOffer: shouldShowOffer,
      prevScrollPos: currentScrollPos,
    });
  };

  checkScreenSize = () => {
    this.setState({
      isMobile: window.innerWidth < 768,
    });
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  togglePortfolioDropdown = () => {
    this.setState((prevState) => ({
      showPortfolioDropdown: !prevState.showPortfolioDropdown,
    }));
  };

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      const messages = this.getSpecialOfferText();
      this.setState((prevState) => ({
        currentMessageIndex:
          (prevState.currentMessageIndex + 1) % messages.length,
      }));
    }, 4000);
  };

  pauseCarousel = () => {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
      this.carouselInterval = null;
    }
  };

  resumeCarousel = () => {
    if (!this.carouselInterval) {
      this.startCarousel();
    }
  };

  // Method to determine active menu based on current path
  updateActiveMenu = () => {
    const { pathname } = window.location;

    if (pathname === "/") {
      this.setState({ activeMenu: "home" });
    } else if (pathname.includes("/#contact")) {
      this.setState({ activeMenu: "contact" });
    } else {
      this.setState({ activeMenu: "" });
    }
  };

  getSpecialOfferText = () => {
    return [
      "🚀 Join Waitlist for Passive Leads!",
      "💎 Premium services at unbeatable prices!"
    ];
  };

  // Method to create smooth scroll to top function
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle smooth scrolling to sections
  handleSmoothScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle search input change
  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  // Handle search form submission
  handleSearchSubmit = (e) => {
    e.preventDefault();
    const { searchQuery } = this.state;
    if (searchQuery.trim()) {
      // Simple search functionality - could be expanded later
      alert(`Searching for: ${searchQuery}`);
    }
  };

  render() {
    const {
      isMobile,
      menuOpen,
      showSpecialOffer,
      searchQuery,
      activeMenu,
      currentMessageIndex,
      showPortfolioDropdown,
    } = this.state;

    return (
      <>
        <header className={showSpecialOffer ? "" : "navbar-sticky"}>
          <div className="navbar-container">
            <div
              className="navbar-special-offer"
              onMouseEnter={this.pauseCarousel}
              onMouseLeave={this.resumeCarousel}
            >
              <div className="carousel-container">
                {this.getSpecialOfferText().map((message, index) => (
                  <div
                    key={index}
                    className={`carousel-message ${index === currentMessageIndex ? "active" : ""
                      }`}
                  >
                    {message}
                  </div>
                ))}
              </div>
            </div>
            <nav
              className={`navbar ${showSpecialOffer ? "" : "navbar-no-offer"}`}
            >
              {/* Desktop Layout */}
              {!isMobile && (
                <>
                  <div className="navbar-left-section">
                    {/* Left-side menu items */}
                    <ul className="left-menu">
                      <li className={activeMenu === "home" ? "active" : ""}>
                        <Link
                          to="/#home"
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ activeMenu: "home" });
                            this.handleSmoothScroll("home");
                          }}
                        >
                          Home
                        </Link>
                      </li>
                      <li className={activeMenu === "about" ? "active" : ""}>
                        <Link
                          to="/#about"
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ activeMenu: "about" });
                            this.handleSmoothScroll("about");
                          }}
                        >
                          About
                        </Link>
                      </li>
                      <li
                        className={`portfolio-dropdown-container ${activeMenu === "portfolio" ? "active" : ""}`}
                        ref={(ref) => (this.portfolioDropdownRef = ref)}
                      >
                        <div
                          className="portfolio-dropdown-trigger"
                          onClick={this.togglePortfolioDropdown}
                        >
                          <span>Our Work</span>
                          <ChevronDown
                            size={16}
                            className={`dropdown-arrow ${showPortfolioDropdown ? "rotated" : ""}`}
                          />
                        </div>
                        {showPortfolioDropdown && (
                          <ul className="portfolio-dropdown">
                            <li
                              className={
                                this.state.selectedPortfolioItem === "portfolio" ? "dropdown-item-active" : ""
                              }
                            >
                              <Link
                                to="/#portfolio"
                                onClick={(e) => {
                                  e.preventDefault();
                                  this.setState({ activeMenu: "portfolio", showPortfolioDropdown: false });
                                  this.handleSmoothScroll("portfolio");
                                }}
                              >
                                Portfolio
                              </Link>
                            </li>
                            <li
                              className={
                                this.state.selectedPortfolioItem === "creatives" ? "dropdown-item-active" : ""
                              }
                            >
                              <Link
                                to="/#creatives"
                                onClick={(e) => {
                                  e.preventDefault();
                                  this.setState({ activeMenu: "creatives", selectedPortfolioItem: "creatives", showPortfolioDropdown: false });
                                  this.handleSmoothScroll("creatives");
                                }}
                              >
                                Creatives
                              </Link>
                            </li>
                            <li
                              className={
                                this.state.selectedPortfolioItem === "videos" ? "dropdown-item-active" : ""
                              }
                            >
                              <Link
                                to="/#videos"
                                onClick={(e) => {
                                  e.preventDefault();
                                  this.setState({ activeMenu: "videos", showPortfolioDropdown: false });
                                  this.handleSmoothScroll("videos");
                                }}
                              >
                                Videos
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className={activeMenu === "clients" ? "active" : ""}>
                        <Link
                          to="/#clients"
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ activeMenu: "clients" });
                            this.handleSmoothScroll("clients");
                          }}
                        >
                          Clients
                        </Link>
                      </li>
                      <li className={activeMenu === "contact" ? "active" : ""}>
                        <Link
                          to="/#contact"
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ activeMenu: "contact" });
                            this.handleSmoothScroll("contact");
                          }}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="navbar-logo">
                    <Link to="/" onClick={this.scrollToTop}>
                      <img
                        src="/voat-network-logo.png"
                        alt="Logo"
                        className="nav-logo"
                      />
                    </Link>
                  </div>

                  <div className="navbar-right-section">
                    {/* Search bar */}
                    <div className="navbar-search">
                      <form onSubmit={this.handleSearchSubmit}>
                        <input
                          type="text"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={this.handleSearchChange}
                          aria-label="Search"
                        />
                        <button type="submit" aria-label="Submit search">
                          <Search size={16} />
                        </button>
                      </form>
                    </div>

                    {/* Call button */}
                    <div className="navbar-call-button">
                      <a href="tel:+91 7799770919" className="get-started-btn">
                        <Phone size={16} />
                        <span>Call Us</span>
                      </a>
                    </div>
                  </div>
                </>
              )}

              {/* Mobile Layout */}
              {isMobile && (
                <>
                  {/* Left Section - Hamburger */}
                  <div className="navbar-hamburger" onClick={this.toggleMenu}>
                    {menuOpen ? null : <Menu size={24} />}
                  </div>

                  {/* Center Section - Logo */}
                  <div className="navbar-logo">
                    <Link to="/" onClick={this.scrollToTop}>
                      <img
                        src="/voat-network-logo.png"
                        alt="Logo"
                        className="nav-logo"
                      />
                    </Link>
                  </div>

                  {/* Right Section - Call Button */}
                  <div className="mobile-nav-controls">
                    <div className="navbar-call-button">
                      <a href="tel:+917799770919" className="mobile-auth">
                        <Phone size={20} color="#0a385b" />
                      </a>
                    </div>
                  </div>
                </>
              )}

              {/* Mobile menu */}
              <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <div className="mobile-menu-header">
                  <div className="mobile-menu-close" onClick={this.toggleMenu}>
                    <X size={24} />
                  </div>
                </div>

                <ul className="mobile-menu-items">
                  <li className={activeMenu === "home" ? "active" : ""}>
                    <Link
                      to="/#home"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ activeMenu: "home" });
                        this.toggleMenu();
                        this.handleSmoothScroll("home");
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className={activeMenu === "about" ? "active" : ""}>
                    <Link
                      to="/#about"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ activeMenu: "about" });
                        this.toggleMenu();
                        this.handleSmoothScroll("about");
                      }}
                    >
                      About
                    </Link>
                  </li>
                  <li className={`mobile-dropdown ${activeMenu === "portfolio" ? "active" : ""}`}>
                    <div
                      className="mobile-dropdown-trigger"
                      onClick={this.togglePortfolioDropdown}
                    >
                      <span>Our Work</span>
                      <ChevronDown
                        size={16}
                        className={`dropdown-arrow ${showPortfolioDropdown ? "rotated" : ""}`}
                      />
                    </div>
                    {showPortfolioDropdown && (
                      <ul className="mobile-dropdown-menu">
                        <li>
                          <Link
                            to="/#portfolio"
                            onClick={(e) => {
                              e.preventDefault();
                              this.setState({ activeMenu: "portfolio", showPortfolioDropdown: false });
                              this.toggleMenu();
                              this.handleSmoothScroll("portfolio");
                            }}
                          >
                            Portfolio
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/#creatives"
                            onClick={(e) => {
                              e.preventDefault();
                              this.setState({ activeMenu: "creatives", showPortfolioDropdown: false });
                              this.toggleMenu();
                              this.handleSmoothScroll("creatives");
                            }}
                          >
                            Creatives
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/#videos"
                            onClick={(e) => {
                              e.preventDefault();
                              this.setState({ activeMenu: "videos", showPortfolioDropdown: false });
                              this.toggleMenu();
                              this.handleSmoothScroll("videos");
                            }}
                          >
                            Videos
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className={activeMenu === "clients" ? "active" : ""}>
                    <Link
                      to="/#clients"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ activeMenu: "clients" });
                        this.toggleMenu();
                        this.handleSmoothScroll("clients");
                      }}
                    >
                      Clients
                    </Link>
                  </li>
                  <li className={activeMenu === "contact" ? "active" : ""}>
                    <Link
                      to="/#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ activeMenu: "contact" });
                        this.toggleMenu();
                        this.handleSmoothScroll("contact");
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default NavBar;