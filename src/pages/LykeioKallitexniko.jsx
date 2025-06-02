import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'
import TabNavigation from '../components/TabNavigation.jsx';
import SchoolHeader from '../components/SchoolHeader.jsx';
import { kallitexnikoLykeioData } from '../data/gelData.js';


export default function LykeioKallitexniko() {
  const [activeTab, setActiveTab] = useState('A');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];

  return (
    <div className="p-4">

      <SchoolHeader
        schoolName="Καλλιτεχνικό Γενικό Λύκειο"
        references={[
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 3523 25-08-2020", url: "https://search.et.gr/el/fek/?fekId=610629" },
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 3570 28-08-2020", url: "https://search.et.gr/el/fek/?fekId=577145" },
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 5643 03-12-2021", url: "https://search.et.gr/el/fek/?fekId=581585" }
        ]}
      />

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
            <ClassTable data={kallitexnikoLykeioData.classA.subjects.core} />
          </div>


          <h2 className="text-xl font-semibold mb-4">Μαθήματα Καλλιτεχνικής Παιδείας Α' Τάξης</h2>

          {/* Grid layout for artistic direction tables */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Εικαστικών Τεχνών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classA.subjects.art} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Θεάτρου - Κινηματογράφου</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classA.subjects.theatre} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Χορού</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classA.subjects.dance} />
              </div>
            </div>
          </div>

        </section>
      )}

      {activeTab === 'B' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={kallitexnikoLykeioData.classB.subjects.core} />
          </div>


          <h2 className="text-xl font-semibold mb-4">Μαθήματα Ομάδων Προσανατολισμού Β' Τάξης</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Ανθρωπιστικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classB.subjects.humanities} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classB.subjects.science} />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Καλλιτεχνικής Παιδείας Β' Τάξης</h2>
          {/* Grid layout for artistic direction tables */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Εικαστικών Τεχνών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classB.subjects.art} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Θεάτρου - Κινηματογράφου</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classB.subjects.theatre} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Χορού</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classB.subjects.dance} />
              </div>
            </div>
          </div>



        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={kallitexnikoLykeioData.classC.subjects.core} />
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2">- 5 ώρες για το κυρίως μάθημα και 1 ώρα για επίλυση αποριών, ανακεφαλαίωση κ.λπ.
            </p>
            <p className="mb-2">* Ιστορία διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Θετικών Σπουδών και Σπουδών Υγείας" ή την Ομάδα Προσανατολισμού "Σπουδών Οικονομίας και Πληροφορικής". Μαθηματικά διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Ανθρωπιστικών Σπουδών".</p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Ομάδων Προσανατολισμού Γ' Τάξης</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Ανθρωπιστικών Σπουδών</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={kallitexnikoLykeioData.classC.subjects.humanities} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Θετικών Σπουδών και Σπουδών Υγείας</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={kallitexnikoLykeioData.classC.subjects.science} />
              </div>
              <div className="text-sm text-gray-600 mb-4">
                <p className="mb-2">* Μαθηματικά για τους/τις μαθητές/μαθήτριες που επιλέγουν το 2o Επιστημονικό Πεδίο</p>
                <p className="mb-2">* Βιολογία για τους/τις μαθητές/μαθήτριες που επιλέγουν το 3o Επιστημονικό Πεδίο</p>
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Σπουδών Οικονομίας και Πληροφορικής</h3>
              <div className="overflow-x-auto mb-4">
                <ClassTable data={kallitexnikoLykeioData.classC.subjects.economics} />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Καλλιτεχνικής Παιδείας Γ' Τάξης</h2>
          {/* Grid layout for artistic direction tables */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Εικαστικών Τεχνών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classC.subjects.art} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Θεάτρου - Κινηματογράφου</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classC.subjects.theatre} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Χορού</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoLykeioData.classC.subjects.dance} />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Επιλογής Γ' Τάξης (Επιλογής 1 από 12)</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={kallitexnikoLykeioData.classC.subjects.optional} />
          </div>

        </section>
      )}

    </div>
  )
}