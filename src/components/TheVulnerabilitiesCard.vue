<template>
  <div class="meta-container">
    <div class="container-title">Vulnerabilities</div>
    <div class="vulnerability-grid">
      <div class="vulnerability-grid-item vulnerabilityTheme critical">
        <div class="stat-name">Critical:</div>
        <div>
          {{ (vulnerability_breakdown.critical || "N/A").toLocaleString() }}
        </div>
      </div>
      <div class="vulnerability-grid-item vulnerabilityTheme high">
        <div class="stat-name">High:</div>
        <div>
          {{ (vulnerability_breakdown.high || "N/A").toLocaleString() }}
        </div>
      </div>
      <div class="vulnerability-grid-item vulnerabilityTheme medium">
        <div class="stat-name">Medium:</div>
        <div>
          {{ (vulnerability_breakdown.medium || "N/A").toLocaleString() }}
        </div>
      </div>
      <div class="vulnerability-grid-item vulnerabilityTheme low">
        <div class="stat-name">Low:</div>
        <div>{{ (vulnerability_breakdown.low || "N/A").toLocaleString() }}</div>
      </div>
      <div class="vulnerability-grid-item vulnerabilityTheme unknown">
        <div class="stat-name">Unknown:</div>
        <div>
          {{ (vulnerability_breakdown.none || "N/A").toLocaleString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.meta-container {
  background-color: rgba(38, 38, 38, 0.35);
  padding: 1%;
  padding-left: 2%;
  padding-right: 2%;
  margin-bottom: 1%;
  border-radius: var(--viz--radius);
}
.container-title {
  padding: 1%;
  margin-top: 2px;
  font-size: 158%;
  font-weight: 800;
}

.vulnerability-grid {
  display: grid;
  grid-template-columns:
    minmax(0%, 1fr) minmax(0%, 1fr) minmax(0%, 1fr) minmax(0%, 1fr)
    minmax(0%, 1fr);
  grid-template-rows: repeat(1fr);
  grid-gap: 0;
  grid-auto-flow: row;
}

@media only screen and (max-width: 1300px) {
  .vulnerability-grid {
    display: grid;
    grid-template-columns: minmax(0%, 100%) minmax(0%, 100%);
    grid-template-rows: repeat(1fr);
    grid-gap: 0;
    grid-auto-flow: row;
    margin-bottom: 1%;
  }

  .unknown {
    background-color: #8e8e8e;
    grid-column: span 2;
  }
}

.vulnerability-grid-item {
  display: flex;
  font-weight: 500;
  font-size: 100%;
  padding: 5px;
  margin: 5px;
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
    open_issues_count: { type: Number },
    vulnerability_breakdown: { type: Object, default: () => {} },
  },
};
</script>
