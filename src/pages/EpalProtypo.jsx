import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'
import TabNavigation from '../components/TabNavigation.jsx';
import SchoolHeader from '../components/SchoolHeader.jsx';
import { protypoEPALData } from '../data/epalData.js';


export default function EpalProtypo() {
  const [activeTab, setActiveTab] = useState('A');
  const [selectedSector, setSelectedSector] = useState('agricultular');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη A\'' },
    { id: 'B', label: 'Τάξη B\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];

  // Reset selected sector when changing tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // If navigating to B tab, select agricultural sector by default
    if (tab === 'B' || tab === 'C') {
      setSelectedSector('agricultular');
    } else {
      setSelectedSector(null);
    }
  };

  return (
    <div className="p-4">

    <SchoolHeader
        schoolName="Πρότυπο Επαγγελματικό Λύκειο (ΠΕΠΑΛ)"
        references={[
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 3470 29-07-2021", url: "https://search.et.gr/el/fek/?fekId=608695" },
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 4578 30-08-2022", url: "https://search.et.gr/el/fek/?fekId=598656" },
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 4961 22-09-2022", url: "https://search.et.gr/el/fek/?fekId=589740" },
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 5251 30-08-2023", url: "https://search.et.gr/el/fek/?fekId=613262" }
        ]}
      />

      {/* Using the abstracted TabNavigation component */}
      <TabNavigation
        activeTab={activeTab}
        onTabChange={handleTabChange}
        tabs={tabs}
      />

      {/* Content based on active tab */}
      {activeTab === 'A' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={protypoEPALData.classA.subjects.core} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Όταν ο αριθμός των μαθητών του τμήματος είναι μεγαλύτερος από δεκαέξι (16), κάθε τμήμα χωρίζεται σε δύο ομάδες. Σε κάθε ομάδα διδάσκονται εναλλάξ τα μαθήματα «Πληροφορική» και «Ερευνητική Εργασία στην Τεχνολογία» δύο (2) ώρες εβδομαδιαίως.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Προσανατολισμού Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={protypoEPALData.classA.subjects.orientation} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Όταν ο αριθμός των μαθητών του τμήματος είναι μεγαλύτερος από δεκαέξι (16), κάθε τμήμα χωρίζεται σε δύο ομάδες. Σε κάθε ομάδα διδάσκονται εναλλάξ τα μαθήματα «Πληροφορική» και «Ερευνητική Εργασία στην Τεχνολογία» δύο (2) ώρες εβδομαδιαίως.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Επιλογής Α' Τάξης</h2>

          <div className="overflow-x-auto mb-4">
            <ClassTable data={protypoEPALData.classA.subjects.optional} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Οι μαθητές θα επιλέγουν τρία (3) μαθήματα μεταξύ των οκτώ (8) προσφερόμενων μαθημάτων ανάλογα με τους τομείς που λειτουργούν σε κάθε ΕΠΑ.Λ.
            </p>
          </div>
        </section>
      )}

      {activeTab === 'B' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={protypoEPALData.classB.subjects.core} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Γαλλικά ή Γερμανικά.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Τομέων Β' Τάξης</h2>
          <div className="mb-6">
            <p className="mb-3">Επιλέξτε τομέα για να δείτε τα αντίστοιχα μαθήματα:</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(protypoEPALData.classB.subjects.sectors).map((sectorKey) => {
                const sector = protypoEPALData.classB.subjects.sectors[sectorKey];
                return (
                  <button
                    key={sectorKey}
                    onClick={() => setSelectedSector(sectorKey)}
                    className={`px-4 py-2 rounded-md text-sm transition-colors ${selectedSector === sectorKey
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                      }`}
                  >
                    {sector.name}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedSector && (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-3">
                Μαθήματα Τομέα: {protypoEPALData.classB.subjects.sectors[selectedSector].name}
              </h3>
              <div className="overflow-x-auto">
                <ClassTable data={protypoEPALData.classB.subjects.sectors[selectedSector].subjects} />
              </div>
            </div>
          )}
        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <p className='text-xl text-red-600 mb-2'>TODO</p>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={protypoEPALData.classC.subjects.core} />
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2">* Ιστορία διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Θετικών Σπουδών και Σπουδών Υγείας" ή την Ομάδα Προσανατολισμού "Σπουδών Οικονομίας και Πληροφορικής". Μαθηματικά διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Ανθρωπιστικών Σπουδών".</p>
            <p className="mb-2">* Μαθηματικά για τους/τις μαθητές/μαθήτριες που επιλέγουν το 2ο Επιστημονικό Πεδίο ή Βιολογία για τους/τις μαθητές/μαθήτριες που επιλέγουν το 3ο Επιστημονικό Πεδίο.</p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Τομέων Γ' Τάξης</h2>
          <div className="mb-6">
            <p className="mb-3">Επιλέξτε τομέα για να δείτε τα αντίστοιχα μαθήματα:</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(protypoEPALData.classC.subjects.sectors).map((sectorKey) => {
                const sector = protypoEPALData.classC.subjects.sectors[sectorKey];
                return (
                  <button
                    key={sectorKey}
                    onClick={() => setSelectedSector(sectorKey)}
                    className={`px-4 py-2 rounded-md text-sm transition-colors ${selectedSector === sectorKey
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                      }`}
                  >
                    {sector.name}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedSector && (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-3">
                Μαθήματα Τομέα: {protypoEPALData.classC.subjects.sectors[selectedSector].name}
              </h3>
              <div className="overflow-x-auto">
                <ClassTable data={protypoEPALData.classC.subjects.sectors[selectedSector].subjects} />
              </div>
            </div>
          )}

        </section>
      )}

    </div>
  )

}