import React, { useState } from 'react'
import ClassTable from '../components/ClassTable';
import TabNavigation from '../components/TabNavigation';

const eneegylGymnasioData = {
  classA: {
    subjects: {
      core: [
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Γλωσσική Διδασκαλία", hours: 3 },
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Νεοελληνική Λογοτεχνία", hours: 2 },
        { name: "Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά: Άλγεβρα", hours: 2 },
        { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
        { name: "Φυσική", hours: 1 },
        { name: "Βιολογία", hours: 1 },
        { name: "Γεωλογία - Γεωγραφία", hours: 1 },
        { name: "Ιστορία", hours: 2 },
        { name: "Θρησκευτικά", hours: 2 },
        { name: "Αγγλικά", hours: 1 },
        { name: "Οικιακή Οικονομία", hours: 2 },
        { name: "Φυσική Αγωγή", hours: 2 },
        { name: "Τεχνολογία και Πληροφορική: Τεχνολογία", hours: 1 },
        { name: "Τεχνολογία και Πληροφορική: Πληροφορική", hours: 1 },
        { name: "Πολιτισμός και Δραστηριότητες: Μουσική/Θεατρική Αγωγή/", hours: 1 },
        { name: "Πολιτισμός και Δραστηριότητες: Καλλιτεχνικά", hours: 1 },
        { name: "Σχολικός Επαγγελματικός Προσανατολισμός", hours: 2 },
        { name: "Ζώνη Δημιουργικών Δραστηριοτήτων", hours: 2 },
        { name: "Εργαστήριο Δεξιοτήτων", hours: 1 },
      ]
    }
  },

  classB: {
    subjects: {
      core: [
       { name: "Νεοελληνική Γλώσσα και Γραμματεία: Γλωσσική Διδασκαλία", hours: 2 },
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Νεοελληνική Λογοτεχνία", hours: 1 },
        { name: "Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά: Άλγεβρα", hours: 2 },
        { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
        { name: "Φυσική", hours: 1 },
        { name: "Χημεία", hours: 1 },
        { name: "Βιολογία", hours: 1 },
        { name: "Γεωλογία - Γεωγραφία", hours: 1 },
        { name: "Ιστορία", hours: 2 },
        { name: "Θρησκευτικά", hours: 2 },
        { name: "Αγγλικά", hours: 1 },
        { name: "Φυσική Αγωγή", hours: 2 },
        { name: "Τεχνολογία και Πληροφορική: Τεχνολογία", hours: 2 },
        { name: "Τεχνολογία και Πληροφορική: Πληροφορική", hours: 2 },
        { name: "Πολιτισμός και Δραστηριότητες: Μουσική/Θεατρική Αγωγή/", hours: 1 },
        { name: "Πολιτισμός και Δραστηριότητες: Καλλιτεχνικά", hours: 1 },
        { name: "Σχολικός Επαγγελματικός Προσανατολισμός", hours: 3 },
        { name: "Ζώνη Δημιουργικών Δραστηριοτήτων", hours: 2 },
        { name: "Εργαστήριο Δεξιοτήτων", hours: 1 },
      ]
    }
  },
  classC: {
    subjects: {
      core: [
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Γλωσσική Διδασκαλία", hours: 2 },
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Νεοελληνική Λογοτεχνία", hours: 1 },
        { name: "Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά: Άλγεβρα", hours: 2 },
        { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
        { name: "Φυσική", hours: 2 },
        { name: "Γεωλογία - Γεωγραφία", hours: 1 },
        { name: "Ιστορία", hours: 1 },
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Αγγλικά", hours: 1 },
        { name: "Κοινωνική και Πολιτική Αγωγή", hours: 1 },
        { name: "Φυσική Αγωγή", hours: 2 },
        { name: "Τεχνολογία και Πληροφορική: Τεχνολογία", hours: 2 },
        { name: "Τεχνολογία και Πληροφορική: Πληροφορική", hours: 2 },
        { name: "Πολιτισμός και Δραστηριότητες: Μουσική/Θεατρική Αγωγή/", hours: 1 },
        { name: "Πολιτισμός και Δραστηριότητες: Καλλιτεχνικά", hours: 1 },
        { name: "Σχολικός Επαγγελματικός Προσανατολισμός", hours: 5 },
        { name: "Ζώνη Δημιουργικών Δραστηριοτήτων", hours: 2 },
        { name: "Εργαστήριο Δεξιοτήτων", hours: 1 },
      ]
    }
  },
  classD: {
    subjects: {
      core: [
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Γλωσσική Διδασκαλία", hours: 2 },
        { name: "Νεοελληνική Γλώσσα και Γραμματεία: Νεοελληνική Λογοτεχνία", hours: 1 },
        { name: "Αρχαία Ελληνικά Κείμενα από Μετάφραση", hours: 2 },
        { name: "Μαθηματικά: Άλγεβρα", hours: 2 },
        { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
        { name: "Φυσική", hours: 1 },
        { name: "Χημεία", hours: 1 },
        { name: "Βιολογία", hours: 1 },
        { name: "Ιστορία", hours: 1 },
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Αγγλικά", hours: 1 },
        { name: "Φυσική Αγωγή", hours: 2 },
        { name: "Κοινωνική και Πολιτική Αγωγή", hours: 2 },
        { name: "Τεχνολογία και Πληροφορική: Τεχνολογία", hours: 2 },
        { name: "Τεχνολογία και Πληροφορική: Πληροφορική", hours: 2 },
        { name: "Πολιτισμός και Δραστηριότητες: Μουσική/Θεατρική Αγωγή/", hours: 1 },
        { name: "Πολιτισμός και Δραστηριότητες: Καλλιτεχνικά", hours: 1 },
        { name: "Σχολικός Επαγγελματικός Προσανατολισμός", hours: 5 },
        { name: "Ζώνη Δημιουργικών Δραστηριοτήτων", hours: 1 },
        { name: "Εργαστήριο Δεξιοτήτων", hours: 1 },
      ]
    }
  }
}


export default function EneegylGymnasio() {
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