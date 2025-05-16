import React, { useState } from 'react'
import ClassTable from '../components/ClassTable';
import TabNavigation from '../components/TabNavigation';

const eneegylGimnasioData = {
  classA: {
    subjects: {
      core: [
        { name: "Γλωσσική Διδασκαλία", hours: 3 },
        { name: "Νεοελληνική Λογοτεχνία", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα", hours: 2 },
        { name: "Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά", hours: 4 },
        { name: "Φυσική", hours: 1 },
        { name: "Βιολογία", hours: 1 },
        { name: "Γεωλογία - Γεωγραφία", hours: 1 },
        { name: "Ιστορία", hours: 2 },
        { name: "Θρησκευτικά", hours: 2 },
        { name: "Αγγλικά", hours: 2 },
        { name: "2η Ξένη Γλώσσα*", hours: 2 },
        { name: "Οικιακή Οικονομία", hours: 1 },
        { name: "Φυσική Αγωγή", hours: 2 },
        { name: "Τεχνολογία", hours: 1 },
        { name: "Πληροφορική", hours: 2 },
        { name: "Μουσική", hours: 1 },
        { name: "Καλλιτεχνικά", hours: 1 },
        { name: "Εργαστήριο Δεξιοτήτων", hours: 1 }
      ]
    }
  },

  classB: {
    subjects: {
      core: [
        { name: "Γλωσσική Διδασκαλία", hours: 2 },
        { name: "Νεοελληνική Λογοτεχνία", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα", hours: 2 },
        { name: "Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά", hours: 4 },
        { name: "Φυσική", hours: 2 },
        { name: "Χημεία", hours: 1 },
        { name: "Βιολογία", hours: 1 },
        { name: "Γεωλογία - Γεωγραφία", hours: 2 },
        { name: "Ιστορία", hours: 2 },
        { name: "Θρησκευτικά", hours: 2 },
        { name: "Αγγλικά", hours: 2 },
        { name: "2η Ξένη Γλώσσα*", hours: 2 },
        { name: "Φυσική Αγωγή", hours: 2 },
        { name: "Τεχνολογία", hours: 1 },
        { name: "Πληροφορική", hours: 1 },
        { name: "Μουσική", hours: 1 },
        { name: "Καλλιτεχνικά", hours: 1 },
        { name: "Εργαστήριο Δεξιοτήτων", hours: 1 }
      ]
    }
  },
  classC: {
    subjects: {
      core: [
        { name: "Γλωσσική Διδασκαλία", hours: 2 },
        { name: "Νεοελληνική Λογοτεχνία", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα", hours: 2 },
        { name: "Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά", hours: 4 },
        { name: "Φυσική", hours: 2 },
        { name: "Χημεία", hours: 1 },
        { name: "Βιολογία", hours: 1 },
        { name: "Ιστορία", hours: 2 },
        { name: "Θρησκευτικά", hours: 2 },
        { name: "Αγγλικά", hours: 2 },
        { name: "2η Ξένη Γλώσσα*", hours: 2 },
        { name: "Κοινωνική και Πολιτική Αγωγή", hours: 3 },
        { name: "Φυσική Αγωγή", hours: 2 },
        { name: "Τεχνολογία", hours: 1 },
        { name: "Πληροφορική", hours: 1 },
        { name: "Μουσική", hours: 1 },
        { name: "Καλλιτεχνικά", hours: 1 },
        { name: "Εργαστήριο Δεξιοτήτων", hours: 1 }
      ]
    }
  },
}


export default function EneegylGimnasio() {
  const [activeTab, setActiveTab] = useState('A');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη Α\'' },
    { id: 'B', label: 'Τάξη Β\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ωρολόγιο Πρόγραμμα Γυμνάσιο ΕΝΕΕΓΥΛ</h1>

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
            <ClassTable data={eneegylGimnasioData.classA.subjects.core} />
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
            <ClassTable data={eneegylGimnasioData.classB.subjects.core} />
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
            <ClassTable data={eneegylGimnasioData.classC.subjects.core} />
          </div>
          <p className="text-sm text-gray-600">
            * Η 2η ξένη γλώσσα επιλέγεται μεταξύ Γαλλικών, Γερμανικών και Ιταλικών.
          </p>
        </section>
      )}
    </div>
  )
}