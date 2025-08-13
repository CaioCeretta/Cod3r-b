<script lang="ts">
	import '../app.css'
	import Logo from '../components/template/Logo.svelte'
	import Pagina from '../components/template/Pagina.svelte'
	let { children } = $props()
</script>

<Pagina>
	{@render children()}
</Pagina>
