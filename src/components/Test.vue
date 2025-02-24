<template>
  <div id="container" style="height: 1000px"></div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import * as monaco from "monaco-editor";
const value = /* set from `myEditor.getModel()`: */ ``;

// Hover on each property to see its docs!
onMounted(() => {
  const myEditor = monaco.editor.create(document.getElementById("container"), {
    value,
    language: "javascript",
    automaticLayout: true,
  });
});
</script>

<style>
.editor {
  width: 100%;
  height: 400px;
}
</style>
