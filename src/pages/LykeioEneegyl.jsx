import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'
import TabNavigation from '../components/TabNavigation.jsx';
import SchoolHeader from '../components/SchoolHeader.jsx';
import { eneegylLykeioData } from '../data/epalData.js';


export default function LykeioEneegyl() {
  const [activeTab, setActiveTab] = useState('A');
  const [selectedSector, setSelectedSector] = useState('agricultular');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' },
    { id: 'D', label: 'Τάξη Δ\'' }
  ];


  // Reset selected sector when changing tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // If navigating to B tab, select agricultural sector by default
    if (tab === 'B' || tab === 'C' || tab === 'D') {
      setSelectedSector('agricultular');
    } else {
      setSelectedSector(null);
    }
  };


  return (
    <div className="p-4">

      <SchoolHeader
        schoolName="Λύκειο ΕΝΕΕΓΥΛ"
        references={[
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 3791 03-09-2018", url: "https://search.et.gr/el/fek/?fekId=563597" },
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 4140 20-09-2018", url: "https://search.et.gr/el/fek/?fekId=574878" },
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 0723 04-03-2019", url: "https://search.et.gr/el/fek/?fekId=567401" }
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
            <ClassTable data={eneegylLykeioData.classA.subjects.core} />
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Προσανατολισμού Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={eneegylLykeioData.classA.subjects.orientation} />
          </div>


          <h2 className="text-xl font-semibold mb-4">Μαθήματα Επιλογής Α' Τάξης (3 από 7)</h2>

          <div className="overflow-x-auto mb-4">
            <ClassTable data={eneegylLykeioData.classA.subjects.optional} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Οι μαθητές θα επιλέγουν τρία (3) μαθήματα μεταξύ των επτά (7) προσφερόμενων μαθημάτων ανάλογα με τους τομείς που λειτουργούν σε κάθε ΕΝ.Ε.ΓΥ.Λ.
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


          <h2 className="text-xl font-semibold mb-4">Μαθήματα Τομέων Β' Τάξης</h2>
          <div className="mb-6">
            <p className="mb-3">Επιλέξτε τομέα για να δείτε τα αντίστοιχα μαθήματα:</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(eneegylLykeioData.classB.subjects.sectors).map((sectorKey) => {
                const sector = eneegylLykeioData.classB.subjects.sectors[sectorKey];
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
                Μαθήματα Τομέα: {eneegylLykeioData.classB.subjects.sectors[selectedSector].name}
              </h3>
              <div className="overflow-x-auto">
                <ClassTable data={eneegylLykeioData.classB.subjects.sectors[selectedSector].subjects} />
              </div>
            </div>
          )}

        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={eneegylLykeioData.classC.subjects.core} />
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Τομέων Γ' Τάξης</h2>
          <div className="mb-6">
            <p className="mb-3">Επιλέξτε τομέα για να δείτε τα αντίστοιχα μαθήματα:</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(eneegylLykeioData.classC.subjects.sectors).map((sectorKey) => {
                const sector = eneegylLykeioData.classC.subjects.sectors[sectorKey];
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
                Μαθήματα Τομέα: {eneegylLykeioData.classC.subjects.sectors[selectedSector].name}
              </h3>
              <div className="overflow-x-auto">
                <ClassTable data={eneegylLykeioData.classC.subjects.sectors[selectedSector].subjects} />
              </div>
            </div>
          )}

        </section>
      )}

      {activeTab === 'D' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Δ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={eneegylLykeioData.classD.subjects.core} />
          </div>



          <h2 className="text-xl font-semibold mb-4">Ειδικότητες Δ' Τάξης ανά Τομέα</h2>
          <div className="mb-6">
            <p className="mb-3">Επιλέξτε τομέα για να δείτε τις αντίστοιχες ειδικότητες:</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(eneegylLykeioData.classD.subjects.sectors).map((sectorKey) => {
                const sector = eneegylLykeioData.classD.subjects.sectors[sectorKey];
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
                Ειδικότητες Τομέα: {eneegylLykeioData.classC.subjects.sectors[selectedSector].name}
              </h3>

              {/* Responsive grid for specialties */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {eneegylLykeioData.classD.subjects.sectors[selectedSector].specialties.map((specialty, index) => (
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