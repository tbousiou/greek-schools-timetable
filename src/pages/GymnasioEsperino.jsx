import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx';
import TabNavigation from '../components/TabNavigation.jsx';
import SchoolHeader from '../components/SchoolHeader.jsx';
import { esperinoGymnasioData } from '../data/gymnasioData.js';


export default function GymnasioEsperino() {
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
        schoolName="Εσπερινό Γυμνάσιο"
        references={[
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 3791 13-08-2021", url: "https://search.et.gr/el/fek/?fekId=608853" },
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 4064 06-09-2021", url: "https://search.et.gr/el/fek/?fekId=617249" }
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
            <ClassTable data={esperinoGymnasioData.classA.subjects.core} />
          </div>
          
        </section>
      )}

      {activeTab === 'B' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={esperinoGymnasioData.classB.subjects.core} />
          </div>
          
        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={esperinoGymnasioData.classC.subjects.core} />
          </div>
          
        </section>
      )}
    </div>
  )
}