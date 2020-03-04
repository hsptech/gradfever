import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

const MainContainer = styled.div``;
const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  & > div {
    margin-left: 32px;
    margin-top: 36px;
    flex: 0 1 calc(33.3333% - 24px);
    position: relative;
    &:nth-of-type(3n + 1) {
      margin-left: 0px;
    }
  }
`;
const Box = styled.div`
  height: 200px;
  border: 1px solid black;
  display:flex;
  justify-content: space-around;
  align-items:center;
  background-size: cover; 
  background-image:url('https://us.123rf.com/450wm/bubushonok/bubushonok1809/bubushonok180900487/110046310-engineering-backgrounds-mechanical-engineering-drawings-cover-technical-design-blueprints-blue-backg.jpg?ver=6');
  &:hover {
      box-shadow: 5px 5px 5px black;
  }
`;
const BoxHeading = styled.div`
  width: 80%;
  height: 40px;
  border: 2px solid white;
  background-color:white;
  display:flex;
  justify-content: space-around;
  align-items:center;
  font-weight:bold;
`;

class SampleSop extends React.Component {

    constructor(props){
        super(props);
        this.gotoCategory = this.gotoCategory.bind(this);
    }
    gotoCategory(){
        this.props.history.push('/eachCategory')
    }

  render() {
    return (
      <>
        <h2>Categories</h2>
        <MainContainer>
          <div>
            <BoxContainer>
              <Box onClick={this.gotoCategory}>
                  <BoxHeading>
                      <span>Engineering</span>
                  </BoxHeading>
              </Box>
              <Box>
                  <BoxHeading>
                      <span>Medicine</span>
                  </BoxHeading>
              </Box>
              <Box>
                  <BoxHeading>
                      MBA
                  </BoxHeading>
              </Box>
              <Box></Box>
              <Box></Box>
            </BoxContainer>
          </div>
        </MainContainer>
      </>
    );
  }
}

export default withRouter(SampleSop);
