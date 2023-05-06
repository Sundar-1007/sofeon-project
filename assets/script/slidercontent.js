var sliderContentInEngPage = $(`<div class="container overflow-hidden pb-3">
<h1 class="primary-header color-white">Related Projects</h1>
<div class=" slider d-flex row g-5 g-lg-0">
    <div class="col-12 col-md-6 col-lg-12">
        <div class="eng-card card p-3" data-bs-toggle="offcanvas" data-bs-target="#evacuationmodelling"
            aria-controls="offcanvasExample">
            <div class="card-img">
                <img src="assets/img/engimg/eng1.png" alt="">
            </div>
            <div class="card-body text-center p-0">
                <p class="secondary-text font-600 text-uppercase">EVACUATION <br> MODELLING</p>
                <button class="primary-btn mx-auto py-3 px-4" data-bs-toggle="offcanvas"
                    data-bs-target="#evacuationmodelling" aria-controls="offcanvasExample">Read
                    More</button>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-12">
        <div class="eng-card card p-3" data-bs-toggle="offcanvas" data-bs-target="#smokemodelling"
            aria-controls="offcanvasExample">
            <div class="card-img">
                <img src="assets/img/engimg/eng2.png" alt="">
            </div>
            <div class="card-body text-center p-0">
                <p class="secondary-text font-600  text-uppercase">SMOke <br> MODELLING</p>
                <button class="primary-btn mx-auto py-3 px-4">Read More</button>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-12">
        <div class="eng-card card p-3" data-bs-toggle="offcanvas" data-bs-target="#sprinklersystem"
            aria-controls="offcanvasExample">
            <div class="card-img">
                <img src="assets/img/engimg/eng3.png" alt="">
            </div>
            <div class="card-body text-center p-0">
                <p class="secondary-text font-600  text-uppercase">SPRINKLER <br> SYSTEM DESIGN</p>
                <button class="primary-btn mx-auto py-3 px-4">Read More</button>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-12">
        <div class="eng-card card p-3" data-bs-toggle="offcanvas" data-bs-target="#firealarm"
            aria-controls="offcanvasExample">
            <div class="card-img">
                <img src="assets/img/engimg/eng4.png" alt="">
            </div>
            <div class="card-body text-center p-0">
                <p class="secondary-text font-600  text-uppercase">FIRE ALARM <br> SYSTEM DESIGN</p>
                <button class="primary-btn mx-auto py-3 px-4">Read More</button>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-12 d-none d-lg-block">
        <div class="eng-card card p-3" data-bs-toggle="offcanvas" data-bs-target="#firesafety"
            aria-controls="offcanvasExample">
            <div class="card-img">
                <img src="assets/img/engimg/eng5.png" alt="">
            </div>
            <div class="card-body text-center p-0">
                <p class="secondary-text font-600  text-uppercase">FIRE SAFETY <br> ENGINEERING</p>
                <button class="primary-btn mx-auto py-3 px-4">Read More</button>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-12 d-none d-lg-block">
        <div class="eng-card card p-3" data-bs-toggle="offcanvas" data-bs-target="#pressrisation"
            aria-controls="offcanvasExample">
            <div class="card-img">
                <img src="assets/img/engimg/eng6.png" alt="">
            </div>
            <div class="card-body text-center p-0">
                <p class="secondary-text font-600  text-uppercase">PRESSURISATION <br> SYSTEM DESIGN</p>
                <button class="primary-btn mx-auto py-3 px-4">Read More</button>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-12 d-none d-lg-block">
        <div class="eng-card card p-3" data-bs-toggle="offcanvas" data-bs-target="#firesuppression"
            aria-controls="offcanvasExample">
            <div class="card-img">
                <img src="assets/img/engimg/eng7.png" alt="">
            </div>
            <div class="card-body text-center p-0">
                <p class="secondary-text font-600  text-uppercase">FIRE SUPPRESSION <br> SYSTEMS</p>
                <button class="primary-btn mx-auto py-3 px-4">Read More</button>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-12 d-none d-lg-block">
        <div class="eng-card card p-3" data-bs-toggle="offcanvas" data-bs-target="#firestategies"
            aria-controls="offcanvasExample">
            <div class="card-img">
                <img src="assets/img/engimg/eng8.png" alt="">
            </div>
            <div class="card-body text-center p-0">
                <p class="secondary-text font-600  text-uppercase">FIRE <br> strategies</p>
                <button class="primary-btn mx-auto py-3 px-4">Read More</button>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-12 d-none d-lg-block">
        <div class="eng-card card p-3" data-bs-toggle="offcanvas" data-bs-target="#strecturalfire"
            aria-controls="offcanvasExample">
            <div class="card-img">
                <img src="assets/img/engimg/eng9.png" alt="">
            </div>
            <div class="card-body text-center p-0">
                <p class="secondary-text font-600 text-uppercase">STRUCTURAL FIRE <br> ENGINEERING</p>
                <button class="primary-btn mx-auto py-3 px-4">Read More</button>
            </div>
        </div>
    </div>
</div>
</div>`);

var newone = $(`    <section class="container">
<div class="border-3 border-bottom"></div>
</section>
<section class="slidernew ">
<div class="container p-0">
    <div class=" px-2 overflow-hidden py-5">
    <h1 class="primary-header mb-3">Related Projects</h1>
        <div class="owl-carousel2">
            <div class="">
                <a class="card border-0 mb-5" href="#firesafety" data-bs-toggle="offcanvas">
                    <div class="d-flex align-items-center align-items-center">
                        <div class="card-icon p-3">
                            <img src="assets/img/secure-shield.png" alt="">
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                            <h5 class="card-title text-capitalize mb-0">fire safety</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <a class="card left-go border-0 mb-5" href="#firestategies" data-bs-toggle="offcanvas">
                    <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                            <img src="assets/img/secure-shield.png" alt="">
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                            <h5 class="card-title text-capitalize mb-0">fire strategies</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <a class="card left-go border-0 mb-5" href="#smokemodelling" data-bs-toggle="offcanvas">
                    <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                            <img src="assets/img/secure-shield.png" alt="">
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                            <h5 class="card-title text-capitalize mb-0">smoke modelling</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <a class="card border-0 mb-5"  href="#evacuationmodelling" data-bs-toggle="offcanvas">
                    <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                            <img src="assets/img/secure-shield.png" alt="">
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                            <h5 class="card-title text-capitalize mb-0">evacuation modelling</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <a class="card border-0 mb-5" href="#strecturalfire" data-bs-toggle="offcanvas">
                    <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                            <img src="assets/img/secure-shield.png" alt="">
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                            <h5 class="card-title text-capitalize mb-0">structural fire engineering</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <a class="card right-go border-0 mb-5" href="#firesuppression" data-bs-toggle="offcanvas">
                    <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                            <img src="assets/img/secure-shield.png" alt="">
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                            <h5 class="card-title text-capitalize mb-0">fire suppression systems</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <a class="card right-go border-0 mb-5" href="#sprinklersystem" data-bs-toggle="offcanvas">
                    <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                            <img src="assets/img/secure-shield.png" alt="">
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                            <h5 class="card-title text-capitalize mb-0">sprinkler system design</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <a class="card border-0 mb-5" href="#firealarm" data-bs-toggle="offcanvas">
                    <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                            <img src="assets/img/secure-shield.png" alt="">
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                            <h5 class="card-title text-capitalize mb-0">fire alarm system</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <a class="card border-0 mb-5" href="#pressrisation" data-bs-toggle="offcanvas">
                    <div class="d-flex align-items-center">
                        <div class="card-icon p-3">
                            <img src="assets/img/secure-shield.png" alt="">
                        </div>
                        <div class="card-body px-2 py-4 pe-3">
                            <h5 class="card-title text-capitalize mb-0">pressurisation system design</h5>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
</section>`)

$('.offcanvas-body #ourprojects').addClass('ourprojects');
// $('.ourprojects').append(sliderContentInEngPage);
$('.offcanvas-body.new-content').append(newone);



