

export interface TagProps {
  label: string
  icon: React.ElementType,
  outlined?: boolean
}

export const Tag = (props: TagProps) => {
  return (
    <div className={`flex items-center gap-2 self-start py-1 px-4
  rounded-full text-xs uppercase
  ${props.outlined
        ? 'border border-violet-600'
        : 'bg-gradient-to-r from-violet-700'
      }`}>

        <props.icon size={15} />
        <span>{props.label}</span>
    </div>
  )
}


export default Tag