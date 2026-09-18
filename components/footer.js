class classNamefooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="container-fluid">
    <footer class="py-3 px-4">
        <div class="row">
            <div class="col-sm-2 p-1 mb-1">
                <h5>City University</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                        <p>24th Street</p>
                    </li>
                    <li class="nav-item mb-2">
                        <p>+011 473647364</p>
                    </li>
                    <li class="nav-item mb-2">
                        <p>city@university.com</p>
                    </li>
                </ul>
            </div>

            <div class="col-sm-2 p-1 mb-1">
                <h5>Quick Links</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">Campus Life</a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">Career</a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">Committees</a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">Fees</a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">Scholarships</a>
                    </li>
                </ul>
            </div>

            <div class="col-sm-2 p-1 mb-1">
                <h5>Resources</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">Canteen Services</a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">Courses</a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">Health</a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">Quotas</a>
                    </li>
                </ul>
            </div>

            <div class="col-sm-2 p-1 mb-1">
                <h5>Community</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">News & Events</a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">Activities</a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">Tours</a>
                    </li>
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-muted">Blogs</a>
                    </li>
                </ul>
            </div>

            <div class="col-sm-3 p-1 mb-1 offset-1">
                <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of whats new and exciting from Campus.</p>
                    <div class="d-flex w-100 gap-2">
                        <label for="newsletter1" class="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                        <button class="btn btn-primary" type="button">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="d-flex justify-content-between py-0 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
        </div>
    </footer>
</div>

`;
  }
}
customElements.define("site-footer", classNamefooter);
