'use client'

import { useEffect, useState } from 'react'

function TickerItem({
  label,
  detail,
  value,
  change,
  up,
}: {
  label: string
  detail: string
  value: string
  change: string
  up: boolean
}) {
  return (
    <div className="flex items-center gap-3.5 whitespace-nowrap text-[0.72rem] tracking-[0.08em] text-cream/52">
      <span className="text-green-brand font-semibold uppercase tracking-[0.12em]">
        {label}
      </span>

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
  const [dollar, setDollar] = useState('5,04')

  useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
      .then((res) => res.json())
      .then((data) => {
        const value = Number(data.USDBRL.bid).toFixed(2)
        setDollar(value.replace('.', ','))
      })
      .catch(() => {})
  }, [])

  const items = [
    {
      label: 'Soja',
      detail: 'CBOT',
      value: 'USD 9,42/bu',
      change: '+0,34%',
      up: true,
    },
    {
      label: 'Milho',
      detail: 'CBOT',
      value: 'USD 4,28/bu',
      change: '-0,18%',
      up: false,
    },
    {
      label: 'Soja',
      detail: 'Uberlândia',
      value: 'R$ 114,00/sc',
      change: '+1,2%',
      up: true,
    },
    {
      label: 'Milho',
      detail: 'Uberlândia',
      value: 'R$ 57,00/sc',
      change: '+0,9%',
      up: true,
    },
    {
      label: 'Dólar',
      detail: '',
      value: `R$ ${dollar}`,
      change: '',
      up: true,
    },
    {
      label: 'Soja',
      detail: 'Paracatu',
      value: 'R$ 111,00/sc',
      change: '',
      up: true,
    },
    {
      label: 'Milho',
      detail: 'Coromandel',
      value: 'R$ 60,00/sc',
      change: '',
      up: true,
    },
  ]

  const doubled = [...items, ...items]

  return (
    <div className="bg-bg-mid border-t border-green-brand/25 border-b border-green-brand/[0.08] py-[11px] overflow-hidden">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <TickerItem {...item} />
            <span className="text-green-brand/30 text-[0.55rem]">
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}