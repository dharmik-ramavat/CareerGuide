import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";
import Textarea from "@mui/joy/Textarea";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Button from "@mui/joy/Button";
import axios from "axios";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider/Divider";

export default function HorizontalNonLinearStepper() {
  const [image, setImage] = React.useState();

  const [inputData, setInputData] = React.useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    linkedin: "",
    github: "",
    skill: "",
    degree1: "",
    colleage1: "",
    year1: "",
    score1: "",
    degree2: "",
    colleage2: "",
    year2: "",
    score2: "",
    degree3: "",
    colleage3: "",
    year3: "",
    score3: "",
    degree4: "",
    colleage4: "",
    year4: "",
    score4: "",
    carrier: "",
    certificate1: "",
    certificate2: "",
    certificate3: "",
    certificate4: "",
    rname1: "",
    raddress1: "",
    rmobile1: "",
    rname2: "",
    raddress2: "",
    rmobile2: "",
    project1: "",
    project2: "",
    project3: "",
    project4: "",
    image: "",
  });
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = [
    "Personal Information",
    "Technical skill",
    "Add Reference",
    "Carrier Guide",
    "Academic Profile1",
    "Academic Profile2",
    "Academic Profile3",
    "Academic Profile4",
    "Project",
    "Certificates",
    "Image Upload",
  ];

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleChange = (e) => {
    // setName(e.target.name);
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
      // alert("Image uploaded successfully")
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }

  // function uploadImage() {
  //   // imageUrl(image)
  //   if(image == "" || image == null){
  //     alert("Image not selected")
  //   }
  //   else{

  //     fetch("api/resume/upload", {
  //       method: "POST",
  //       crossDomain: true,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allw-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         base64: image,
  //       }),
  //     })
  //     .then((res) => (res.json(),alert("Image Uploaded")))
  //     .then((data) => console.log(data));
  //   }
  // }

  const createUser = (e) => {
    if(image == "" || image == null){
      alert("Image not selected")
    }
    else{

      fetch("api/resume/upload", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allw-Origin": "*",
        },
        body: JSON.stringify({
          base64: image,
        }),
      })
      .then((res) => (res.json(),alert("Image Uploaded")))
      .then((data) => console.log(data));
    }

    const { name, value } = e.target;
    setInputData((inputData) => ({
      ...inputData,
      [name]: value,
    }));
    // e.preventDefault();
    axios
      .post("api/resume/create", {
        name: inputData.name,
        address: inputData.address,
        email: inputData.email,
        mobile: inputData.mobile,
        linkedin: inputData.linkedin,
        github: inputData.github,
        skill: inputData.skill,
        degree: inputData.degree,
        colleage: inputData.colleage,
        year: inputData.year,
        score: inputData.score,
        carrier: inputData.carrier,
        certificate1: inputData.certificate1,
        certificate2: inputData.certificate2,
        certificate3: inputData.certificate3,
        certificate4: inputData.certificate4,
        rname1: inputData.rname1,
        raddress1: inputData.raddress1,
        rmobile1: inputData.rmobile1,
        rname2: inputData.rname2,
        raddress2: inputData.raddress2,
        rmobile2: inputData.rmobile2,
        project1: inputData.project1,
        project2: inputData.project2,
        project3: inputData.project3,
        project4: inputData.project4,
        degree1: inputData.degree1,
        colleage1: inputData.colleage1,
        year1: inputData.year1,
        score1: inputData.score1,
        degree2: inputData.degree2,
        colleage2: inputData.colleage2,
        year2: inputData.year2,
        score2: inputData.score2,
        degree3: inputData.degree3,
        colleage3: inputData.colleage3,
        year3: inputData.year3,
        score3: inputData.score3,
        degree4: inputData.degree4,
        colleage4: inputData.colleage4,
        year4: inputData.year4,
        score4: inputData.score4,
        image: image,
      })
      .then((res) => alert("Infromation submited"))
      .catch((err) => conssole.log(err));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        sx={{
          color: "black",
          border: "1px solid black",
          borderRadius: "0px",
          height:'100px'
        }}
        nonLinear
        activeStep={activeStep}
      >
        {steps.map((label, index) => (
          <Step
            key={label}
            sx={{ color: "black" }}
            completed={completed[index]}
          >
            <StepButton
              color="black"
              sx={{ color: "black" }}
              onClick={handleStep(index)}
            >
              <Typography color={"black"}>{label}</Typography>
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <center>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                {activeStep === 0 && (
                  <div>
                    {/* <Typography>Personal Information</Typography> */}
                    {/* <PersonalInfo inputData={inputData} /> */}

                    <Card variant="outlined" sx={{ width: 320 }}>
                      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
                        Personal Information
                      </Typography>
                      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
                        <FormControl>
                          <FormLabel>Name</FormLabel>
                          <Input
                            placeholder="Enter firstname lastname"
                            name="name"
                            value={inputData.name}
                            onChange={handleChange}
                          />
                          <FormLabel>Address</FormLabel>
                          <Input
                            placeholder="Enter address"
                            name="address"
                            value={inputData.address}
                            onChange={handleChange}
                          />
                          <FormLabel>Email</FormLabel>
                          <Input
                            placeholder="Enter Email"
                            name="email"
                            value={inputData.email}
                            onChange={handleChange}
                          />
                          <FormLabel>Mobile</FormLabel>
                          <Input
                            placeholder="Enter mobile no"
                            name="mobile"
                            value={inputData.mobile}
                            onChange={handleChange}
                          />
                          <FormLabel>Linked In</FormLabel>
                          <Input
                            placeholder="LinkedIn link"
                            name="linkedin"
                            value={inputData.linkedin}
                            onChange={handleChange}
                          />
                          <FormLabel>GitHub Link</FormLabel>
                          <Input
                            placeholder="GitHub link"
                            name="github"
                            value={inputData.github}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Typography>
                      <Divider />

                      <Typography
                        level="h2"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                        }}
                      >
                        <div
                          class="button-container"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleNext}
                          >
                            Next
                          </button>
                        </div>
                      </Typography>
                    </Card>
                  </div>
                )}

                {activeStep === 1 && (
                  <div>
                    {/* <Typography>Technical Skill</Typography> */}
                    {/* <TechnicalSkill /> */}
                    <Card variant="outlined" sx={{ width: 320 }}>
                      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
                        Technical Skill
                      </Typography>
                      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
                        <Textarea
                          minRows={3}
                          placeholder="Write your technical skill"
                          name="skill"
                          value={inputData.skill}
                          onChange={handleChange}
                        />
                      </Typography>
                      <Divider />

                      <Typography
                        level="h2"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                        }}
                      >
                        <div
                          class="button-container"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleNext}
                          >
                            Next
                          </button>
                        </div>
                      </Typography>
                    </Card>
                  </div>
                )}
                {activeStep === 2 && (
                  <div>
                    {/* <Typography>References</Typography> */}
                    {/* <References /> */}
                    <Card variant="outlined" sx={{ width: 320 }}>
                      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
                        Add Reference
                      </Typography>
                      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
                        <FormControl>
                          <h2>Reference 1</h2>
                          <FormLabel>Name</FormLabel>
                          <Input
                            placeholder="Enter firstname lastname"
                            name="rname1"
                            value={inputData.rname1}
                            onChange={handleChange}
                          />
                          <FormLabel>Address</FormLabel>
                          <Input
                            placeholder="Enter address"
                            name="raddress1"
                            value={inputData.raddress1}
                            onChange={handleChange}
                          />
                          <FormLabel>Mobile No</FormLabel>
                          <Input
                            placeholder="Enter mobile no."
                            name="rmobile1"
                            value={inputData.rmobile1}
                            onChange={handleChange}
                          />
                          <h2>Reference 2</h2>
                          <FormLabel>Name</FormLabel>
                          <Input
                            placeholder="Enter firstname lastname"
                            name="rname2"
                            value={inputData.rname2}
                            onChange={handleChange}
                          />
                          <FormLabel>Address</FormLabel>
                          <Input
                            placeholder="Enter address"
                            name="raddress2"
                            value={inputData.raddress2}
                            onChange={handleChange}
                          />
                          <FormLabel>Mobile No</FormLabel>
                          <Input
                            placeholder="Enter mobile no."
                            name="rmobile2"
                            value={inputData.rmobile2}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Typography>
                      <Divider />

                      <Typography
                        level="h2"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                        }}
                      >
                        <div
                          class="button-container"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleNext}
                          >
                            Next
                          </button>
                        </div>
                      </Typography>
                    </Card>
                  </div>
                )}
                {activeStep === 3 && (
                  <div>
                    {/* <Typography>Carrier Objective</Typography> */}
                    {/* <Carrierobjective /> */}
                    <Card variant="outlined" sx={{ width: 320 }}>
                      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
                        Carrier Objective
                      </Typography>
                      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
                        <Textarea
                          minRows={3}
                          placeholder="Write your carrier objective"
                          name="carrier"
                          value={inputData.carrier}
                          onChange={handleChange}
                        />
                      </Typography>
                      <Divider />

                      <Typography
                        level="h2"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                        }}
                      >
                        <div
                          class="button-container"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleNext}
                          >
                            Next
                          </button>
                        </div>
                      </Typography>
                    </Card>
                  </div>
                )}
                {activeStep === 4 && (
                  <div>
                    {/* <Typography>Academic Profile</Typography> */}
                    {/* <Academic /> */}
                    <Card variant="outlined" sx={{ width: 320 }}>
                      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
                        Academic Information 1
                      </Typography>
                      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
                        <FormControl>
                          <FormLabel>Degree</FormLabel>
                          <Input
                            placeholder="Enter degree eg.btech"
                            name="degree1"
                            value={inputData.degree1}
                            onChange={handleChange}
                          />
                          <FormLabel>School/Colleage Name</FormLabel>
                          <Input
                            placeholder="Enter colleage name"
                            name="colleage1"
                            value={inputData.colleage1}
                            onChange={handleChange}
                          />
                          <FormLabel>Year</FormLabel>
                          <Input
                            placeholder="Enter passsing year"
                            name="year1"
                            value={inputData.year1}
                            onChange={handleChange}
                          />
                          <FormLabel>Score</FormLabel>
                          <Input
                            placeholder="Enter grads"
                            name="score1"
                            value={inputData.score123}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Typography>
                      <Divider />

                      <Typography
                        level="h2"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                        }}
                      >
                        <div
                          class="button-container"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleNext}
                          >
                            Next
                          </button>
                        </div>
                      </Typography>
                    </Card>
                  </div>
                )}
                {activeStep === 5 && (
                  <div>
                    {/* <Typography>Academic Profile1</Typography> */}
                    {/* <Academic /> */}
                    <Card variant="outlined" sx={{ width: 320 }}>
                      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
                        Academic Information 2
                      </Typography>
                      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
                        <FormControl>
                          <FormLabel>Degree</FormLabel>
                          <Input
                            placeholder="Enter degree eg.btech"
                            name="degree2"
                            value={inputData.degree2}
                            onChange={handleChange}
                          />
                          <FormLabel>School/Colleage Name</FormLabel>
                          <Input
                            placeholder="Enter colleage name"
                            name="colleage2"
                            value={inputData.colleage2}
                            onChange={handleChange}
                          />
                          <FormLabel>Year</FormLabel>
                          <Input
                            placeholder="Enter passsing year"
                            name="year2"
                            value={inputData.year2}
                            onChange={handleChange}
                          />
                          <FormLabel>Score</FormLabel>
                          <Input
                            placeholder="Enter grads"
                            name="score2"
                            value={inputData.score2}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Typography>
                      <Divider />

                      <Typography
                        level="h2"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                        }}
                      >
                        <div
                          class="button-container"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleNext}
                          >
                            Next
                          </button>
                        </div>
                      </Typography>
                    </Card>
                  </div>
                )}
                {activeStep === 6 && (
                  <div>
                    {/* <Typography>Academic Profile</Typography> */}
                    {/* <Academic /> */}
                    <Card variant="outlined" sx={{ width: 320 }}>
                      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
                        Academic Information 3
                      </Typography>
                      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
                        <FormControl>
                          <FormLabel>Degree</FormLabel>
                          <Input
                            placeholder="Enter degree eg.btech"
                            name="degree3"
                            value={inputData.degree3}
                            onChange={handleChange}
                          />
                          <FormLabel>School/Colleage Name</FormLabel>
                          <Input
                            placeholder="Enter colleage name"
                            name="colleage3"
                            value={inputData.colleage3}
                            onChange={handleChange}
                          />
                          <FormLabel>Year</FormLabel>
                          <Input
                            placeholder="Enter passsing year"
                            name="year3"
                            value={inputData.year3}
                            onChange={handleChange}
                          />
                          <FormLabel>Score</FormLabel>
                          <Input
                            placeholder="Enter grads"
                            name="score3"
                            value={inputData.score3}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Typography>
                      <Divider />

                      <Typography
                        level="h2"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                        }}
                      >
                        <div
                          class="button-container"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleNext}
                          >
                            Next
                          </button>
                        </div>
                      </Typography>
                    </Card>
                  </div>
                )}
                {activeStep === 7 && (
                  <div>
                    {/* <Typography>Academic Profile</Typography> */}
                    {/* <Academic /> */}
                    <Card variant="outlined" sx={{ width: 320 }}>
                      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
                        Academic Information 4
                      </Typography>
                      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
                        <FormControl>
                          <FormLabel>Degree</FormLabel>

                          <Input
                            placeholder="Enter degree eg.btech"
                            name="degree4"
                            value={inputData.degree4}
                            onChange={handleChange}
                          />
                          <FormLabel>School/Colleage Name</FormLabel>
                          <Input
                            placeholder="Enter colleage name"
                            name="colleage4"
                            value={inputData.colleage4}
                            onChange={handleChange}
                          />
                          <FormLabel>Year</FormLabel>
                          <Input
                            placeholder="Enter passsing year"
                            name="year4"
                            value={inputData.year4}
                            onChange={handleChange}
                          />
                          <FormLabel>Score</FormLabel>
                          <Input
                            placeholder="Enter grads"
                            name="score4"
                            value={inputData.score4}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Typography>
                      <Divider />

                      <Typography
                        level="h2"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                        }}
                      >
                        <div
                          class="button-container"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleNext}
                          >
                            Next
                          </button>
                        </div>
                      </Typography>
                    </Card>
                  </div>
                )}

                {activeStep === 8 && (
                  <div>
                    {/* <Typography>Projects</Typography> */}
                    {/* <Project /> */}
                    <Card variant="outlined" sx={{ width: 320 }}>
                      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
                        Projects
                      </Typography>
                      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
                        <FormControl>
                          <FormLabel>Project 1</FormLabel>
                          <Input
                            placeholder="Enter name "
                            name="project1"
                            value={inputData.project1}
                            onChange={handleChange}
                          />
                          <FormLabel>Project 2</FormLabel>
                          <Input
                            placeholder="Enter name "
                            name="project2"
                            value={inputData.project2}
                            onChange={handleChange}
                          />
                          <FormLabel>Project 3</FormLabel>
                          <Input
                            placeholder="Enter name "
                            name="project3"
                            value={inputData.project3}
                            onChange={handleChange}
                          />
                          <FormLabel>Project 4</FormLabel>
                          <Input
                            placeholder="Enter name "
                            name="project4"
                            value={inputData.project4}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Typography>
                      <Divider />

                      <Typography
                        level="h2"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                        }}
                      >
                        <div
                          class="button-container"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleNext}
                          >
                            Next
                          </button>
                        </div>
                      </Typography>
                    </Card>
                  </div>
                )}
                {activeStep === 9 && (
                  <div>
                    {/* <Typography>Certificate</Typography> */}
                    {/* <Certificates /> */}
                    <Card variant="outlined" sx={{ width: 320 }}>
                      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
                        {/* Certificates */}
                      </Typography>
                      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
                        <FormControl>
                          <FormLabel>Certificate 1</FormLabel>
                          <Input
                            placeholder="Enter name "
                            name="certificate1"
                            value={inputData.certificate1}
                            onChange={handleChange}
                          />
                          <FormLabel>Certificate 2</FormLabel>
                          <Input
                            placeholder="Enter name "
                            name="certificate2"
                            value={inputData.certificate2}
                            onChange={handleChange}
                          />
                          <FormLabel>Certificate 3</FormLabel>
                          <Input
                            placeholder="Enter name "
                            name="certificate3"
                            value={inputData.certificate3}
                            onChange={handleChange}
                          />
                          <FormLabel>Certificate 4</FormLabel>
                          <Input
                            placeholder="Enter name "
                            name="certificate4"
                            value={inputData.certificate4}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Typography>
                      <Divider />

                      <Typography
                        level="h2"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                        }}
                      >
                        <div
                          class="button-container"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <button
                            class="button"
                            style={{ padding: "10px 20px" }}
                            onClick={handleNext}
                          >
                            Next
                          </button>
                        </div>
                      </Typography>
                    </Card>
                  </div>
                )}

                {activeStep === 10 && (
                  <div>
                    {/* <Typography>Image Upload</Typography> */}
                    {/* <Imageupload /> */}
                    <Card variant="outlined" sx={{ width: 320 }}>
                      <Typography level="h2" sx={{ fontSize: "lg", mt: 2 }}>
                        Image Upload
                      </Typography>
                      <Typography level="body2" sx={{ mt: 1, mb: 2 }}>
                        <FormControl>
                          <input
                            accept="image/*"
                            type="file"
                            onChange={convertToBase64}
                          />

                          {/* {imageUrl && <img src={imageUrl} alt="uploaded" />} */}
                          {image == "" || image == null ? (
                            ""
                          ) : (
                            <img  src={image} />
                          )}
                          <div
                            class="button-container"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            {/* <button
                              class="button"
                              style={{ padding: "10px 20px" }}
                              onClick={uploadImage}
                            >
                              Upload
                            </button> */}
                            <button
                              class="button"
                              style={{ padding: "10px 20px" }}
                              onClick={handleBack}
                            >
                              Back
                            </button>
                            <button
                              class="button"
                              style={{ padding: "10px 20px" }}
                              onClick={createUser}
                            >
                              Submit
                            </button>
                          </div>
                        </FormControl>
                      </Typography>
                    </Card>
                  </div>
                )}
              </Typography>
            </React.Fragment>
          )}
        </div>
      </center>
    </Box>
  );
}
