import React from 'react';
import './App.css';
import { Table, Container, Jumbotron } from 'reactstrap';

import PrimeNumbers from './Helper/PrimeNumbers'

const App = () => {

  let primeNumbers = PrimeNumbers();

  const TableData = (i, j) => {
    if (i === 0 && j === 0) {
      return <td>x</td>;
    } else if (i === 0 && j > 0) {
      return <td> <strong>{primeNumbers[j - 1]}</strong> </td>;
    } else if (j === 0 && i > 0) {
      return <td> <strong>{primeNumbers[i - 1]}</strong> </td>;
    } else if (i > 0 && j > 0) {
      return <td> {+primeNumbers[i - 1] * +primeNumbers[j - 1]} </td>;
    }
  }



  return (
    <Container>
      <Jumbotron>
        <h1 style={{ textAlign: 'center' }}>Prime Numbers Multiplication Table</h1>
      </Jumbotron>
      <Table striped>
        <tbody>
          {primeNumbers.map((pr, i) => {
            return (
              <tr key={i}>
                {primeNumbers.map((pc, j) => {
                  return TableData(i, j);
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
export default App;
