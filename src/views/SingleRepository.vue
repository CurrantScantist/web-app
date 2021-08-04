<template>
  <div class="test">
    <div class="repository">
        <div class="rep-container">
           <span id='close' onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>
                <button class="close-button">X</button>
            </span> 

            <h1>
                microsoft/vscode
            </h1>
            
            <h5>
                Visual Studio Code is a source-code editor made by Microsoft for Windows, 
                Linux and macOS. Features include support for debugging, syntax highlighting, 
                intelligent code completion, snippets, code refactoring, and embedded Git. Users 
                can change the theme, keyboard shortcuts, preferences, and install extensions that 
                add additional functionality.
            </h5>

            <div class="viz-grid">
                <div class="simple-visualisation1">Viz 1</div>
                <div class="simple-visualisation2">Viz 2</div>
                <div class="wide-visualisation">Viz 3</div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  name: "SingleRepository",
};
</script>
