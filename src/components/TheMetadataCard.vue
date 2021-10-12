<template>
  <div class="info-item">
    <div class="stat-name">Watchers:</div>
    <div>
      {{ (watchers || 0).toLocaleString() }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Forks:</div>
    <div>{{ (forks || 0).toLocaleString() }}</div>
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
    <div class="stat-name">Updated at:</div>
    <div>
      {{ parsedUpdatedOn }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Stargazers:</div>
    <div>
      {{ (stargazers || 0).toLocaleString() }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Archived:</div>
    <div>
      {{ archived == false ? "No" : archived == true ? "Yes" : "N/A" }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Disabled:</div>
    <div>
      {{ disabled == false ? "No" : disabled == true ? "Yes" : "N/A" }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Top Language:</div>
    <div>
      {{ language || "N/A" }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Total Tags:</div>
    <div>
      {{ (num_tags || 0).toLocaleString() }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Latest Tag:</div>
    <div>
      {{ latest_tag || "N/A" }}
    </div>
  </div>

  <div class="info-item">
    <div class="stat-name">Subscribers:</div>
    <div>
      {{ (subscriber_count || 0).toLocaleString() }}
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
/**
 * A card component for displaying repository metadata.
 */
export default {
  props: {
    /**
     * Number of forks.
     */
    forks: { type: Number },
    /**
     * Number of watchers.
     */
    watchers: { type: Number },
    /**
     * Number of stargazers
     */
    stargazers: { type: Number },
    /**
     * Number of open issues.
     */
    openIssues: { type: Number },
    /**
     * The default repository branch.
     */
    defaultBranch: { type: String },
    /**
     * The size of the repository (in KB)
     */
    size: { type: Number },
    /**
     * The date the repository was created.
     */
    createdOn: { type: String },
    /**
     * The date the repository was last updated.
     */
    lastUpdatedOn: { type: String },
    /**
     * If the repository is archived or not.
     */
    archived: { type: Boolean },
    /**
     * If the repository is disabled or not.
     */
    disabled: { type: Boolean },
    /**
     * The top programming language.
     */
    language: { type: String },
    /**
     * The total number of tagged releases/versions.
     */
    num_tags: { type: Number },
    /**
     * The latest tagged release/version.
     */
    latest_tag: { type: String },
    /**
     * The number of subscribers.
     */
    subscriber_count: { type: Number },
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
    /**
     * Process a date to an Australian timezone.
     *
     * @param {string} inputDate - The date to be converted.
     *
     * @returns {string} inputDate formatted to AEST timezone.
     */
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
