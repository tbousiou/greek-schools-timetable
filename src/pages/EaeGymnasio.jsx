import React, { useState } from 'react'
import ClassTable from '../components/ClassTable';
import TabNavigation from '../components/TabNavigation';

const eaeGymnasioData = {
  preliminary: {
    subjects: {
      core: [
        { name: "Νεοελληνική Γλώσσα και Γραμματεία", hours: 15 },
        { name: "Μαθηματικά", hours: 5 },
        { name: "Νοηματική Γλώσσα για κωφούς και βαρήκοους ή εναλλακτικές μορφές επικοινωνίας για τους κινητικά ανάπηρους μαθητές μέσω Η/Υ ", hours: 4 },
        { name: "Φυσική Αγωγή", hours: 2 },
        { name: "Καλλιτεχνική Παιδεία (Καλλιτεχνικά ή Μουσική ή θεατρική Παιδεία) ", hours: 2 },
        { name: "Υποστηρικτικές", hours: 4 },
        { name: "Εργαστήριο Δεξιοτήτων", hours: 1 }
      ]
    }
  },
  classA: {
    subjects: {
      core: [
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Γλωσσική Διδασκαλία", hours: 4 },
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Νεοελληνική Λογοτεχνία", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνική Γλώσσα", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά", hours: 4 },
        { name: "Φυσική", hours: 1 },
        { name: "Βιολογία", hours: 1 },
        { name: "Γεωλογία - Γεωγραφία", hours: 1 },
        { name: "Ιστορία", hours: 2 },
        { name: "Θρησκευτικά", hours: 2 },
        { name: "Αγγλικά", hours: 2 },
        { name: "Οικιακή Οικονομία", hours: 2 },
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
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Γλωσσική Διδασκαλία", hours: 4 },
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Νεοελληνική Λογοτεχνία", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνική Γλώσσα", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά", hours: 4 },
        { name: "Φυσική", hours: 2 },
        { name: "Χημεία", hours: 1 },
        { name: "Βιολογία", hours: 1 },
        { name: "Γεωλογία - Γεωγραφία", hours: 2 },
        { name: "Ιστορία", hours: 2 },
        { name: "Θρησκευτικά", hours: 2 },
        { name: "Αγγλικά", hours: 2 },
        { name: "Φυσική Αγωγή", hours: 2 },
        { name: "Τεχνολογία και Πληροφορική: Τεχνολογία", hours: 1 },
        { name: "Τεχνολογία και Πληροφορική: Πληροφορική", hours: 1 },
        { name: "Πολιτισμός και Δραστηριότητες: Μουσική", hours: 1 },
        { name: "Πολιτισμός και Δραστηριότητες: Καλλιτεχνικά", hours: 1 },
        { name: "Πολιτισμός και Δραστηριότητες: Εργαστήριο Δεξιοτήτων", hours: 1 }
      ]
    }
  },
  classC: {
    subjects: {
      core: [
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Γλωσσική Διδασκαλία", hours: 4 },
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Νεοελληνική Λογοτεχνία", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνική Γλώσσα", hours: 2 },
        { name: "Αρχαία Ελληνική Γλώσσα και Γραμματεία: Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά", hours: 4 },
        { name: "Φυσική", hours: 2 },
        { name: "Χημεία", hours: 1 },
        { name: "Βιολογία", hours: 1 },
        { name: "Ιστορία", hours: 2 },
        { name: "Θρησκευτικά", hours: 2 },
        { name: "Αγγλικά", hours: 2 },
        { name: "Κοινωνική και Πολιτική Αγωγή", hours: 3 },
        { name: "Φυσική Αγωγή", hours: 2 },
        { name: "Τεχνολογία και Πληροφορική: Τεχνολογία", hours: 1 },
        { name: "Τεχνολογία και Πληροφορική: Πληροφορική", hours: 1 },
        { name: "Πολιτισμός και Δραστηριότητες: Μουσική", hours: 1 },
        { name: "Πολιτισμός και Δραστηριότητες: Καλλιτεχνικά", hours: 1 },
        { name: "Πολιτισμός και Δραστηριότητες: Εργαστήριο Δεξιοτήτων", hours: 1 }
      ]
    }
  },
}


export default function EAEGymnasio() {
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