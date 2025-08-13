<script>
	/* Is through this $app/stores that well have access to the page and inside that page we have the data and inside this data
  we have the author we've returned.
  
  So basically, when we call the load function from a js or ts file, we are returning an object when we, return something
  from that function.

  Now on our page we can access the object returned from this page object, and using something like

  {$page.data.autor.nome}
  */
	import { page } from '$app/stores'
	import ConteudoAutor from '../../../components/autor/ConteudoAutor.svelte'
</script>

<ConteudoAutor autor={$page.data.autor} />
