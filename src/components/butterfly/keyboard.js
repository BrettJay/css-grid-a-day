import React from "react"
import Key from "./keycap.module.scss"

require('./pressed.scss');

class ButterflyKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: null };
    this.keyHandling = this.keyHandling.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener("keydown", this.keyHandling)
  }

  keyHandling(e) {
    // Handle event
    console.log("Key code: " + e.keyCode);
    let pressed = document.querySelector(`div[data-keycode='${e.keyCode}']`);
    console.log(pressed);
    this.setState(state => ({
      key: e.keyCode
    }))
  }
  render() {
    return (
      <div className={Key.board}>
        <div className={Key.group}>
          <div className={Key.row1}>
            <div className={Key.cap} key={81} data-keycode="81" data-letter="q">
              <kbd>q</kbd>
            </div>
            <div className={Key.cap} key={87} data-keycode="87" data-letter="w">
              <kbd>w</kbd>
            </div>
            <div className={Key.cap} key={69} data-keycode="69" data-letter="e">
              <kbd>e</kbd>
            </div>
            <div className={Key.cap} key={82} data-keycode="82" data-letter="r">
              <kbd>r</kbd>
            </div>
            <div className={Key.cap} key={84} data-keycode="84" data-letter="t">
              <kbd>t</kbd>
            </div>
            <div className={Key.cap} key={89} data-keycode="89" data-letter="y">
              <kbd>y</kbd>
            </div>
            <div className={Key.cap} key={85} data-keycode="85" data-letter="u">
              <kbd>u</kbd>
            </div>
            <div className={Key.cap} key={73} data-keycode="73" data-letter="i">
              <kbd>i</kbd>
            </div>
            <div className={Key.cap} key={79} data-keycode="79" data-letter="o">
              <kbd>o</kbd>
            </div>
            <div className={Key.cap} key={80} data-keycode="80" data-letter="p">
              <kbd>p</kbd>
            </div>
          </div>
          <div className={Key.row2}>
            <div className={Key.cap} key={65} data-keycode="65" data-letter="a">
              <kbd>a</kbd>
            </div>
            <div className={Key.cap} key={83} data-keycode="83" data-letter="s">
              <kbd>s</kbd>
            </div>
            <div className={Key.cap} key={68} data-keycode="68" data-letter="d">
              <kbd>d</kbd>
            </div>
            <div className={Key.cap} key={70} data-keycode="70" data-letter="f">
              <kbd>f</kbd>
            </div>
            <div className={Key.cap} key={71} data-keycode="71" data-letter="g">
              <kbd>g</kbd>
            </div>
            <div className={Key.cap} key={72} data-keycode="72" data-letter="h">
              <kbd>h</kbd>
            </div>
            <div className={Key.cap} key={74} data-keycode="74" data-letter="j">
              <kbd>j</kbd>
            </div>
            <div className={Key.cap} key={75} data-keycode="75" data-letter="k">
              <kbd>k</kbd>
            </div>
            <div className={Key.cap} key={76} data-keycode="76" data-letter="l">
              <kbd>l</kbd>
            </div>
          </div>
          <div className={Key.row3}>
            <div className={Key.cap} key={90} data-keycode="90" data-letter="z">
              <kbd>z</kbd>
            </div>
            <div className={Key.cap} key={88} data-keycode="88" data-letter="x">
              <kbd>x</kbd>
            </div>
            <div className={Key.cap} key={67} data-keycode="67" data-letter="c">
              <kbd>c</kbd>
            </div>
            <div className={Key.cap} key={86} data-keycode="86" data-letter="v">
              <kbd>v</kbd>
            </div>
            <div className={Key.cap} key={66} data-keycode="66" data-letter="b">
              <kbd>b</kbd>
            </div>
            <div className={Key.cap} key={78} data-keycode="78" data-letter="n">
              <kbd>n</kbd>
            </div>
            <div className={Key.cap} key={77} data-keycode="77" data-letter="m">
              <kbd>m</kbd>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ButterflyKeyboard
