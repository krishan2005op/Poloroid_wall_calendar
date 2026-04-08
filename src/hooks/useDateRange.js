import { useMemo, useState } from 'react'
import {
  compareDates,
  fromISODate,
  isSameDay,
  isWithinRange,
  toISODate,
} from '../utils/dateUtils'

export function useDateRange() {
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null)
  const [hoverDate, setHoverDate] = useState(null)

  const selectionLabel = useMemo(() => {
    if (!selectedStartDate) return 'Pick a start date'
    if (!selectedEndDate) return `Start: ${selectedStartDate}`
    return `${selectedStartDate} to ${selectedEndDate}`
  }, [selectedEndDate, selectedStartDate])

  const onDateClick = (date) => {
    const clicked = toISODate(date)

    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      if (selectedStartDate === clicked && selectedEndDate === clicked) {
        setSelectedStartDate(null)
        setSelectedEndDate(null)
        return
      }
      setSelectedStartDate(clicked)
      setSelectedEndDate(null)
      return
    }

    if (selectedStartDate === clicked && !selectedEndDate) {
      setSelectedStartDate(null)
      setSelectedEndDate(null)
      return
    }

    const start = fromISODate(selectedStartDate)
    const end = date

    if (compareDates(end, start) < 0) {
      setSelectedEndDate(selectedStartDate)
      setSelectedStartDate(clicked)
      return
    }

    setSelectedEndDate(clicked)
  }

  const clearRange = () => {
    setSelectedStartDate(null)
    setSelectedEndDate(null)
    setHoverDate(null)
  }

  const getRangeState = (date) => {
    const start = fromISODate(selectedStartDate)
    const end = fromISODate(selectedEndDate)
    const hover = fromISODate(hoverDate)
    const iso = toISODate(date)

    const isStart = selectedStartDate === iso
    const isEnd = selectedEndDate === iso

    let previewStart = start
    let previewEnd = end

    if (start && !end && hover && !isSameDay(hover, start)) {
      if (compareDates(hover, start) > 0) {
        previewStart = start
        previewEnd = hover
      } else {
        previewStart = hover
        previewEnd = start
      }
    }

    const isInRange =
      !!previewStart && !!previewEnd && isWithinRange(date, previewStart, previewEnd)

    return { isStart, isEnd, isInRange }
  }

  return {
    selectedStartDate,
    selectedEndDate,
    selectionLabel,
    hoverDate,
    setHoverDate,
    onDateClick,
    clearRange,
    getRangeState,
  }
}
