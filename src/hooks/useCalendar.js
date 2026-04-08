import { useMemo, useState } from 'react'
import { addMonths, getMonthLabel, getMonthMatrix } from '../utils/dateUtils'

export function useCalendar(initialDate = new Date()) {
  const [currentMonth, setCurrentMonth] = useState(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1),
  )

  const monthLabel = useMemo(() => getMonthLabel(currentMonth), [currentMonth])
  const monthDays = useMemo(() => getMonthMatrix(currentMonth), [currentMonth])

  const goToPreviousMonth = () => setCurrentMonth((prev) => addMonths(prev, -1))
  const goToNextMonth = () => setCurrentMonth((prev) => addMonths(prev, 1))

  return {
    currentMonth,
    monthLabel,
    monthDays,
    goToPreviousMonth,
    goToNextMonth,
  }
}
