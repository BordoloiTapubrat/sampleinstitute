class classNameMidrow1 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="row py-1 px-4">
    <div class="col-sm-1"></div>

    <div class="col-sm-10">
        <div class="row">
            <div class="col-sm-6">
                <div class="card bg-dark text-white border-0">
                    <!-- The background image -->
                    <img src="images/image_Future_Students.jpg" class="card-img img-fluid" alt="image_Future_Students" />

                    <!-- The overlay container for text -->
                    <div class="card-img-overlay gradient-overlay">
                        <h5 class="card-title fw-bold fs-4 text-warning">Future Students</h5>
                        <p class="card-text fs-3">Your Journey Starts Here</p>
                        <p><a href="#" class="link-warning">Post Graduate</a></p>
                        <p><a href="#" class="link-warning">Under Graduate</a></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="row py-2">
                    <div class="col-sm-6">
                        <div class="card bg-dark text-white border-0">
                            <!-- The background image -->
                            <img src="images/logo_research.jpg" class="card-img img-fluid" alt="logo_research" />

                            <!-- The overlay container for text -->
                            <div
                                class="card-img-overlay d-flex flex-column gradient-overlay justify-content-center align-items-start text-center"
                            >
                                <p><a href="#" class="link-warning fw-bold">Know More</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card bg-dark text-white border-0">
                            <!-- The background image -->
                            <img src="images/logo_collegeNews.jpg" class="card-img img-fluid" alt="logo_collegeNews" />

                            <!-- The overlay container for text -->
                            <div
                                class="card-img-overlay d-flex flex-column gradient-overlay justify-content-center align-items-start text-center"
                            >
                                <p><a href="#" class="link-warning fw-bold">Know More</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row py-3">
                    <div class="col-sm-6">
                        <div class="card bg-dark text-white border-0">
                            <!-- The background image -->
                            <img src="images/logo_campusEvents.jpg" class="card-img img-fluid" alt="logo_campusEvents" />
                            <!-- The overlay container for text -->
                            <div
                                class="card-img-overlay d-flex flex-column gradient-overlay justify-content-center align-items-start text-center"
                            >
                                <p><a href="#" class="link-warning fw-bold">Know More</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card bg-dark text-white border-0">
                            <!-- The background image -->
                            <img src="images/logo_virtual_campus_tour.jpg" class="card-img img-fluid" alt="logo_virtual_campus_tour" />
                            <!-- The overlay container for text -->
                            <div
                                class="card-img-overlay d-flex flex-column gradient-overlay justify-content-center align-items-start text-center"
                            >
                                <p><a href="#" class="link-warning fw-bold">Know More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-1"></div>
    </div>

    `;
  }
}
customElements.define("site-midrow1", classNameMidrow1);
