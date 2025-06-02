import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'
import TabNavigation from '../components/TabNavigation.jsx';
import { esperinoGenikoLykeioData } from '../data/gelData.js';


export default function LykeioEsperino() {
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
        <h1 className="text-2xl font-bold">Ωρολόγιο Πρόγραμμα Εσπερινό Γενικό Λύκειο</h1>
        
        <div className="mt-2 sm:mt-0 bg-gray-100 p-3 rounded-md">
          <h2 className="text-sm font-semibold mb-2">Πηγές (ΦΕΚ):</h2>
          <ul className="text-sm space-y-1">
            <li>
              <a 
                href="https://search.et.gr/el/fek/?fekId=613963" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ΦΕΚ ΤΕΥΧΟΣ Β 5616 22-09-2023
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
            <ClassTable data={esperinoGenikoLykeioData.classA.subjects.core} />
          </div>
          
        </section>
      )}

      {activeTab === 'B' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={esperinoGenikoLykeioData.classB.subjects.core} />
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
                <ClassTable data={esperinoGenikoLykeioData.classB.subjects.humanities} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={esperinoGenikoLykeioData.classB.subjects.science} />
              </div>
            </div>
          </div>

        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={esperinoGenikoLykeioData.classC.subjects.core} />
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
                <ClassTable data={esperinoGenikoLykeioData.classC.subjects.humanities} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών και Σπουδών Υγείας</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={esperinoGenikoLykeioData.classC.subjects.science} />
              </div>
              <div className="text-sm text-gray-600 mb-4">
                <p className="mb-2">* Μαθηματικά για τους/τις μαθητές/μαθήτριες που επιλέγουν το 2o Επιστημονικό Πεδίο</p>
                <p className="mb-2">* Βιολογία για τους/τις μαθητές/μαθήτριες που επιλέγουν το 3o Επιστημονικό Πεδίο</p>
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Σπουδών Οικονομίας και Πληροφορικής</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={esperinoGenikoLykeioData.classC.subjects.economics} />
              </div>
            </div>
          </div>

        </section>
      )}

    </div>
  )
}

