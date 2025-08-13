/* This will be the component that is going to bring up some components that are common amongst many pages in this app and
in those cases, we are going to use this component as a template*/

import Logo from "./Logo"

export interface PaginaProps {
  children: React.ReactNode,
  className?: string
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="
        flex flex-col items-center py-10 min-h-screen
        bg-[url('/background.png')] bg-cover bg-center
      ">
      <Logo />
      <main className={`
        container flex-1 flex flex-col justify-center py-10 ${props.className}
      `}>
        {props.children}
      </main>
    </div>
  )
}