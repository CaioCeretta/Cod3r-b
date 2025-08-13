<script lang="ts">
	export let serie: any = null
</script>

{#if serie}
	<a
		href="/series/{serie.id}"
		class="flex flex-col rounded-md overflow-hidden border border-zinc-800"
	>
		<img
			src={serie.imagem}
			alt="Imágem da Série de Livros"
			class="h-96 object-cover"
		/>
		<!-- By using the class of object cover together with the wrapper element being flex flex-col, we will maintain the
     aspect ratio of the image, while keeping them all in the same width 
     
     Because this is about an image tag, the rounded-md by itself, wouldn't have be applied, because of this, when we have
     an image and we apply a rounded border into something that envolves this image, we need to use the overflow as hidden
     because what is going over our element that has a rounded border, will be hidden and the image will be rounded after
     this
     -->
		<div class="flex flex-col gap-2 p-5">
			<span class="text-2xl font-black">
				{serie.titulo}
			</span>
			<span class="text-sm text-zinc-400 text-justify">
				{serie.descricao}
			</span>
			<button class="botao vermelho self-end">
				Leia mais
			</button>
		</div>
	</a>
{/if}
