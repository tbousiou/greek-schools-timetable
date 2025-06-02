import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'
import TabNavigation from '../components/TabNavigation.jsx';
import { imerisioEPALData } from '../data/epalData.js';


export default function EpalImerisio() {
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
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
        <h1 className="text-2xl font-bold">Ωρολόγιο Πρόγραμμα Ημερήσιο Επαγγελματικό Λύκειο (ΕΠΑΛ)</h1>
        
        <div className="mt-2 sm:mt-0 bg-gray-100 p-3 rounded-md">
          <h2 className="text-sm font-semibold mb-2">Πηγές (ΦΕΚ):</h2>
          <ul className="text-sm space-y-1">
            <li>
              <a 
                href="https://search.et.gr/el/fek/?fekId=569117" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ΦΕΚ ΤΕΥΧΟΣ Β 2187 12-06-2018
              </a>
            </li>
            <li>
              <a 
                href="https://search.et.gr/el/fek/?fekId=566206" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ΦΕΚ ΤΕΥΧΟΣ Β 2485 28-06-2018
              </a>
            </li>
            <hr></hr>
            <li>
              <a 
                href="https://search.et.gr/el/fek/?fekId=546760" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ΦΕΚ ΤΕΥΧΟΣ Β 1426 26-04-2017
              </a>
            </li>
            <li>
              <a 
                href="https://search.et.gr/el/fek/?fekId=544968" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ΦΕΚ ΤΕΥΧΟΣ Β 2072 15-06-2017
              </a>
            </li>
            <li>
              <a 
                href="https://search.et.gr/el/fek/?fekId=569376" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ΦΕΚ ΤΕΥΧΟΣ Β 2122 08-06-2018
              </a>
            </li>
          </ul>
        </div>
      </div>

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
            <ClassTable data={imerisioEPALData.classA.subjects.core} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Όταν ο αριθμός των μαθητών του τμήματος είναι μεγαλύτερος από δεκαέξι (16), κάθε τμήμα χωρίζεται σε δύο ομάδες. Σε κάθε ομάδα διδάσκονται εναλλάξ τα μαθήματα «Πληροφορική» και «Ερευνητική Εργασία στην Τεχνολογία» δύο (2) ώρες εβδομαδιαίως.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Προσανατολισμού Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={imerisioEPALData.classA.subjects.orientation} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Όταν ο αριθμός των μαθητών του τμήματος είναι μεγαλύτερος από δεκαέξι (16), κάθε τμήμα χωρίζεται σε δύο ομάδες. Σε κάθε ομάδα διδάσκονται εναλλάξ τα μαθήματα «Πληροφορική» και «Ερευνητική Εργασία στην Τεχνολογία» δύο (2) ώρες εβδομαδιαίως.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Επιλογής Α' Τάξης</h2>

          <div className="overflow-x-auto mb-4">
            <ClassTable data={imerisioEPALData.classA.subjects.optional} />
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
            <ClassTable data={imerisioEPALData.classB.subjects.core} />
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
              {Object.keys(imerisioEPALData.classB.subjects.sectors).map((sectorKey) => {
                const sector = imerisioEPALData.classB.subjects.sectors[sectorKey];
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
                Μαθήματα Τομέα: {imerisioEPALData.classB.subjects.sectors[selectedSector].name}
              </h3>
              <div className="overflow-x-auto">
                <ClassTable data={imerisioEPALData.classB.subjects.sectors[selectedSector].subjects} />
              </div>
            </div>
          )}
        </section>
      )}

      {activeTab === 'C' && (
        <section>
          
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={imerisioEPALData.classC.subjects.core} />
          </div>

          

          <h2 className="text-xl font-semibold mb-4">Ειδικότητες Γ' Τάξης ανά Τομέα</h2>
          <div className="mb-6">
            <p className="mb-3">Επιλέξτε τομέα για να δείτε τις αντίστοιχες ειδικότητες:</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(imerisioEPALData.classC.subjects.sectors).map((sectorKey) => {
                const sector = imerisioEPALData.classC.subjects.sectors[sectorKey];
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
                Ειδικότητες Τομέα: {imerisioEPALData.classC.subjects.sectors[selectedSector].name}
              </h3>

              {/* Responsive grid for specialties */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {imerisioEPALData.classC.subjects.sectors[selectedSector].specialties.map((specialty, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                    <h4 className="text-md font-semibold text-blue-700 mb-3">{specialty.name}</h4>
                    <div className="overflow-x-auto">
                      <ClassTable data={specialty.subjects} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p>- Τα μαθήματα των ειδικοτήτων μπορεί να διαφέρουν ανάλογα με το σχολικό έτος και τις εκπαιδευτικές προτεραιότητες του Υπουργείου Παιδείας.</p>
                <p>- Οι μαθητές επιλέγουν μία ειδικότητα από τον τομέα που παρακολούθησαν στη Β' τάξη.</p>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  )
}