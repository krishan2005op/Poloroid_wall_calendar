import { useMemo, useState } from 'react'

function NotesPanel({ selectedStartDate, selectedEndDate, notes, setNotes }) {
  const [draft, setDraft] = useState('')
  const [editingId, setEditingId] = useState(null)

  const canCreateNote = Boolean(selectedStartDate)

  const noteTargetText = useMemo(() => {
    if (!selectedStartDate) return 'Select a date or range to attach a note'
    if (!selectedEndDate) return `For ${selectedStartDate}`
    return `For ${selectedStartDate} to ${selectedEndDate}`
  }, [selectedEndDate, selectedStartDate])

  const saveNote = () => {
    const content = draft.trim()
    if (!content || !selectedStartDate) return

    if (editingId) {
      setNotes((prev) =>
        prev.map((note) => (note.id === editingId ? { ...note, content } : note)),
      )
      setEditingId(null)
      setDraft('')
      return
    }

    setNotes((prev) => [
      {
        id: crypto.randomUUID(),
        startDate: selectedStartDate,
        endDate: selectedEndDate,
        content,
      },
      ...prev,
    ])
    setDraft('')
  }

  const startEdit = (note) => {
    setEditingId(note.id)
    setDraft(note.content)
  }

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setDraft('')
    }
  }

  return (
    <aside className="min-w-0 space-y-4">
      <div className="sticky-note rounded-2xl p-3 shadow-lg sm:p-4">
        <p className="mb-2 text-xs font-semibold text-amber-900 sm:text-sm">{noteTargetText}</p>
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          rows={4}
          placeholder="Write a note..."
          className="w-full resize-none rounded-lg border border-amber-200 bg-amber-50/80 p-2 text-sm text-slate-700 outline-none ring-0 placeholder:text-amber-700/60 focus:border-amber-400"
        />
        <button
          type="button"
          onClick={saveNote}
          disabled={!canCreateNote}
          className="mt-3 min-h-11 w-full rounded-lg bg-amber-500 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600 active:bg-amber-700 disabled:cursor-not-allowed disabled:bg-amber-300 sm:min-h-0 sm:w-auto"
        >
          {editingId ? 'Update Note' : 'Add Note'}
        </button>
      </div>

      <div className="space-y-3">
        {notes.map((note) => (
          <article key={note.id} className="sticky-note-alt rounded-2xl p-3 shadow-md sm:p-4">
            <p className="break-words text-xs font-semibold text-slate-500">
              {note.endDate ? `${note.startDate} to ${note.endDate}` : note.startDate}
            </p>
            <p className="mt-2 break-words text-sm text-slate-700">{note.content}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => startEdit(note)}
                className="min-h-10 rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-200 active:bg-slate-300 sm:min-h-0 sm:px-2 sm:py-1"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => deleteNote(note.id)}
                className="min-h-10 rounded-md bg-rose-100 px-3 py-2 text-xs font-medium text-rose-700 transition hover:bg-rose-200 active:bg-rose-300 sm:min-h-0 sm:px-2 sm:py-1"
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </aside>
  )
}

export default NotesPanel
