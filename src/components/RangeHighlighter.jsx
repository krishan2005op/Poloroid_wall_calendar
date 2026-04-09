function RangeHighlighter({ selectionLabel, clearRange }) {
  return (
    <div className="flex w-full min-w-0 max-w-full flex-col gap-3 rounded-2xl border border-amber-100 bg-amber-50/80 px-3 py-3 text-xs text-slate-600 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:text-sm">
      <p className="min-w-0 break-words font-medium sm:pr-2">{selectionLabel}</p>
      <button
        type="button"
        onClick={clearRange}
        className="inline-flex min-h-10 shrink-0 items-center justify-center self-start rounded-lg bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 active:bg-slate-200 sm:min-h-0 sm:self-auto sm:py-1.5"
      >
        Clear
      </button>
    </div>
  )
}

export default RangeHighlighter
