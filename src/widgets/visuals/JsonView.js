import { JsonView as ExtJsonView } from 'json-view-for-react'

export function JsonView (props) {
  return ExtJsonView({ cssPrefix: 'visuals-jsonview', ...props })
}
