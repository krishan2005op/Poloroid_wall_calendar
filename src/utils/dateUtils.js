export const WEEKDAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export function startOfDay(date) {
  const value = new Date(date)
  value.setHours(0, 0, 0, 0)
  return value
}

export function toISODate(date) {
  return startOfDay(date).toISOString().split('T')[0]
}

export function fromISODate(value) {
  if (!value) return null
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export function isSameDay(dateA, dateB) {
  if (!dateA || !dateB) return false
  return toISODate(dateA) === toISODate(dateB)
}

export function isToday(date) {
  return isSameDay(date, new Date())
}

export function isWithinRange(target, start, end) {
  if (!target || !start || !end) return false
  const time = startOfDay(target).getTime()
  const startTime = startOfDay(start).getTime()
  const endTime = startOfDay(end).getTime()
  return time >= startTime && time <= endTime
}

export function compareDates(dateA, dateB) {
  return startOfDay(dateA).getTime() - startOfDay(dateB).getTime()
}

export function getMonthLabel(date) {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export function addMonths(date, amount) {
  const result = new Date(date)
  result.setMonth(result.getMonth() + amount)
  return result
}

export function getMonthMatrix(currentMonth) {
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const firstDay = new Date(year, month, 1)
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const prevMonthDays = new Date(year, month, 0).getDate()

  const firstWeekday = (firstDay.getDay() + 6) % 7
  const matrix = []

  for (let i = 0; i < 42; i += 1) {
    const dayNumber = i - firstWeekday + 1
    let date
    let isCurrentMonth = true

    if (dayNumber < 1) {
      date = new Date(year, month - 1, prevMonthDays + dayNumber)
      isCurrentMonth = false
    } else if (dayNumber > daysInMonth) {
      date = new Date(year, month + 1, dayNumber - daysInMonth)
      isCurrentMonth = false
    } else {
      date = new Date(year, month, dayNumber)
    }

    matrix.push({ date, isCurrentMonth })
  }

  return matrix
}
