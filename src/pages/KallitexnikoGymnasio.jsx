import React, { useState } from 'react'
import ClassTable from '../components/ClassTable';
import TabNavigation from '../components/TabNavigation';

const kallitexnikoGymnasioData = {
  classA: {
    subjects: {
      core: [
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Γλωσσική Διδασκαλία", hours: 3 },
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Νεοελληνική Λογοτεχνία", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνική Γλώσσα", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: - Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά", hours: 4 },
        { name: "Φυσική", hours: 1 },
        { name: "Βιολογία", hours: 1 },
        { name: "Γεωλογία - Γεωγραφία", hours: 1 },
        { name: "Ιστορία", hours: 2 },
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Αγγλικά", hours: 2 },
        { name: "Γαλλικά/Γερμανικά", hours: 2 },
        { name: "Φυσική Αγωγή*", hours: 2 },
        { name: "Πληροφορική", hours: 1 },
      ],
      art: [
        { name: "Εικαστικό εργαστήρι", hours: 8 },
        { name: "Ιστορία Τέχνης", hours: 2 },
        { name: "Χορός", hours: 1 },
        { name: "Θέατρο", hours: 2 },
        { name: "Μουσική", hours: 1 },
      ],
      theatre: [
        { name: "Υποκριτική - Αυτοσχεδιασμός", hours: 4 },
        { name: "Αγωγή Προφορικού Λόγου", hours: 1 },
        { name: "Θεατρολογία", hours: 1 },
        { name: "Θεατρική Κίνηση - Χορός", hours: 1 },
        { name: "Κινηματογράφος", hours: 3 },
        { name: "Εικαστικά", hours: 1 },
        { name: "Μουσική", hours: 1 },
        { name: "Εργαστήρι Δημιουργικής Γραφής", hours: 2 },
      ],
      dance: [
        { name: "Κλασικός Χορός", hours: 4 },
        { name: "Σύγχρονος Χορός", hours: 4 },
        { name: "Παραδοσιακός Χορός", hours: 2 },
        { name: "Μουσική", hours: 2 },
        { name: "Θέατρο", hours: 1 },
        { name: "Εικαστικά", hours: 1 },
      ],
    }
  },

  classB: {
    subjects: {
      core: [
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Γλωσσική Διδασκαλία", hours: 2 },
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Νεοελληνική Λογοτεχνία", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνική Γλώσσα", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά", hours: 4 },
        { name: "Φυσική", hours: 2 },
        { name: "Χημεία", hours: 1 },
        { name: "Βιολογία", hours: 1 },
        { name: "Γεωλογία - Γεωγραφία", hours: 1 },
        { name: "Ιστορία", hours: 2 },
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Αγγλικά", hours: 2 },
        { name: "Γαλλικά/Γερμανικά", hours: 2 },
        { name: "Φυσική Αγωγή*", hours: 1 },
        { name: "Πληροφορική", hours: 1 },
      ],
      art: [
        { name: "Εικαστικό εργαστήρι", hours: 9 },
        { name: "Ιστορία Τέχνης", hours: 2 },
        { name: "Χορός", hours: 1 },
        { name: "Θέατρο", hours: 1 },
        { name: "Μουσική", hours: 1 },
      ],
      theatre: [
        { name: "Υποκριτική", hours: 3 },
        { name: "Αγωγή Προφορικού Λόγου", hours: 1 },
        { name: "Θεατρολογία", hours: 1 },
        { name: "Θεατρική Κίνηση - Χορός", hours: 2 },
        { name: "Κινηματογράφος", hours: 3 },
        { name: "Εικαστικά", hours: 1 },
        { name: "Μουσική", hours: 1 },
        { name: "Εργαστήρι Δημιουργικής Γραφής", hours: 2 },
      ],
      dance: [
        { name: "Κλασικός Χορός", hours: 4 },
        { name: "Σύγχρονος Χορός", hours: 4 },
        { name: "Παραδοσιακός Χορός", hours: 2 },
        { name: "Μουσική", hours: 2 },
        { name: "Θέατρο", hours: 1 },
        { name: "Εικαστικά", hours: 1 },
      ],
    }
  },
  classC: {
    subjects: {
      core: [
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Γλωσσική Διδασκαλία", hours: 2 },
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Νεοελληνική Λογοτεχνία", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνική Γλώσσα", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά", hours: 4 },
        { name: "Φυσική", hours: 2 },
        { name: "Χημεία", hours: 1 },
        { name: "Βιολογία", hours: 1 },
        { name: "Ιστορία", hours: 2 },
        { name: "Κοινωνική και πολιτική Αγωγή", hours: 1 },
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Αγγλικά", hours: 2 },
        { name: "Γαλλικά/Γερμανικά", hours: 2 },
        { name: "Φυσική Αγωγή*", hours: 2 },
        { name: "Πληροφορική", hours: 1 },
      ],
      art: [
        { name: "Εικαστικό εργαστήρι", hours: 8 },
        { name: "Ιστορία Τέχνης", hours: 2 },
        { name: "Χορός", hours: 1 },
        { name: "Θέατρο", hours: 1 },
        { name: "Μουσική", hours: 1 },
      ],
      theatre: [
        { name: "Υποκριτική - Αυτοσχεδιασμός", hours: 3 },
        { name: "Αγωγή Προφορικού Λόγου", hours: 1 },
        { name: "Θεατρολογία", hours: 1 },
        { name: "Θεατρική Κίνηση - Χορός", hours: 1 },
        { name: "Κινηματογράφος", hours: 3 },
        { name: "Εικαστικά", hours: 1 },
        { name: "Μουσική", hours: 1 },
        { name: "Εργαστήρι Δημιουργικής Γραφής", hours: 2 },
      ],
      dance: [
        { name: "Κλασικός Χορός", hours: 3 },
        { name: "Σύγχρονος Χορός", hours: 4 },
        { name: "Παραδοσιακός Χορός", hours: 2 },
        { name: "Μουσική", hours: 2 },
        { name: "Θέατρο", hours: 1 },
        { name: "Εικαστικά", hours: 1 },
      ],
    }
  },
}


export default function KallitexnikoGymnasio() {
  const [activeTab, setActiveTab] = useState('A');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ωρολόγιο Πρόγραμμα Καλλιτεχνικό Γυμνάσιο</h1>

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