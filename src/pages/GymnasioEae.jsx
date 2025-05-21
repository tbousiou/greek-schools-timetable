import React, { useState } from 'react'
import ClassTable from '../components/ClassTable';
import TabNavigation from '../components/TabNavigation';
import { eaeGymnasioData } from '../data/gymnasioData';


export default function GymnasioEae() {
  const [activeTab, setActiveTab] = useState('A');

  // Define tabs as data
  const tabs = [
    { id: 'Pre', label: 'Τάξη Προκ.\'' },
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ωρολόγιο Πρόγραμμα EAE Γυμνάσιο</h1>

      {/* Tab Navigation */}
      <TabNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={tabs}
      />

      {/* Content based on active tab */}

      {activeTab === 'Pre' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Προκαταρκτικής Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={eaeGymnasioData.preliminary.subjects.core} />
          </div>

        </section>
      )}

      {activeTab === 'A' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={eaeGymnasioData.classA.subjects.core} />
          </div>

        </section>
      )}

      {activeTab === 'B' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={eaeGymnasioData.classB.subjects.core} />
          </div>

        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={eaeGymnasioData.classC.subjects.core} />
          </div>

        </section>
      )}
    </div>
  )
}