<script>
	import { marked } from 'marked'

	export let autor = null
</script>

{#if autor}
	<div class="flex flex-col gap-5">
		<!-- Object-cover controls how the content will be placed, with this property, the content is resized to completely
     fill the container. This ensures the container is fully covered, but some parts of the content might be cropped to
     maintain the aspect-ratio -->
		<img
			src={autor.imagem}
			class="h-96 object-cover rounded-md"
			alt="Foto do Autor"
		/>
		<article class="prose lg:prose-xl prose-invert">
			{@html marked.parse(autor.biografia)}
		</article>
	</div>
{/if}
