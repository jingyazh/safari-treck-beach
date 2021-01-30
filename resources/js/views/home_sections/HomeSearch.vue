<template>
  <section id="intro">
    <div class="carousel-containe container text-center introWorlds">
      <div class="carousel-content">
        <h2
          class="txt-shadow wow fadeIn"
          data-wow-delay="1"
          style="visibility: visible; animation-name: fadeIn"
        >
          Choose Best African Safaris
        </h2>
        <h4
          class="text-light intro-text txt-shadow wow bounceIn"
          data-wow-delay="1s"
          style="
            visibility: visible;
            animation-delay: 1s;
            animation-name: bounceIn;
          "
        >
          Offered by Top Tour Operators
        </h4>
        <div class="search_inner text-center">
          <form action="ourtours" method="get">
            <div class="row pl-5 col-md-12 pt-3">
              <div class="col home_input">
                <div class="form-group">
                  <div class="input-group mb-3 filter-pv">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="d-flex">
                      <input
                        type="text"
                        name="destination"
                        class="form-control input3"
                        list="destinationList"
                        placeholder="Destination"
                        v-model="destination"
                        v-on:input="handleDest"
                      />
                      <datalist id="destinationList">
                        <option value="Serengeti"></option>
                        <option value="Ngozi"></option>
                        <option value="Ruaha"></option>
                        <option value="Usangu"></option>
                        <option value="Tarangire"></option>
                        <option value="Ruaha"></option>
                        <option value="Katavi"></option>
                        <option value="Kilimanjaro"></option>
                        <option value="Materuni"></option>
                        <option value="Usambala"></option>
                        <option value="Katavi"></option>
                        <option value="Meru"></option>
                      </datalist>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col home_input">
                <div class="form-group">
                  <div class="input-group mb-3 filter-pv">
                    <i class="fas fa-calendar-alt"></i>
                    <div class="d-flex">
                      <input
                        type="date"
                        name="start_date"
                        placeholder="mm/dd/yyyy"
                        value=""
                        class="form-control input3"
                        id="datehome"
                        v-model="start_date"
                        v-on:input="handleDate"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col home_input">
                <div class="form-group">
                  <div class="input-group mb-3 filter-pv">
                    <i class="fas fa-users"></i>
                    <div class="d-flex">
                      <div class="dropdown">
                        <div
                          class="form-control"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <p-button
                            type="text"
                            readonly
                            id="tooltip-button-1"
                            class="form-control input3"
                            style="background: transparent;"
                            v-on:click="showTravMod = !showTravMod"
                          >
                          Adults {{travellers.adult}}, Children {{travellers.children}}
                          </p-button>
                        </div>
                        <div id="tooltip-button-1"></div>
                        <b-tooltip
                          :showTravMod.sync="showTravMod"
                          target="tooltip-button-1"
                          placement="bottom"
                          variant="secondary"
                        >
                          <div
                            class="travellerTip"
                          >
                            <div class="d-flex pb-2">
                              <div class="d-block">
                                <span> <strong>Adult</strong>(18+ yrs): </span>
                              </div>
                              <div class="d-block">
                                <b-button-group>
                                  <b-button squared @click="handleMinus(1)">-</b-button>
                                  <b-button disabled squared>{{travellers.adult}}</b-button>
                                  <b-button squared @click="handlePlus(1)">+</b-button>
                                </b-button-group>
                              </div>
                            </div>

                            <div class="d-flex">
                              <div class="d-block">
                                <span>
                                  <strong>Children</strong>(0-17yrs):
                                </span>
                              </div>
                              <div class="d-block">
                                <b-button-group>
                                  <b-button squared @click="handleMinus(2)">-</b-button>
                                  <b-button disabled squared>{{travellers.children}}</b-button>
                                  <b-button squared @click="handlePlus(2)">+</b-button>
                                </b-button-group>
                              </div>
                            </div>
                          </div>
                        </b-tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col home_input">
                <div class="form-group">
                  <div class="input-group">
                    <p class="search-btn">Search</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

<script>
export default {
  name: "home-search",
  data: function () {
    return {
      destination: "",
      start_date: "",
      showTravMod: false,
      travellers: {
        adult: 0,
        children: 0
      }
    };
  },
  methods: {
    onOpenSelector: function (event) {
      console.log(event);
      $(this).parent().toggleClass("open");
    },
    handleDest: function (e) {
      console.log(this.destination);
      this.destination = e.target.value;
    },
    handleDate: function (e) {
      console.log(this.start_date);
      this.start_date = e.target.value;
    },
    handleMinus: function(type) {
      if (type == 1){
        this.travellers.adult -= 1;
        this.travellers.adult = Math.max(0, this.travellers.adult)
      }
      if (type == 2){
        this.travellers.children -= 1;
        this.travellers.children = Math.max(0, this.travellers.children)
      }
    },
    handlePlus: function(type) {
      if (type == 1){
        this.travellers.adult += 1;
      }
      if (type == 2){
        this.travellers.children += 1;
        this.travellers.children = Math.min(10, this.travellers.children)
      }
    }
  },
};
</script>