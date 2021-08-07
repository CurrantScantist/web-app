<template>
  <div class="landing-wrapper">
    <div class="hero">
      <div class="one">
        <img src="@/assets/temp-logo.svg" alt="Logo" height="200" />
      </div>
      <div class="two">
        <h1>Compare Open Source Security <nl /> Analyse Vulnerabilities</h1>
      </div>
      <!-- 
      <div class="hero-text">
        
        <p>
          Currant provides the tool's necessary to evaluate your software
          project's security vulnerabilities.
        </p>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing-wrapper {
}

.hero {
  background-color: grey;
  max-width: 1280px;
  padding: 3rem 14rem;
  display: flex;
  align-items: center;
  margin: 0 auto;

  .two > * {
    text-align: left;
  }

  h1 {
    font-size: 40px;
    line-height: 50px;
    font-weight: $weight-bold;
  }

  p {
    font-size: 24px;
    line-height: 10px;
  }
}

.one {
  flex: 1 1 auto;
  background-color: darkkhaki;

  justify-content: center;
}

.two {
  flex: 2 1 auto;
  background-color: darkseagreen;

  justify-content: center;
}
</style>

<script>
export default {
  setup() {},
};
</script>
