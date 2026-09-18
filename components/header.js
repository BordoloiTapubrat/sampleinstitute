class classNameHeaderBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="navbar-brand" href="#">
                                    <img src="images/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" />
                                </a>
                            </li>
                        </ul>
                        <ul class="navbar-nav mb-2 mb-lg-0 mx-auto">
                            <li class="nav-item">
                                <a class="nav-link fs-5" href="#">Academics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-5" href="#">Admissions</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-5" href="#">Research</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-5" href="#">Campus Life</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
`;
  }
}
customElements.define("site-headbar", classNameHeaderBar);
