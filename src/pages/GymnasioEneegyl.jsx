import React, { useState } from 'react'
import ClassTable from '../components/ClassTable';
import TabNavigation from '../components/TabNavigation';
import SchoolHeader from '../components/SchoolHeader.jsx';
import { eneegylGymnasioData } from '../data/gymnasioData';


export default function GymnasioEneegyl() {
  const [activeTab, setActiveTab] = useState('A');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' },
    { id: 'D', label: 'Τάξη Δ\'' }
  ];


  return (
    <div className="p-4">
      <SchoolHeader
        schoolName="Γυμνάσιο ΕΝΕΕΓΥΛ"
        references={[
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 4037 02-09-2021", url: "https://search.et.gr/el/fek/?fekId=617419" },
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 4622 06-10-2021", url: "https://search.et.gr/el/fek/?fekId=622217" },
          { text: "ΦΕΚ ΤΕΥΧΟΣ Β 5662 26-09-2023", url: "https://search.et.gr/el/fek/?fekId=626045" }
        ]}
      />

      {/* Tab Navigation */}
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
            <ClassTable data={eneegylGymnasioData.classA.subjects.core} />
          </div>
          <p className="text-sm text-gray-600">
            * Η 2η ξένη γλώσσα επιλέγεται μεταξύ Γαλλικών, Γερμανικών και Ιταλικών.
          </p>
        </section>
      )}

      {activeTab === 'B' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={eneegylGymnasioData.classB.subjects.core} />
          </div>
          <p className="text-sm text-gray-600">
            * Η 2η ξένη γλώσσα επιλέγεται μεταξύ Γαλλικών, Γερμανικών και Ιταλικών.
          </p>
        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={eneegylGymnasioData.classC.subjects.core} />
          </div>
          <p className="text-sm text-gray-600">
            * Η 2η ξένη γλώσσα επιλέγεται μεταξύ Γαλλικών, Γερμανικών και Ιταλικών.
          </p>
        </section>
      )}

      {activeTab === 'D' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Δ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={eneegylGymnasioData.classD.subjects.core} />
          </div>
          <p className="text-sm text-gray-600">
            * Η 2η ξένη γλώσσα επιλέγεται μεταξύ Γαλλικών, Γερμανικών και Ιταλικών.
          </p>
        </section>
      )}

    </div>
  )
}