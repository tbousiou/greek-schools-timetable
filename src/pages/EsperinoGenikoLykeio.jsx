import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'
import TabNavigation from '../components/TabNavigation.jsx';

const imerisioGenikoLykeioData = {
  classA: {
    subjects: {
      core: [
        { name: "Ελληνική Γλώσσα: Αρχαία Ελληνική Γλώσσα και Γραμματεία", hours: 2 },
        { name: "Ελληνική Γλώσσα: Νεοελληνική Γλώσσα και Λογοτεχνία", hours: 4 },
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Ιστορία", hours: 2 },
        { name: "Μαθηματικά: Άλγεβρα", hours: 2 },
        { name: "Μαθηματικά: Γεωμετρία", hours: 2 },
        { name: "Αγγλικά", hours: 2 },
        { name: "Φυσικές Επιστήμες: Φυσική", hours: 2 },
        { name: "Φυσικές Επιστήμες: Χημεία", hours: 2 },
        { name: "Φυσικές Επιστήμες: Βιολογία", hours: 2 },
        { name: "Φυσική Αγωγή", hours: 1 },
        { name: "Πολιτική Παιδεία", hours: 1 },
        { name: "Εφαρμογές Πληροφορικής", hours: 2 }
      ]
    }
  },
  classB: {
    subjects: {
      core: [
        { name: "Ελληνική Γλώσσα: Αρχαία Ελληνική Γλώσσα και Γραμματεία", hours: 1 },
        { name: "Ελληνική Γλώσσα: Νεοελληνική Γλώσσα και Λογοτεχνία", hours: 4 },
        { name: "Μαθηματικά: Άλγεβρα", hours: 3 },
        { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
        { name: "Φυσικές Επιστήμες: Φυσική", hours: 2 },
        { name: "Φυσικές Επιστήμες: Χημεία*", hours: 1 },
        { name: "Φυσικές Επιστήμες: Βιολογία*", hours: 2 },
        { name: "Ιστορία", hours: 2 },
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Αγγλικά", hours: 2 },
        { name: "Φυσική Αγωγή", hours: 1 }
      ],
      humanities: [
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία", hours: 3 },
        { name: "Λατινικά", hours: 2 }
      ],
      science: [
        { name: "Φυσική", hours: 2 },
        { name: "Μαθηματικά", hours: 3 }
      ]
    }
  },
  classC: {
    subjects: {
      core: [
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Νεοελληνική Γλώσσα και Λογοτεχνία", hours: 5 },
        { name: "Ιστορία Γενικής Παιδείας* / Μαθηματικά Γενικής Παιδείας*", hours: 1 },
      ],
      humanities: [
        { name: "Αρχαία Ελληνικά", hours: 6 },
        { name: "Ιστορία", hours: 6 },
        { name: "Λατινικά", hours: 6 }
      ],
      science: [
        { name: "Μαθηματικά* / Βιολογία*", hours: 6 },
        { name: "Φυσική", hours: 6 },
        { name: "Χημεία", hours: 6 }
      ],
      economics: [
        { name: "Μαθηματικά", hours: 6 },
        { name: "Πληροφορική", hours: 6 },
        { name: "Οικονομία", hours: 6 }
      ]
    }
  }
};



// Core subjects for Class C (Γ' Τάξη)
const coreSubjectsC = [
  { name: "Θρησκευτικά", hours: 1 },
  { name: "Νεοελληνική Γλώσσα και Λογοτεχνία", hours: 5 },
  { name: "Ιστορία ΓΠ / Μαθηματικά ΓΠ*", hours: 1 }
];


export default function EsperinoGenikoLykeio() {
  const [activeTab, setActiveTab] = useState('A');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ωρολόγιο Πρόγραμμα Εσπερινό Γενικό Λύκειο</h1>


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
            <ClassTable data={imerisioGenikoLykeioData.classA.subjects.core} />
          </div>
          
        </section>
      )}

      {activeTab === 'B' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={imerisioGenikoLykeioData.classB.subjects.core} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              -  Χημεία: το 1ο τετράμηνο 1 ώρα και το 2ο τετράμηνο 2 ώρες
            </p>
            <p className='mb-2'>
              -  Βιολογία: το 1ο τετράμηνο 2 ώρες και το 2ο τετράμηνο 1 ώρα
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Ομάδων Προσανατολισμού Β' Τάξης</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Ανθρωπιστικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={imerisioGenikoLykeioData.classB.subjects.humanities} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={imerisioGenikoLykeioData.classB.subjects.science} />
              </div>
            </div>
          </div>

        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={imerisioGenikoLykeioData.classC.subjects.core} />
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2">* Ιστορία διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Θετικών Σπουδών και Σπουδών Υγείας" ή την Ομάδα Προσανατολισμού "Σπουδών Οικονομίας και Πληροφορικής". Μαθηματικά διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Ανθρωπιστικών Σπουδών".</p>
            <p className="mb-2">* Μαθηματικά για τους/τις μαθητές/μαθήτριες που επιλέγουν το 2ο Επιστημονικό Πεδίο ή Βιολογία για τους/τις μαθητές/μαθήτριες που επιλέγουν το 3ο Επιστημονικό Πεδίο.</p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Ομάδων Προσανατολισμού Γ' Τάξης</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Ανθρωπιστικών Σπουδών</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={imerisioGenikoLykeioData.classC.subjects.humanities} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών και Σπουδών Υγείας</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={imerisioGenikoLykeioData.classC.subjects.science} />
              </div>
              <div className="text-sm text-gray-600 mb-4">
                <p className="mb-2">* Μαθηματικά για τους/τις μαθητές/μαθήτριες που επιλέγουν το 2o Επιστημονικό Πεδίο</p>
                <p className="mb-2">* Βιολογία για τους/τις μαθητές/μαθήτριες που επιλέγουν το 3o Επιστημονικό Πεδίο</p>
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Σπουδών Οικονομίας και Πληροφορικής</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={imerisioGenikoLykeioData.classC.subjects.economics} />
              </div>
            </div>
          </div>

        </section>
      )}

    </div>
  )
}

