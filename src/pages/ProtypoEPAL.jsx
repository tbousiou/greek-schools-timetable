import React, { useState } from 'react'
import ClassTable from '../components/ClassTable.jsx'
import TabNavigation from '../components/TabNavigation.jsx';


const protypoEPALData = {
  classA: {
    subjects: {
      core: [
        { name: "Νέα Ελληνικά", hours: 4 },
        { name: "Μαθηματικά: Άλγεβρα", hours: 3 },
        { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
        { name: "Φυσικές Επιστήμες: Φυσική", hours: 2 },
        { name: "Φυσικές Επιστήμες: Χημεία", hours: 1 },
        { name: "Φυσικές Επιστήμες: Βιολογία", hours: 1 },
        { name: "Πολιτική Παιδεία", hours: 2 },
        { name: "Ιστορία", hours: 1 },
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Αγγλικά", hours: 2 },
        { name: "Φυσική Αγωγή", hours: 2 },
        { name: "Πληροφορική*", hours: 2 }
      ],
      orientation: [
        { name: "Ερευνητική Εργασία στην Τεχνολογία*", hours: 2 },
        { name: "Σχολικός Επαγγελματικός Προσανατολισμός - Ασφάλεια και Υγεία στο χώρο εργασίας", hours: 2 },
        { name: "Ζώνη Δημιουργικών Δραστηριοτήτων", hours: 3 },
      ],
      optional: [
        { name: "Αγωγή Υγείας", hours: 2 },
        { name: "Αρχές Γραμμικού και Αρχιτεκτονικού Σχεδίου", hours: 2, type: "Σχεδιαστικό" },
        { name: "Αρχές Ηλεκτρολογίας και Ηλεκτρονικής", hours: 2 },
        { name: "Αρχές Μηχανολογίας", hours: 2 },
        { name: "Αρχές Οικονομίας", hours: 2 },
        { name: "Βασικές Αρχές Σύνθεσης", hours: 2, type: "Σχεδιαστικό" },
        { name: "Γεωπονία και Αειφόρος Ανάπτυξη", hours: 2 },
        { name: "Ναυτιλιακές Γνώσεις", hours: 2 }
      ]
    }
  },
  classB: {
    subjects: {
      core: [
        { name: "Νέα Ελληνικά", hours: 3 },
        { name: "Μαθηματικά: Άλγεβρα", hours: 2 },
        { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
        { name: "Φυσικές Επιστήμες: Φυσική", hours: 1 },
        { name: "Φυσικές Επιστήμες: Χημεία", hours: 1 },
        { name: "Θρησκευτικά", hours: 1 },
        { name: "Αγγλικά", hours: 1 },
        { name: "Εισαγωγή στις Αρχές της Επιστήμης των Η/Υ", hours: 1 },
        { name: "Φυσική Αγωγή", hours: 1 }
      ],
      sectors: {
        agricultular: {
          name: "Γεωπονίας, Τροφίμων και Περιβάλλοντος",
          subjects: [
            { name: "Αρχές Αγροτικής Ανάπτυξης", hours: 2, type: "Θεωρητικό", theory: 2 },
            { name: "Περιβάλλον και Γεωργία", hours: 3, type: "Μικτό", theory: 1, lab: 2 },
            { name: "Φυτική Παραγωγή", hours: 5, type: "Μικτό", theory: 2, lab: 3 },
            { name: "Ζωική Παραγωγή", hours: 3, type: "Μικτό", theory: 2, lab: 1 },
            { name: "Τεχνολογία Τροφίμων", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
            { name: "Αρχές Αρχιτεκτονικής Τοπίου", hours: 2, type: "Μικτό", theory: 1, lab: 1 },
            { name: "Στοιχεία Γεωργικών Εγκαταστάσεων και Γεωργικά Μηχανήματα", hours: 3, type: "Μικτό", theory: 2, lab: 1 },
            { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
          ]
        },
        management: {
          name: "Διοίκησης και Οικονομίας",
          subjects: [
            { name: "Αρχές Λογιστικής", hours: 6, type: "Μικτό", theory: 3, lab: 3 },
            { name: "Εισαγωγή στο Μάρκετινγκ", hours: 2, type: "Θεωρητικό" },
            { name: "Θεωρία Τουρισμού και Εφαρμογές", hours: 3, type: "Εργαστηριακό" },
            { name: "Εισαγωγή στην Εφοδιαστική (Logistics)", hours: 2, type: "Θεωρητικό" },
            { name: "Χρηματοπιστωτικές Συναλλαγές-Λογιστικά Φύλλα (EXCEL)", hours: 2, type: "Εργαστηριακό" },
            { name: "Στοιχεία Δικαίου (Αστικό-Εμπορικό-Εργατικό-Τουριστικό)", hours: 4, type: "Θεωρητικό" },
            { name: "Οικονομικά Μαθηματικά και Στατιστική", hours: 2, type: "Θεωρητικό" },
            { name: "Αγγλικά Τομέα", hours: 2, type: "Θεωρητικό" }
          ]
        },
        civil_engineering: {
          name: "Δομικών Έργων, Δομημένου Περιβάλλοντος και Αρχιτεκτονικού Σχεδιασμού",
          subjects: [
            { name: "Οικοδομικό Σχέδιο", hours: 4, type: "Σχεδιαστικό" },
            { name: "Τοπογραφία", hours: 5, type: "Μικτό", theory: 2, lab: 3 },
            { name: "Τοπογραφικό Σχέδιο - Ψηφιακή Χαρτογραφία", hours: 3, type: "Εργαστηριακό" },
            { name: "Κτιριακά Έργα και Δομικά Υλικά", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
            { name: "Σχέδιο Δομικών Έργων με χρήση Η/Υ Ι", hours: 4, type: "Εργαστηριακό" },
            { name: "Δομημένο Περιβάλλον και Πολεοδομικές Εφαρμογές", hours: 2, type: "Θεωρητικό" },
            { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
          ]
        },
        appliedArts: {
          name: "Εφαρμοσμένων Τεχνών",
          subjects: [
            { name: "Ελεύθερο Σχέδιο", hours: 4, type: "Σχεδιαστικό" },
            { name: "Γραμμικό Σχέδιο", hours: 3, type: "Σχεδιαστικό" },
            { name: "Ιστορία της Τέχνης", hours: 3, type: "Θεωρητικό" },
            { name: "Αρχές Σύνθεσης", hours: 3, type: "Εργαστηριακό" },
            { name: "Εφαρμοσμένες Τέχνες με χρήση Η/Υ", hours: 5, type: "Εργαστηριακό" },
            { name: "Ειδικό Εργαστηριακό Μάθημα", hours: 5, type: "Εργαστηριακό" }
          ]
        },
        electrical_engineering: {
          name: "Ηλεκτρολογίας, Ηλεκτρονικής και Αυτοματισμού",
          subjects: [
            { name: "Ηλεκτροτεχνία (Κυκλώματα Συνεχούς και Εναλλασσόμενου Ρεύματος)", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
            { name: "Εσωτερικές Ηλεκτρικές Εγκαταστάσεις και Ηλεκτρολογικό Σχέδιο", hours: 7, type: "Μικτό", theory: 2, lab: 5 },
            { name: "Εισαγωγή στα Υπολογιστικά Συστήματα και στα Δίκτυα Επικοινωνιών", hours: 3, type: "Εργαστηριακό" },
            { name: "Αυτοματισμοί, Αισθητήρες", hours: 2, type: "Εργαστηριακό" },
            { name: "Αναλογικά και Ψηφιακά Ηλεκτρονικά", hours: 6, type: "Μικτό", theory: 2, lab: 4 },
            { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
          ]
        },
        mechanical_engineering: {
          name: "Μηχανολογίας",
          subjects: [
            { name: "Στοιχεία Τεχνικής Θερμοδυναμικής - Εφαρμογές", hours: 6, type: "Μικτό", theory: 3, lab: 3 },
            { name: "Μηχανική-Αντοχή Υλικών", hours: 2, type: "Θεωρητικό" },
            { name: "Σχεδιασμός και Περιγραφή Στοιχείων Μηχανών", hours: 3, type: "Εργαστηριακό" },
            { name: "Τεχνολογία Μηχανολογικών Κατασκευών-Εφαρμογές", hours: 7, type: "Μικτό", theory: 2, lab: 5 },
            { name: "Βασική Ηλεκτρολογία και Εφαρμογές", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
            { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
          ]
        },
        computer_science: {
          name: "Πληροφορικής",
          subjects: [
            { name: "Αρχές Προγραμματισμού Υπολογιστών", hours: 4, type: "Μικτό", theory: 1, lab: 3 },
            { name: "Υλικό και Δίκτυα Υπολογιστών", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
            { name: "Βασικά Θέματα Πληροφορικής", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
            { name: "Λειτουργικά Συστήματα και Ασφάλεια Πληροφοριακών Συστημάτων", hours: 3, type: "Μικτό", theory: 1, lab: 2 },
            { name: "Σχεδιασμός και Ανάπτυξη Ιστοτόπων", hours: 4, type: "Εργαστηριακό" },
            { name: "Τεχνικά Θέματα Πωλήσεων και Προδιαγραφών Υλικού και Λογισμικού", hours: 3, type: "Μικτό", theory: 1, lab: 2 },
            { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
          ]
        },
        health: {
          name: "Υγείας - Πρόνοιας και Ευεξίας",
          subjects: [
            { name: "Ανατομία-Φυσιολογία Ι", hours: 3, type: "Θεωρητικό" },
            { name: "Πρώτες Βοήθειες", hours: 2, type: "Εργαστηριακό" },
            { name: "Υγεία και Διατροφή", hours: 2, type: "Θεωρητικό" },
            { name: "Διαπροσωπικές Σχέσεις", hours: 2, type: "Θεωρητικό" },
            { name: "Εργασιακό Περιβάλλον Τομέα", hours: 2, type: "Εργαστηριακό" },
            { name: "Αγγλικά Τομέα", hours: 2, type: "Θεωρητικό" },
            { name: "Ειδικό Μάθημα Α", hours: 5, type: "Μικτό" },
            { name: "Ειδικό Μάθημα Β", hours: 5, type: "Μικτό" }
          ]
        },
      }
    },
  },
  classC: {
    subjects: {
      core: [
        { name: "Νέα Ελληνικά", hours: 3 },
        { name: "Μαθηματικά: Άλγεβρα", hours: 2 },
        { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
        { name: "Φυσικές Επιστήμες: Φυσική", hours: 2 },
        { name: "Φυσικές Επιστήμες: Χημεία", hours: 1 },
        { name: "Αγγλικά", hours: 1 },
        { name: "Εισαγωγή στις Αρχές της Επιστήμης των Η/Υ", hours: 1 },
        { name: "Φυσική Αγωγή", hours: 1 }
      ],
      sectors: {
        agricultular: {
          name: "Γεωπονίας, Τροφίμων και Περιβάλλοντος",
          subjects: [
            { name: "Αρχές Αγροτικής Ανάπτυξης", hours: 2, type: "Θεωρητικό", theory: 2 },
            { name: "Περιβάλλον και Γεωργία", hours: 3, type: "Μικτό", theory: 1, lab: 2 },
            { name: "Φυτική Παραγωγή", hours: 5, type: "Μικτό", theory: 2, lab: 3 },
            { name: "Ζωική Παραγωγή", hours: 3, type: "Μικτό", theory: 2, lab: 1 },
            { name: "Τεχνολογία Τροφίμων", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
            { name: "Αρχές Αρχιτεκτονικής Τοπίου", hours: 2, type: "Μικτό", theory: 1, lab: 1 },
            { name: "Στοιχεία Γεωργικών Εγκαταστάσεων και Γεωργικά Μηχανήματα", hours: 3, type: "Μικτό", theory: 2, lab: 1 },
            { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
          ]
        },
        management: {
          name: "Διοίκησης και Οικονομίας",
          subjects: [
            { name: "Αρχές Λογιστικής", hours: 6, type: "Μικτό", theory: 3, lab: 3 },
            { name: "Εισαγωγή στο Μάρκετινγκ", hours: 2, type: "Θεωρητικό" },
            { name: "Θεωρία Τουρισμού και Εφαρμογές", hours: 3, type: "Εργαστηριακό" },
            { name: "Εισαγωγή στην Εφοδιαστική (Logistics)", hours: 2, type: "Θεωρητικό" },
            { name: "Χρηματοπιστωτικές Συναλλαγές-Λογιστικά Φύλλα (EXCEL)", hours: 2, type: "Εργαστηριακό" },
            { name: "Στοιχεία Δικαίου (Αστικό-Εμπορικό-Εργατικό-Τουριστικό)", hours: 4, type: "Θεωρητικό" },
            { name: "Οικονομικά Μαθηματικά και Στατιστική", hours: 2, type: "Θεωρητικό" },
            { name: "Αγγλικά Τομέα", hours: 2, type: "Θεωρητικό" }
          ]
        },
        civil_engineering: {
          name: "Δομικών Έργων, Δομημένου Περιβάλλοντος και Αρχιτεκτονικού Σχεδιασμού",
          subjects: [
            { name: "Οικοδομικό Σχέδιο", hours: 4, type: "Σχεδιαστικό" },
            { name: "Τοπογραφία", hours: 5, type: "Μικτό", theory: 2, lab: 3 },
            { name: "Τοπογραφικό Σχέδιο - Ψηφιακή Χαρτογραφία", hours: 3, type: "Εργαστηριακό" },
            { name: "Κτιριακά Έργα και Δομικά Υλικά", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
            { name: "Σχέδιο Δομικών Έργων με χρήση Η/Υ Ι", hours: 4, type: "Εργαστηριακό" },
            { name: "Δομημένο Περιβάλλον και Πολεοδομικές Εφαρμογές", hours: 2, type: "Θεωρητικό" },
            { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
          ]
        },
        appliedArts: {
          name: "Εφαρμοσμένων Τεχνών",
          subjects: [
            { name: "Ελεύθερο Σχέδιο", hours: 4, type: "Σχεδιαστικό" },
            { name: "Γραμμικό Σχέδιο", hours: 3, type: "Σχεδιαστικό" },
            { name: "Ιστορία της Τέχνης", hours: 3, type: "Θεωρητικό" },
            { name: "Αρχές Σύνθεσης", hours: 3, type: "Εργαστηριακό" },
            { name: "Εφαρμοσμένες Τέχνες με χρήση Η/Υ", hours: 5, type: "Εργαστηριακό" },
            { name: "Ειδικό Εργαστηριακό Μάθημα", hours: 5, type: "Εργαστηριακό" }
          ]
        },
        electrical_engineering: {
          name: "Ηλεκτρολογίας, Ηλεκτρονικής και Αυτοματισμού",
          subjects: [
            { name: "Ηλεκτροτεχνία (Κυκλώματα Συνεχούς και Εναλλασσόμενου Ρεύματος)", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
            { name: "Εσωτερικές Ηλεκτρικές Εγκαταστάσεις και Ηλεκτρολογικό Σχέδιο", hours: 7, type: "Μικτό", theory: 2, lab: 5 },
            { name: "Εισαγωγή στα Υπολογιστικά Συστήματα και στα Δίκτυα Επικοινωνιών", hours: 3, type: "Εργαστηριακό" },
            { name: "Αυτοματισμοί, Αισθητήρες", hours: 2, type: "Εργαστηριακό" },
            { name: "Αναλογικά και Ψηφιακά Ηλεκτρονικά", hours: 6, type: "Μικτό", theory: 2, lab: 4 },
            { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
          ]
        },
        mechanical_engineering: {
          name: "Μηχανολογίας",
          subjects: [
            { name: "Στοιχεία Τεχνικής Θερμοδυναμικής - Εφαρμογές", hours: 6, type: "Μικτό", theory: 3, lab: 3 },
            { name: "Μηχανική-Αντοχή Υλικών", hours: 2, type: "Θεωρητικό" },
            { name: "Σχεδιασμός και Περιγραφή Στοιχείων Μηχανών", hours: 3, type: "Εργαστηριακό" },
            { name: "Τεχνολογία Μηχανολογικών Κατασκευών-Εφαρμογές", hours: 7, type: "Μικτό", theory: 2, lab: 5 },
            { name: "Βασική Ηλεκτρολογία και Εφαρμογές", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
            { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
          ]
        },
        computer_science: {
          name: "Πληροφορικής",
          subjects: [
            { name: "Αρχές Προγραμματισμού Υπολογιστών", hours: 4, type: "Μικτό", theory: 1, lab: 3 },
            { name: "Υλικό και Δίκτυα Υπολογιστών", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
            { name: "Βασικά Θέματα Πληροφορικής", hours: 4, type: "Μικτό", theory: 2, lab: 2 },
            { name: "Λειτουργικά Συστήματα και Ασφάλεια Πληροφοριακών Συστημάτων", hours: 3, type: "Μικτό", theory: 1, lab: 2 },
            { name: "Σχεδιασμός και Ανάπτυξη Ιστοτόπων", hours: 4, type: "Εργαστηριακό" },
            { name: "Τεχνικά Θέματα Πωλήσεων και Προδιαγραφών Υλικού και Λογισμικού", hours: 3, type: "Μικτό", theory: 1, lab: 2 },
            { name: "Αγγλικά Τομέα", hours: 1, type: "Θεωρητικό" }
          ]
        },
        health: {
          name: "Υγείας - Πρόνοιας και Ευεξίας",
          subjects: [
            { name: "Ανατομία-Φυσιολογία Ι", hours: 3, type: "Θεωρητικό" },
            { name: "Πρώτες Βοήθειες", hours: 2, type: "Εργαστηριακό" },
            { name: "Υγεία και Διατροφή", hours: 2, type: "Θεωρητικό" },
            { name: "Διαπροσωπικές Σχέσεις", hours: 2, type: "Θεωρητικό" },
            { name: "Εργασιακό Περιβάλλον Τομέα", hours: 2, type: "Εργαστηριακό" },
            { name: "Αγγλικά Τομέα", hours: 2, type: "Θεωρητικό" },
            { name: "Ειδικό Μάθημα Α", hours: 5, type: "Μικτό" },
            { name: "Ειδικό Μάθημα Β", hours: 5, type: "Μικτό" }
          ]
        },
      }
    },
  },
};



function ProtypoEPAL() {
  const [activeTab, setActiveTab] = useState('A');
  const [selectedSector, setSelectedSector] = useState('agricultular');

  // Define tabs as data
  const tabs = [
    { id: 'A', label: 'Τάξη A\'' },
    { id: 'B', label: 'Τάξη B\'' },
    { id: 'C', label: 'Τάξη Γ\'' }
  ];

  // Reset selected sector when changing tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // If navigating to B tab, select agricultural sector by default
    if (tab === 'B' || tab === 'C') {
      setSelectedSector('agricultular');
    } else {
      setSelectedSector(null);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ωρολόγιο Πρόγραμμα Πρότυπο Επαγγελματικό Λύκειο (ΕΠΑΛ)</h1>

      {/* Using the abstracted TabNavigation component */}
      <TabNavigation
        activeTab={activeTab}
        onTabChange={handleTabChange}
        tabs={tabs}
      />

      {/* Content based on active tab */}
      {activeTab === 'A' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={protypoEPALData.classA.subjects.core} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Όταν ο αριθμός των μαθητών του τμήματος είναι μεγαλύτερος από δεκαέξι (16), κάθε τμήμα χωρίζεται σε δύο ομάδες. Σε κάθε ομάδα διδάσκονται εναλλάξ τα μαθήματα «Πληροφορική» και «Ερευνητική Εργασία στην Τεχνολογία» δύο (2) ώρες εβδομαδιαίως.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Προσανατολισμού Α' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={protypoEPALData.classA.subjects.orientation} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Όταν ο αριθμός των μαθητών του τμήματος είναι μεγαλύτερος από δεκαέξι (16), κάθε τμήμα χωρίζεται σε δύο ομάδες. Σε κάθε ομάδα διδάσκονται εναλλάξ τα μαθήματα «Πληροφορική» και «Ερευνητική Εργασία στην Τεχνολογία» δύο (2) ώρες εβδομαδιαίως.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Επιλογής Α' Τάξης</h2>

          <div className="overflow-x-auto mb-4">
            <ClassTable data={protypoEPALData.classA.subjects.optional} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Οι μαθητές θα επιλέγουν τρία (3) μαθήματα μεταξύ των οκτώ (8) προσφερόμενων μαθημάτων ανάλογα με τους τομείς που λειτουργούν σε κάθε ΕΠΑ.Λ.
            </p>
          </div>
        </section>
      )}

      {activeTab === 'B' && (
        <section>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Β' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={protypoEPALData.classB.subjects.core} />
          </div>
          <div className="text-sm text-gray-600">
            <p className='mb-2'>
              - Γαλλικά ή Γερμανικά.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Τομέων Β' Τάξης</h2>
          <div className="mb-6">
            <p className="mb-3">Επιλέξτε τομέα για να δείτε τα αντίστοιχα μαθήματα:</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(protypoEPALData.classB.subjects.sectors).map((sectorKey) => {
                const sector = protypoEPALData.classB.subjects.sectors[sectorKey];
                return (
                  <button
                    key={sectorKey}
                    onClick={() => setSelectedSector(sectorKey)}
                    className={`px-4 py-2 rounded-md text-sm transition-colors ${selectedSector === sectorKey
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                      }`}
                  >
                    {sector.name}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedSector && (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-3">
                Μαθήματα Τομέα: {protypoEPALData.classB.subjects.sectors[selectedSector].name}
              </h3>
              <div className="overflow-x-auto">
                <ClassTable data={protypoEPALData.classB.subjects.sectors[selectedSector].subjects} />
              </div>
            </div>
          )}
        </section>
      )}

      {activeTab === 'C' && (
        <section>
          <p className='text-xl text-red-600 mb-2'>TODO</p>
          <h2 className="text-xl font-semibold mb-4">Μαθήματα Γενικής Παιδείας Γ' Τάξης</h2>
          <div className="overflow-x-auto mb-4">
            <ClassTable data={protypoEPALData.classC.subjects.core} />
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2">* Ιστορία διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Θετικών Σπουδών και Σπουδών Υγείας" ή την Ομάδα Προσανατολισμού "Σπουδών Οικονομίας και Πληροφορικής". Μαθηματικά διδάσκονται οι μαθητές/μαθήτριες που επιλέγουν την Ομάδα Προσανατολισμού "Ανθρωπιστικών Σπουδών".</p>
            <p className="mb-2">* Μαθηματικά για τους/τις μαθητές/μαθήτριες που επιλέγουν το 2ο Επιστημονικό Πεδίο ή Βιολογία για τους/τις μαθητές/μαθήτριες που επιλέγουν το 3ο Επιστημονικό Πεδίο.</p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Μαθήματα Τομέων Γ' Τάξης</h2>
          <div className="mb-6">
            <p className="mb-3">Επιλέξτε τομέα για να δείτε τα αντίστοιχα μαθήματα:</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(protypoEPALData.classC.subjects.sectors).map((sectorKey) => {
                const sector = protypoEPALData.classC.subjects.sectors[sectorKey];
                return (
                  <button
                    key={sectorKey}
                    onClick={() => setSelectedSector(sectorKey)}
                    className={`px-4 py-2 rounded-md text-sm transition-colors ${selectedSector === sectorKey
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                      }`}
                  >
                    {sector.name}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedSector && (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-3">
                Μαθήματα Τομέα: {protypoEPALData.classC.subjects.sectors[selectedSector].name}
              </h3>
              <div className="overflow-x-auto">
                <ClassTable data={protypoEPALData.classC.subjects.sectors[selectedSector].subjects} />
              </div>
            </div>
          )}

        </section>
      )}

    </div>
  )

}

export default ProtypoEPAL