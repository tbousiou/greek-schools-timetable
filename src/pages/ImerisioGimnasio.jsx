import React, { useState } from 'react'
import ClassTable from '../components/ClassTable';

const imerisioGimnasioData = {
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


export default function ImerisioGimnasio() {
  const [activeTab, setActiveTab] = useState('A');

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ωρολόγιο Πρόγραμμα Ημερήσιο Γυμνάσιο</h1>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-300 mb-6">
        <button
          onClick={() => handleTabChange('A')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'A'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:border-b-2'
            }`}
        >
          Τάξη Α'
        </button>
        <button
          onClick={() => handleTabChange('B')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'B'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:border-b-2'
            }`}
        >
          Τάξη Β'
        </button>
        <button
          onClick={() => handleTabChange('C')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'C'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:border-b-2'
            }`}
        >
          Τάξη Γ'
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'A' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Ωρολόγιο Πρόγραμμα Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={imerisioGimnasioData.classA.subjects.core} />
          </div>
          <p className="text-sm text-gray-600">
            * Η 2η ξένη γλώσσα επιλέγεται μεταξύ Γαλλικών, Γερμανικών και Ιταλικών.
          </p>
        </section>
      )}

      {activeTab === 'B' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Ωρολόγιο Πρόγραμμα Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={imerisioGimnasioData.classB.subjects.core} />
          </div>
          <p className="text-sm text-gray-600">
            * Η 2η ξένη γλώσσα επιλέγεται μεταξύ Γαλλικών, Γερμανικών και Ιταλικών.
          </p>
        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Ωρολόγιο Πρόγραμμα Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={imerisioGimnasioData.classC.subjects.core} />
          </div>
          <p className="text-sm text-gray-600">
            * Η 2η ξένη γλώσσα επιλέγεται μεταξύ Γαλλικών, Γερμανικών και Ιταλικών.
          </p>
        </section>
      )}
    </div>
  )
}