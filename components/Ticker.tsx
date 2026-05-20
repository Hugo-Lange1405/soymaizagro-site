const items = [
  { label: 'Soja',  detail: 'CBOT',        value: 'USD 9,42/bu',   change: '+0,34%', up: true },
  { label: 'Milho', detail: 'CBOT',         value: 'USD 4,28/bu',   change: '-0,18%', up: false },
  { label: 'Soja',  detail: 'Uberlândia',   value: 'R$ 114,00/sc',  change: '+1,2%',  up: true },
  { label: 'Milho', detail: 'Uberlândia',   value: 'R$ 57,00/sc',   change: '+0,9%',  up: true },
  { label: 'Dólar', detail: '',             value: 'R$ 5,18',       change: '',       up: true },
  { label: 'Soja',  detail: 'Paracatu',     value: 'R$ 108,00/sc',  change: '',       up: true },
  { label: 'Milho', detail: 'Coromandel',   value: 'R$ 59,00/sc',   change: '',       up: true },
]

function TickerItem({ label, detail, value, change, up }: (typeof items)[0]) {
  return (
    <div className="flex items-center gap-3.5 whitespace-nowrap text-[0.72rem] tracking-[0.08em] text-cream/52">
      <span className="text-green-brand font-semibold uppercase tracking-[0.12em]">{label}</span>
      {detail && <span>{detail}</span>}
      <span>{value}</span>
      {change && (
        <span className={up ? 'text-green-400' : 'text-red-400'}>
          {up ? '▲' : '▼'} {change}
        </span>
      )}
    </div>
  )
}

export default function Ticker() {
  const doubled = [...items, ...items] // duplicate for seamless loop

  return (
    <div className="bg-bg-mid border-t border-green-brand/25 border-b border-green-brand/[0.08] py-[11px] overflow-hidden">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <TickerItem {...item} />
            <span className="text-green-brand/30 text-[0.55rem]">◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
