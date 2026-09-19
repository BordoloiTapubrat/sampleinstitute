class classNameHeaderBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

<div class="container">
    <div class="row py-1">
        <div class="col-sm-12">
            <!-- Centered horizontal list with spacing between items -->
            <ul class="d-flex flex-column flex-md-row list-unstyled gap-3 justify-content-center">
                <li>
                    <a class="navbar-brand" href="#">
                        <img src="images/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" />
                    </a>
                </li>
                <li><a class="nav-link fs-5" href="#">Academics</a></li>
                <li><a class="nav-link fs-5" href="#">Admissions</a></li>
                <li><a class="nav-link fs-5" href="#">Research</a></li>
                <li><a class="nav-link fs-5" href="#">Campus Life</a></li>
                <li>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </li>
            </ul>
        </div>
    </div>
</div>
`;
  }
}
customElements.define("site-headbar", classNameHeaderBar);
