# Dado de 6 lados
Dado feito em React com estilização em styled-components.

para rodar basta clonar, instalar e dar npm start

para usar em outra aplicação basta transferir o arquivo dice
fazer a importação onde for utilizar
'import Dice from './dice/Dice';'

E fazer a chamada do componente
'<Dice roll={roll} status={status}/>'

O paramentro roll recebe uma callback para retornar o valor sorteado.
O parametro status recebe uma string para terornar junto da callback.

```
  const [result, setResult] = useState('ROLL')
  const status = ''
  const roll = (value, status) =>{
    setResult(value)
  }
```