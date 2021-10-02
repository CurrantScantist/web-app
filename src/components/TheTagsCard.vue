<template>
 <div class="meta-container">
    <div class="container-title">Tags</div>
    <div class = "tag-grid">
        <div v-html="addTagsHTML"></div>
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

    .tag-grid {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1%;
    }

</style>

<script>
export default {
  props: {
    tags: { type: Array },
    colors: {type: Object},
  },
  computed: {
      addTagsHTML() {
        return this.addTags();
      },   
  },
  methods: {
    addTags(){
        let tagsDiv = document.createElement("div");
        this.$props.tags.forEach((item) => {
            let tagDiv = document.createElement("div");
            tagDiv.innerText = item;
            tagDiv.style.backgroundColor = this.$props.colors[item];
            tagDiv.style.display = "flex";
            tagDiv.style.fontWeight = 800;
            tagDiv.style.fontSize = "100%";
            tagDiv.style.padding = "5px 8px";
            tagDiv.style.margin = "3px";
            tagDiv.style.borderRadius = "18px";
            tagDiv.style.alignItems = "center";
            tagDiv.style.justifyContent = "center";
            tagsDiv.append(tagDiv);
      })
      console.log(tagsDiv)
      return tagsDiv
    }
  }
};
</script>
