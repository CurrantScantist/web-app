<template>
  <div class="landing-wrapper">
    <svg class="top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#d4e7e2"
        fill-opacity="1"
        d="M0,96L34.3,122.7C68.6,149,137,203,206,197.3C274.3,192,343,128,411,133.3C480,139,549,213,617,224C685.7,235,754,181,823,154.7C891.4,128,960,128,1029,160C1097.1,192,1166,256,1234,282.7C1302.9,309,1371,299,1406,293.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        style="--darkreader-inline-fill: #424e41"
        data-darkreader-inline-fill=""
      ></path>
    </svg>
    <div class="hero">
      <div class="one">
        <img src="@/assets/temp-logo.svg" alt="Logo" height="200" />
      </div>
      <div class="two">
        <h1>Compare Open Source Projects & Analyse Vulnerabilities</h1>
        <h2>Compare and analyse your favourite open source software</h2>
        <router-link class="nav-link" to="/repositories">
          <div class="callToAction">
            <span>Start Analysing</span>
          </div>
        </router-link>
      </div>
      <div class="three">
        <img src="/bubble.png" alt="" />
        <img src="/LOC.png" alt="" />
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style="transform: scaleY(-1)"
    >
      <path
        class="bottom"
        fill="#d4e7e2"
        fill-opacity="1"
        d="M0,160L34.3,138.7C68.6,117,137,75,206,74.7C274.3,75,343,117,411,122.7C480,128,549,96,617,117.3C685.7,139,754,213,823,208C891.4,203,960,117,1029,101.3C1097.1,85,1166,139,1234,186.7C1302.9,235,1371,277,1406,298.7L1440,320L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        style="--darkreader-inline-fill: #424e41"
        data-darkreader-inline-fill=""
      ></path>
    </svg>
  </div>
  <div>
    <the-top-repo-list></the-top-repo-list>
  </div>
</template>

<style lang="scss" scoped>
.callToAction {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25rem;
  font-weight: 750;
  background: #17c08d;
  border-radius: 10px;
  width: auto;
  max-width: 200px;
  height: 40px;
  padding: 22px;
  font-size: 1.25rem;
  margin: 20px;
}

.callToAction:hover {
  background: #179b73;
  box-shadow: 0px 0px 20px 1px #a6bdb6;
}

.hero {
  background: #d4e7e2;
  position: relative;
  padding: 3rem 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 50%;
  margin: -5px 0px;

  .two > * {
    text-align: center;
    line-height: 110%;
  }

  h1 {
    font-size: 60px;
    font-weight: 500;
  }

  p {
    font-size: 24px;
    line-height: 10px;
  }
}

h1 {
  color: #464c58;
  margin-bottom: 20px;
}

h2 {
  color: #8c95aa;
  font-size: 1.7rem;
  margin-bottom: 50px;
}

.landing-wrapper {
  overflow: hidden;
  height: 100%;
  max-height: 100vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
}

.top {
  margin-top: -120px;
  margin-bottom: -20px;
}

svg {
  position: relative;
  z-index: -1;
}

@media screen and (min-width: 1700px) {
  .top {
    margin-top: -150px !important;
    margin-bottom: 0px !important;
  }
}

@media screen and (max-width: 1400px) {
  .landing-wrapper {
    overflow-y: auto;
    margin-top: 50px;
  }

  .top {
    margin-top: -100px;
    margin-bottom: 0px !important;
  }

  .three img {
    width: 300px;
  }
}

@media screen and (max-width: 1750px) {
  h1 {
    font-size: 45px !important;
  }

  .two {
    max-width: 600px !important;
  }

  .three img {
    width: 350px !important;
  }
}

@media screen and (max-width: 600px) {
  .three img {
    width: 350px !important;
  }
}

@media screen and (max-width: 520px) {
  .three img {
    width: 300px !important;
  }
}

.one {
  flex: 1 1 auto;
  justify-content: center;
  max-width: 200px;
}

.two {
  flex: 2 1 auto;
  color: #2ead87;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  margin: 20px;
}

.three {
  position: relative;
  max-width: 700px;
  max-height: 700px;
  min-height: 400px;
  min-width: 500px;
}

.three img {
  background: white;
  width: 400px;
  position: relative;
  padding: 7px;
  margin: 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 50px 10px grey;
  z-index: 10;
}

.three img:nth-child(1) {
  position: relative;
  left: 20%;
  bottom: 20%;
}

.three img:nth-child(2) {
  position: absolute;
  top: 20%;
  right: 20%;
}
</style>

<script>
import TheTopRepoList from '@/components/TheTopRepoList.vue';
export default {
  components: { TheTopRepoList },
};
</script>
