<template>
  <div class="meta-container">
    <div class="container-title">Vulnerabilities</div>
    <div class="vulnerability-grid">
        <div class="vulnerability-grid-item vulnerabilityTheme critical">
        <div class="stat-name">Critical:</div>
        <div>{{ (open_issues_count || 0).toLocaleString() }}</div>
        </div>
        <div class="vulnerability-grid-item vulnerabilityTheme high">
        <div class="stat-name">High:</div>
        <div>{{ (open_issues_count || 0).toLocaleString() }}</div>
        </div>
        <div class="vulnerability-grid-item vulnerabilityTheme medium">
        <div class="stat-name">Medium:</div>
        <div>{{ (open_issues_count || 0).toLocaleString() }}</div>
        </div>
        <div class="vulnerability-grid-item vulnerabilityTheme low">
        <div class="stat-name">Low:</div>
        <div>{{ (open_issues_count || 0).toLocaleString() }}</div>
        </div>
        <div class="vulnerability-grid-item vulnerabilityTheme unknown">
        <div class="stat-name">Unknown:</div>
        <div>{{ (open_issues_count || 0).toLocaleString() }}</div>
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
  grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr) minmax(0%, 1fr) minmax(0%, 1fr) minmax(0%, 1fr);
  grid-template-rows: repeat(1fr);
  grid-gap: 0.5rem;
  grid-auto-flow: row;
}

.vulnerability-grid-item {
  display: flex;
  font-weight: 500;
  font-size: 100%;
  padding: 5px;
  margin: 2%;
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
    open_issues_count: { type: Number }
  }
};
</script>
