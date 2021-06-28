import React from 'react';
import styled from 'styled-components';

function TimeInput({ timeInputValue, onChangeTimeInput, timeInputText, timeInputName }) {

  return (
    <Container>
      <ItemContainer>
        <LabelContainer>
          <label>{timeInputText}:</label>
        </LabelContainer>
        <InputContainer>
          <input type="time" step="3600" name={timeInputName} value={timeInputValue} onChange={onChangeTimeInput} />
        </InputContainer>
      </ItemContainer>
    </Container>
  );
}

export default TimeInput;

const Container = styled.div`
background-color: #D3F7FE;
height: 60px;
margin-top: 15px;
padding-top: 10px;
border-radius: 10px;
// display: flex;
// align-items: center;
`

const ItemContainer = styled.div`
display: grid; 
grid-template-columns: 250px 1fr;
grid-column-gap: 5px;
grid-row-gap: 10px;
margin-bottom: 10px;
font-size: 1.2rem;
font-weight: bold;
`

const LabelContainer = styled.div`
// background-color: green;
grid-template-columns: 1/2;
display: flex;
align-items: center;
padding-left: 10px;
`

const InputContainer = styled.div`
// background-color: red;
grid-template-columns: 2/3;
display: flex; 
justify-content: flex-end;
margin-right: 10px;
`