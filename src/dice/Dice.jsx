import React, { Component } from "react";
import PropTypes from 'prop-types';
import roll from './img/DADO.png'
import UNO from './img/UNO.png'
import DUO from './img/DUO.png'
import TRE from './img/TRE.png'
import QUATTRO from './img/QUATTRO.png'
import CINQUE from './img/CINQUE.png'
import SEI from './img/SEI.png'

import * as S from './styles/dice'

class  Dice extends Component {
  state ={
    dice: roll
  }

  roll = () => {
    const { roll, status } = this.props
    const value = Math.ceil (Math.random() * 6)
    let dice = roll
    switch (value) {
      case 1:
        dice = UNO
      break;
      case 2:
        dice = DUO
      break;
      case 3:
        dice = TRE
      break;
      case 4:
        dice = QUATTRO
      break;
      case 5:
        dice = CINQUE
      break;
      case 6:
        dice = SEI
      break;
      default:
        break;
    }
    this.setState({dice})
    roll(value, status)
  }
  
  render() {
    const { value } = this.props
    const { dice } = this.state
    return (
      <S.DiceButton disabled={value !== 0} onClick={this.roll}>
        <img src={dice} alt="roll" />
      </S.DiceButton>
    )
  }
}

Dice.propTypes = {
  roll: PropTypes.func,
  stats: PropTypes.string,
};

export default  Dice