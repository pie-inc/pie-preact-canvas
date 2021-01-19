import { h, render } from 'preact';
import { Provider, connect } from 'unistore/preact';
import { actions } from '../state';
import TransitionGroup from 'preact-transition-group';
import Canvas from './Canvas';
import UI from './UI';

// Our main application
const App = (props) => {
  const { visible } = props;
  return (
    <main>
      <UI />
      <TransitionGroup>
        {visible && <Canvas key="canvas" {...props} />}
      </TransitionGroup>
    </main>
  );
};

export default connect(['foreground', 'background', 'visible'], actions)(App);
