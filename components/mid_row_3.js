class classNameMid3 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="row py-0 gradient_row3">
    <div class="alert text-center text-warning fw-bold fs-2 text py-1" role="alert">Campus by the Numbers</div>
    <div class="col-sm-12">
        <div class="row">
            <div class="col-sm-3">
                <div class="card bg-transparent border-0">
                    <!-- The overlay container for text -->
                    <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 class="card-title text-warning glow-text-yellow" style="font-size: 4rem">15,000+</h1>
                        <h3 class="card-title text-light">Students</h3>
                    </div>
                </div>
            </div>

            <div class="col-sm-3">
                <div class="card bg-transparent border-0">
                    <!-- The overlay container for text -->
                    <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 class="card-title text-warning glow-text-yellow" style="font-size: 4rem">94%</h1>
                        <h3 class="card-title text-light">Graduate Placement</h3>
                    </div>
                </div>
            </div>

            <div class="col-sm-3">
                <div class="card bg-transparent border-0">
                    <!-- The overlay container for text -->
                    <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 class="card-title text-warning glow-text-yellow" style="font-size: 4rem">12:1</h1>
                        <h3 class="card-title text-light">Student-Faculty Ratio</h3>
                    </div>
                </div>
            </div>

            <div class="col-sm-3">
                <div class="card bg-transparent border-0">
                    <!-- The overlay container for text -->
                    <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 class="card-title text-warning glow-text-yellow" style="font-size: 4rem">1 Crore+</h1>
                        <h3 class="card-title text-light">Research Fundings</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;
  }
}
customElements.define("site-midrow3", classNameMid3);
