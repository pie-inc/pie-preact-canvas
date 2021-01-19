import { h, Component, Fragment } from 'preact';
import { Provider, connect } from 'unistore/preact';
import { actions } from '../../state';

import * as styles from './UI.css';

class UI extends Component {
  render() {
    const { invertColors } = this.props;

    return (
      <header class={styles.options}>
        <nav>
          <button onclick={invertColors}>Swap Colors</button>
        </nav>
      </header>
    );
  }
}

export default connect(['background'], actions)(UI);
