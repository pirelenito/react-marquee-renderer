# @pirelenito/react-marquee

A blazing fast 🚀 custom React renderer that supports the only tag that matters: `marquee`.

## Usage

This is a drop-in replacement for `react-dom`, so instead of:

```ts
import * as ReactDOM from 'react-dom'
```

Import the `@pirelenito\react-marquee`:

```tsx
import * as ReactDOM from '@pirelenito\react-marquee'
```

As stated, this renderer only supports the `marquee` tag. Any other tag will be actually rendered as a marquee.

For more information on supported props, check the [MDN marquee docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee) and ignore the part that says its obsolete.

## Seriously

If you haven't noticed by now, this project is a joke. It was created as a demo for a presentation at [FikaJS meetup](https://www.meetup.com/FikaJS/events/270022030).

For further reading on the topic of creating custom renderers for React, here are some great resources:

- [Beginners guide to Custom React Renderers | Atul R](https://blog.atulr.com/react-custom-renderer-1/)
- [Building a Custom React Renderer | Sophie Alpert](https://youtu.be/CGpMlWVcHok)
