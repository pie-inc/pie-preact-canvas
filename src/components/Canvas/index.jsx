/** @jsx h */
import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import tweenr from 'tweenr';

import './style.css';

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.canvas = null;
  }

  componentDidMount() {
    this.canvas = document.querySelector('canvas');
    this.tween = tweenr();
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    this._rafId = window.requestAnimationFrame(this.draw);

    this.animateIn();
  }

  componentWillUnmount() {
    this.tween.dispose();
    window.cancelAnimationFrame(this._rafId);
    this._rafId = null;
  }

  animateIn() {
    this.tween.cancel().to(this.radius, {
      value: 0.25,
      delay: 0.15,
      duration: 1,
      ease: 'expoOut',
    });
  }

  componentWillLeave(done) {
    this.tween
      .cancel()
      .to(this.radius, {
        value: 0.0,
        delay: 0.0,
        duration: 1,
        ease: 'expoOut',
      })
      .on('complete', done);
  }

  draw = () => {
    this._rafId = window.requestAnimationFrame(this.draw);

    const { background, foreground } = this.props;
    const { width, height } = this.canvas;

    this.ctx.fillStyle = background;
    this.ctx.fillRect(0, 0, width, height);
  };

  render() {
    return <canvas />;
  }
}
