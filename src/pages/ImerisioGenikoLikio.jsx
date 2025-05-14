import React from 'react'
import ClassTable from '../components/ClassTable.jsx'


const imerisioGenikoLikioData = {
  classA: {
    subjects: {
      core: [
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία", hours: 5 },
        { name: "Νεοελληνική Γλώσσα και Λογοτεχνία", hours: 4 },
        { name: "Θρησκευτικά", hours: 2 },
        { name: "Ιστορία", hours: 2 },
        { name: "Άλγεβρα", hours: 3 },
        { name: "Γεωμετρία", hours: 2 },
        { name: "Αγγλικά", hours: 3 },
        { name: "2η Ξένη Γλώσσα", hours: 2 },
        { name: "Φυσική", hours: 2 },
        { name: "Χημεία", hours: 2 },
        { name: "Βιολογία", hours: 2 },
        { name: "Φυσική Αγωγή", hours: 2 },
        { name: "Πολιτική Παιδεία", hours: 2 },
        { name: "Εφαρμογές Πληροφορικής", hours: 2 }
      ]
    }
  },
  classB: {
    subjects: {
      core: [
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία", hours: 2 },
        { name: "Νεοελληνική Γλώσσα και Λογοτεχνία", hours: 4 },
        { name: "Άλγεβρα", hours: 3 },
        { name: "Γεωμετρία", hours: 2 },
        { name: "Φυσική", hours: 2 },
        { name: "Χημεία", hours: 2 },
        { name: "Βιολογία", hours: 2 },
        { name: "Εισαγωγή στις Αρχές της Επιστήμης των Η/Υ", hours: 2 },
        { name: "Ιστορία", hours: 2 },
        { name: "Φιλοσοφία", hours: 2 },
        { name: "Θρησκευτικά", hours: 2 },
        { name: "Αγγλικά", hours: 2 },
        { name: "2η Ξένη Γλώσσα", hours: 1 },
        { name: "Φυσική Αγωγή", hours: 2 }
      ],
      orientationGroupA: [
          { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία", hours: 3 },
          { name: "Λατινικά", hours: 2 }
        ],
      orientationGroupB: [
          { name: "Φυσική", hours: 2 },
          { name: "Μαθηματικά", hours: 3 }
        ]
    }
  }

};



// Core subjects for Class A (Α' Τάξη)
const coreSubjectsA = [
  { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία", hours: 5 },
  { name: "Νεοελληνική Γλώσσα και Λογοτεχνία", hours: 4 },
  { name: "Θρησκευτικά", hours: 2 },
  { name: "Ιστορία", hours: 2 },
  { name: "Άλγεβρα", hours: 3 },
  { name: "Γεωμετρία", hours: 2 },
  { name: "Αγγλικά", hours: 3 },
  { name: "2η Ξένη Γλώσσα", hours: 2 },
  { name: "Φυσική", hours: 2 },
  { name: "Χημεία", hours: 2 },
  { name: "Βιολογία", hours: 2 },
  { name: "Φυσική Αγωγή", hours: 2 },
  { name: "Πολιτική Παιδεία", hours: 2 },
  { name: "Εφαρμογές Πληροφορικής", hours: 2 }
];

// Core subjects for Class B (Β' Τάξη)
const coreSubjectsB = [
  { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία", hours: 2 },
  { name: "Νεοελληνική Γλώσσα και Λογοτεχνία", hours: 4 },
  { name: "Άλγεβρα", hours: 3 },
  { name: "Γεωμετρία", hours: 2 },
  { name: "Φυσική", hours: 2 },
  { name: "Χημεία", hours: 2 },
  { name: "Βιολογία", hours: 2 },
  { name: "Εισαγωγή στις Αρχές της Επιστήμης των Η/Υ", hours: 2 },
  { name: "Ιστορία", hours: 2 },
  { name: "Φιλοσοφία", hours: 2 },
  { name: "Θρησκευτικά", hours: 2 },
  { name: "Αγγλικά", hours: 2 },
  { name: "2η Ξένη Γλώσσα", hours: 1 },
  { name: "Φυσική Αγωγή", hours: 2 }
];

// Orientation groups for Class B
const orientationGroupsB = {
  humanities: {
    name: "Ομάδα Προσανατολισμού Ανθρωπιστικών Σπουδών",
    subjects: [
      { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία", hours: 3 },
      { name: "Λατινικά", hours: 2 }
    ]
  },
  science: {
    name: "Ομάδα Προσανατολισμού Θετικών Σπουδών",
    subjects: [
      { name: "Φυσική", hours: 2 },
      { name: "Μαθηματικά", hours: 3 }
    ]
  }
};

// Core subjects for Class C (Γ' Τάξη)
const coreSubjectsC = [
  { name: "Θρησκευτικά", hours: 1 },
  { name: "Νεοελληνική Γλώσσα και Λογοτεχνία", hours: 6 },
  { name: "Ιστορία ΓΠ / Μαθηματικά ΓΠ*", hours: 2 },
  { name: "Αγγλικά", hours: 2 },
  { name: "Φυσική Αγωγή", hours: 3 }
];

// Orientation groups for Class C
const orientationGroupsC = {
  humanities: {
    name: "Ομάδα Προσανατολισμού Ανθρωπιστικών Σπουδών",
    subjects: [
      { name: "Αρχαία Ελληνικά", hours: 6 },
      { name: "Ιστορία", hours: 6 },
      { name: "Λατινικά", hours: 6 }
    ]
  },
  science: {
    name: "Ομάδα Προσανατολισμού Θετικών Σπουδών και Σπουδών Υγείας",
    subjects: [
      { name: "Μαθηματικά / Βιολογία*", hours: 6 },
      { name: "Φυσική", hours: 6 },
      { name: "Χημεία", hours: 6 }
    ]
  },
  economics: {
    name: "Ομάδα Προσανατολισμού Σπουδών Οικονομίας και Πληροφορικής",
    subjects: [
      { name: "Μαθηματικά", hours: 6 },
      { name: "Πληροφορική", hours: 6 },
      { name: "Οικονομία", hours: 6 }
    ]
  }
};

export default function ImerisioGenikoLikio() {

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ημερήσιο Γενικό Λύκειο</h1>

      {/* Class A Table */}
      <h2 className="text-xl font-semibold mb-4">Ωρολόγιο Πρόγραμμα Α' Τάξης</h2>
      <h3 className='text-lg font-semibold mb-2'>Μαθήματα Γενικής Παιδείας</h3>
      <div className="overflow-x-auto mb-8">
        <ClassTable data={coreSubjectsA} />
      </div>

      {/* Class B Table */}
      <h2 className="text-xl font-semibold mb-4">Ωρολόγιο Πρόγραμμα Β' Τάξης</h2>
      <h3 className='text-lg font-semibold mb-2'>Μαθήματα Γενικής Παιδείας</h3>
      <div className="overflow-x-auto mb-8">
        <ClassTable data={coreSubjectsB} />
      </div>

      {/* Orientation Groups Tables - Side by Side */}
      <h2 className="text-xl font-semibold mb-4">Μαθήματα Ομάδων Προσανατολισμού Β' Τάξης</h2>
      <p className='mb-2'>Στη Β Λυκείου διαμορφώνονται δύο Ομάδες Προσανατολισμού: η Ομάδα Ανθρωπιστικών Σπουδών και η Ομάδα Θετικών Σπουδών</p>
      <div className="flex flex-wrap">
        {/* Humanities Orientation Group */}
        <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">{orientationGroupsB.humanities.name}</h3>
          <ClassTable data={orientationGroupsB.humanities.subjects} footerLabel="Σύνολο Προγράμματος Ομάδας Προσανατολισμού" />
        </div>

        {/* Science Orientation Group */}
        <div className="w-full md:w-1/2 pl-0 md:pl-2">
          <h3 className="text-lg font-semibold mb-2">{orientationGroupsB.science.name}</h3>
          <ClassTable data={orientationGroupsB.science.subjects} footerLabel="Σύνολο Προγράμματος Ομάδας Προσανατολισμού" />
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        * Η 2η ξένη γλώσσα επιλέγεται μεταξύ Γαλλικών, Γερμανικών και Ιταλικών.
      </p>

      {/* Class C Table */}
      <h2 className="text-xl font-semibold mb-4 mt-8">Ωρολόγιο Πρόγραμμα Γ' Τάξης</h2>
      <h3 className='text-lg font-semibold mb-2'>Μαθήματα Γενικής Παιδείας</h3>
      <div className="overflow-x-auto mb-8">
        <ClassTable data={coreSubjectsC} />
      </div>

      {/* Orientation Groups Tables for Class C */}
      <h2 className="text-xl font-semibold mb-4">Μαθήματα Ομάδων Προσανατολισμού Γ' Τάξης</h2>
      <p className='mb-2'>Στη Γ' Λυκείου διαμορφώνονται τρεις Ομάδες Προσανατολισμού: η Ομάδα Ανθρωπιστικών Σπουδών, η Ομάδα Θετικών Σπουδών και Σπουδών Υγείας, και η Ομάδα Σπουδών Οικονομίας και Πληροφορικής</p>

      {/* First row - First two orientation groups */}
      <div className="flex flex-wrap mb-8">
        {/* Humanities Orientation Group */}
        <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">{orientationGroupsC.humanities.name}</h3>
          <ClassTable data={orientationGroupsC.humanities.subjects} footerLabel="Σύνολο Προγράμματος Ομάδας Προσανατολισμού" />
        </div>

        {/* Science Orientation Group */}
        <div className="w-full md:w-1/2 pl-0 md:pl-2">
          <h3 className="text-lg font-semibold mb-2">{orientationGroupsC.science.name}</h3>
          <ClassTable data={orientationGroupsC.science.subjects} footerLabel="Σύνολο Προγράμματος Ομάδας Προσανατολισμού" />
        </div>
      </div>

      {/* Second row - Economics Orientation Group (centered) */}
      <div className="flex justify-center mb-8">
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-2">{orientationGroupsC.economics.name}</h3>
          <ClassTable data={orientationGroupsC.economics.subjects} footerLabel="Σύνολο Προγράμματος Ομάδας Προσανατολισμού" />
        </div>
      </div>

      {/* Footnotes */}
      <div className="mt-4 text-sm text-gray-600">
        <p className="mb-2">* Ιστορία διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Θετικών Σπουδών και Σπουδών Υγείας" ή την Ομάδα Προσανατολισμού "Σπουδών Οικονομίας και Πληροφορικής". Μαθηματικά διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Ανθρωπιστικών Σπουδών".</p>
        <p className="mb-2">* Μαθηματικά για τους/τις μαθητές/μαθήτριες που επιλέγουν το 2ο Επιστημονικό Πεδίο ή Βιολογία για τους/τις μαθητές/μαθήτριες που επιλέγουν το 3ο Επιστημονικό Πεδίο.</p>
        <p>* ΓΠ = Γενικής Παιδείας</p>
      </div>

    </div>
  )
}