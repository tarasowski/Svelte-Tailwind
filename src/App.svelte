<script>
  import Tailwind from './components/Tailwind.svelte';
  import { onMount } from "svelte"
  import Objective from "./components/Objective.svelte"

  export let name;

const handleBack = e => window.open("https://okrstudio.com")

</script>

<style>

:global(body) {
  background-color: #F7F7F8;
}

input[type="text"] {
  font-weight: 600;
}

#back {
  filter: invert(51%) sepia(11%) saturate(469%) hue-rotate(182deg) brightness(84%) contrast(90%);
  cursor: pointer;
}

</style>

<Tailwind />
<div class="container mx-auto my-6">
  <img on:click={handleBack} id="back" class="mb-10" src="./img/arrow-back.svg" alt="">
  <Objective />
  <br>
  <Objective />
  <br>
  <Objective />
</div>
