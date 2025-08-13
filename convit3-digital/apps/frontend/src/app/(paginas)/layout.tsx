import Pagina from "@/components/template/Pagina";
import { Toaster } from "@/components/ui/toaster";
import { ProvedorContextoEvento } from "@/data/contexts/ContextoEventos";
import { ProvedorContextoMensagem } from "@/data/contexts/ContextoMensagens";

export default function Layout(props: any) {
  return (
    <ProvedorContextoMensagem>
      <ProvedorContextoEvento>
          <Pagina>
            {props.children}
          </Pagina>
          <Toaster />
      </ProvedorContextoEvento>
    </ProvedorContextoMensagem>
  )
}