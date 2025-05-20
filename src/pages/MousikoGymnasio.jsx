import React, { useState } from 'react'
import ClassTable from '../components/ClassTable';
import TabNavigation from '../components/TabNavigation';

const mousikoGymnasioData = {
  classA: {
    subjects: {
      core: [
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Γλωσσική Διδασκαλία", hours: 3 },
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Νεοελληνική Λογοτεχνία", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνική Γλώσσα", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
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
        { name: "Αισθητική Αγωγή: Θέατρο", hours: 1 },
        { name: "Αισθητική Αγωγή: Καλλιτεχνικά", hours: 1 },
        { name: "Αισθητική Αγωγή: Ιστορία Τέχνης", hours: 1 }
      ],
      music: [
        { name: "Ευρωπαϊκή Μουσική (Θεωρία και Πράξη)", hours: 2 },
        { name: "Ελληνική Παραδοσιακή Μουσική (Θεωρία και Πράξη)", hours: 2 },
        { name: "Κριτική Μουσική Ακρόαση", hours: 1 },
        { name: "Χορωδία*", hours: 2 },
        { name: "Μουσικό Σύνολο (Οργανοχρησίας ή άλλου είδους)", hours: 2 },
        { name: "Πιάνο", hours: 1 },
        { name: "Ταμπουράς ή άλλο τοπικό παραδοσιακό όργανο αναφοράς", hours: 1 },
        { name: "Ατομικό Όργανο Επιλογής", hours: 2 },
      ]
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
        { name: "Φυσική Αγωγή*", hours: 2 },
        { name: "Πληροφορική", hours: 1 },
        { name: "Αισθητική Αγωγή: Θέατρο", hours: 1 },
        { name: "Αισθητική Αγωγή: Καλλιτεχνικά", hours: 1 },
      ],
      music: [
        { name: "Ευρωπαϊκή Μουσική (Θεωρία και Πράξη)", hours: 2 },
        { name: "Ελληνική Παραδοσιακή Μουσική (Θεωρία και Πράξη)", hours: 2 },
        { name: "Ιστορία Μουσικής", hours: 1 },
        { name: "Χορωδία*", hours: 2 },
        { name: "Μουσικό Σύνολο (Οργανοχρησίας ή άλλου είδους)", hours: 2 },
        { name: "Πιάνο", hours: 1 },
        { name: "Ταμπουράς ή άλλο τοπικό παραδοσιακό όργανο αναφοράς", hours: 1 },
        { name: "Ατομικό Όργανο Επιλογής", hours: 2 },
      ]
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
        { name: "Αισθητική Αγωγή: Θέατρο", hours: 1 },
        { name: "Αισθητική Αγωγή: Καλλιτεχνικά", hours: 1 },],
      music: [
        { name: "Ευρωπαϊκή Μουσική (Θεωρία και Πράξη και Εισαγωγή στην Αρμονία)", hours: 3 },
        { name: "Ελληνική Παραδοσιακή Μουσική (Θεωρία και Πράξη)", hours: 2 },
        { name: "Ιστορία Μουσικής", hours: 1 },
        { name: "Χορωδία*", hours: 2 },
        { name: "Μουσικό Σύνολο (Οργανοχρησίας ή άλλου είδους)", hours: 2 },
        { name: "Πιάνο", hours: 1 },
        { name: "Ταμπουράς ή άλλο τοπικό παραδοσιακό όργανο αναφοράς", hours: 1 },
        { name: "Ατομικό Όργανο Επιλογής", hours: 2 },
      ]
    }
  },
}


export default function MousikoGymnasio() {
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
      
      <h1 className="text-2xl font-bold mb-4">Ωρολόγιο Πρόγραμμα Μουσικό Γυμνάσιο</h1>

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
          
          {notesCore}

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