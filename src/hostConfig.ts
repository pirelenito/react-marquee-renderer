import { HostConfig } from 'react-reconciler'

type Type = 'marquee'

interface Callback {
  (): void
}

interface NoTimeout {
  (): void
}

interface Props {
  onClick?: Callback
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

type Instance = HTMLElement
type Container = Instance
type TextInstance = Text
type HydratableInstance = Instance
type PublicInstance = Instance | TextInstance

interface HostContext {
  type?: Type
}

type UpdatePayload = boolean

const noop = () => {}

const hostConfig: HostConfig<
  Type,
  Props,
  Container,
  Instance,
  TextInstance,
  HydratableInstance,
  PublicInstance,
  HostContext,
  UpdatePayload,
  null,
  NodeJS.Timeout,
  NoTimeout
> = {
  isPrimaryRenderer: true,
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,

  now: Date.now,
  setTimeout: window.setTimeout,
  clearTimeout: window.clearTimeout,
  noTimeout: noop,

  scheduleDeferredCallback: function(callback, options) {
    return window.setTimeout(callback, options ? options.timeout : 0)
  },
  cancelDeferredCallback: function(id) {
    return window.clearTimeout(id)
  },

  getRootHostContext: function() {
    let rootContext = {}
    return rootContext
  },
  getChildHostContext: function(_, fiberType) {
    let context = { type: fiberType }
    return context
  },
  shouldSetTextContent: function() {
    return false
  },
  createTextInstance: function(newText) {
    return document.createTextNode(newText)
  },
  createInstance: function(type, newProps) {
    if (process.env.NODE_ENV !== 'production') {
      if (type !== 'marquee') {
        console.error(`Unsuported element type: '${type}'. Only 'marquee' is supported. 🙈`)
      }
    }

    const instance = document.createElement('marquee') as HTMLMarqueeElement

    if (newProps.behavior) {
      instance.behavior = newProps.behavior
    }
    if (newProps.bgColor) {
      instance.bgColor = newProps.bgColor
    }
    if (newProps.direction) {
      instance.direction = newProps.direction
    }
    if (newProps.height) {
      instance.height = newProps.height
    }
    if (newProps.hspace) {
      instance.hspace = newProps.hspace
    }
    if (newProps.loop) {
      instance.loop = newProps.loop
    }
    if (newProps.scrollAmount) {
      instance.scrollAmount = newProps.scrollAmount
    }
    if (newProps.scrollDelay) {
      instance.scrollDelay = newProps.scrollDelay
    }
    if (newProps.trueSpeed) {
      instance.trueSpeed = newProps.trueSpeed
    }
    if (newProps.vspace) {
      instance.vspace = newProps.vspace
    }
    if (newProps.width) {
      instance.width = newProps.width
    }
    if (newProps.onClick) {
      instance.addEventListener('click', newProps.onClick)
    }

    return instance
  },
  appendInitialChild: function(parent, child) {
    parent.appendChild(child)
  },
  finalizeInitialChildren: function() {
    return false
  },
  prepareForCommit: function() {},
  resetAfterCommit: function() {},
  commitMount: function() {},
  appendChildToContainer: function(parent, child) {
    parent.appendChild(child)
  },
  prepareUpdate: function() {
    return true
  },
  commitUpdate: function(instance: HTMLMarqueeElement, _, __, oldProps, newProps) {
    if (newProps.behavior !== oldProps.behavior) {
      instance.behavior = newProps.behavior || ''
    }
    if (newProps.bgColor !== oldProps.bgColor) {
      instance.bgColor = newProps.bgColor || ''
    }
    if (newProps.direction !== oldProps.direction) {
      instance.direction = newProps.direction || ''
    }
    if (newProps.height !== oldProps.height) {
      instance.height = newProps.height || ''
    }
    if (newProps.hspace !== oldProps.hspace) {
      instance.hspace = newProps.hspace || 0
    }
    if (newProps.loop !== oldProps.loop) {
      instance.loop = newProps.loop || -1
    }
    if (newProps.scrollAmount !== oldProps.scrollAmount) {
      instance.scrollAmount = newProps.scrollAmount || 6
    }
    if (newProps.scrollDelay !== oldProps.scrollDelay) {
      instance.scrollDelay = newProps.scrollDelay || 85
    }
    if (newProps.trueSpeed !== oldProps.trueSpeed) {
      instance.trueSpeed = newProps.trueSpeed || false
    }
    if (newProps.vspace !== oldProps.vspace) {
      instance.vspace = newProps.vspace || 0
    }
    if (newProps.width !== oldProps.width) {
      instance.width = newProps.width || ''
    }
    if (newProps.onClick !== oldProps.onClick) {
      if (oldProps.onClick) instance.removeEventListener('click', oldProps.onClick)
      if (newProps.onClick) instance.addEventListener('click', newProps.onClick)
    }

    return
  },
  commitTextUpdate: function(textInstance, _, newText) {
    textInstance.nodeValue = newText
  },
  appendChild: function(parentInstance, child) {
    parentInstance.appendChild(child)
  },
  insertBefore: function(parentInstance, child, beforeChild) {
    parentInstance.insertBefore(child, beforeChild)
  },
  removeChild: function(parentInstance, child) {
    parentInstance.removeChild(child)
  },
  insertInContainerBefore: function(container, child, beforeChild) {
    container.insertBefore(child, beforeChild)
  },
  removeChildFromContainer: function(container, child) {
    container.removeChild(child)
  },
  resetTextContent: function(domElement) {
    domElement.textContent = ''
  },
  shouldDeprioritizeSubtree: function() {
    // never deprioritize the marquee
    return false
  },
  getPublicInstance: function(instance) {
    return instance
  },
}

export default hostConfig
