import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from '../.'

const App = () => {
  const [fast, setFast] = React.useState(false)

  return (
    <marquee
      width="256"
      height="224"
      direction="down"
      behavior="alternate"
      bgColor={fast ? '#E06C75' : '#ECBCBC'}
      scrollAmount={fast ? 30 : 10}
      onClick={() => setFast(previous => !previous)}
    >
      <marquee behavior="alternate" scrollAmount={fast ? 30 : 10}>
        Fika.JS
      </marquee>
    </marquee>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
