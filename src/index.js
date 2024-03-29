import EventWrapper from './EventWrapper'
import BackgroundWrapper from './BackgroundWrapper'

export const components = {
  eventWrapper: EventWrapper,
  timeSlotWrapper: BackgroundWrapper,
  dateCellWrapper: BackgroundWrapper,
}

export { default as Calendar } from './Calendar'
export { DateLocalizer } from './localizer'
export { default as dateFnsLocalizer } from './localizers/date-fns'
export { default as move } from './utils/move'
export { views as Views, navigate as Navigate } from './utils/constants'
