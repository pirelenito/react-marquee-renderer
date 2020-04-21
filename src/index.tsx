import Reconciler from 'react-reconciler'
import hostConfig from './hostConfig'
import { ReactElement } from 'react'

const reconcilerInstance = Reconciler(hostConfig)

const noop = () => {}

/**
 * Custom React render that only supports the `marquee` tag.
 */
export function render(element: ReactElement, renderDom: HTMLElement | null, callback: () => void = noop) {
  if (!renderDom) return

  const container = reconcilerInstance.createContainer(renderDom, false, false)
  reconcilerInstance.updateContainer(element, container, null, callback)
}

// Extend the JSX type definition to bring back the marquee tag
declare global {
  namespace JSX {
    interface HTMLMarqueeIsBackAttributes extends React.HTMLAttributes<HTMLMarqueeElement> {
      behavior?: 'scroll' | 'slide' | 'alternate'
      bgColor?: string
      direction?: 'left' | 'right' | 'up' | 'down'
      height?: string
      hspace?: number
      loop?: number
      scrollAmount?: number
      scrollDelay?: number
      trueSpeed?: boolean
      vspace?: number
      width?: string
    }

    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<HTMLMarqueeIsBackAttributes, HTMLMarqueeElement>
    }
  }
}
