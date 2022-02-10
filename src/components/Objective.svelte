<script>
  import { onMount } from "svelte"
let objectiveName = ""
let keyResult1 = ""
let keyResult2 = ""
let keyResult3 = ""
let keyResult4 = ""

let activeField = "OBJECTIVE"

onMount(() => {
})


const handleBack = e => window.open("https://okrstudio.com")

</script>

<style>


input[type="text"] {
  font-weight: 600;
}

#back {
  filter: invert(51%) sepia(11%) saturate(469%) hue-rotate(182deg) brightness(84%) contrast(90%);
  cursor: pointer;
}

</style>

  <div class="flex">
  <div class="bg-white p-6 rounded-xl w-3/5">
    <div class="rounded-md bg-white text-4xl my-4 font-bold text-gray-700 flex justify-between">
      <input on:focus={() => activeField = "OBJECTIVE"} on:click={() => activeField = "OBJECTIVE"} id="first" class="outline-0 placeholder:text-gray-300 placeholder:font-bold" type="text" bind:value={objectiveName} placeholder="Type objective name here">
      <div class="{objectiveName != '' 
        ? 'text-3xl text-green-500'
        : 'text-3xl text-gray-300'
        }"> •  •  •  •  • </div>
   </div>
    <div class="rounded-md bg-white text-xl my-4 text-gray-700 flex justify-between">
      <input on:focus={() => activeField = "KR"} on:click={() => activeField = "KR"} class="outline-0 placeholder:text-gray-300" type="text" bind:value={keyResult1} placeholder="Type key result name here">
      <div class="{keyResult1 != '' 
        ? 'text-3xl text-green-500'
        : 'text-3xl text-gray-300'
        }"> •  •  •  •  • </div>
   </div>
    <div class="rounded-md bg-white text-xl my-4 text-gray-700 flex justify-between">
      <input on:focus={() => activeField = "KR"} on:click={() => activeField = "KR"} class="outline-0 placeholder:text-gray-300" type="text" bind:value={keyResult2} placeholder="Type key result name here">
      <div class="{keyResult2 != '' 
        ? 'text-3xl text-green-500'
        : 'text-3xl text-gray-300'
        }"> •  •  •  •  • </div>
   </div>
    <div class="rounded-md bg-white text-xl my-4 text-gray-700 flex justify-between">
      <input on:focus={() => activeField = "KR"} on:click={() => activeField = "KR"} class="outline-0 placeholder:text-gray-300" type="text" bind:value={keyResult3} placeholder="Type key result name here">
      <div class="{keyResult3 != '' 
        ? 'text-3xl text-green-500'
        : 'text-3xl text-gray-300'
        }"> •  •  •  •  • </div>
   </div>
   <br>
   <br>
   <br>
   <br>
   
  </div>


  <div class="bg-white p-6 rounded-xl w-2/5 ml-6 text-gray-500">
    {#if activeField === "OBJECTIVE"}
    <div class="rounded-md bg-white text-3xl my-4 font-bold flex justify-between">
      <p>Objectives are the “Whats”</p>
   </div>
    <div class="rounded-md bg-white text-xl my-4 flex justify-between">
    <p>Express goals and intents</p>
   </div>
    <div class="rounded-md bg-white text-xl my-4  flex justify-between">
    <p>Are aggressive yet realistic</p>
   </div>
    <div class="rounded-md bg-white text-xl my-4  flex justify-between">
    <p>The achievement must provide clear value</p>
   </div>
    <p>Example: Modernize, relationize, and secure the technology used to run the business of Intuit</p>
    {/if}
    {#if activeField === "KR"}
    <div class="rounded-md bg-white text-3xl my-4 font-bold flex justify-between">
      <p>Key Results are the “Hows”</p>
   </div>
    <div class="rounded-md bg-white text-small my-4 flex justify-between">
    <p>Express measureable milestones, if achieved will advance objective(s)</p>
   </div>
    <div class="rounded-md bg-white text-small my-4  flex justify-between">
    <p>Must describe outcomes, not activities. End-user impact. Don't use words like consult, help, analyze, participate</p>
   </div>
    <div class="rounded-md bg-white text-small my-4  flex justify-between">
    <p>Must include evidence of completition. Examples of evidence are: links to docs, notes, metric reports</p>
   </div>
    <p>Example: Complete migration to new Enterprise Data Warehouse built for real-time access.</p>
    {/if}

   </div>
  </div>
