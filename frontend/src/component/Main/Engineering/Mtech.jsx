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

export function Mtech() {
  return (
    <Box sx={{ margin: 10 }}>
      <h2>Master OF Technology</h2>
      <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
        Full form of ME is Master of Engineering and that of MTech is Master of
        Technology. MTech is a professional postgraduate engineering master
        degree programme awarded to candidates after completion of two years of
        study in the discipline of engineering. This degree is predicated in a
        specific branch of engineering. In India, the MTech degree is offered
        across various specializations. These specializations include Civil
        Engineering, Computer Science and Engineering, Chemical Engineering,
        Electrical Engineering, VLSI, Mechanical Engineering, Electronics and
        Communication Engineering etc.
      </Typography>
      <Typography sx={{ fontSize: 16, textAlign: "justify ", marginTop: 5 }}>
        This degree course is offered under the following categories:
      </Typography>
      <ol>
        <li>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            Regular (Full-Time)
          </Typography>
        </li>
        <li>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            Sponsored (Full-Time)
          </Typography>
        </li>
        <li>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            Part Time Mtech
          </Typography>
        </li>
        <li>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            Project Staff (For those who are presently working on sponsored
            projects)
          </Typography>
        </li>
      </ol>
      <Typography sx={{ fontSize: 16, textAlign: "justify ", marginTop: 5 }}>
        This master degree programme is also receptive to working diploma
        holders or diploma holders having work experience for specified period.
      </Typography>
      <Typography sx={{ fontSize: 16, textAlign: "justify ", marginTop: 5 }}>
        In India, this master degree is regulated under the aegis of University
        Grants Commission of India (UGC), All India Council for Technical
        Education (AICTE) and National Board of Accreditation (NBA). Admissions
        to ME/MTech programmes offered by technical colleges and universities in
        India is made through a National level/State-level/Institute-level
        engineering entrance examination.
      </Typography>
      {/* ----------------------------------------------------------------
      
      Course Highlights 
      --------------------------------------------------------------------*/}
      <Box>
        <h2>M.Tech Course Highlits</h2>
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
                  Master Of Technology
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Commonly Known as
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>MTech</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Master Of Technology
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>PG</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Degree Duration
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  2 years
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Course Fee
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  Up to INR 3 lakh
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Average Course Fee
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  Up to INR 7 lakh
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Top Institutes
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  DTU, IIT Kharagpur, IIT Bombay, IIT Madras, IIT Delhi, IIT
                  Kanpur
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Top Recruiters
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  Google, Apple, Microsoft, Qualcomm, EXL, Amazon, ICICI
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: "1px solid black" }}>
                  Specialization
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  Mining, Civil, Electronics, Mechanical, Computer Science,
                  Biotechnology
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
          <h2>All About MTech</h2>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            MTech stands for Master of Technology. It is a postgraduate course
            in various specialisations of engineering. The admissions to this
            course is made on the basis of various state-level and
            national-level entrance exams. This course is designed for
            applicants who wish to specialise in a particular field of knowledge
            under engineering.
          </Typography>
        </Box>
        <Box>
          <h2>Why Pursue MTech</h2>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            Students with an MTech degree can enter in the field of research and
            development. They are offered with wide range of opportunities
            across various specialisations such as Mining, Electrical, Chemical,
            Civil Engineering etc. During this degree, candidates are given
            exposure to industrial training for acquiring practical training in
            their area of specialisation.
          </Typography>
        </Box>
        <Box>
          <h2>Who Should Pursue MTech</h2>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            Those who aspire to acquire specialised skillsets in various
            branches of engineering and establish a promising career in industry
            or research or development, can pursue MTech. Therefore , those who
            aspire to become Principal Engineer, Civil Engineer, Mechanical
            Engineer, Consultant or Research Associate should enrol in this
            programme.
          </Typography>
          <ul>
            <li>
              <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
                3-year Lateral-Entry M.Tech after Diploma in Engineering
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
                4-year M.Tech after Class 12
              </Typography>
            </li>
          </ul>
        </Box>
        <Box>
          <h2>What is the difference between BE and MTech degrees?</h2>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            As mentioned above, ME stands for Master of Engineering while MTech
            stands for Master of Technology. The key difference between these
            two degrees is in terms of their practical impact, course material
            and orientation.
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
                    M.E.
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid black",
                      fontSize: 18,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    M.Tech
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ border: "1px solid black" }}>
                    M.E. is known as Masters of Engineering
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black" }}>
                    M.Tech. is known as Masters of Technology.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ border: "1px solid black" }}>
                    M.E. is more of a knowledge oriented.
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black" }}>
                    M.Tech. is more of a skill oriented.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ border: "1px solid black" }}>
                    M.E. is usually designed for students who plan for
                    employment upon graduation and who are already in the
                    engineering workforce.
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black" }}>
                    M.Tech. is designed to produce Research Engineers who can
                    get the position of “Technologist” in the industries and
                    research institutes.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ border: "1px solid black" }}>
                    M.E. emphasizes on in-depth concept clarification of facts.{" "}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black" }}>
                    M.Tech. emphasizes on practical exposure of conceptual
                    knowledge.M.Tech. emphasizes on practical exposure of
                    conceptual knowledge.{" "}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ border: "1px solid black" }}>
                    M.E. is mostly preferred by private universities or
                    self-affiliated colleges. For instance IIT.{" "}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid black" }}>
                    M.Tech. is offered by colleges affiliated by various
                    universities.{" "}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <h2>Eligibility Criteria for MTech</h2>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            The basic eligibility requirement for admission to MTech programme
            is:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
                Candidates who have completed their BE/MTech degree with a valid
                score in GATE are eligible for MTech degree course.
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
                Candidates who have completed a 5-year program in Science or
                Applied Sciences resulting in the award of a Master of Science
                degree are also eligible for Master of Engineering course.
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
                Admission is based on rank obtained in the entrance test
                conducted for MTech.
              </Typography>
            </li>
          </ul>
          <Typography sx={{ fontSize: 16, textAlign: "justify " }}>
            Please note that the MTech eligibility criteria would vary from
            institute to institute
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
