import DateCell from './DateCell'
import { WEEKDAY_LABELS, toISODate } from '../utils/dateUtils'

function CalendarGrid({
  currentMonth,
  monthLabel,
  days,
  getRangeState,
  onDateClick,
  onHoverDate,
  clearHoverDate,
  onPrevMonth,
  onNextMonth,
  noteCounts,
}) {
  return (
    <section className="w-full min-w-0 max-w-full overflow-x-clip rounded-2xl border border-slate-100 bg-white/90 p-3 shadow-xl shadow-slate-200/40 backdrop-blur sm:rounded-3xl sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-2 sm:mb-4 sm:gap-3">
        <button
          type="button"
          onClick={onPrevMonth}
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 active:bg-slate-300 sm:min-h-0 sm:min-w-0 sm:py-1.5"
          aria-label="Previous month"
        >
          Prev
        </button>
        <h2
          key={monthLabel}
          className="month-flip min-w-0 flex-1 truncate px-1 text-center text-base font-semibold tracking-wide text-slate-800 sm:text-lg md:text-xl"
        >
          {monthLabel}
        </h2>
        <button
          type="button"
          onClick={onNextMonth}
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 active:bg-slate-300 sm:min-h-0 sm:min-w-0 sm:py-1.5"
          aria-label="Next month"
        >
          Next
        </button>
      </div>

      <div className="grid w-full min-w-0 grid-cols-7 gap-1 sm:gap-2">
        {WEEKDAY_LABELS.map((label) => (
          <div
            key={label}
            className="min-w-0 pb-0.5 text-center text-[0.65rem] font-bold uppercase leading-tight text-slate-500 sm:pb-1 sm:text-xs"
          >
            {label}
          </div>
        ))}
        {days.map((day) => {
          const rangeState = getRangeState(day.date)
          const dayKey = toISODate(day.date)
          return (
            <DateCell
              key={`${currentMonth.getMonth()}-${dayKey}`}
              day={day}
              {...rangeState}
              onClick={onDateClick}
              onHover={onHoverDate}
              onLeave={clearHoverDate}
              noteCount={noteCounts[dayKey] || 0}
            />
          )
        })}
      </div>
    </section>
  )
}

export default CalendarGrid
