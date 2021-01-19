import createStore from 'unistore';

// Your initial global app state
export const store = createStore({
  foreground: '#b4d455',
  background: '#c0ffee',
  visible: true,
});

// Your actions for mutating the global state
export const actions = (store) => ({
  // Turn canvas on / off
  toggleVisible: ({ visible }) => ({ visible: !visible }),

  // Invert canvas colors
  invertColors: ({ foreground, background }) => ({
    foreground: background,
    background: foreground,
  }),
});
