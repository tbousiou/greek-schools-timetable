import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'
import TabNavigation from '../components/TabNavigation.jsx';
import { eneegylLykeioData } from '../data/gelData.js';


export default function LykeioEneegyl() {
  const [activeTab, setActiveTab] = useState('A');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
        <h1 className="text-2xl font-bold">Ωρολόγιο Πρόγραμμα Λύκειο ΕΝΕΕΓΥΛ</h1>
        
        <div className="mt-2 sm:mt-0 bg-gray-100 p-3 rounded-md">
          <h2 className="text-sm font-semibold mb-2">Πηγές (ΦΕΚ):</h2>
          <ul className="text-sm space-y-1">
            <li>
              <a 
                href="https://search.et.gr/el/fek/?fekId=563597" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ΦΕΚ ΤΕΥΧΟΣ Β 3791 03-09-2018
              </a>
            </li>
            <li>
              <a 
                href="https://search.et.gr/el/fek/?fekId=574878" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ΦΕΚ ΤΕΥΧΟΣ Β 4140 20-09-2018
              </a>
            </li>
            <li>
              <a 
                href="https://search.et.gr/el/fek/?fekId=567401" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ΦΕΚ ΤΕΥΧΟΣ Β 0723 04-03-2019
              </a>
            </li>
            
          </ul>
        </div>
      </div>


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
            <ClassTable data={eneegylLykeioData.classA.subjects.core} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Γαλλικά ή Γερμανικά.
            </p>
          </div>
        </section>
      )}

      {activeTab === 'B' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={eneegylLykeioData.classB.subjects.core} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Γαλλικά ή Γερμανικά.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Ομάδων Προσανατολισμού Β' Τάξης</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Ανθρωπιστικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={eneegylLykeioData.classB.subjects.humanities} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={eneegylLykeioData.classB.subjects.science} />
              </div>
            </div>
          </div>

        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={eneegylLykeioData.classC.subjects.core} />
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
                <ClassTable data={eneegylLykeioData.classC.subjects.humanities} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών και Σπουδών Υγείας</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={eneegylLykeioData.classC.subjects.science} />
              </div>
              <div className="text-sm text-gray-600 mb-4">
                <p className="mb-2">* Μαθηματικά για τους/τις μαθητές/μαθήτριες που επιλέγουν το 2o Επιστημονικό Πεδίο</p>
                <p className="mb-2">* Βιολογία για τους/τις μαθητές/μαθήτριες που επιλέγουν το 3o Επιστημονικό Πεδίο</p>
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Σπουδών Οικονομίας και Πληροφορικής</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={eneegylLykeioData.classC.subjects.economics} />
              </div>
            </div>
          </div>

        </section>
      )}

    </div>
  )
}