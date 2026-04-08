function RangeHighlighter({ selectionLabel, clearRange }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-amber-100 bg-amber-50/80 px-4 py-3 text-sm text-slate-600 shadow-sm">
      <p className="font-medium">{selectionLabel}</p>
      <button
        type="button"
        onClick={clearRange}
        className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100"
      >
        Clear
      </button>
    </div>
  )
}

export default RangeHighlighter
