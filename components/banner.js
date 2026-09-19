class classNameBanner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

<div class="row py-0">
    <div class="col-sm-1"></div>
    <div class="col-sm-10">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/campus_outdoor.jpg" class="d-block w-100 rounded-4" alt="campus_outdoor" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="images/campus_library.jpg" class="d-block w-100 rounded-4" alt="campus_library" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="images/campus_pathway.jpg" class="d-block w-100 rounded-4" alt="campus_pathway" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="images/campus_games.jpg" class="d-block w-100 rounded-4" alt="campus_games" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="images/campus_lawn.jpg" class="d-block w-100 rounded-4" alt="campus_lawn" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <div class="col-sm-1"></div>
</div>
`;
  }
}
customElements.define("site-banner", classNameBanner);
