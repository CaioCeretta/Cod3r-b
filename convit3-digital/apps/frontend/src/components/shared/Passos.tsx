'use client'

import React, { useState, type ReactNode } from 'react'

export interface PassosProps {
  labels: string[]
  labelAcao: string
  acao: () => void
  permiteProximoPasso?: boolean[];
  /*
    permiteProximoPasso will be an attribute so we can validate if the step can go on, based on what we have validated
    on the form.

    So for example, if we have 3 steps and 3 children elements being passed, we also need to send three boolean values
    to say if each one of them has been concluded
  */
  children: any
}



export default function Passos(props: PassosProps) {
  const [passoAtual, setPassoAtual] = useState(0)


  function renderizarLabels() {
    return (
      <div className='flex gap-4 select-none'>
        {props.labels.map((label, i) => {
          const selecionado = passoAtual === i

          return (
            <div key={i} className='flex items-center gap-2'>
              <span className={`
                  flex items-center justify-center
                  h-9 w-9 rounded-full
                  ${selecionado ? "bg-white text-black" : "bg-zinc-700 text-zinc-400"}
                `}
              >{i + 1}</span>
              <span className={`
                  ${selecionado ? "text-white" : "text-zinc-600"}
                `}
              >{label}</span>
            </div>
          )
        })}
      </div>
    )
  }

  function semPassoAnterior() {
    return passoAtual === 0
  }

  function semProximoPasso() {
    return passoAtual === props.labels.length - 1
  }

  function passoAnterior() {
    if (semPassoAnterior()) return;
    setPassoAtual(passoAtual - 1)
  }

  function proximoPasso() {
    if (semProximoPasso()) return;
    setPassoAtual(passoAtual + 1)
  }

  /* Why we had to pass the disabled with parentheses and the onClick we didn't

  Calling a function with parentheses (proximoPasso()): When you use parentheses, like proximoPasso(), you're calling
  the function. This will execute the code inside that function and return its result.

  Passing a function reference without parentheses (semProximoPasso): When you pass semProximoPasso without parentheses
  (i.e., just semProximoPasso), you're not calling the function; instead, you're passing a reference to the function.
  This is how functions are typically passed around in React, especially when they're used as event handlers or props.
  
  Key Differences:
  When you use parentheses (semProximoPasso()), you're invoking the function immediately to get its return value (in this
  case, a boolean). When you omit parentheses (proximoPasso), you're passing the reference to the function, which will be
  called when the event occurs (in this case, when the button is clicked). 

  Why you need parentheses r semProximoPasso() and not for proximoPasso:
  semProximoPasso() needs to be called with parentheses because you want to evaluate whether the "Próximo" button should
  be disabled immediately when the component renders.
  proximoPasso doesn't need parentheses because you just want to pass the function reference to the onClick handler.
  React will call it when the button is clicked.
  */

  /* This is basically saying that if we don't pass this props, it will allow */
  const permiteProximoPasso = props.permiteProximoPasso?.[passoAtual] ?? true;

  return (
    <div className='flex-1 flex flex-col gap-10 w-full'>
      <div className='self-center'>
        {renderizarLabels()}
      </div>
      <div>
        {props.children[passoAtual]}
      </div>
      <div className="flex justify-between">
        <button
          disabled={semPassoAnterior()}
          onClick={passoAnterior}
          className={`botao ${semPassoAnterior()
            ? 'bg-zinc-400 cursor-not-allowed opacity-50'
            : 'bg-zinc-700 hover:bg-zinc-600 text-white'} 
            `}
        >
          <span>Anterior</span>
        </button>

        {!semProximoPasso() ? (
          <button
            onClick={proximoPasso}
            disabled={!permiteProximoPasso || semProximoPasso()}
            className={`
              botao
              ${semProximoPasso() || !permiteProximoPasso
              ? 'bg-zinc-400 cursor-not-allowed opacity-50'
              : 'bg-green-700 hover:bg-green-600 text-white'} 
            `}
          >
            Próximo
          </button>) : (
          <button
            disabled={!permiteProximoPasso}
            onClick={props.acao}
            className={`botao bg-green-700 hover:bg-green-600 text-white
            ${!permiteProximoPasso
                ? 'bg-zinc-400 cursor-not-allowed opacity-50'
                : 'bg-green-700 hover:bg-green-600 text-white'} 
            }`}>
            {props.labelAcao}
          </button>
        )}
      </div>
    </div>

  )
}
