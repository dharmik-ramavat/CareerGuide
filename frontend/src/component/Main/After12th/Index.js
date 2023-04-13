import React from "react";
import "./index3.css";
import whatdo from "./after12_1.JPG";
import career from "./career.JPG";
function Index() {
  const data = [
    {
      id: 1,
      name: "B Sc Statistics/ Bachelor of Statistics (B Stat.)",
    },
    {
      id: 2,
      name: "B Sc in Data Science",
    },
    {
      id: 3,
      name: "Actuarial Sciences",
    },
    {
      id: 4,
      name: "Ethical Hacking",
    },
    {
      id: 5,
      name: "Bachelor of Architecture (B Arch)",
    },
    {
      id: 6,
      name: "Bachelor of Planning (B Plan)",
    },
    {
      id: 7,
      name: "B Sc Mathematics/ Bachelor of Mathematics (B Math)",
    },
    {
      id: 8,
      name: "B Sc Computer Science/ IT",
    },
    {
      id: 9,
      name: "B.Sc. (Hons) Economics & Finance (3 year degree course in select colleges)",
    },
    {
      id: 10,
      name: "B Sc Operational Research",
    },
    {
      id: 11,
      name: "B Sc Physical Science (3 year degree course in select colleges)",
    },
    {
      id: 12,
      name: "B Sc Electronics/ Instrumentation Science",
    },
    {
      id: 13,
      name: "Bachelor of Design (Animation/ Industrial Design/ Product Design)",
    },
    {
      id: 14,
      name: "B Sc Aviation / Commercial Aviation/ Aviation Technology with Pilot Studies/ (Hons) Aviation Management / Aviation Science",
    },
    {
      id: 15,
      name: "B Tech / BE / B Sc Nautical Science/ Applied Nautical Science/ Ship Building & Repair/ Naval Architecture & Offshore Engineering/ Harbour & Ocean Engineering/ Shipping",
    },
    {
      id: 16,
      name: "B Sc Forensic Science",
    },
    {
      id: 17,
      name: "B Des in Fashion Design/ Fashion Technology/ Accessory Design",
    },
    {
      id: 18,
      name: "B Sc Nuclear Medicine / Nuclear Science/ Nuclear Medicine Technology/ B Tech Nuclear Science & Engineering",
    },
    {
      id: 19,
      name: "B. Tech in Aeronautical Engineering",
    },
    {
      id: 20,
      name: "Exclusive option: 4 year B Sc (Research) at IISc, Bangalore (only through KVPY, 60% in JEE Main/ JEE Advanced/ NEET).",
    },
  ];

  const data2 = [
    {
      id: 1,
      name: "Accountancy and Auditing",
    },
    {
      id: 2,
      name: "Accountancy and Business Management",
    },
    {
      id: 3,
      name: "Accounting Technologies and Information Systems",
    },
    {
      id: 4,
      name: "Accountancy & Business Statistics",
    },
    {
      id: 5,
      name: "Accounting and Finance",
    },
    {
      id: 6,
      name: "Advertising Management",
    },
    {
      id: 7,
      name: "Agribusiness Management",
    },
    {
      id: 8,
      name: "Automobile Business & Marketing Management",
    },
    {
      id: 9,
      name: "Aviation Management (Business)",
    },
    {
      id: 10,
      name: "Business Administration (B.B.A.)",
    },
    {
      id: 11,
      name: "Banking and Financial Services",
    },
    {
      id: 12,
      name: "Business Economics (Business Management)",
    },
    {
      id: 13,
      name: "Business Support Operations Management",
    },
    {
      id: 14,
      name: "Brand Management",
    },
    {
      id: 15,
      name: "Chartered Accountancy",
    },
    {
      id: 16,
      name: "Computer Applications",
    },
    {
      id: 17,
      name: "Community and Public Systems Management",
    },
    {
      id: 18,
      name: "Company Secretary",
    },
    {
      id: 19,
      name: "Cost & Management Accounting",
    },
    {
      id: 20,
      name: "Digital Marketing",
    },
    {
      id: 21,
      name: "Entrepreneurship",
    },
    {
      id: 22,
      name: "Event Management (Business)",
    },
    {
      id: 23,
      name: "Financial Accounting",
    },
    {
      id: 24,
      name: "Financial Management",
    },
    {
      id: 25,
      name: "Healthcare Management",
    },
    {
      id: 26,
      name: "Hospital Administration & Management",
    },
    {
      id: 27,
      name: "Human Resources Management",
    },
    {
      id: 28,
      name: "Hospitality Management & Services",
    },
    {
      id: 29,
      name: "Hotel Operations Management & Services",
    },
    {
      id: 30,
      name: "Information Technology Management",
    },
    {
      id: 31,
      name: "International Business and Foreign Trade",
    },
    {
      id: 32,
      name: "Innovation & Entrepreneurship",
    },
    {
      id: 33,
      name: "International Transportation & Logistics Management",
    },
    {
      id: 34,
      name: "Inventory Management",
    },
    {
      id: 35,
      name: "Logistics",
    },
    {
      id: 36,
      name: "Leisure and Recreation Management",
    },
  ];

  const data3 = [
    { id: 1, name: "Computer Applications (Computer Graphics)" },
    { id: 2, name: "Computer Applications (B.C.A.)" },
    { id: 3, name: "Computer Applications (Augmented & Virtual Reality)" },
    { id: 4, name: "Computer Applications (Cloud Computing)" },
    { id: 5, name: "Computer Applications (Computer Networking)" },
    { id: 6, name: "Computer Applications (Database Management)" },
    { id: 7, name: "Computer Applications (Animation)" },
    { id: 8, name: "Computer Applications (Accounting Application)" },
    { id: 9, name: "Computer Applications (Music and Video Processing)" },
    { id: 10, name: "Computer Applications (System Analysis)" },
    { id: 11, name: "Computer Applications (Mobile Computing)" },
    { id: 12, name: "Computer Applications (Word Processing)" },
    { id: 13, name: "Computer Applications (Personal Information Management)" },
    { id: 14, name: "Computer Applications (Cyber Security)" },
    { id: 15, name: "Computer Applications (Programming Languages)" },
    { id: 16, name: "Computer Applications (Data Analytics)" },
    { id: 17, name: "Computer Applications (Game Design & Development)" },
    { id: 18, name: "Computer Applications (Web Technologies)" },
    { id: 19, name: "Information and Computer Technology" },
    { id: 20, name: "Information Technology" },
  ];

  const data4 = [
    {
      id: 1,
      name: "Anthropology",
    },
    {
      id: 2,
      name: "Archeology",
    },
    {
      id: 3,
      name: "Communication Studies",
    },
    {
      id: 4,
      name: "Economics",
    },
    {
      id: 5,
      name: "Environmental Studies",
    },
    {
      id: 6,
      name: "Foreign Languages such as English, French, German, Spanish, Russian, Italian, Chinese, Japanese, and other",
    },
    {
      id: 7,
      name: "International Relations",
    },
    {
      id: 8,
      name: "Liberal Arts",
    },
    {
      id: 9,
      name: "Linguistics",
    },
    {
      id: 10,
      name: "Media Studies",
    },
    {
      id: 11,
      name: "Political Science",
    },
    {
      id: 12,
      name: "Psychology",
    },
    {
      id: 13,
      name: "Social Sciences",
    },
    {
      id: 14,
      name: "Social Work",
    },
    {
      id: 15,
      name: "Women’s Studies",
    },
  ];

  const item = data.map((item) => (
    <div key={item.id}>
      <div className="content">
        {item.id}. {item.name}
      </div>
    </div>
  ));
  const item2 = data2.map((item) => (
    <div key={item.id}>
      <div className="content">
        {item.id}. {item.name}
      </div>
    </div>
  ));
  const item3 = data3.map((item) => (
    <div key={item.id}>
      <div className="content">
        {item.id}. {item.name}
      </div>
    </div>
  ));
  const item4 = data4.map((item) => (
    <div key={item.id}>
      <div className="content">
        {item.id}. {item.name}
      </div>
    </div>
  ));
  return (
    <div className="main-container"  style={{paddingTop:"120px"}}>
      <div className="title">What to do after the 12th</div>
      <div className="content">
        <p>
          ‘What after 12th ?’ is the common question among the generation of
          students studying in 12th standard. Every year the questions hit lakhs
          of students in India and abroad. The confusion prevails among them
          concerning career prospects, job opportunities and yes, their passion,
          their preference. Counselors say that the lack of proper information
          about the courses available in India and their career prospects, is
          somewhere responsible. Science, Commerce and Arts are the options
          available in which students can find a suitable course to pursue after
          12th.
          <br />
          <br />
        </p>
        <div className="main-container2">
          <img
            src={whatdo}
            style={{
              // keep this as it is
              overflow: "auto",
              width: "60%",
              height: "500px",
            }}
            alt=""
          />
          <img
            src={career}
            style={{
              // keep this as it is
              overflow: "auto",
              width: "60%",
              height: "500px",
            }}
            alt=""
          />
        </div>
        <div className="content">
          <p>
            Choosing a course shall never be a convenient option rather it
            should be a highly motivating choice for the students. Interests,
            motivation, and goals are prime factors students must consider while
            choosing a course from the range of courses available in India to
            pursue after 12th. Students can choose a course from top domains
            including Engineering, Architecture, Design, Law, Applied Science,
            Business Studies, Management, Behavioral and Social Sciences,
            Economics, Media, Humanities, and more.
          </p>
        </div>
        <div className="title">Top 20 Choices After 12th Science PCM</div>
        <div>{item}</div>
        <div className="title">Top Choices After 12th Commerce</div>
        <div>{item2}</div>
        <div className="title">
          Top 20 Choices After 12th Commerce without Math
        </div>
        <div>{item3}</div>
        <div className="title">Top 15 Choices After Class 12 Humanities</div>
        <div>{item4}</div>
      </div>
    </div>
  );
}

export default Index;
