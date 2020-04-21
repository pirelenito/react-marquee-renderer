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

// Extend the JSX type definition to support the deprecated marquee tag
declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLMarqueeElement>, HTMLMarqueeElement>
    }
  }
}
