<template>
  <div class="info-item">
    <div class="stat-name">Forks Count:</div>
    <div>
      {{ (forks || 0).toLocaleString() }}
    </div>
  </div>

  <div class="info-item vulnerabilityTheme critical">
    <div class="stat-name">Critical Vulnerabilities:</div>
    <div>{{ (forks || 0).toLocaleString() }}</div>
  </div>

  <div class="info-item">
    <div class="stat-name">Forks:</div>
    <div>{{ (forks || 0).toLocaleString() }}</div>
  </div>

  <div class="info-item vulnerabilityTheme high">
    <div class="stat-name">High Vulnerabilities:</div>
    <div>{{ (forks || 0).toLocaleString() }}</div>
  </div>

  <div class="info-item">
    <div class="stat-name">Watchers:</div>
    <div>
      {{ (watchers || 0).toLocaleString() }}
    </div>
  </div>

  <div class="info-item vulnerabilityTheme medium">
    <div class="stat-name">Medium Vulnerabilities:</div>
    <div>{{ (forks || 0).toLocaleString() }}</div>
  </div>

  <div class="info-item">
    <div class="stat-name">Issues:</div>
    <div>
      {{ (openIssues || 0).toLocaleString() }}
    </div>
  </div>

  <div class="info-item vulnerabilityTheme low">
    <div class="stat-name">Low Vulnerabilities:</div>
    <div>{{ (forks || 0).toLocaleString() }}</div>
  </div>

  <div class="info-item">
    <div class="stat-name">Default Branch:</div>
    <div>{{ defaultBranch }}</div>
  </div>

  <div class="info-item vulnerabilityTheme unknown">
    <div class="stat-name">Unknown Vulnerabilities:</div>
    <div>{{ (forks || 0).toLocaleString() }}</div>
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
    <div class="stat-name">Last updated on:</div>
    <div>
      {{ parsedUpdatedOn }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Tags:</div>
    <div>{{ (topics || []).join(", ") }}</div>
  </div>

  <div class="info-item">
    <div class="stat-name">Tags:</div>
    <div>{{ (topics || []).join(", ") }}</div>
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

.vulnerabilityTheme {
  border-radius: var(--viz--radius);
  align-items: center;
  justify-content: center;
}

.critical {
  background-color: #7a002f;
}

.high {
  background-color: #c70039;
}

.medium {
  background-color: #ff7733;
}

.low {
  background-color: #fcad00;
}

.unknown {
  background-color: #8e8e8e;
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
