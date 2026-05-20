interface SectionTagProps {
  label: string
  className?: string
}

export default function SectionTag({ label, className = '' }: SectionTagProps) {
  return (
    <div className={`inline-flex items-center gap-3 mb-6 ${className}`}>
      <div className="w-8 h-px bg-green-brand" />
      <span className="text-green-brand text-[0.68rem] font-semibold tracking-[0.3em] uppercase">
        {label}
      </span>
    </div>
  )
}
