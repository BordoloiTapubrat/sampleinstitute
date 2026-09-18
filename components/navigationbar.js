class classNameNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<nav class="navbar sticky-top navbar-expand-lg my-custom-navbar py-0">
    <div class="container-fluid">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="navbar-brand" href="#">
                        <img src="images/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Faculty</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Alumni</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link applynowbtn" href="#">Apply Now</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;
  }
}
customElements.define("site-navbar", classNameNavbar);
