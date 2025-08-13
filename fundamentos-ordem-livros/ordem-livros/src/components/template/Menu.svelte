<script>
  export let titulo = "Menu";
</script>

<div class="flex flex-col gap-3">
  <span class="text-sm font-bold text-zinc-500">{titulo}</span>
  <ul class="flex flex-col">
    <!-- Slot in this case is pretty much like the children we receive as props on functional components, everything we 
    pass inside the tags, are going to be put here on the slot -->
    <slot></slot>
  </ul>
</div>
