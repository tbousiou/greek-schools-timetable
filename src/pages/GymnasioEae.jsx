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
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
        <h1 className="text-2xl font-bold">Ωρολόγιο Πρόγραμμα Γυμνάσιο EAE</h1>
        
        <div className="mt-2 sm:mt-0 bg-gray-100 p-3 rounded-md">
          <h2 className="text-sm font-semibold mb-2">Πηγές (ΦΕΚ):</h2>
          <ul className="text-sm space-y-1">
            <li>
              <a 
                href="https://search.et.gr/el/fek/?fekId=617419" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ΦΕΚ ΤΕΥΧΟΣ Β 4037 02-09-2021
              </a>
            </li>
            <li>
              <a 
                href="https://search.et.gr/el/fek/?fekId=622217" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ΦΕΚ ΤΕΥΧΟΣ Β 4622 06-10-2021
              </a>
            </li>
          </ul>
        </div>
      </div>

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