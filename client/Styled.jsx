import styled from 'styled-components';

export const SmallStopButton = styled.div`
  width: 15px;
  background-color: purple;
  height: 70px;
  width: 30px
  border-radius: 0px 15px 15px 0px;
  position: absolute;
  right: 0px;
  top: 0px;
`; 

export const MediumStopButton = styled(SmallStopButton)`
  width: 15px;
  background-color: purple;
  height: 130px;
  width: 30px
  border-radius: 0px 15px 15px 0px;
  position: absolute;
  right: 0px;
  top: 0px;
`; 

export const SmallDeleteButton = styled.div`
  width: 30px;
  height: 70px;
  background-color: red;
  border-radius: 15px 0px 0px 15px;
  posittion: absolute;
  margin-left: -6px;
  margin-top: -5px;
  top: 0px;
`;

export const MediumDeleteButton = styled(SmallDeleteButton)`
  width: 30px;
  height: 130px;
  background-color: red;
  border-radius: 15px 0px 0px 15px;
  position: absolute;
  top: 0px;
  margin-top: 0px;
`;

export const LargeDeleteButton = styled(SmallDeleteButton)`
  width: 30px;
  position: absolute;
  left: 0px;
  height: 190px;
  background-color: red;
  border-radius: 15px 0px 0px 15px;
  top: 0px;
  margin-top: 0px;
  margin-left: 0px;
`;

export const SmallText = styled.div`
  width: 227px;
  height: 48px;
  position: absolute;
  top: 0px;
  left: 31px;
  word-wrap: break-word;
  text-align: center;
`;

export const MediumText = styled(SmallText)`
  width: 227px;
  height: 48px;
  position: absolute;
  top: 0px;
  left: 31px;
  word-wrap: break-word;
  text-align: center;
`;

export const LargeText = styled(SmallText)`
  width: 227px;
  height: 48px;
  position: absolute;
  top: 0px;
  left: 31px;
  word-wrap: break-word;
  text-align: center;
`;

export const SmallTime = styled(SmallText)`
  width: 227px;
  height: 20px;
  position: absolute;
  top: 50px
  left: 31px;
  word-wrap: break-word;
  text-align: center;
`;

export const MediumTime = styled(SmallText)`
  width: 227px;
  height: 20px;
  position: absolute;
  top: 100px;
  left: 31px;
  word-wrap: break-word;
  text-align: center;
`;

export const LargeTime = styled(SmallText)`
  width: 227px;
  height: 20px;
  position: absolute;
  top: 160px
  left: 31px;
  word-wrap: break-word;
  text-align: center;
`;

export const SmallStartButton = styled(SmallStopButton)`
  background-color: green;
`;

export const SmallMoveButton = styled(SmallStopButton)`
  background-color: blue;
`;

export const SmallTask = styled.div`
  background-color: white;
  moz-height: 60px;
  height: 60px;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
  font-size: 0.6em;
  position: relative;
`;

export const MediumTask = styled.div`
  background-color: white;
  height: 120px;
  moz-height: 120px;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
  position: relative;
`;

export const LargeTask = styled.div`
  background-color: white;
  height: 180px;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
  display: flex-col;
  text-align: center;
  position: relative;
`;

export const MediumStartButton = styled(MediumStopButton)`
  background-color: green;
`;

export const MediumShiftButton = styled(MediumStopButton)`
  background-color: blue;
`;

export const LgStopButton = styled.div`
  position: absolute;
  right: 0px;
  width: 15px;
  background-color: purple;
  height: 190px;
  width: 30px
  top: 0px;
  border-radius: 0px 15px 15px 0px;
`;

export const LgStartButton = styled(LgStopButton)`
  background-color: green;
`;

export const LgShiftButton = styled(LgStopButton)`
  background-color: blue;
`;



