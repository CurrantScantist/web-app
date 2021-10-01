<template>
  <div class="info-item">

    <div class="stat-name">Forks Count:</div>
    <div>
      {{ (forks || 0).toLocaleString() }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Forks:</div>
    <div>{{ (forks || 0).toLocaleString() }}</div>
  </div>

  <div class="info-item">
    <div class="stat-name">Watchers:</div>
    <div>
      {{ (watchers || 0).toLocaleString() }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Issues:</div>
    <div>
      {{ (openIssues || 0).toLocaleString() }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Default Branch:</div>
    <div>{{ defaultBranch }}</div>
  </div>

  <div class="info-item">
    <div class="stat-name">Stargazers:</div>
    <div>
      {{ (stargazers || 0).toLocaleString() }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Project Size:</div>
    <div>{{ (size || 0).toLocaleString() }} KB</div>
  </div>

  <div class="info-item">
    <div class="stat-name">Created on:</div>
    <div>
      {{ parsedCreatedOn }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Last updated:</div>
    <div>
      {{ parsedUpdatedOn }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-item {
  display: flex;
  font-weight: 500;
  font-size: 130%;
  padding: 5px;
  margin: 1%;
}

.stat-name {
  font-weight: 800;
  padding-right: 5px;
}

</style>

<script>
export default {
  props: {
    forks: { type: Number },
    watchers: { type: String },
    stargazers: { type: String },
    openIssues: { type: Number },
    defaultBranch: { type: String },
    size: { type: Number },
    topics: { type: Array },
    createdOn: { type: String },
    lastUpdatedOn: { type: String },
  },
  computed: {
    parsedCreatedOn() {
      return this.processDate(this.createdOn);
    },
    parsedUpdatedOn() {
      return this.processDate(this.lastUpdatedOn);
    },
  },
  methods: {
    processDate(inputDate) {
      if (inputDate) {
        let date = new Date(inputDate);
        let dateFormatter = new Intl.DateTimeFormat("en-AU", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          timeZone: "Australia/Sydney",
          timeZoneName: "short",
          hour12: false,
        });

        return dateFormatter.format(date);
      }
      return "";
    },
  },
};
</script>
