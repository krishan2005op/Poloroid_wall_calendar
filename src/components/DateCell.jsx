import { isToday, toISODate } from '../utils/dateUtils'

function DateCell({
  day,
  isStart,
  isEnd,
  isInRange,
  noteCount,
  onClick,
  onHover,
  onLeave,
}) {
  const isCurrentMonth = day.isCurrentMonth
  const today = isToday(day.date)
  const baseClasses = isCurrentMonth ? 'text-slate-700' : 'text-slate-300'
  const rangeClasses = isInRange ? 'bg-violet-100/80' : 'bg-white/70'
  const endpointClasses = isStart
    ? 'bg-violet-500 text-white'
    : isEnd
      ? 'bg-rose-500 text-white'
      : ''

  return (
    <button
      type="button"
      onClick={() => onClick(day.date)}
      onMouseEnter={() => onHover(toISODate(day.date))}
      onMouseLeave={onLeave}
      className={`calendar-date-cell relative min-h-[3.25rem] w-full min-w-0 max-w-full rounded-lg border border-slate-100 px-0.5 py-1 text-left transition sm:min-h-16 sm:rounded-xl sm:px-2 ${baseClasses} ${rangeClasses} ${endpointClasses}`}
    >
      <span
        className={`text-xs font-semibold sm:text-sm ${today && !isStart && !isEnd ? 'rounded-sm bg-teal-500 px-1 py-0.5 text-white sm:rounded-md sm:px-1.5' : ''}`}
      >
        {day.date.getDate()}
      </span>

      {noteCount > 0 ? (
        <span className="absolute bottom-2 right-2 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400 shadow" />
      ) : null}
    </button>
  )
}

export default DateCell
