import React from 'react'
import m1 from './Mpic/m1.JPG';
import m2 from './Mpic/m2.JPG';
import m3 from './Mpic/m3.JPG';
import m4 from './Mpic/m4.JPG';
import m5 from './Mpic/m5.JPG';
import m6 from './Mpic/m6.JPG';

function Index() {

    const data=[
        {
          "id": "1",
          "name": "Wockhardt Ltd."
        },
        {
          "id": "2",
          "name": "Fortis Healthcare Ltd."
        },
        {
          "id": "3",
          "name": "Apollo Hospitals Enterprises Ltd."
        },
        {
          "id": "4",
          "name": "Cipla Ltd."
        },
        {
          "id": "5",
          "name": "Sun Pharmaceutical Industries Ltd."
        },
        {
          "id": "6",
          "name": "Religare Health Insurance Company Ltd."
        },
        {
          "id": "7",
          "name": "Apollo Munich Health Industries Co. Ltd."
        },
        {
          "id": "8",
          "name": "Omega Healthcare"
        },
        {
          "id": "9",
          "name": "United Healthcare Group"
        },
        {
          "id": "10",
          "name": "Indraprastha Apollo Hospitals"
        },
        {
          "id": "11",
          "name": "Lilavati Hospital and Research Centre"
        },
        {
          "id": "12",
          "name": "Medanta Hospitals"
        },
        {
          "id": "13",
          "name": "All India Institute of Medical Sciences (AIIMS)"
        },
        {
          "id": "14",
          "name": "Sri Ganga Ram Hospital"
        },
        {
          "id": "15",
          "name": "Max Healthcare"
        },
        {
          "id": "16",
          "name": "Postgraduate Institute of Medical Education and Research"
        }
      ];

      const item = data.map((item) => (
        <div key={item.id}>
          <div className="content">{item.id}.  {item.name}</div>
        </div>
      ));
  return (
    <div className='main-container'>
      <div className='title'>
        Medical     
      </div>
      <div className='content'>
      Medical courses are offered in various specialisations including Medical and Biomedical Sciences, Pharmacy, Allied Health, Nursing, Health, and Fitness. A course in Medicine and Health Sciences requires students to learn and abide by the Hippocratic Oath for ethical conduct which says, that as a medical practitioner a person needs to practice arts and science of medicine honestly in all aspects i.e. patient care, teaching and research. Students holding a degree in Medical and Health science will get career opportunities in hospitals, and private clinics in the healthcare sector. A Medical and Health Science graduate can also work with research centres, laboratories, and Pharmaceuticals Industry.<br/><br/>
      The courses offered under Medical and Health Science are – MBBS, BDS, BPharm, BSc in Nursing, Public Health, Bachelor in Optometry, and more specialisations. To become successful in the Medical and Health Science field, one needs to specialise by pursuing post-graduation and research studies in medicine.<br/><br/>
      As a service industry sector, healthcare is multifaceted. It encompasses sub-sectors such as hospitals, medical equipment, clinical procedures, telecommunication and IT for the medical field, medical tourism, and health insurance.<br/><br/>

      </div>
      <div className='title'>
      Medical Courses Eligibility and Entrance Exams
      </div>
      <div className='content'>
      The eligibility criteria for Medical aspirants, which they must fulfil to pursue undergraduate or postgraduate level courses are as follows:<br/><br/>
      ● Candidates must have passed Class 12/Higher Secondary/Pre-University qualifying examination with Science subjects i.e. Physics, Chemistry and Zoology/Botany.<br/>
      ● They also must have studied English as the main subject for their qualifying examination.<br/>
      ● Moreover, candidates also need to fulfil the age limit criteria i.e. they must have completed 17 years of age at the time of admissions.<br/>
      ●There are also additional eligibility conditions mentioned by the regulatory authorities for respective disciplines i.e. Medical Council of India (MCI), Dental Council of Indian, and Indian Nursing Council, Pharmacy Council of India, Indian Association of Physiotherapists and respective associations/council for other medical and health science courses.

      </div>
      <div className='title'>
      Top Entrance Exams for Medical & Health Sciences
      </div>
      <div className='content'>
      <p>
      ● NEET UG<br/>
● NEET PG<br/>
● NIPER Joint Entrance Examination<br/>
● Central Universities Common Entrance Test<br/>
● KIITEE<br/>
● TS ECET<br/>
● Jamia Milia Islamia Entrance Exam<br/>
● TS EAMCET<br/>
● AP EAMCET<br/>
        </p>
      </div>
      <div className='title'>
      Medical Courses Skill Set
      </div>
      <div className='content'>
      <p>
      ● Ability to work in a critical and dynamic environment<br/>
● Dedication towards professional commitments and medical ethics<br/>
● Desire for knowledge and learning new research<br/>
● Scientific research and development skills<br/>
● Communication and interpersonal skills<br/>
● Sharp memory and prompt approach<br/>
● Counselling and caring skills<br/>
● Approachable and empathetic skills<br/>
● Medical writing skills<br/>
● Patience and perseverance<br/>
      </p>
      </div>
      <div className='title'>
      Medical Courses Syllabus
      </div>
      <div className='subtitle'>
      Bachelor of Medicine and Bachelor of Surgery (MBBS)
      </div>
     <div className='main-container'>
     <img src={m1}  style={{
        // keep this as it is
        // overflow: 'auto', 
        height:"60%",
        width:'100%'
      }}alt='' />
     </div>
      <div className='subtitle'>
      Bachelor of Dental Surgery (BDS)
      </div>
     <div className='main-container'>
     <img src={m2}  style={{
        // keep this as it is
         // overflow: 'auto', 
      height:"60%",
      width:'100%'
      }}alt='' />
     </div>
      <div className='subtitle'>
      BSc Nursing
      </div>
     <div className='main-container'>
     <img src={m3}  style={{
        // keep this as it is
         // overflow: 'auto', 
      height:"60%",
      width:'100%'}}/>
     </div>
      <div className='subtitle'>
      Public Health (The discipline is offered at certificate, diploma, postgraduate or doctorate level only)
      </div>
     <div className='main-container'>
     <img src={m4}  style={{
        // keep this as it is
          // overflow: 'auto', 
      height:"60%",
      width:'100%'
      }}alt='' />
     </div>
      <div className='subtitle'>
      Bachelor of Physiotherapy</div>
     <div className='
     main-container'>
     <img src={m5}  style={{
        // keep this as it is
        // overflow: 'auto', 
        height:"60%",
        width:'100%'
      }}alt='' />
     </div>
     <div className='title'>
     Jobs and Career Opportunities after Medical Courses
     </div>
     <div className='content'>
     As seen above, there are various courses which fall under the category of 'Medical Courses'. Therefore the job and career opportunities for these courses are also varied. Candidates can refer to the table below to know about the career options they would get to choose from if they opt for any of the above-mentioned medical courses.
     </div>
     <div className='main-container'>
     <img src={m6}  style={{
        // keep this as it is
        // overflow: 'auto', 
      height:"60%",
      width:'100%'
      }}alt='' />
     </div>
     <div className='title'>
     Medical Courses Top Recruiters
     </div>
     <div>
    {item}
     </div>
    </div>
  )
}

export default Index
