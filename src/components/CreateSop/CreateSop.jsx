import React from "react";
//import TextArea from '../TextArea/TextArea';
import styled from "styled-components";

const Label = styled.h2`
  
`;
const TextArea = styled.textarea`
  width: 700px;
  height: 200px;
`;
const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 10px 20px;
  margin: 1.5em auto;
  border-radius: 50em;
  transition: all 0.2s linear;
  font-weight: 400;
  background: transparent;
  border: 1px solid black;
  cursor: pointer;
`;
const Description = styled.p`
    width:50%;
    padding:0px;
    margin-top:0px;
`;
const parts = [
  {
    label: "Introduce yourself, your interests and motivations",
    description:
      "Tell them what you’re interested in, and perhaps, what sparked your desire for graduate study. This should be short and to the point; don’t spend a great deal of time on autobiography."
  },
  {
    label: "Summarize your undergraduate and previous graduate career",
    description: `a) Research you conducted. Indicate with whom, the title of the project, what your responsibilities were, and the outcome. Write technically, or in the style of your discipline. Professors are the people who read these statements.

  b) Important paper or thesis project you completed, as well as anything scholarly beyond your curricular requirements.
  
  c) Work experience, especially if you had any kind of responsibility for testing, designing, researching or interning in an area similar to what you wish to study in graduate school.`
  },
  {
    label: "Discuss the relevance of your recent and current activities",
    description:
      "If you graduated and worked prior to returning to grad school, indicate what you’ve been doing: company or non-profit, your work/design team, responsibilities, what you learned. You can also indicate here how this helped you focus your graduate studies."
  },
  {
    label: "Elaborate on your academic interests",
    description: `Here you indicate what you would like to study in graduate school in enough detail to convince the faculty that you understand the scope of research in their discipline, and are engaged with current research themes.

  a) Indicate the area of your interests. Ideally, pose a question, define a problem, or indicate a theme that you would like to address, and questions that arise from contemporary research. This should be an ample paragraph!
  
  b) Look on the web for information about departments you’re interested in, including professors and their research. Are there professors whose research interests parallel yours? If so, indicate this. Check the specific program; many may require you to name a professor or professors with whom you might work.
  
  c) End your statement in a positive manner, indicating your excitement and readiness for the challenges ahead of you.`
  }
];
class CreateSop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      TotalText: []
    };
    this.next = this.next.bind(this);
    this.download = this.download.bind(this);
  }
  componentDidMount() {}
  next(e) {
    e.preventDefault();
    this.setState({
      currentStep: this.state.currentStep + 1
    });
  }
  download(e) {
    e.preventDefault();
  }
  render() {
    return (
      <>
        <h1>Create Sop</h1>
        <form>
          <FieldWrapper>
            {parts.map((part, index) => {
              return (
                index === this.state.currentStep && (
                <>
                  <Label key={index}>
                    {index + 1}.{part.label}
                  </Label>
                  <Description>
                    {part.description}
                  </Description>
                </>
                )
              );
            })}
            <TextArea />
          </FieldWrapper>
          {this.state.currentStep < parts.length - 1 ? (
            <Button onClick={this.next}>Next</Button>
          ) : (
            <Button onClick={this.download}>Download</Button>
          )}
        </form>
      </>
    );
  }
}

export default CreateSop;
