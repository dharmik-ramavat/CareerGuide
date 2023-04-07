import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import * as React from "react";

export function Btech() {
  return (
    <Box sx={{ margin: 10 }}>
      <h2>Bachelor OF Technology</h2>
      <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
        Bachelor of Technology (BTech) is a professional undergraduate
        engineering degree programme awarded to candidates after they complete
        four years of study in the field. Engineering is one of the most popular
        courses in India and there are many institutes that offer the course to
        aspiring students. Lakhs of students enrol every year in this
        prestigious and most popular course, B.Tech is one of the most sought
        after courses in India. India produces more than 10 lakh engineering
        graduates every year and the engineering education in India comprises
        around 2500 engineering colleges and 1300 polytechnic colleges.
      </Typography>
      <Typography sx={{ fontSize: 16, textAlign: "justify ", marginTop: 5 }}>
        For admissions, the most common BTech entrance examinations are JEE Main
        and JEE Advanced. Along with these national level entrance examinations,
        there are many state and private level entrance examinations that the
        students can attempt for admission to the course. The basic eligibility
        criteria for BTech is class 12 with Physics, Chemistry and Mathematics.
        However, there are additional criteria in every entrance exam and
        institute. Some of the institutes also conduct admission to their
        courses on merit basis i.e. based on marks scored by candidates in their
        class 12 board exams.
      </Typography>

      {/* ----------------------------------------------------------------
    
    Course Highlights 
    --------------------------------------------------------------------*/}
      <Box>
        <h2>B.Tech Course Highlits</h2>
        <TableContainer sx={{ border: "1px solid black" }}>
          <Table sx={{ border: "1px solid black" }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#20dfdf" }}>
                <TableCell
                  sx={{
                    border: "1px solid black",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Particulars
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid black",
                    fontSize: 18,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Name Of Degree
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  Bachelor Of Technology
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Commonly Known as
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>BTech</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Degree Level
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  Undergraduate
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Degree Duration
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  4 years
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Admission Process
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  JEE Main, JEE Advanced, WBJEE, KEAM, AP EAMCET, TS EAMCET
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Annual Course Fee
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  INR 2 to 5 lakh
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Top Institutes
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  Indian Institutes of Technology (IITs), Indian Institute of
                  Information Technology (IIITs), National Institutes of
                  Technology (NITs)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Top Recruiters
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  Google, Apple, Hindustan Unilever Ltd, ISRO,
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Specialization
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  Civil Engineering, Mechanical Engineer, Computer Engineering,
                  Electrical Engineer, Marine Engineer
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* ----------------------------------------------------------------
    
    Course Details 
    --------------------------------------------------------------------*/}

      <Box>
        <Box>
          <h2>All About BTech</h2>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            BTech stands for Bachelor of Technology. It is an undergraduate
            four-year course and is offered in various disciplines and
            specialisations. The admissions to BTech is done on the basis of
            various national-level and state-level entrance exams and candidates
            are given admission on the basis of scores and merit list.
          </Typography>
        </Box>
        <Box>
          <h2>Why Pursue BTech</h2>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            While all these specialisations offer bright prospects for students
            to get into different careers, computer science engineering is
            probably one of the most sought after course nowadays. This is also
            reflected in the high cut off exam scores that top engineering
            colleges including Indian Institutes of Technology (IITs), the
            Indian Institute of Information Technology (IIITs) and the National
            Institutes of Technology (NITs) as well as some of the best central
            universities command from their respective applicants in order to
            enrol them for this programme.
          </Typography>
        </Box>
        <Box>
          <h2>Who Should Pursue BTech</h2>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            B.Tech degrees offer students an opportunity to pursue a career in
            Engineering. The courses are of a duration of 4-years and are spread
            across 8 semesters. There are typically two kinds of engineering
            programme:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
                3-year Lateral-Entry B.Tech after Diploma in Engineering
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
                4-year B.Tech after Class 12
              </Typography>
            </li>
          </ul>
        </Box>
        <Box>
          <h2>What is the difference between BE and BTech degrees?</h2>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            The Bachelor in Engineering (BE) degree programme also offers a
            similar orientation to students as the one offered by a B.Tech
            programme. In fact, such is the degree of overlap in eligibility
            criteria to colleges, subjects taught recruiting companies and even
            job profiles offered during placements, that students often wonder
            whether these are the same. The key difference between these
            two-degree programmes is with respect to the course material taught
            and the orientation of the programme. The following table captures
            the points of differences between these two programmes.
          </Typography>
          <TableContainer sx={{ border: "1px solid black" }}>
            <Table sx={{ border: "1px solid black" }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#20dfdf" }}>
                  <TableCell
                    sx={{
                      border: "1px solid black",
                      fontSize: 18,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    B.E.
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid black",
                      fontSize: 18,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    B.Tech
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ border: "1px solid black" }}>
                    BE is more theoretical and knowledge oriented. It is a study
                    based on theory.
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black" }}>
                    B.Tech is skill/data-oriented. The course is more of
                    application engineering.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ border: "1px solid black" }}>
                    The course deals with engineering aspects of Science
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black" }}>
                    The course deals with the technical aspects of Science
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ border: "1px solid black" }}>
                    The course is applied to develop innovative equipment and
                    useful technical gadgets in Science and Technology.
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black" }}>
                    The course applies the principles of engineering and
                    technology to modify structures and thereby enhance their
                    quality.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <h2>Eligibility Criteria for BTech</h2>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            The basic eligibility requirement for admissions to any BTech
            programme is:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
                Candidates must have passed the class 12 exam from a recognised
                board with Physics, Chemistry and Mathematics as core subjects.
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
                They must also have secured minimum aggregate marks of 60% in
                the above subjects combined.
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
                Most admissions are done based on the student's performance in
                the entrance examination.
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
                The regular mode of entry to BTech course is through entrance
                examination after Class 12th. The other mode is called as
                Lateral-Entry mode, wherein candidates can enrol in BTech
                programme in second year.
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
                Those who possess three-year diploma programme in engineering
                can enroll in BTech under Lateral-Entry Scheme.
              </Typography>
            </li>
          </ul>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            Please note that the BTech eligibility criteria would vary from
            institute to institute
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
