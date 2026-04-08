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
    <section className="rounded-3xl border border-slate-100 bg-white/90 p-5 shadow-xl shadow-slate-200/40 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onPrevMonth}
          className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          Prev
        </button>
        <h2
          key={monthLabel}
          className="month-flip text-xl font-semibold tracking-wide text-slate-800"
        >
          {monthLabel}
        </h2>
        <button
          type="button"
          onClick={onNextMonth}
          className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {WEEKDAY_LABELS.map((label) => (
          <div key={label} className="pb-1 text-center text-xs font-bold uppercase text-slate-500">
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
