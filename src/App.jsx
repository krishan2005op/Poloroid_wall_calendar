import { useMemo } from 'react'
import CalendarGrid from './components/CalendarGrid'
import HeroImage from './components/HeroImage'
import NotesPanel from './components/NotesPanel'
import RangeHighlighter from './components/RangeHighlighter'
import { useCalendar } from './hooks/useCalendar'
import { useDateRange } from './hooks/useDateRange'
import { useLocalStorage } from './hooks/useLocalStorage'

const UNSPLASH_MONTH_IMAGES = [
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
]

function App() {
  const { currentMonth, monthLabel, monthDays, goToPreviousMonth, goToNextMonth } =
    useCalendar()
  const {
    selectedStartDate,
    selectedEndDate,
    selectionLabel,
    setHoverDate,
    onDateClick,
    clearRange,
    getRangeState,
  } = useDateRange()

  const [notes, setNotes] = useLocalStorage('wall-calendar-notes', [])

  const monthImage = UNSPLASH_MONTH_IMAGES[currentMonth.getMonth() % UNSPLASH_MONTH_IMAGES.length]

  const noteCounts = useMemo(() => {
    return notes.reduce((acc, note) => {
      if (note.startDate) acc[note.startDate] = (acc[note.startDate] || 0) + 1
      if (note.endDate && note.endDate !== note.startDate) {
        acc[note.endDate] = (acc[note.endDate] || 0) + 1
      }
      return acc
    }, {})
  }, [notes])

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-violet-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="text-center">
          <h1 className="font-handwritten text-4xl text-slate-800 md:text-5xl">
            Polaroid Wall Calendar
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
            Plan your month with stylish range selection, sticky notes, and memory board vibes.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.05fr_1.4fr_1fr]">
          <HeroImage imageUrl={monthImage} monthLabel={monthLabel} />

          <section className="space-y-4">
            <RangeHighlighter selectionLabel={selectionLabel} clearRange={clearRange} />
            <CalendarGrid
              currentMonth={currentMonth}
              monthLabel={monthLabel}
              days={monthDays}
              getRangeState={getRangeState}
              onDateClick={onDateClick}
              onHoverDate={setHoverDate}
              clearHoverDate={() => setHoverDate(null)}
              onPrevMonth={goToPreviousMonth}
              onNextMonth={goToNextMonth}
              noteCounts={noteCounts}
            />
          </section>

          <NotesPanel
            selectedStartDate={selectedStartDate}
            selectedEndDate={selectedEndDate}
            notes={notes}
            setNotes={setNotes}
          />
        </div>
      </div>
    </main>
  )
}

export default App
