<script lang="ts">
	import { IconBrandAmazon } from '@tabler/icons-svelte'
	export let livro: any = null
</script>

{#if livro}
	<a
		href={livro.link}
		target="_blank"
		class="flex flex-col rounded-md overflow-hidden bg-zinc-800"
	>
		<img
			alt="Imagem do Livro"
			class="h-96 object-cover"
			src={livro.imagem}
		/>
		<div class="flex-1 flex flex-col p-5 gap-2">
			<span class="flex-1 self-center font-bold"
				>{livro.titulo}</span
			>
			<button class="botao azul">
				<IconBrandAmazon size={25} />
				<span>Link do Livro</span>
			</button>
		</div>
	</a>
{/if}
