class classNameMidrow2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

<div class="row py-1 px-4">
    <div class="alert text-center text-warning fw-bold fs-2 text" role="alert">Discover Your Path</div>

    <div class="col-sm-1"></div>

    <div class="col-sm-10">
        <div class="card-scroll-container pb-3">
            <!-- Card 1 -->
            <div class="card card-scroll-item">
                <img src="images/logo_cs.jpg" class="card-img-top card-scroll-img" alt="logo_cs" />
                <div class="card-body p-2">
                    <p><a href="#" class="link-dark fw-bold">Know More</a></p>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card card-scroll-item">
                <img src="images/logo_civil.jpg" class="card-img-top card-scroll-img" alt="logo_civil" />
                <div class="card-body p-2">
                    <p><a href="#" class="link-dark fw-bold">Know More</a></p>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="card card-scroll-item">
                <img src="images/logo_arts.jpg" class="card-img-top card-scroll-img" alt="logo_arts" />
                <div class="card-body p-2">
                    <p><a href="#" class="link-dark fw-bold">Know More</a></p>
                </div>
            </div>

            <!-- Card 1 -->
            <div class="card card-scroll-item">
                <img src="images/logo_engg.jpg" class="card-img-top card-scroll-img" alt="logo_engineering" />
                <div class="card-body p-2">
                    <p><a href="#" class="link-dark fw-bold">Know More</a></p>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card card-scroll-item">
                <img src="images/logo_finance.jpg" class="card-img-top card-scroll-img" alt="logo_finance" />
                <div class="card-body p-2">
                    <p><a href="#" class="link-dark fw-bold">Know More</a></p>
                </div>
            </div>
        </div>
    </div>

    <div class="col-sm-1"></div>
</div>

`;
  }
}
customElements.define("site-midrow2", classNameMidrow2);
