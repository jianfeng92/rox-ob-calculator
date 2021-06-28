import React, { useState } from 'react';
import { NumInput } from '../index';
import styled from 'styled-components';

function OBCalculator() {

  const [baseExpPerMob, setBaseExpPerMob] = useState(0);
  const [jobExpPerMob, setJobExpPerMob] = useState(0);
  const [baseExpPerOB, setBaseExpPerOB] = useState(0);
  const [jobExpPerOB, setJobExpPerOB] = useState(0);
  const [totalBaseEXP, setTotalBaseEXP] = useState(0);
  const [totalJobEXP, setTotalJobEXP] = useState(0);
  const [numOfOB, setNumOfOB] = useState(0);
  const [mobSize, setMobSize] = useState(1);

  //handle functions
  const handleBaseExpPerMob = event => setBaseExpPerMob(event.target.value);
  const handleJobExpPerMob = event => setJobExpPerMob(event.target.value);
  const handleNumOfOB = event => setNumOfOB(event.target.value);
  const handleMobSize = event => setMobSize(event.target.value);

  function handleSubmit(e) {
    e.preventDefault();

    const odinBlessingMultiplier = 5;

    const baseExpPerMobOnMobSize = Math.round(baseExpPerMob / mobSize);
    const jobExpPerMobOnMobSize = Math.round(jobExpPerMob / mobSize);

    setBaseExpPerOB(baseExpPerMob * odinBlessingMultiplier)
    setJobExpPerOB(jobExpPerMob * odinBlessingMultiplier)

    // on Submit calculation
    setTotalBaseEXP((baseExpPerMobOnMobSize * odinBlessingMultiplier) * numOfOB)
    setTotalJobEXP((jobExpPerMobOnMobSize * odinBlessingMultiplier) * numOfOB)
  }
  //end

  return (
    <div>
      <h1>OB EXP CALCULATOR</h1>
      <form className="ob-calculator-form" onSubmit={handleSubmit}>
        <NumInput numInputValue={baseExpPerMob} onChangeNumInput={handleBaseExpPerMob}
          numInputText="Base EXP Per Mob" numInputName="baseEXP" />
        <NumInput numInputValue={jobExpPerMob} onChangeNumInput={handleJobExpPerMob}
          numInputText="Job EXP Per Mob" numInputName="jobEXP" />
        <NumInput numInputValue={numOfOB} onChangeNumInput={handleNumOfOB}
          numInputText="Number of Odin Blessing" numInputName="numOfOB" />

        <Container>
          <ItemContainer>
            <LabelContainer>
              <label>
                Mob Size:
              </label>
            </LabelContainer>
            <InputContainer>
              <select value={mobSize} onChange={handleMobSize}>
                <option value="1">Small</option>
                <option value="2">Medium</option>
                <option value="3">Large</option>
              </select>
            </InputContainer>
          </ItemContainer>
        </Container>
        <ButtonContainer>
          <input type="submit" value="Submit" />
        </ButtonContainer>
      </form>
      <ResultContainer>
        <p>After <b>{numOfOB}</b> Odin Blessing used</p>
        <p>That's <b>{baseExpPerOB}</b> BASE EXP per OB, You will gain a total of <b>{totalBaseEXP}</b> BASE EXP</p>
        <p>That's <b>{jobExpPerOB}</b> JOB EXP per OB, You will gain a total of <b>{totalJobEXP}</b> JOB EXP</p>
      </ResultContainer>
    </div>
  );
}

export default OBCalculator;

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

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`

const ResultContainer = styled.div`
background-color: #86B404;
padding: 10px;
margin-top: 20px;
line-height: 2;
`