import React, { useState } from 'react'
import ClassTable from '../components/ClassTable';
import TabNavigation from '../components/TabNavigation';
import SchoolHeader from '../components/SchoolHeader.jsx';
import { kallitexnikoGymnasioData } from '../data/gymnasioData';


export default function GymnasioKallitexniko() {
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
        schoolName="Καλλιτεχνικό Γυμνάσιο"
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
            <ClassTable data={kallitexnikoGymnasioData.classA.subjects.core} />
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Καλλιτεχνικής Παιδείας Α' Τάξης</h2>

          {/* Grid layout for artistic direction tables */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Εικαστικών Τεχνών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoGymnasioData.classA.subjects.art} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Θεάτρου - Κινηματογράφου</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoGymnasioData.classA.subjects.theatre} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Χορού</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoGymnasioData.classA.subjects.dance} />
              </div>
            </div>
          </div>

        </section>
      )}

      {activeTab === 'B' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={kallitexnikoGymnasioData.classB.subjects.core} />
          </div>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Καλλιτεχνικής Παιδείας Β' Τάξης</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Εικαστικών Τεχνών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoGymnasioData.classB.subjects.art} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Θεάτρου - Κινηματογράφου</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoGymnasioData.classB.subjects.theatre} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Χορού</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoGymnasioData.classB.subjects.dance} />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={kallitexnikoGymnasioData.classC.subjects.core} />
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Καλλιτεχνικής Παιδείας Γ' Τάξης</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Εικαστικών Τεχνών</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoGymnasioData.classC.subjects.art} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Θεάτρου - Κινηματογράφου</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoGymnasioData.classC.subjects.theatre} />
              </div>
            </div>

            <div>
              <h3 className='text-lg text-amber-700 font-semibold mb-4'>Κατεύθυνση Χορού</h3>
              <div className="overflow-x-auto">
                <ClassTable data={kallitexnikoGymnasioData.classC.subjects.dance} />
              </div>
            </div>
          </div>

        </section>
      )}
    </div>
  )
}