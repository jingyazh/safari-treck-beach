<template>
  <section class="footer section_gap container-fluid bg-footer footer_design">
    <div class="container-flui bg-footer">
      <footer class="page-footer text-light bg-footer">
        <div class="continer text-center text-md-left mt-2">
          <div class="row">
            <div class="col-md-2 mx-auto mb-4 mt-3 foot-mob">
              <h6 class="text-uppercase font-weight-bold">General</h6>
              <!-- <hr class="bg-danger mt-0 d-inline-block mx-auto" style="width: 50px; height: 2px"> -->
              <ul class="list-unstyled">
                <li class="footerList">
                  <a href="#" class="footerLink">About Us</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Contact us</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Become a Partner</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Operator Login</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Term &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 mx-auto mb-4 mt-3 foot-mob">
              <h6 class="text-uppercase font-weight-bold">Our Tours</h6>
              <!-- <hr class="bg-danger mt-0 d-inline-block mx-auto" style="width: 70px; height: 2px"> -->
              <ul class="list-unstyled">
                <li class="footerList">
                  <a href="#" class="footerLink">Serengeti</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Kilimanjaro</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Zanzibar</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Ngorongoro</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Ruaha</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 mx-auto mb-4 mt-3 foot-mob">
              <h6 class="text-uppercase font-weight-bold">Blog</h6>
              <!-- <hr class="bg-danger mt-0 d-inline-block mx-auto" style="width: 30px; height: 2px"> -->
              <ul class="list-unstyled">
                <li class="footerList">
                  <a href="#" class="footerLink">Serengeti</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Kilimanjaro</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Zanzibar</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Ngorongoro</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Ruaha</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 mx-auto mb-4 mt-3 foot-mob">
              <h6 class="text-uppercase font-weight-bold">Destination</h6>
              <!-- <hr class="bg-danger mt-0 d-inline-block mx-auto" style="width: 70px; height: 2px"> -->
              <ul class="list-unstyled">
                <li class="footerList">
                  <a href="#" class="footerLink">Serengeti</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Kilimanjaro</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Zanzibar</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Ngorongoro</a>
                </li>
                <li class="footerList">
                  <a href="#" class="footerLink">Ruaha</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 mx-auto mb-4 mt-3 foot-mob-contact">
              <h6 class="text-uppercase font-weight-bold">Safari-Trek-Beach</h6>
              <!-- <hr class="bg-danger mt-0 d-inline-block mx-auto" style="width: 70px; height: 2px"> -->
              <ul class="list-unstyled">
                <li class="footerList">
                  <a href="#" class="footerLink"
                    ><i class="fas fa-map-marker-alt mr-3"></i> NSSF Mafao
                    House Arusha Tanzania</a
                  >
                </li>
                <li class="footerList on-mob">
                  <a href="#" class="footerLink"
                    ><i class="fas fa-phone-square mr-2"></i> +255
                    758-022-567</a
                  >
                </li>
                <li class="footerList on-mob-info">
                  <a href="#" class="footerLink"
                    ><i class="fas fa-envelope mr-2"></i>
                    info@africasafaribooking.com</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="container">
            <div class="row d-flex py-4 align-item-center">
              <div class="col-md-12 text-center">
                <a href="#"
                  ><i class="fab fa-facebook-f fa-2x text-light mr-4"></i
                ></a>
                <a href="#"
                  ><i class="fab fa-instagram fa-2x text-light mr-4"></i
                ></a>
                <a href="#"
                  ><i class="fab fa-twitter fa-2x text-light mr-4"></i
                ></a>
                <a href="#"
                  ><i class="fab fa-youtube fa-2x text-light mr-4"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
