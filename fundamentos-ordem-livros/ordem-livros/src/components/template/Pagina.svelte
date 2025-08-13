<script>
	import AreaLateral from './AreaLateral.svelte'
	import Cabecalho from './Cabecalho.svelte'
	import Rodape from './Rodape.svelte'
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
	<Cabecalho />
	<div
		class="flex gap-5 flex-1 max-w-7xl mx-auto
     w-full p-5"
	>
		<main class="flex-1">
			<slot></slot>
			<!-- The slot component works the same as the outlet in react, so if in our layout we have a page enclosing the children
     the children won't be shown whenever we enter a page with that layout, because for it to show we need to use the <slot>
     component -->
		</main>
		<AreaLateral />
	</div>
	<Rodape />
</div>
