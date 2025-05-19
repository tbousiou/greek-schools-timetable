import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'
import TabNavigation from '../components/TabNavigation';


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
  const [activeTab, setActiveTab] = useState('A');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ωρολόγιο Πρόγραμμα Ημερήσιο Γενικό Λύκειο</h1>


      {/* Using the abstracted TabNavigation component */}
      <TabNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={tabs}
      />

      {/* Content based on active tab */}
      {activeTab === 'A' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={coreSubjectsA} />
          </div>
        </section>
      )}

      {activeTab === 'B' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={coreSubjectsB} />
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Ομάδων Προσανατολισμού Β' Τάξης</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Ανθρωπιστικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={orientationGroupsB.humanities.subjects} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={orientationGroupsB.science.subjects} />
              </div>
            </div>
          </div>

        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={coreSubjectsC} />
          </div>

          <div className="text-sm text-gray-600">
            <p className="mb-2">* Ιστορία διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Θετικών Σπουδών και Σπουδών Υγείας" ή την Ομάδα Προσανατολισμού "Σπουδών Οικονομίας και Πληροφορικής". Μαθηματικά διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Ανθρωπιστικών Σπουδών".</p>
            <p className="mb-2">* Μαθηματικά για τους/τις μαθητές/μαθήτριες που επιλέγουν το 2ο Επιστημονικό Πεδίο ή Βιολογία για τους/τις μαθητές/μαθήτριες που επιλέγουν το 3ο Επιστημονικό Πεδίο.</p>
            <p>* ΓΠ = Γενικής Παιδείας</p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Ομάδων Προσανατολισμού Γ' Τάξης</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Ανθρωπιστικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={orientationGroupsC.humanities.subjects} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών και Σπουδών Υγείας</h3>
              <div className="overflow-x-auto">
                <ClassTable data={orientationGroupsC.science.subjects} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Σπουδών Οικονομίας και Πληροφορικής</h3>
              <div className="overflow-x-auto">
                <ClassTable data={orientationGroupsC.economics.subjects} />
              </div>
            </div>
          </div>

        </section>
      )}















    </div>
  )
}