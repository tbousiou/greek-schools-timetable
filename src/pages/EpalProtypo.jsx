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


          <h2 className="text-xl font-semibold mb-4">Μαθήματα Προσανατολισμού Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={protypoEPALData.classA.subjects.orientation} />
          </div>



        </section>
      )}

      {activeTab === 'B' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={protypoEPALData.classB.subjects.core} />
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



          <h2 className="text-xl font-semibold mb-4">Ειδικότητες Γ' Τάξης ανά Τομέα</h2>
          <div className="mb-6">
            <p className="mb-3">Επιλέξτε τομέα για να δείτε τις αντίστοιχες ειδικότητες:</p>
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
                Ειδικότητες Τομέα: {protypoEPALData.classC.subjects.sectors[selectedSector].name}
              </h3>

              {/* Responsive grid for specialties */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {protypoEPALData.classC.subjects.sectors[selectedSector].specialties.map((specialty, index) => (
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