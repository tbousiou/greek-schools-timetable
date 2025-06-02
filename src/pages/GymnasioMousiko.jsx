import React, { useState } from 'react'
import ClassTable from '../components/ClassTable';
import TabNavigation from '../components/TabNavigation';
import SchoolHeader from '../components/SchoolHeader.jsx';
import { mousikoGymnasioData } from '../data/gymnasioData';


export default function GymnasioMousiko() {
  const [activeTab, setActiveTab] = useState('A');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];

  const notesCore = (
    <div className="text-sm text-gray-600">
      <p className='mb-2'>
        - Η 2η ώρα Φυσικής Αγωγής στις τάξεις Α’ και Β’ του Γυμνασίου θα είναι Ελληνικοί Χοροί.
      </p>
    </div>
  );

  const notesMusic = (
    <div className="text-sm text-gray-600">
      <p className='mb-2'>
        - Στο πλαίσιο του μαθήματος «Χορωδία» οι μαθητές διδάσκονται υποχρεωτικά ρεπερτόριο Ελληνικής Παραδοσιακής Μουσικής σε μια τάξη του Γυμνασίου (Α’ ή Β’ ή Γ’).
      </p>
    </div>
  );


  return (
    <div className="p-4">

      <SchoolHeader
        schoolName="Μουσικό Γυμνάσιο"
        references={[
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 3523 25-08-2020", url: "https://search.et.gr/el/fek/?fekId=610629" },
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
            <ClassTable data={mousikoGymnasioData.classA.subjects.core} />
          </div>
          
          {notesCore}

          <h2 className="text-xl font-semibold mb-4 mt-8">Μαθήματα Μουσικής Παιδείας Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoGymnasioData.classA.subjects.music} />
          </div>

          {notesMusic}

        </section>
      )}

      {activeTab === 'B' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoGymnasioData.classB.subjects.core} />
          </div>
          
          {notesCore}

          <h2 className="text-xl font-semibold mb-4 mt-8">Μαθήματα Μουσικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoGymnasioData.classB.subjects.music} />
          </div>
          
          {notesMusic}
        
        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoGymnasioData.classC.subjects.core} />
          </div>
          
          

          <h2 className="text-xl font-semibold mb-4 mt-8">Μαθήματα Μουσικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={mousikoGymnasioData.classC.subjects.music} />
          </div>

          {notesMusic}

        </section>
      )}
    </div>
  )
}