import React from 'react'
import './index.css'
import axios from 'axios';
import  { useState, useEffect } from 'react';
function Index() {
  const data = [
    {
      "id": 1,
      "Title":"Full-time MBA",
      "tdesc":"Traditional two-year programs typically involve taking a full course load, much like an undergraduate degree. These programs are best suited to students who don’t have to work full time and can comfortably fund their degree without bringing in a regular paycheck. "
   },
  {
      "id": 2,
      "Title":"Part-time MBA", 
      "tdesc":"Part-time MBA programs, sometimes called professional MBAs, offer flexibility and enhanced work-life balance for students who wish to pursue a degree over several years while working or raising a family. Students with an established career can continue earning valuable work experience while learning job skills that can be applied right away. Some employers offer tuition assistance or reimbursement for employees who pursue a graduate degree while working."
  },
  {
      "id":3,
      "Title":"Executive MBA",
      "tdesc":"Executive MBA programs, also known as EMBAs, are two-year programs geared toward leaders and executives with several years of managerial experience. Since most students in these programs are working professionals, the format tends to be part time with classes on evenings and weekends. Expect a faster-paced learning environment with less immersion than a typical program. With the skills you learn from an EMBA, you can often build off of your work experience to maximize your impact in your organization."
   },
   {
      "id":4,
      "Title":"Distance MBA",
      "tdesc":"In Distance MBA the candidate pursues the programme via remote communication and correspondence. The course is designed for people having limited time and resources as it is cheap and flexible. There is flexibility of completing the course in two to five year. There are over 490 Distance MBA colleges in India. The most popular being IGNOU." },
   {
      "id":5,
      "Title":"Global MBA",
      "tdesc":"Global MBAs (sometimes called international MBAs) are similar to traditional two-year MBAs but with a focus on international business principles and strategies. Students tend to come from countries around the world. This could be a good option for students who wish to work at international companies. Sometimes global MBA programs offer or require a study abroad component. "
   },
   {
      "id":6,
      "Title":"Online MBA",
      "tdesc":"This is currently the most popular mode of MBA programme owing to convenience and flexibility. In Online MBA, lectures are imparted through video conferencing and the notes, tests, assessments are shared in Learning Management System (LMS). There are no physical classes in Online MBA, thus one can pursue a course in one city while living in another. There is also no boundation of attending classes, as the lectures are recorded and saved in the LMS. There are about 170 Online MBA colleges in India which are mostly private institutions"
   },
   {
      "id":5,
      "Title":"5 year-Integrated MBA",
      "tdesc":"This is a five-year dual degree course which includes UG and PG degree. Integrated MBA degree can be pursued after class 12. So, candidates who choose management as their choice of career early on can opt for Integrated MBA which is a BBA+MBA or BTech+MBA programme. The Integrated MBA programme is offered by top institutes such as IIM Rohtak, IIM Indore, IIM Ranchi, IIM Jammu, IIM Bodhgaya, NMIMS, Xavier University and Nirma University among others."
   }
  ];

  const data2=[
    {
      "id":1,
      "Title":"National-Level Test ",
      "desc":"National-Level Test conducted by an apex testing body or a top national B-school on behalf of the other participating colleges. Eg: CAT, MAT, CMAT or ATMA"
      
  },
  {
      "id":2,
      "Title":"State-Level Test ",
      "desc":"State-Level Test conducted by a state level testing body or a top state B-school on behalf of the other participating colleges in that state. Eg: MAH-CET, OJEE, KMAT, TANCET or APICET"
  },
  {
      "id":3,
      "Title":"Institute-Level Test",
      "desc":"Institute-Level Test conducted for admission to its own MBA programme. In some cases, these scores can be accepted as a qualifying criteria by other B-schools as well. Eg:  XAT, NMAT, SNAP, IBSAT"
   },
  {
      "id":4,
      "Title":"Institute-Level Test",
      "desc":"Test conducted by a university for admission to MBA programmes being offered by colleges that are affiliated to it. Eg: KIITEE, LUMET, HPU MAT"
  }
  ];


  const items = data.map((item) => (
    <div key={item.id}>
      <div className="subtitle">{item.Title}</div>
      <div className="content">{item.tdesc}</div>
    </div>
  ));

  const items2 = data2.map((item) => (
    <div key={item.id}>
      <div className="subtitle">{item.Title}</div>
      <div className="content">{item.desc}</div>
    </div>
  ));
 

  

  return (
    <div className='main-container' >
      <div className='title'>
        MBA( Master of Business Administration)
      </div>
     <div className='content'>
      <p>A Master of Business Administration (MBA; also Master in Business Administration) is a postgraduate degree focused on business administration. The core courses in an MBA program cover various areas of business administration such as accounting, applied statistics, human resources, business communication, business ethics, business law, strategic management, business strategy, finance, managerial economics, management, entrepreneurship, marketing, supply-chain management, and operations management in a manner most relevant to management analysis and strategy. It originated in the United States in the early 20th century when the country industrialized and companies sought scientific management.<br/><br/>
      Some programs also include elective courses and concentrations for further study in a particular area, for example, accounting, finance, marketing, and human resources, but an MBA is intended to be a generalized program. MBA programs in the United States typically require completing about forty to sixty credits (sixty to ninety in a quarter system), much higher than the thirty credits (thirty-six to forty-five in a quarter system) typically required for degrees that cover some of the same material such as the Master of Economics, Master of Finance, Master of Accountancy, Master of Science in Marketing and Master of Science in Management.<br/><br/>
      The MBA is a terminal degree, and a professional degree. Accreditation bodies specifically for MBA programs ensure consistency and quality of education. Business schools in many countries offer programs tailored to full-time, part-time, executive (abridged coursework typically occurring on nights or weekends) and distance learning students, many with specialized concentrations.<br/><br/>
      An "Executive MBA", or EMBA, is a degree program similar to an MBA program that is specifically structured for and targeted towards corporate executives and senior managers who are already in the workforce.</p>
</div>
<div/>

      <div className='title'>
        Types
      </div>
     <div>
      {items}
     </div>
     <div className='title'>
     MBA Admissions
      </div>
     <div>
      {items2}
     </div>
     <div className='title'>
     MBA criteria
      </div>
      <div className='content'>
        <p>Many programs base their admission decisions on a combination of undergraduate grade point average, academic transcripts, entrance exam scores (for example, the GMAT or the GRE test score), a résumé containing significant work experience, essays, letters of recommendation, group discussions, and personal interviews. Some schools are also interested in extracurricular activities, community service activities, or volunteer work and how the student can improve the school's diversity and contribute to the student body as a whole.<br/><br/>
        The Graduate Management Admission Test (GMAT) is the most prominently used entrance exam for admissions into MBA programs. The Graduate Record Examination (GRE) is also accepted by almost all MBA programs in order to fulfill any entrance exam requirement they may have. Some schools do not weigh entrance exam scores as heavily as other criteria, and some programs do not require entrance exam scores for admission. In order to achieve a diverse class, business schools also consider the target male-female ratio and local-international student ratios. In rare cases, some MBA degrees do not require students to have an undergraduate degree and will accept significant management experience in lieu of an undergraduate degree. In the UK, for example, an HND (Higher National Diploma) or even HNC (Higher National Certificate) is acceptable in some programs.<br/><br/>
        Depending on the program, type and duration of work experience can be a critical admissions component for many MBA programs. Many top-tier programs require five or more years of work experience for admission<br/><br/></p>
        MBA admissions consulting services exist to counsel MBA applicants to improve their chances of getting admission to their desired Business Schools. These services range from evaluating a candidate's profile, GMAT preparation, suggesting the schools to which they can apply, writing and editing essays, conducting mock interviews as preparation for MBA admission interviews, as well as post-MBA career counseling.
      </div>
      <div className='title'>
      DEMAND FOR MBA’S IN THE MARKET
      </div>
      <div className='content'>
        <p>Going to business school can boost your career prospects, and in many industries having an MBA will give you the edge over competition. A good MBA program can give your career the push that it needs. Each year, more MBAs are added to the workforce, and pursuing the right field is the only way to ensure that your career shapes up the way you imagined while studying for the MBA.<br/><br/>
        Selecting the right career path is critical for all MBAs and prospective MBA students. The reason is simple – every MBA wants to see a return on their investment. Why MBA has become such a sought after course in the last few years is the sheer spectrum of career options that you can opt for after completing the course. From marketing to advertising and even finance is great career choice. An MBA could help financial advisors attract clients. For those who are not self-employed, an MBA can make it easier to move into a management role.<br/><br/>
        This is the reason why MBAs are always in high demand. Many consulting firms like Deloitte, Accenture, and Bain etc. want managers with an MBA, as these candidates tend to have the analytical abilities and software knowledge required to do the job. Companies that have a high demand for MBAs include SBI Capital Markets, Motilal Oswal & Bank of America Continuum among many others.<br/>
        The demand for MBAs for consulting jobs is perennially high since they have the acumen to analyze what fits best for the client. The demand for MBA graduates is more in the Asia-Pacific region, including India with 84% employers planning to hire fresh graduates against 73% last year. The survey has projected an increase in salary packages in this year. Globally, 54% of employers are likely to increase the salary package for MBAs at the rate of inflation.<br/><br/>
        </p>
       
   
      </div>
    </div>
  )
}

export default Index
