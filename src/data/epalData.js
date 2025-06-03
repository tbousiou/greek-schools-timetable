export const imerisioEPALData = {
    classA: {
        subjects: {
            core: [
                { name: "Νέα Ελληνικά", hours: 4 },
                { name: "Μαθηματικά: Άλγεβρα", hours: 3 },
                { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
                { name: "Φυσικές Επιστήμες: Φυσική", hours: 2 },
                { name: "Φυσικές Επιστήμες: Χημεία", hours: 1 },
                { name: "Φυσικές Επιστήμες: Βιολογία", hours: 1 },
                { name: "Πολιτική Παιδεία*", hours: 2 },
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
                { name: "Αρχές Γραμμικού και Αρχιτεκτονικού Σχεδίου", hours: 2, hoursBreakdown: "2Σ" },
                { name: "Αρχές Ηλεκτρολογίας και Ηλεκτρονικής", hours: 2 },
                { name: "Αρχές Μηχανολογίας", hours: 2 },
                { name: "Αρχές Οικονομίας", hours: 2 },
                { name: "Βασικές Αρχές Σύνθεσης", hours: 2, hoursBreakdown: "2Σ" },
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
                        { name: "Αρχές Αγροτικής Ανάπτυξης", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Περιβάλλον και Γεωργία", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                        { name: "Φυτική Παραγωγή", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                        { name: "Ζωική Παραγωγή", hours: 3, hoursBreakdown: "2Θ + 1Ε" },
                        { name: "Τεχνολογία Τροφίμων", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Αρχές Αρχιτεκτονικής Τοπίου", hours: 2, hoursBreakdown: "1Θ + 1Ε" },
                        { name: "Στοιχεία Γεωργικών Εγκαταστάσεων και Γεωργικά Μηχανήματα", hours: 3, hoursBreakdown: "2Θ + 1Ε" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                management: {
                    name: "Διοίκησης και Οικονομίας",
                    subjects: [
                        { name: "Αρχές Λογιστικής", hours: 6, hoursBreakdown: "3Θ + 3Ε" },
                        { name: "Εισαγωγή στο Μάρκετινγκ", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Θεωρία Τουρισμού και Εφαρμογές", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Εισαγωγή στην Εφοδιαστική (Logistics)", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Χρηματοπιστωτικές Συναλλαγές-Λογιστικά Φύλλα (EXCEL)", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Στοιχεία Δικαίου (Αστικό-Εμπορικό-Εργατικό-Τουριστικό)", hours: 4, hoursBreakdown: "4Θ" },
                        { name: "Οικονομικά Μαθηματικά και Στατιστική", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Αγγλικά Τομέα", hours: 2, hoursBreakdown: "2Θ" }
                    ]
                },
                civil_engineering: {
                    name: "Δομικών Έργων, Δομημένου Περιβάλλοντος και Αρχιτεκτονικού Σχεδιασμού",
                    subjects: [
                        { name: "Οικοδομικό Σχέδιο", hours: 4, hoursBreakdown: "4Σ" },
                        { name: "Τοπογραφία", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                        { name: "Τοπογραφικό Σχέδιο - Ψηφιακή Χαρτογραφία", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Κτιριακά Έργα και Δομικά Υλικά", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Σχέδιο Δομικών Έργων με χρήση Η/Υ Ι", hours: 4, hoursBreakdown: "4Ε" },
                        { name: "Δομημένο Περιβάλλον και Πολεοδομικές Εφαρμογές", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                appliedArts: {
                    name: "Εφαρμοσμένων Τεχνών",
                    subjects: [
                        { name: "Ελεύθερο Σχέδιο", hours: 4, hoursBreakdown: "4Σ" },
                        { name: "Γραμμικό Σχέδιο", hours: 3, hoursBreakdown: "3Σ" },
                        { name: "Ιστορία της Τέχνης", hours: 3, hoursBreakdown: "3Θ" },
                        { name: "Αρχές Σύνθεσης", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Εφαρμοσμένες Τέχνες με χρήση Η/Υ", hours: 5, hoursBreakdown: "5Ε" },
                        { name: "Ειδικό Εργαστηριακό Μάθημα*", hours: 5, hoursBreakdown: "5Ε" }
                    ]
                },
                electrical_engineering: {
                    name: "Ηλεκτρολογίας, Ηλεκτρονικής και Αυτοματισμού",
                    subjects: [
                        { name: "Ηλεκτροτεχνία (Κυκλώματα Συνεχούς και Εναλλασσόμενου Ρεύματος)", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Εσωτερικές Ηλεκτρικές Εγκαταστάσεις και Ηλεκτρολογικό Σχέδιο", hours: 7, hoursBreakdown: "2Θ + 5Ε" },
                        { name: "Εισαγωγή στα Υπολογιστικά Συστήματα και στα Δίκτυα Επικοινωνιών", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Αυτοματισμοί, Αισθητήρες", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Αναλογικά και Ψηφιακά Ηλεκτρονικά", hours: 6, hoursBreakdown: "2Θ + 4Ε" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                mechanical_engineering: {
                    name: "Μηχανολογίας",
                    subjects: [
                        { name: "Στοιχεία Τεχνικής Θερμοδυναμικής - Εφαρμογές", hours: 6, hoursBreakdown: "3Θ + 3Ε" },
                        { name: "Μηχανική-Αντοχή Υλικών", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Σχεδιασμός και Περιγραφή Στοιχείων Μηχανών", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Τεχνολογία Μηχανολογικών Κατασκευών-Εφαρμογές", hours: 7, hoursBreakdown: "2Θ + 5Ε" },
                        { name: "Βασική Ηλεκτρολογία και Εφαρμογές", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                computer_science: {
                    name: "Πληροφορικής",
                    subjects: [
                        { name: "Αρχές Προγραμματισμού Υπολογιστών", hours: 4, hoursBreakdown: "1Θ + 3Ε" },
                        { name: "Υλικό και Δίκτυα Υπολογιστών", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Βασικά Θέματα Πληροφορικής", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Λειτουργικά Συστήματα και Ασφάλεια Πληροφοριακών Συστημάτων", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                        { name: "Σχεδιασμός και Ανάπτυξη Ιστοτόπων", hours: 4, hoursBreakdown: "4Ε" },
                        { name: "Τεχνικά Θέματα Πωλήσεων και Προδιαγραφών Υλικού και Λογισμικού", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                health: {
                    name: "Υγείας - Πρόνοιας και Ευεξίας",
                    subjects: [
                        { name: "Ανατομία-Φυσιολογία Ι", hours: 3, hoursBreakdown: "3Θ" },
                        { name: "Πρώτες Βοήθειες", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Υγεία και Διατροφή", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Διαπροσωπικές Σχέσεις", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Εργασιακό Περιβάλλον Τομέα", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Αγγλικά Τομέα", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Ειδικό Μάθημα Α", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                        { name: "Ειδικό Μάθημα Β", hours: 5, hoursBreakdown: "2Θ + 3Ε" }
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
                    specialties: [
                        {
                            name: "Τεχνικός Φυτικής Παραγωγής",
                            subjects: [
                                { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Αρχές Βιολογικής Γεωργίας", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Δενδροκομία - Αμπελουργία", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                                { name: "Φυτά Μεγάλης Καλλιέργειας-Κηπευτικές Καλλιέργειες", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                                { name: "Αρδεύσεις Καλλιεργειών", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                                { name: "Φυτοπροστασία", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                            ]
                        },
                        {
                            name: "Τεχνικός Ζωικής Παραγωγής",
                            subjects: [
                                { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Αρχές Βιολογικής Γεωργίας", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Διατροφή Αγροτικών Ζώων", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                                { name: "Εκτροφή Αγροτικών Ζώων", hours: 6, hoursBreakdown: "3Θ + 3Ε" },
                                { name: "Υδατοκαλλιέργειες", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                                { name: "Μελισσοκομία-Σηροτροφία", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                            ]
                        },
                        {
                            name: "Τεχνικός Τεχνολογίας Τροφίμων και Ποτών",
                            subjects: [
                                { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Αρχές Βιολογικής Γεωργίας", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Αρχές Επεξεργασίας Τροφίμων", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                                { name: "Μεταποίηση Φυτικών Προϊόντων", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                                { name: "Μεταποίηση Ζωικών Προϊόντων", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                                { name: "Ασφάλεια Τροφίμων", hours: 3, hoursBreakdown: "2Θ + 1Ε" },
                            ]
                        },
                        {
                            name: "Τεχνικός Ανθοκομίας και Αρχιτεκτονικής Τοπίου",
                            subjects: [
                                { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Αρχές Βιολογικής Γεωργίας", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Ανθοκομικά Φυτά", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                                { name: "Εφαρμογές Αρδευτικών Δικτύων στην Κηποτεχνία", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                                { name: "Σχεδιασμός Φυτοτεχνικών Έργων", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                                { name: "Συντήρηση Κηποτεχνικών Εφαρμογών", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                            ]
                        },
                    ],
                },
                management: {
                    name: "Διοίκησης και Οικονομίας",
                    specialties: [
                        {
                            name: "Υπάλληλος Διοίκησης και Οικονομικών Υπηρεσιών",
                            subjects: [
                                { name: "Αρχές Οικονομικής Θεωρίας", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Σύγχρονο Περιβάλλον Γραφείου", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                                { name: "Φορολογική Πρακτική", hours: 6, hoursBreakdown: "2Θ + 4Ε" },
                                { name: "Λογιστικές Εφαρμογές", hours: 5, hoursBreakdown: "5Ε" },
                                { name: "Επικοινωνία και Δημόσιες Σχέσεις", hours: 2, hoursBreakdown: "2Θ" },
                            ]
                        },
                        {
                            name: "Υπάλληλος Τουριστικών Επιχειρήσεων",
                            subjects: [
                                { name: "Αρχές Οικονομικής Θεωρίας", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Οργάνωση και Λειτουργία Τουριστικών Επιχειρήσεων", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                                { name: "Οργάνωση και Λειτουργία Ξενοδοχειακών Επιχειρήσεων", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                                { name: "Γεωγραφία Τουρισμού", hours: 2, hoursBreakdown: "2Ε" },
                                { name: "Εφαρμογές στον Τουρισμό", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "Αγγλικά Ειδικότητας", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Γαλλικά / Γερμανικά / Ισπανικά / Ιταλικά", hours: 2, hoursBreakdown: "2Θ" },
                            ]
                        },
                        {
                            name: "Υπάλληλος Εμπορίας και Διαφήμισης",
                            subjects: [
                                { name: "Αρχές Οικονομικής Θεωρίας", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Σύγχρονο Περιβάλλον Γραφείου", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                                { name: "Διαφήμιση (Εισαγωγή, Δημιουργία και Προβολή)", hours: 6, hoursBreakdown: "2Θ + 4Ε" },
                                { name: "Επικοινωνία και Δημόσιες Σχέσεις", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Εφαρμογές Μάρκετινγκ", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "Λογιστικές Εφαρμογές", hours: 2, hoursBreakdown: "2Ε" },
                            ]
                        },
                        {
                            name: "Υπάλληλος Αποθήκης και Συστημάτων Εφοδιασμού",
                            subjects: [
                                { name: "Αρχές Οικονομικής Θεωρίας", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Οργάνωση και Διαχείριση Αποθηκών", hours: 5, hoursBreakdown: "3Θ + 2Ε" },
                                { name: "Οργάνωση και Διαχείριση Μεταφορών", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                                { name: "Εφαρμογές Εφοδιαστικής", hours: 6, hoursBreakdown: "3Θ + 3Ε" },
                                { name: "Λογιστικές Εφαρμογές", hours: 2, hoursBreakdown: "2Ε" },
                            ]
                        },
                    ],
                },
                civil_engineering: {
                    name: "Δομικών Έργων, Δομημένου Περιβάλλοντος και Αρχιτεκτονικού Σχεδιασμού",
                    specialties: [
                        {
                            name: "Τεχνικός Δομικών Έργων και Γεωπληροφορικής",
                            subjects: [
                                { name: "Αρχιτεκτονικό Σχέδιο", hours: 4, hoursBreakdown: "4Σ" },
                                { name: "Οικοδομική", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Σχέδιο Πολιτικού Μηχανικού και Έργων Υποδομής", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                                { name: "Εφαρμογές Γεωπληροφορικής στα Τεχνικά Έργα", hours: 5, hoursBreakdown: "5Ε" },
                                { name: "Οργάνωση Τεχνικών Έργων", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                                { name: "Σχέδιο Δομικών Έργων με χρήση Η/Υ ΙΙ", hours: 4, hoursBreakdown: "4Ε" },
                            ]
                        },
                    ],
                },
                appliedArts: {
                    name: "Εφαρμοσμένων Τεχνών",
                    specialties: [
                        {
                            name: "Γραφικών Τεχνών",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Τεχνολογία Υλικών", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Ελεύθερο Σχέδιο - Χρώμα", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "Γραφιστικές Εφαρμογές", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Τεχνολογία Εκτυπώσεων", hours: 4, hoursBreakdown: "1Θ + 3Ε" },
                                { name: "Ψηφιακή Σχεδίαση Εντύπων", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Γραμματογραφία", hours: 2, hoursBreakdown: "2Ε" },
                                { name: "Αγγλικά Ειδικότητας", hours: 1, hoursBreakdown: "1Θ" },
                            ]
                        },
                        {
                            name: "Αργυροχρυσοχοϊας",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Τεχνολογία Υλικών", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Εργαστήριο Χειροποίητου Κοσμήματος", hours: 9, hoursBreakdown: "9Ε" },
                                { name: "Εργαστήριο Αναπαραγωγικού Κοσμήματος - Σμάλτο", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "Σχέδιο Κοσμηματοποιΐας", hours: 3, hoursBreakdown: "3Σ" },
                                { name: "Εργαστήριο Πλαστικής - Μεταλλοπλαστικής", hours: 3, hoursBreakdown: "3Ε" },
                            ]
                        },
                        {
                            name: "Συντήρησης Έργων Τέχνης - Αποκατάστασης",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Τεχνολογία Υλικών", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Βασικές Τεχνικές Συντήρησης Έργων Τέχνης", hours: 7, hoursBreakdown: "7Ε" },
                                { name: "Προστασία Πολιτιστικής Κληρονομιάς", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Αντίγραφο Έργων Τέχνης", hours: 5, hoursBreakdown: "5Ε" },
                                { name: "Σχεδιαστική Τεκμηρίωση Έργων Τέχνης", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "Αγγλικά Ειδικότητας", hours: 1, hoursBreakdown: "1Θ" },
                            ]
                        },
                        {
                            name: "Σχεδίασης και Παραγωγής Ενδύματος",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Τεχνολογία Υλικών", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Τεχνολογία Προτύπων Κοπής (Πατρόν)", hours: 5, hoursBreakdown: "5Ε" },
                                { name: "Ηλεκτρονική Σχεδίαση Βιομηχανικού Προϊόντος", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "Τεχνολογία Υφάσματος και Οργάνωση Συλλογής Ενδύματος", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Ποιοτικός Έλεγχος Υφάσματος", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                                { name: "Τεχνολογία Παραγωγής Ενδυμάτων", hours: 4, hoursBreakdown: "4Ε" },
                            ]
                        },
                        {
                            name: "Σχεδιασμού και Διακόσμησης Εσωτερικών Χώρων",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Τεχνολογία Υλικών", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Ελεύθερο Σχέδιο – Χρώμα", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "Ψηφιακή Σχεδίαση", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "Διακόσμηση Εσωτερικών Χώρων", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Διακοσμητική Σύνθεση – Τρισδιάστατη Μακέτα", hours: 6, hoursBreakdown: "6Ε" },
                                { name: "Αγγλικά Ειδικότητας", hours: 2, hoursBreakdown: "2Θ" },
                            ]
                        },
                        {
                            name: "Επιπλοποίας και Ξυλογλυπτικής",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Τεχνολογία Υλικών", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Ξύλινες Κατασκευές", hours: 6, hoursBreakdown: "1Θ + 5Ε" },
                                { name: "Συνδεσμολογία Επίπλου - Ξυλογλυπτική", hours: 6, hoursBreakdown: "1Θ + 5Ε" },
                                { name: "Τεχνολογία Ξύλου - Μετρήσεις", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Γραμμικό Σχέδιο", hours: 2, hoursBreakdown: "2Σ" },
                                { name: "Ελεύθερο Σχέδιο", hours: 2, hoursBreakdown: "2Σ" },
                            ]
                        },
                    ],
                },
                electrical_engineering: {
                    name: "Ηλεκτρολογίας, Ηλεκτρονικής και Αυτοματισμού",
                    specialties: [
                        {
                            name: "Τεχνικός Ηλεκτρονικών και Υπολογιστικών Συστημάτων, Εγκαταστάσεων, Δικτύων και Τηλεπικοινωνιών",
                            subjects: [
                                { name: "Ψηφιακά Συστήματα", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Δίκτυα Υπολογιστών", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Εφαρμοσμένα Ηλεκτρονικά - Κατασκευές", hours: 2, hoursBreakdown: "2Ε" },
                                { name: "Εγκατάσταση και Διαχείριση Δικτύων - Συντήρηση Υπολογιστικών Συστημάτων", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "Συστήματα Ελέγχου και Ασφάλειας", hours: 2, hoursBreakdown: "2Ε" },
                                { name: "Τηλεπικοινωνίες - Τηλεματική", hours: 5, hoursBreakdown: "3Θ + 2Ε" },
                                { name: "Ρομποτική", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "Επεξεργασία Σήματος Ήχου και Εικόνας", hours: 2, hoursBreakdown: "2Ε" },
                            ]
                        },
                        {
                            name: "Τεχνικός Ηλεκτρολογικών Συστημάτων, Εγκαταστάσεων και Δικτύων",
                            subjects: [
                                { name: "Ηλεκτροτεχνία 2", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Ηλεκτρικές Μηχανές", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Ηλεκτρολογικές Εγκαταστάσεις 2", hours: 7, hoursBreakdown: "3Θ + 4Ε" },
                                { name: "Εργαστήριο Ηλεκτροτεχνίας – Ηλεκτρικών Μηχανών", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Αυτοματισμοί Προγραμματιζόμενης Λογικής", hours: 6, hoursBreakdown: "2Θ + 4Ε" },
                            ]
                        },
                    ],
                },
                mechanical_engineering: {
                    name: "Μηχανολογίας",
                    specialties: [
                        {
                            name: "Τεχνικός Μηχανολογικών Εγκαταστάσεων και Κατασκευών",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Μηχανουργική Τεχνολογία – Εργαλειομηχανές", hours: 8, hoursBreakdown: "2Θ + 6Ε" },
                                { name: "Ανελκυστήρες – Ανυψωτικές Μηχανές", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Στοιχεία Ψύξης – Κλιματισμού", hours: 7, hoursBreakdown: "2Θ + 5Ε" },
                            ]
                        },
                        {
                            name: "Τεχνικός Θερμικών και Υδραυλικών Εγκαταστάσεων και Τεχνολογίας Πετρελαίου και Φυσικού Αερίου",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Συντήρηση και Επισκευή Εγκαταστάσεων Καύσης Υγρών και Αερίων Καυσίμων", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                                { name: "Ύδρευση – Αποχέτευση", hours: 4, hoursBreakdown: "1Θ + 3Ε" },
                                { name: "Κατασκευή και Λειτουργία Κεντρικής Θέρμανσης", hours: 6, hoursBreakdown: "1Θ + 5Ε" },
                                { name: "Σχέδιο Ειδικότητας", hours: 2, hoursBreakdown: "2E" },
                            ]
                        },
                        {
                            name: "Τεχνικός Εγκαταστάσεων Ψύξης, Αερισμού και Κλιματισμού",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Στοιχεία Ψύξης – Κλιματισμού", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Στοιχεία Ψύξης – Κλιματισμού (ΕΡΓΑΣΤΗΡΙΟ)", hours: 5, hoursBreakdown: "5Ε" },
                                { name: "Εγκαταστάσεις Κλιματισμού", hours: 7, hoursBreakdown: "3Θ + 4Ε" },
                                { name: "Συστήματα Ελέγχου, Ρύθμισης και Αυτοματισμού Εγκαταστάσεων Ψύξης και Κλιματισμού", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                                { name: "Μηχανολογική Σχεδίαση Εγκαταστάσεων Ψύξης Κλιματισμού", hours: 2, hoursBreakdown: "2E" },
                            ]
                        },
                        {
                            name: "Τεχνικός Οχημάτων",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Μηχανές Εσωτερικής Καύσης ΙΙ", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Μηχανές Εσωτερικής Καύσης ΙΙ (ΕΡΓΑΣΤΗΡΙΟ)", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Συστήματα Αυτοκινήτου", hours: 7, hoursBreakdown: "3Θ + 4Ε" },
                                { name: "Τεχνολογία Ελέγχων και Διαγνώσεων", hours: 6, hoursBreakdown: "2Θ + 4Ε" },
                            ]
                        },
                        {
                            name: "Τεχνικός Μηχανοσυνθέτης Αεροσκαφών",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Κινητήρες Αεροσκαφών", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Κινητήρες Αεροσκαφών (ΕΡΓΑΣΤΗΡΙΟ)", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Δομή και Συστήματα Αεροσκαφών", hours: 7, hoursBreakdown: "3Θ + 4Ε" },
                                { name: "Διαδικασίες Συντήρησης Αεροσκαφών", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Τεχνολογία Αεροπορικού Υλικού", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                            ]
                        },
                    ],
                },
                computer_science: {
                    name: "Πληροφορικής",
                    specialties: [
                        {
                            name: "Τεχνικός Εφαρμογών Πληροφορικής",
                            subjects: [
                                { name: "Προγραμματισμός Υπολογιστών", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Δίκτυα Υπολογιστών", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Προγραμματισμός Υπολογιστών (Εργαστήριο)", hours: 2, hoursBreakdown: "2Ε" },
                                { name: "Δίκτυα Υπολογιστών (Εργαστήριο)", hours: 2, hoursBreakdown: "2Ε" },
                                { name: "Πληροφοριακά Συστήματα σε Επιχειρήσεις και Οργανισμούς", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Συστήματα Διαχείρισης Βάσεων Δεδομένων και Εφαρμογές τους στο Διαδίκτυο", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Ειδικά Θέματα στον Προγραμματισμό Υπολογιστών", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Σχεδιασμός και Ανάπτυξη Διαδικτυακών Εφαρμογών", hours: 3, hoursBreakdown: "3Ε" },
                            ]
                        },
                        {
                            name: "Τεχνικός Η/Υ και Δικτύων Η/Υ",
                            subjects: [
                                { name: "Προγραμματισμός Υπολογιστών", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Δίκτυα Υπολογιστών", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Προγραμματισμός Υπολογιστών (Εργαστήριο)", hours: 2, hoursBreakdown: "2Ε" },
                                { name: "Δίκτυα Υπολογιστών (Εργαστήριο)", hours: 2, hoursBreakdown: "2Ε" },
                                { name: "Πληροφοριακά Συστήματα σε Επιχειρήσεις και Οργανισμούς", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Εγκατάσταση, Διαχείριση και Συντήρηση Υπολογιστικών Συστημάτων", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Ειδικά Θέματα στο Υλικό και στα Δίκτυα Υπολογιστών", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Τεχνική Υποστήριξη Υπολογιστικών Συστημάτων και Δικτυακών Υποδομών", hours: 3, hoursBreakdown: "3Ε" },
                            ]
                        },
                    ],
                },
                health: {
                    name: "Υγείας - Πρόνοιας και Ευεξίας",
                    specialties: [
                        {
                            name: "Βοηθός Νοσηλευτή",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Υγιεινή", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Νοσηλευτική ΙΙ", hours: 12, hoursBreakdown: "2Θ + 10Ε" },
                                { name: "Στοιχεία Παθολογίας", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Χειρουργική - Τεχνική Χειρουργείου", hours: 2, hoursBreakdown: "2Ε" },
                                { name: "Στοιχεία Μαιευτικής - Γυναικολογίας", hours: 2, hoursBreakdown: "2Θ" },
                            ]
                        },
                        {
                            name: "Βοηθός Ιατρικών και Βιολογικών Εργαστηρίων",
                            subjects: [
                                { name: "Ανατομία-Φυσιολογία ΙΙ", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Υγιεινή", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Μικροβιολογία ΙΙ", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                                { name: "Αιματολογία", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                                { name: "Κλινική Βιοχημεία", hours: 5, hoursBreakdown: "1Θ + 4Ε" },
                                { name: "Ανοσολογία", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                            ]
                        },
                        {
                            name: "Βοηθός Βρεφονηπιοκόμων",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Υγιεινή", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Παιδαγωγικό Περιβάλλον Βρεφονηπιακού Σταθμού", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Αγωγή Βρέφους και Νηπίου", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                                { name: "Στοιχεία Γενικής και Εξελικτικής Ψυχολογίας", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Δημιουργική Απασχόληση στην Προσχολική Ηλικία ΙΙ", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Μουσικοκινητική Αγωγή", hours: 2, hoursBreakdown: "2Ε" },
                                { name: "Λογοτεχνία Προσχολικής Ηλικίας", hours: 2, hoursBreakdown: "2Θ" },
                            ]
                        },
                        {
                            name: "Βοηθός Φυσικοθεραπευτή",
                            subjects: [
                                { name: "Ανατομία-Φυσιολογία ΙΙ", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Υγιεινή", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Κινησιολογία", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "Φυσικοθεραπεία", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                                { name: "Πρακτική Φυσικοθεραπεία", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                                { name: "Μάλαξη", hours: 2, hoursBreakdown: "2Ε" },
                                { name: "Φυσικά Μέσα και Εφαρμογή τους", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                            ]
                        },
                        {
                            name: "Βοηθός Οδοντοτεχνίτη",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Υγιεινή", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Οργάνωση, Εξοπλισμός και Υλικά Οδοντοτεχνικού Εργαστηρίου", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Οδοντοτεχνία ΙΙ", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                                { name: "Ακίνητη Προσθετική", hours: 4, hoursBreakdown: "1Θ + 3Ε" },
                                { name: "Ακίνητη Προσθετική και Πορσελάνη", hours: 6, hoursBreakdown: "2Θ + 4Ε" },
                                { name: "Στοιχεία Ορθοδοντικής", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                            ]
                        },
                        {
                            name: "Βοηθός Ακτινολογικών Εργαστηρίων",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Υγιεινή", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Ακτινοπροστασία", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Νεότερες Απεικονιστικές Μέθοδοι", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Ακτινοτεχνολογία ΙΙ", hours: 9, hoursBreakdown: "1Θ + 8Ε" },
                                { name: "Ακτινοανατομική", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                                { name: "Δεοντολογία Επαγγέλματος", hours: 1, hoursBreakdown: "1Θ" },
                            ]
                        },
                        {
                            name: "Βοηθός Φαρμακείου",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Υγιεινή", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Συνταγολογία, Νομοθεσία και Βιβλία Φαρμακείου", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Φαρμακευτική Τεχνολογία ΙΙ", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                                { name: "Κοσμητολογία", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                                { name: "Στοιχεία Φαρμακογνωσίας", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                                { name: "Φαρμακολογία - Τοξικολογία", hours: 6, hoursBreakdown: "6Θ" },
                            ]
                        },
                        {
                            name: "Αισθητικής Τέχνης",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Υγιεινή", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Μακιγιάζ", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "SPA και Λουτροθεραπεία", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                                { name: "Σύγχρονη Αισθητική ΙΙ", hours: 7, hoursBreakdown: "1Θ + 6Ε" },
                                { name: "Αισθητική Άκρων - Ονυχοπλαστική", hours: 3, hoursBreakdown: "3Ε" },
                                { name: "Κοσμητολογία - Τεχνολογία Υλικών", hours: 2, hoursBreakdown: "2Θ" },
                            ]
                        },
                        {
                            name: "Κομμωτικής Τέχνης",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3, hoursBreakdown: "3Θ" },
                                { name: "Υγιεινή", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Υγιεινή Κόμης Τριχωτού Κεφαλής - Τοξικολογία - Δερματολογία", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Εργαστήριο Τεχνικών Εργασιών", hours: 5, hoursBreakdown: "5Ε" },
                                { name: "Καλλιτεχνικά Χτενίσματα", hours: 4, hoursBreakdown: "4Ε" },
                                { name: "Τεχνολογία Υλικών", hours: 2, hoursBreakdown: "2Θ" },
                                { name: "Βασικές Εφαρμογές Κομμωτικής ΙΙ", hours: 5, hoursBreakdown: "5Ε" },
                            ]
                        },
                    ],
                },
            }
        },
    },
};

export const esperinoEPALData = {
    classA: {
        subjects: {
            core: [
                { name: "Νέα Ελληνικά", hours: 4 },
                { name: "Μαθηματικά: Άλγεβρα", hours: 3 },
                { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
                { name: "Φυσικές Επιστήμες: Φυσική", hours: 2 },
                { name: "Φυσικές Επιστήμες: Χημεία", hours: 1 },
                { name: "Φυσικές Επιστήμες: Βιολογία", hours: 1 },
                { name: "Πολιτική Παιδεία", hours: 1 },
                { name: "Ιστορία", hours: 1 },
                { name: "Θρησκευτικά", hours: 1 },
                { name: "Αγγλικά", hours: 2 },
                { name: "Πληροφορική*", hours: 2 },
                { name: "Φυσική Αγωγή", hours: 2 },
            ],
            orientation: [
                { name: "Ερευνητική Εργασία στην Τεχνολογία*", hours: 2 },
                { name: "Ζώνη Δημιουργικών Δραστηριοτήτων", hours: 2 },
            ],
            optional: [
                { name: "Αγωγή Υγείας", hours: 2 },
                { name: "Αρχές Γραμμικού και Αρχιτεκτονικού Σχεδίου", hours: 2, hoursBreakdown: "2Σ" },
                { name: "Αρχές Ηλεκτρολογίας και Ηλεκτρονικής", hours: 2 },
                { name: "Αρχές Μηχανολογίας", hours: 2 },
                { name: "Αρχές Οικονομίας", hours: 2 },
                { name: "Βασικές Αρχές Σύνθεσης", hours: 2, hoursBreakdown: "2Σ" },
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
                { name: "Αγγλικά", hours: 1 },
                { name: "Εισαγωγή στις Αρχές της Επιστήμης των Η/Υ", hours: 1 },
            ],
            sectors: {
                agricultular: {
                    name: "Γεωπονίας, Τροφίμων και Περιβάλλοντος",
                    subjects: [
                        { name: "Αρχές Αγροτικής Ανάπτυξης", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Περιβάλλον και Γεωργία", hours: 2, hoursBreakdown: "1Θ + 1Ε" },
                        { name: "Φυτική Παραγωγή", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Ζωική Παραγωγή", hours: 3, hoursBreakdown: "2Θ + 1Ε" },
                        { name: "Τεχνολογία Τροφίμων", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Αρχές Αρχιτεκτονικής Τοπίου", hours: 2, hoursBreakdown: "1Θ + 1Ε" },
                        { name: "Στοιχεία Γεωργικών Εγκαταστάσεων και Γεωργικά Μηχανήματα", hours: 2, hoursBreakdown: "1Θ + 1Ε" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                management: {
                    name: "Διοίκησης και Οικονομίας",
                    subjects: [
                        { name: "Αρχές Λογιστικής", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Εισαγωγή στο Μάρκετινγκ", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Θεωρία Τουρισμού και Εφαρμογές", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Εισαγωγή στην Εφοδιαστική (Logistics)", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Χρηματοπιστωτικές Συναλλαγές-Λογιστικά Φύλλα (EXCEL)", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Στοιχεία Δικαίου (Αστικό-Εμπορικό-Εργατικό-Τουριστικό)", hours: 3, hoursBreakdown: "3Θ" },
                        { name: "Οικονομικά Μαθηματικά και Στατιστική", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Αγγλικά Τομέα", hours: 2, hoursBreakdown: "2Θ" }
                    ]
                },
                civil_engineering: {
                    name: "Δομικών Έργων, Δομημένου Περιβάλλοντος και Αρχιτεκτονικού Σχεδιασμού",
                    subjects: [
                        { name: "Οικοδομικό Σχέδιο", hours: 4, hoursBreakdown: "4Σ" },
                        { name: "Τοπογραφία", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Τοπογραφικό Σχέδιο - Ψηφιακή Χαρτογραφία", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Κτιριακά Έργα και Δομικά Υλικά", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Σχέδιο Δομικών Έργων με χρήση Η/Υ Ι", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Δομημένο Περιβάλλον και Πολεοδομικές Εφαρμογές", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                appliedArts: {
                    name: "Εφαρμοσμένων Τεχνών",
                    subjects: [
                        { name: "Ελεύθερο Σχέδιο", hours: 4, hoursBreakdown: "4Σ" },
                        { name: "Γραμμικό Σχέδιο", hours: 3, hoursBreakdown: "3Σ" },
                        { name: "Ιστορία της Τέχνης", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Αρχές Σύνθεσης", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Εφαρμοσμένες Τέχνες με χρήση Η/Υ", hours: 4, hoursBreakdown: "4Ε" },
                        { name: "Ειδικό Εργαστηριακό Μάθημα", hours: 4, hoursBreakdown: "4Ε" }
                    ]
                },
                electrical_engineering: {
                    name: "Ηλεκτρολογίας, Ηλεκτρονικής και Αυτοματισμού",
                    subjects: [
                        { name: "Ηλεκτροτεχνία (Κυκλώματα Συνεχούς και Εναλλασσόμενου Ρεύματος)", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Εσωτερικές Ηλεκτρικές Εγκαταστάσεις και Ηλεκτρολογικό Σχέδιο", hours: 6, hoursBreakdown: "2Θ + 4Ε" },
                        { name: "Εισαγωγή στα Υπολογιστικά Συστήματα και στα Δίκτυα Επικοινωνιών", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Αυτοματισμοί, Αισθητήρες", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Αναλογικά και Ψηφιακά Ηλεκτρονικά", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                mechanical_engineering: {
                    name: "Μηχανολογίας",
                    subjects: [
                        { name: "Στοιχεία Τεχνικής Θερμοδυναμικής - Εφαρμογές", hours: 5, hoursBreakdown: "3Θ + 2Ε" },
                        { name: "Μηχανική-Αντοχή Υλικών", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Σχεδιασμός και Περιγραφή Στοιχείων Μηχανών", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Τεχνολογία Μηχανολογικών Κατασκευών-Εφαρμογές", hours: 6, hoursBreakdown: "2Θ + 4Ε" },
                        { name: "Βασική Ηλεκτρολογία και Εφαρμογές", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                computer_science: {
                    name: "Πληροφορικής",
                    subjects: [
                        { name: "Αρχές Προγραμματισμού Υπολογιστών", hours: 4, hoursBreakdown: "1Θ + 3Ε" },
                        { name: "Υλικό και Δίκτυα Υπολογιστών", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Βασικά Θέματα Πληροφορικής", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                        { name: "Λειτουργικά Συστήματα και Ασφάλεια Πληροφοριακών Συστημάτων", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                        { name: "Σχεδιασμός και Ανάπτυξη Ιστοτόπων", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Τεχνικά Θέματα Πωλήσεων και Προδιαγραφών Υλικού και Λογισμικού", hours: 2, hoursBreakdown: "1Θ + 1Ε" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                health: {
                    name: "Υγείας - Πρόνοιας και Ευεξίας",
                    subjects: [
                        { name: "Ανατομία-Φυσιολογία Ι", hours: 3, hoursBreakdown: "3Θ" },
                        { name: "Πρώτες Βοήθειες", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Υγεία και Διατροφή", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Διαπροσωπικές Σχέσεις", hours: 1, hoursBreakdown: "1Θ" },
                        { name: "Εργασιακό Περιβάλλον Τομέα", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Αγγλικά Τομέα", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Ειδικό Μάθημα Α", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Ειδικό Μάθημα Β", hours: 4, hoursBreakdown: "2Θ + 2Ε" }
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
                { name: "Φυσική", hours: 1 },
                { name: "Αγγλικά", hours: 1 },
                { name: "Εισαγωγή στις Αρχές της Επιστήμης των Η/Υ", hours: 1 },
                { name: "Φυσική Αγωγή", hours: 1 }
            ],
            sectors: {
                agricultular: {
                    name: "Γεωπονίας, Τροφίμων και Περιβάλλοντος",
                    specialties: [
                        {
                            name: "Τεχνικός Φυτικής Παραγωγής",
                            subjects: [
                                { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 3 },
                                { name: "Αρχές Βιολογικής Γεωργίας", hours: 3 },
                                { name: "Δενδροκομία - Αμπελουργία", hours: 4 },
                                { name: "Φυτά Μεγάλης Καλλιέργειας Κηπευτικές - Καλλιέργειες", hours: 4 },
                                { name: "Αρδεύσεις Καλλιεργειών", hours: 3 },
                                { name: "Φυτοπροστασία", hours: 3 }
                            ]
                        },
                        {
                            name: "Τεχνικός Ζωικής Παραγωγής",
                            subjects: [
                                { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 3 },
                                { name: "Αρχές Βιολογικής Γεωργίας", hours: 3 },
                                { name: "Διατροφή Αγροτικών Ζώων", hours: 4 },
                                { name: "Εκτροφή Αγροτικών Ζώων", hours: 4 },
                                { name: "Υδατοκαλλιέργειες", hours: 3 },
                                { name: "Μελισσοκομία-Σηροτροφία", hours: 3 },
                            ]
                        },
                        {
                            name: "Τεχνικός Τεχνολογίας Τροφίμων και Ποτών",
                            subjects: [
                                { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 3 },
                                { name: "Αρχές Βιολογικής Γεωργίας", hours: 3 },
                                { name: "Αρχές Επεξεργασίας Τροφίμων", hours: 4 },
                                { name: "Μεταποίηση Φυτικών Προϊόντων", hours: 4 },
                                { name: "Μεταποίηση Ζωικών Προϊόντων", hours: 4 },
                                { name: "Ασφάλεια Τροφίμων", hours: 2 },
                            ]
                        },
                        {
                            name: "Τεχνικός Ανθοκομίας και Αρχιτεκτονικής Τοπίου",
                            subjects: [
                                { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 3 },
                                { name: "Αρχές Βιολογικής Γεωργίας", hours: 3 },
                                { name: "Ανθοκομικά Φυτά", hours: 3 },
                                { name: "Εφαρμογές Αρδευτικών Δικτύων στην Κηποτεχνία", hours: 3 },
                                { name: "Σχεδιασμός Φυτοτεχνικών Έργων", hours: 4 },
                                { name: "Συντήρηση Κηποτεχνικών Εφαρμογών", hours: 4 },
                            ]
                        },
                    ],
                },
                management: {
                    name: "Διοίκησης και Οικονομίας",
                    specialties: [
                        {
                            name: "Υπάλληλος Διοίκησης και Οικονομικών Υπηρεσιών",
                            subjects: [
                                { name: "Αρχές Οικονομικής Θεωρίας", hours: 3 },
                                { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 3 },
                                { name: "Σύγχρονο Περιβάλλον Γραφείου", hours: 3 },
                                { name: "Φορολογική Πρακτική", hours: 5 },
                                { name: "Λογιστικές Εφαρμογές", hours: 4 },
                                { name: "Επικοινωνία και Δημόσιες Σχέσεις", hours: 2 },
                            ]
                        },
                        {
                            name: "Υπάλληλος Τουριστικών Επιχειρήσεων",
                            subjects: [
                                { name: "Αρχές Οικονομικής Θεωρίας", hours: 3 },
                                { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 3 },
                                { name: "Οργάνωση και Λειτουργία Τουριστικών Επιχειρήσεων", hours: 3 },
                                { name: "Οργάνωση και Λειτουργία Ξενοδοχειακών Επιχειρήσεων", hours: 3 },
                                { name: "Γεωγραφία Τουρισμού", hours: 2 },
                                { name: "Εφαρμογές στον Τουρισμό", hours: 2 },
                                { name: "Αγγλικά Ειδικότητας", hours: 2 },
                                { name: "Γαλλικά ή Γερμανικά", hours: 2 },
                            ]
                        },
                        {
                            name: "Υπάλληλος Εμπορίας και Διαφήμισης",
                            subjects: [
                                { name: "Αρχές Οικονομικής Θεωρίας", hours: 3 },
                                { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 3 },
                                { name: "Σύγχρονο Περιβάλλον Γραφείου", hours: 2 },
                                { name: "Διαφήμιση (Εισαγωγή, Δημιουργία και Προβολή)", hours: 5 },
                                { name: "Επικοινωνία και Δημόσιες Σχέσεις", hours: 2 },
                                { name: "Εφαρμογές Μάρκετινγκ", hours: 3 },
                                { name: "Λογιστικές Εφαρμογές", hours: 2 },
                            ]
                        },
                        {
                            name: "Υπάλληλος Αποθήκης και Συστημάτων Εφοδιασμού",
                            subjects: [
                                { name: "Αρχές Οικονομικής Θεωρίας", hours: 3 },
                                { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 3 },
                                { name: "Οργάνωση και Διαχείριση Αποθηκών", hours: 4 },
                                { name: "Οργάνωση και Διαχείριση Μεταφορών", hours: 4 },
                                { name: "Εφαρμογές Εφοδιαστικής", hours: 4 },
                                { name: "Λογιστικές Εφαρμογές", hours: 2 },
                            ]
                        },
                    ],
                },
                civil_engineering: {
                    name: "Δομικών Έργων, Δομημένου Περιβάλλοντος και Αρχιτεκτονικού Σχεδιασμού",
                    specialties: [
                        {
                            name: "Τεχνικός Δομικών Έργων και Γεωπληροφορικής",
                            subjects: [
                                { name: "Αρχιτεκτονικό Σχέδιο", hours: 4 },
                                { name: "Οικοδομική", hours: 3 },
                                { name: "Σχέδιο Πολιτικού Μηχανικού και Έργων Υποδομής", hours: 3 },
                                { name: "Εφαρμογές Γεωπληροφορικής στα Τεχνικά Έργα", hours: 4 },
                                { name: "Οργάνωση Τεχνικών Έργων", hours: 3 },
                                { name: "Σχέδιο Δομικών Έργων με χρήση Η/Υ ΙΙ", hours: 3 },
                            ]
                        },
                    ],
                },
                appliedArts: {
                    name: "Εφαρμοσμένων Τεχνών",
                    specialties: [
                        {
                            name: "Γραφικών Τεχνών",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Ελεύθερο Σχέδιο - Χρώμα", hours: 3 },
                                { name: "Γραφιστικές Εφαρμογές", hours: 3 },
                                { name: "Τεχνολογία Εκτυπώσεων", hours: 3 },
                                { name: "Ψηφιακή Σχεδίαση Εντύπων", hours: 3 },
                                { name: "Γραμματογραφία", hours: 2 },
                                { name: "Αγγλικά Ειδικότητας", hours: 1 },
                            ]
                        },
                        {
                            name: "Αργυροχρυσοχοϊας",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Εργαστήριο Χειροποίητου Κοσμήματος", hours: 6 },
                                { name: "Εργαστήριο Αναπαραγωγικού Κοσμήματος - Σμάλτο", hours: 3 },
                                { name: "Σχέδιο Κοσμηματοποιΐας", hours: 3 },
                                { name: "Εργαστήριο Πλαστικής - Μεταλλοπλαστικής", hours: 3 },
                            ]
                        },
                        {
                            name: "Συντήρησης Έργων Τέχνης - Αποκατάστασης",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Βασικές Τεχνικές Συντήρησης Έργων Τέχνης", hours: 6 },
                                { name: "Προστασία Πολιτιστικής Κληρονομιάς", hours: 1 },
                                { name: "Αντίγραφο Έργων Τέχνης", hours: 4 },
                                { name: "Σχεδιαστική Τεκμηρίωση Έργων Τέχνης", hours: 3 },
                                { name: "Αγγλικά Ειδικότητας", hours: 1 },
                            ]
                        },
                        {
                            name: "Σχεδίασης και Παραγωγής Ενδύματος",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Τεχνολογία Προτύπων Κοπής (Πατρόν)", hours: 4 },
                                { name: "Ηλεκτρονική Σχεδίαση Βιομηχανικού Προϊόντος", hours: 3 },
                                { name: "Τεχνολογία Υφάσματος και Οργάνωση Συλλογής Ενδύματος", hours: 2 },
                                { name: "Ποιοτικός Έλεγχος Υφάσματος", hours: 3 },
                                { name: "Τεχνολογία Παραγωγής Ενδυμάτων", hours: 3 },
                            ]
                        },
                        {
                            name: "Σχεδιασμού και Διακόσμησης Εσωτερικών Χώρων",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Ελεύθερο Σχέδιο – Χρώμα", hours: 3 },
                                { name: "Ψηφιακή Σχεδίαση", hours: 3 },
                                { name: "Διακόσμηση Εσωτερικών Χώρων", hours: 4 },
                                { name: "Διακοσμητική Σύνθεση – Τρισδιάστατη Μακέτα", hours: 4 },
                                { name: "Αγγλικά Ειδικότητας", hours: 2 },
                            ]
                        },
                        {
                            name: "Επιπλοποίας και Ξυλογλυπτικής",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Ξύλινες Κατασκευές", hours: 5 },
                                { name: "Συνδεσμολογία Επίπλου - Ξυλογλυπτική", hours: 5 },
                                { name: "Τεχνολογία Ξύλου - Μετρήσεις", hours: 1 },
                                { name: "Γραμμικό Σχέδιο", hours: 2 },
                                { name: "Ελεύθερο Σχέδιο", hours: 2 },
                            ]
                        },
                    ],
                },
                electrical_engineering: {
                    name: "Ηλεκτρολογίας, Ηλεκτρονικής και Αυτοματισμού",
                    specialties: [
                        {
                            name: "Τεχνικός Ηλεκτρονικών και Υπολογιστικών Συστημάτων, Εγκαταστάσεων, Δικτύων και Τηλεπικοινωνιών",
                            subjects: [
                                { name: "Ψηφιακά Συστήματα", hours: 3 },
                                { name: "Δίκτυα Υπολογιστών", hours: 3 },
                                { name: "Εφαρμοσμένα Ηλεκτρονικά - Κατασκευές", hours: 2 },
                                { name: "Εγκατάσταση και Διαχείριση Δικτύων - Συντήρηση Υπολογιστικών Συστημάτων", hours: 2 },
                                { name: "Συστήματα Ελέγχου και Ασφάλειας", hours: 2 },
                                { name: "Τηλεπικοινωνίες - Τηλεματική", hours: 4 },
                                { name: "Ρομποτική", hours: 2 },
                                { name: "Επεξεργασία Σήματος Ήχου και Εικόνας", hours: 2 },
                            ]
                        },
                        {
                            name: "Τεχνικός Ηλεκτρολογικών Συστημάτων, Εγκαταστάσεων και Δικτύων",
                            subjects: [
                                { name: "Ηλεκτροτεχνία 2", hours: 3 },
                                { name: "Ηλεκτρικές Μηχανές", hours: 3 },
                                { name: "Ηλεκτρολογικές Εγκαταστάσεις 2", hours: 5 },
                                { name: "Εργαστήριο Ηλεκτροτεχνίας – Ηλεκτρικών Μηχανών", hours: 4 },
                                { name: "Αυτοματισμοί Προγραμματιζόμενης Λογικής", hours: 5 },
                            ]
                        },
                    ],
                },
                mechanical_engineering: {
                    name: "Μηχανολογίας",
                    specialties: [
                        {
                            name: "Τεχνικός Μηχανολογικών Εγκαταστάσεων και Κατασκευών",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3 },
                                { name: "Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων", hours: 3 },
                                { name: "Μηχανουργική Τεχνολογία – Εργαλειομηχανές", hours: 6 },
                                { name: "Ανελκυστήρες – Ανυψωτικές Μηχανές", hours: 2 },
                                { name: "Στοιχεία Ψύξης – Κλιματισμού", hours: 6 },
                            ]
                        },
                        {
                            name: "Τεχνικός Θερμικών και Υδραυλικών Εγκαταστάσεων και Τεχνολογίας Πετρελαίου και Φυσικού Αερίου",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3 },
                                { name: "Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων", hours: 3 },
                                { name: "Συντήρηση και Επισκευή Εγκαταστάσεων Καύσης Υγρών και Αερίων Καυσίμων", hours: 4 },
                                { name: "Ύδρευση – Αποχέτευση", hours: 3 },
                                { name: "Κατασκευή και Λειτουργία Κεντρικής Θέρμανσης", hours: 5 },
                                { name: "Σχέδιο Ειδικότητας", hours: 2 },
                            ]
                        },
                        {
                            name: "Τεχνικός Εγκαταστάσεων Ψύξης, Αερισμού και Κλιματισμού",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3 },
                                { name: "Στοιχεία Ψύξης – Κλιματισμού", hours: 3 },
                                { name: "Στοιχεία Ψύξης – Κλιματισμού (ΕΡΓΑΣΤΗΡΙΟ)", hours: 5 },
                                { name: "Εγκαταστάσεις Κλιματισμού", hours: 6 },
                                { name: "Συστήματα Ελέγχου, Ρύθμισης και Αυτοματισμού Εγκαταστάσεων Ψύξης και Κλιματισμού", hours: 3 },
                                { name: "Μηχανολογική Σχεδίαση Εγκαταστάσεων Ψύξης Κλιματισμού", hours: 2 },
                            ]
                        },
                        {
                            name: "Τεχνικός Οχημάτων",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3 },
                                { name: "Μηχανές Εσωτερικής Καύσης ΙΙ", hours: 3 },
                                { name: "Μηχανές Εσωτερικής Καύσης ΙΙ (ΕΡΓΑΣΤΗΡΙΟ)", hours: 3 },
                                { name: "Συστήματα Αυτοκινήτου", hours: 6 },
                                { name: "Τεχνολογία Ελέγχων και Διαγνώσεων", hours: 5 },
                            ]
                        },
                        {
                            name: "Τεχνικός Μηχανοσυνθέτης Αεροσκαφών",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3 },
                                { name: "Κινητήρες Αεροσκαφών", hours: 3 },
                                { name: "Κινητήρες Αεροσκαφών (ΕΡΓΑΣΤΗΡΙΟ)", hours: 3 },
                                { name: "Δομή και Συστήματα Αεροσκαφών", hours: 6 },
                                { name: "Διαδικασίες Συντήρησης Αεροσκαφών", hours: 2 },
                                { name: "Τεχνολογία Αεροπορικού Υλικού", hours: 3 },
                            ]
                        },
                    ],
                },
                computer_science: {
                    name: "Πληροφορικής",
                    specialties: [
                        {
                            name: "Τεχνικός Εφαρμογών Πληροφορικής",
                            subjects: [
                                { name: "Προγραμματισμός Υπολογιστών", hours: 3 },
                                { name: "Δίκτυα Υπολογιστών", hours: 3 },
                                { name: "Προγραμματισμός Υπολογιστών (Εργαστήριο)", hours: 2 },
                                { name: "Δίκτυα Υπολογιστών (Εργαστήριο)", hours: 2 },
                                { name: "Πληροφοριακά Συστήματα σε Επιχειρήσεις και Οργανισμούς", hours: 1 },
                                { name: "Συστήματα Διαχείρισης Βάσεων Δεδομένων και Εφαρμογές τους στο Διαδίκτυο", hours: 3 },
                                { name: "Ειδικά Θέματα στον Προγραμματισμό Υπολογιστών", hours: 3 },
                                { name: "Σχεδιασμός και Ανάπτυξη Διαδικτυακών Εφαρμογών", hours: 3 },
                            ]
                        },
                        {
                            name: "Τεχνικός Η/Υ και Δικτύων Η/Υ",
                            subjects: [
                                { name: "Προγραμματισμός Υπολογιστών", hours: 3 },
                                { name: "Δίκτυα Υπολογιστών", hours: 3 },
                                { name: "Προγραμματισμός Υπολογιστών (Εργαστήριο)", hours: 2 },
                                { name: "Δίκτυα Υπολογιστών (Εργαστήριο)", hours: 2 },
                                { name: "Πληροφοριακά Συστήματα σε Επιχειρήσεις και Οργανισμούς", hours: 1 },
                                { name: "Εγκατάσταση, Διαχείριση και Συντήρηση Υπολογιστικών Συστημάτων", hours: 3 },
                                { name: "Ειδικά Θέματα στο Υλικό και στα Δίκτυα Υπολογιστών", hours: 3 },
                                { name: "Τεχνική Υποστήριξη Υπολογιστικών Συστημάτων και Δικτυακών Υποδομών", hours: 3 },
                            ]
                        },
                    ],
                },
                health: {
                    name: "Υγείας - Πρόνοιας και Ευεξίας",
                    specialties: [
                        {
                            name: "Βοηθός Νοσηλευτή",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Νοσηλευτική ΙΙ", hours: 10 },
                                { name: "Στοιχεία Παθολογίας", hours: 2 },
                                { name: "Χειρουργική - Τεχνική Χειρουργείου", hours: 2 },
                                { name: "Στοιχεία Μαιευτικής - Γυναικολογίας", hours: 1 },
                            ]
                        },
                        {
                            name: "Βοηθός Ιατρικών και Βιολογικών Εργαστηρίων",
                            subjects: [
                                { name: "Ανατομία-Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Μικροβιολογία ΙΙ", hours: 4 },
                                { name: "Αιματολογία", hours: 3 },
                                { name: "Κλινική Βιοχημεία", hours: 5 },
                                { name: "Ανοσολογία", hours: 3 },
                            ]
                        },
                        {
                            name: "Βοηθός Βρεφονηπιοκόμων",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Παιδαγωγικό Περιβάλλον Βρεφονηπιακού Σταθμού", hours: 3 },
                                { name: "Αγωγή Βρέφους και Νηπίου", hours: 4 },
                                { name: "Στοιχεία Γενικής και Εξελικτικής Ψυχολογίας", hours: 2 },
                                { name: "Δημιουργική Απασχόληση στην Προσχολική Ηλικία ΙΙ", hours: 3 },
                                { name: "Μουσικοκινητική Αγωγή", hours: 2 },
                                { name: "Λογοτεχνία Προσχολικής", hours: 1 },]
                        },
                        {
                            name: "Βοηθός Φυσικοθεραπευτή",
                            subjects: [
                                { name: "Ανατομία-Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Κινησιολογία", hours: 3 },
                                { name: "Φυσικοθεραπεία", hours: 4 },
                                { name: "Πρακτική Φυσικοθεραπεία", hours: 3 },
                                { name: "Μάλαξη", hours: 2 },
                                { name: "Φυσικά Μέσα και Εφαρμογή τους", hours: 3 },
                            ]
                        },
                        {
                            name: "Βοηθός Οδοντοτεχνίτη",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Οργάνωση, Εξοπλισμός και Υλικά Οδοντοτεχνικού Εργαστηρίου", hours: 2 },
                                { name: "Οδοντοτεχνία ΙΙ", hours: 3 },
                                { name: "Ακίνητη Προσθετική", hours: 3 },
                                { name: "Ακίνητη Προσθετική και Πορσελάνη", hours: 4 },
                                { name: "Στοιχεία Ορθοδοντικής", hours: 3 },
                            ]
                        },
                        {
                            name: "Βοηθός Ακτινολογικών Εργαστηρίων",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Ακτινοπροστασία", hours: 2 },
                                { name: "Νεότερες Απεικονιστικές Μέθοδοι", hours: 2 },
                                { name: "Ακτινοτεχνολογία ΙΙ", hours: 7 },
                                { name: "Ακτινοανατομική", hours: 3 },
                                { name: "Δεοντολογία Επαγγέλματος", hours: 1 },
                            ]
                        },
                        {
                            name: "Βοηθός Φαρμακείου",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Συνταγολογία, Νομοθεσία και Βιβλία Φαρμακείου", hours: 2 },
                                { name: "Φαρμακευτική Τεχνολογία ΙΙ", hours: 3 },
                                { name: "Κοσμητολογία", hours: 3 },
                                { name: "Στοιχεία Φαρμακογνωσίας", hours: 4 },
                                { name: "Φαρμακολογία - Τοξικολογία", hours: 4 },
                            ]
                        },
                        {
                            name: "Αισθητικής Τέχνης",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Μακιγιάζ", hours: 3 },
                                { name: "SPA και Λουτροθεραπεία", hours: 3 },
                                { name: "Σύγχρονη Αισθητική ΙΙ", hours: 6 },
                                { name: "Αισθητική Άκρων - Ονυχοπλαστική", hours: 2 },
                                { name: "Κοσμητολογία - Τεχνολογία Υλικών", hours: 1 },
                            ]
                        },
                        {
                            name: "Κομμωτικής Τέχνης",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Υγιεινή Κόμης Τριχωτού Κεφαλής - Τοξικολογία - Δερματολογία", hours: 2 },
                                { name: "Εργαστήριο Τεχνικών Εργασιών", hours: 4 },
                                { name: "Καλλιτεχνικά Χτενίσματα", hours: 4 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Βασικές Εφαρμογές Κομμωτικής ΙΙ", hours: 3 },
                            ]
                        },
                    ],
                },
            }
        },
    },

};

export const protypoEPALData = {
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

export const eneegylLykeioData = {
    classA: {
        subjects: {
            core: [
                { name: "Νέα Ελληνικά", hours: 4 },
                { name: "Μαθηματικά: Άλγεβρα", hours: 3 },
                { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
                { name: "Φυσικές Επιστήμες: Φυσική", hours: 2 },
                { name: "Φυσικές Επιστήμες: Χημεία", hours: 1 },
                { name: "Φυσικές Επιστήμες: Βιολογία", hours: 1 },
                { name: "Πολιτική Παιδεία", hours: 1 },
                { name: "Ιστορία", hours: 1 },
                { name: "Θρησκευτικά", hours: 1 },
                { name: "Αγγλικά", hours: 2 },
                { name: "Πληροφορική", hours: 2 },
                { name: "Φυσική Αγωγή", hours: 1 },
            ],
            orientation: [
                { name: "Ερευνητική Εργασία στην Τεχνολογία", hours: 2 },
                { name: "Ζώνη Δημιουργικών Δραστηριοτήτων", hours: 2 },
            ],
            optional: [
                { name: "Αγωγή Υγείας", hours: 2 },
                { name: "Αρχές Γραμμικού και Αρχιτεκτονικού Σχεδίου", hours: 2, hoursBreakdown: "2Σ" },
                { name: "Αρχές Ηλεκτρολογίας και Ηλεκτρονικής", hours: 2 },
                { name: "Αρχές Μηχανολογίας", hours: 2 },
                { name: "Αρχές Οικονομίας", hours: 2 },
                { name: "Βασικές Αρχές Σύνθεσης", hours: 2, hoursBreakdown: "2Σ" },
                { name: "Γεωπονία και Αειφόρος Ανάπτυξη", hours: 2 },
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
                { name: "Αγγλικά", hours: 1 },
                { name: "Φυσική Αγωγή", hours: 1 },
                { name: "Εισαγωγή στις Αρχές της Επιστήμης των Η/Υ", hours: 1 },
                { name: "Ζώνη Δημιουργικών Δραστηριοτήτων", hours: 2 },
                { name: "ΣΕΠ Ασφάλεια και Υγεία στο χώρο Εργασίας", hours: 2 },
            ],
            sectors: {
                agricultular: {
                    name: "Γεωπονίας, Τροφίμων και Περιβάλλοντος",
                    subjects: [
                        { name: "Φυτική Παραγωγή", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                        { name: "Ζωική Παραγωγή", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Τεχνολογία Τροφίμων", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                management: {
                    name: "Διοίκησης και Οικονομίας",
                    subjects: [
                        { name: "Αρχές Λογιστικής", hours: 6, hoursBreakdown: "3Θ + 3Ε" },
                        { name: "Εισαγωγή στο Μάρκετινγκ", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Θεωρία Τουρισμού και Εφαρμογές", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Εισαγωγή στην Εφοδιαστική (Logistics)", hours: 3, hoursBreakdown: "3Θ" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                civil_engineering: {
                    name: "Δομικών Έργων, Δομημένου Περιβάλλοντος και Αρχιτεκτονικού Σχεδιασμού",
                    subjects: [
                        { name: "Τοπογραφία", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                        { name: "Κτιριακά Έργα και Δομικά Υλικά", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                        { name: "Σχέδιο Δομικών Έργων με χρήση Η/Υ Ι", hours: 4, hoursBreakdown: "4Ε" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                appliedArts: {
                    name: "Εφαρμοσμένων Τεχνών",
                    subjects: [
                        { name: "Ελεύθερο Σχέδιο", hours: 6, hoursBreakdown: "6Σ" },
                        { name: "Γραμμικό Σχέδιο", hours: 5, hoursBreakdown: "5Σ" },
                        { name: "Ιστορία της Τέχνης", hours: 4, hoursBreakdown: "4Θ" },
                    ]
                },
                electrical_engineering: {
                    name: "Ηλεκτρολογίας, Ηλεκτρονικής και Αυτοματισμού",
                    subjects: [
                        { name: "Ηλεκτροτεχνία (Κυκλώματα Συνεχούς και Εναλλασσόμενου Ρεύματος)", hours: 6, hoursBreakdown: "3Θ + 3Ε" },
                        { name: "Εσωτερικές Ηλεκτρικές Εγκαταστάσεις και Ηλεκτρολογικό Σχέδιο", hours: 8, hoursBreakdown: "3Θ + 5Ε" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                mechanical_engineering: {
                    name: "Μηχανολογίας",
                    subjects: [
                        { name: "Τεχνολογία Μηχανολογικών Κατασκευών-Εφαρμογές", hours: 9, hoursBreakdown: "3Θ + 6Ε" },
                        { name: "Στοιχεία Τεχνικής Θερμοδυναμικής - Εφαρμογές", hours: 6, hoursBreakdown: "3Θ + 3Ε" },
                    ]
                },
                computer_science: {
                    name: "Πληροφορικής",
                    subjects: [
                        { name: "Βασικά Θέματα Πληροφορικής", hours: 6, hoursBreakdown: "3Θ + 3Ε" },
                        { name: "Λειτουργικά Συστήματα και Ασφάλεια Πληροφοριακών Συστημάτων", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                        { name: "Τεχνικά Θέματα Πωλήσεων και Προδιαγραφών Υλικού και Λογισμικού", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                health: {
                    name: "Υγείας - Πρόνοιας και Ευεξίας",
                    subjects: [
                        { name: "Ανατομία-Φυσιολογία Ι", hours: 4, hoursBreakdown: "4Θ" },
                        { name: "Υγεία και Διατροφή", hours: 3, hoursBreakdown: "3Θ" },
                        { name: "Αγγλικά Τομέα", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Ειδικό Μάθημα Α", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Ειδικό Μάθημα Β", hours: 3, hoursBreakdown: "3Ε" }
                    ]
                },
            },
        },
    },
    classC: {
        subjects: {
            core: [
                { name: "Νέα Ελληνικά", hours: 3 },
                { name: "Μαθηματικά: Άλγεβρα", hours: 2 },
                { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
                { name: "Φυσικές Επιστήμες: Φυσική", hours: 1 },
                { name: "Φυσικές Επιστήμες: Χημεία", hours: 1 },
                { name: "Αγγλικά", hours: 1 },
                { name: "Φυσική Αγωγή", hours: 2 },
                { name: "Εισαγωγή στις Αρχές της Επιστήμης των Η/Υ", hours: 1 },
                { name: "Ζώνη Δημιουργικών Δραστηριοτήτων", hours: 3 },
            ],
            sectors: {
                agricultular: {
                    name: "Γεωπονίας, Τροφίμων και Περιβάλλοντος",
                    subjects: [
                        { name: "Αρχές Αρχιτεκτονικής Τοπίου", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                        { name: "Αρχές Αγροτικής Ανάπτυξης", hours: 3, hoursBreakdown: "3Θ" },
                        { name: "Περιβάλλον και Γεωργία", hours: 3, hoursBreakdown: "1Θ + 2Ε" },
                        { name: "Στοιχεία Γεωργικών Εγκαταστάσεων και Γεωργικά Μηχανήματα", hours: 2, hoursBreakdown: "1Θ + 1Ε" },
                        { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Αρχές Βιολογικής Γεωργίας", hours: 2, hoursBreakdown: "2Θ" }
                    ]
                },
                management: {
                    name: "Διοίκησης και Οικονομίας",
                    subjects: [
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" },
                        { name: "Στοιχεία Δικαίου (Αστικό-Εμπορικό-Εργατικό-Τουριστικό)", hours: 4, hoursBreakdown: "4Θ" },
                        { name: "Χρηματοπιστωτικές Συναλλαγές-Λογιστικά Φύλλα (EXCEL)", hours: 4, hoursBreakdown: "4Ε" },
                        { name: "Οικονομικά Μαθηματικά και Στατιστική", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Αρχές Οικονομικής Θεωρίας", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 2, hoursBreakdown: "2Θ" },
                    ]
                },
                civil_engineering: {
                    name: "Δομικών Έργων, Δομημένου Περιβάλλοντος και Αρχιτεκτονικού Σχεδιασμού",
                    subjects: [
                        { name: "Δομημένο Περιβάλλον και Πολεοδομικές Εφαρμογές", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Οικοδομικό Σχέδιο", hours: 4, hoursBreakdown: "4Σ" },
                        { name: "Τοπογραφικό Σχέδιο - Ψηφιακή Χαρτογραφία", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Σχέδιο Δομικών Έργων με χρήση Η/Υ", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Αρχιτεκτονικό Σχέδιο", hours: 2, hoursBreakdown: "2Σ" },
                        { name: "Οικοδομική", hours: 2, hoursBreakdown: "2Θ" }
                    ]
                },
                appliedArts: {
                    name: "Εφαρμοσμένων Τεχνών",
                    subjects: [
                        { name: "Αρχές Σύνθεσης", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Εφαρμοσμένες Τέχνες με χρήση Η/Υ", hours: 4, hoursBreakdown: "4Ε" },
                        { name: "Ειδικό Εργαστηριακό Μάθημα", hours: 4, hoursBreakdown: "4Ε" },
                        { name: "Ιστορία Σύγχρονης Τέχνης", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Τεχνολογία Υλικών", hours: 2, hoursBreakdown: "2Θ" }
                    ]
                },
                electrical_engineering: {
                    name: "Ηλεκτρολογίας, Ηλεκτρονικής και Αυτοματισμού",
                    subjects: [
                        { name: "Αυτοματισμοί, Αισθητήρες", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Αναλογικά και Ψηφιακά Ηλεκτρονικά", hours: 6, hoursBreakdown: "2Θ + 4Ε" },
                        { name: "Εισαγωγή στα Υπολογιστικά Συστήματα και στα Δίκτυα Επικοινωνιών", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Ψηφιακά Συστήματα", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Δίκτυα Υπολογιστών", hours: 2, hoursBreakdown: "2Θ" }
                    ]
                },
                mechanical_engineering: {
                    name: "Μηχανολογίας",
                    subjects: [
                        { name: "Μηχανική - Αντοχή Υλικών", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Σχεδιασμός και Περιγραφή Στοιχείων Μηχανών", hours: 4, hoursBreakdown: "4Ε" },
                        { name: "Βασική Ηλεκτρολογία και Εφαρμογές", hours: 5, hoursBreakdown: "2Θ + 3Ε" },
                        { name: "Στοιχεία Μηχανών", hours: 3, hoursBreakdown: "3Θ" },
                        { name: "Αγγλικά Τομέα", hours: 1, hoursBreakdown: "1Θ" }
                    ]
                },
                computer_science: {
                    name: "Πληροφορικής",
                    subjects: [
                        { name: "Αρχές Προγραμματισμού Υπολογιστών", hours: 4, hoursBreakdown: "1Θ + 3Ε" },
                        { name: "Υλικό και Δίκτυα Υπολογιστών", hours: 4, hoursBreakdown: "2Θ + 2Ε" },
                        { name: "Σχεδιασμός και Ανάπτυξη Ιστοτόπων", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Προγραμματισμός Υπολογιστών", hours: 2, hoursBreakdown: "1Θ + 1Ε" },
                        { name: "Δίκτυα Υπολογιστών", hours: 2, hoursBreakdown: "1Ε + 1Θ" }
                    ]
                },
                health: {
                    name: "Υγείας - Πρόνοιας και Ευεξίας",
                    subjects: [
                        { name: "Πρώτες Βοήθειες", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Διαπροσωπικές Σχέσεις", hours: 1, hoursBreakdown: "1Θ" },
                        { name: "Εργασιακό Περιβάλλον Τομέα", hours: 2, hoursBreakdown: "2Ε" },
                        { name: "Ειδικό Μάθημα Α", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Ειδικό Μάθημα Β", hours: 3, hoursBreakdown: "3Ε" },
                        { name: "Ανατομία - Φυσιολογία II", hours: 2, hoursBreakdown: "2Θ" },
                        { name: "Υγιεινή", hours: 2, hoursBreakdown: "2Θ" },
                    ]
                },
            },
        },
    },
    classD: {
        subjects: {
            core: [
                { name: "Νέα Ελληνικά", hours: 3 },
                { name: "Μαθηματικά: Άλγεβρα", hours: 2 },
                { name: "Μαθηματικά: Γεωμετρία", hours: 1 },
                { name: "Φυσική", hours: 1 },
                { name: "Αγγλικά", hours: 1 },
                { name: "Εισαγωγή στις Αρχές της Επιστήμης των Η/Υ", hours: 1 },
                { name: "Φυσική Αγωγή", hours: 1 }
            ],
            sectors: {
                agricultular: {
                    name: "Γεωπονίας, Τροφίμων και Περιβάλλοντος",
                    specialties: [
                        {
                            name: "Τεχνικός Φυτικής Παραγωγής",
                            subjects: [
                                { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 3 },
                                { name: "Αρχές Βιολογικής Γεωργίας", hours: 3 },
                                { name: "Δενδροκομία - Αμπελουργία", hours: 4 },
                                { name: "Φυτά Μεγάλης Καλλιέργειας Κηπευτικές - Καλλιέργειες", hours: 4 },
                                { name: "Αρδεύσεις Καλλιεργειών", hours: 3 },
                                { name: "Φυτοπροστασία", hours: 3 }
                            ]
                        },
                        {
                            name: "Τεχνικός Ζωικής Παραγωγής",
                            subjects: [
                                { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 3 },
                                { name: "Αρχές Βιολογικής Γεωργίας", hours: 3 },
                                { name: "Διατροφή Αγροτικών Ζώων", hours: 4 },
                                { name: "Εκτροφή Αγροτικών Ζώων", hours: 4 },
                                { name: "Υδατοκαλλιέργειες", hours: 3 },
                                { name: "Μελισσοκομία-Σηροτροφία", hours: 3 },
                            ]
                        },
                        {
                            name: "Τεχνικός Τεχνολογίας Τροφίμων και Ποτών",
                            subjects: [
                                { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 3 },
                                { name: "Αρχές Βιολογικής Γεωργίας", hours: 3 },
                                { name: "Αρχές Επεξεργασίας Τροφίμων", hours: 4 },
                                { name: "Μεταποίηση Φυτικών Προϊόντων", hours: 4 },
                                { name: "Μεταποίηση Ζωικών Προϊόντων", hours: 4 },
                                { name: "Ασφάλεια Τροφίμων", hours: 2 },
                            ]
                        },
                        {
                            name: "Τεχνικός Ανθοκομίας και Αρχιτεκτονικής Τοπίου",
                            subjects: [
                                { name: "Σύγχρονες Γεωργικές Επιχειρήσεις", hours: 3 },
                                { name: "Αρχές Βιολογικής Γεωργίας", hours: 3 },
                                { name: "Ανθοκομικά Φυτά", hours: 3 },
                                { name: "Εφαρμογές Αρδευτικών Δικτύων στην Κηποτεχνία", hours: 3 },
                                { name: "Σχεδιασμός Φυτοτεχνικών Έργων", hours: 4 },
                                { name: "Συντήρηση Κηποτεχνικών Εφαρμογών", hours: 4 },
                            ]
                        },
                    ],
                },
                management: {
                    name: "Διοίκησης και Οικονομίας",
                    specialties: [
                        {
                            name: "Υπάλληλος Διοίκησης και Οικονομικών Υπηρεσιών",
                            subjects: [
                                { name: "Αρχές Οικονομικής Θεωρίας", hours: 3 },
                                { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 3 },
                                { name: "Σύγχρονο Περιβάλλον Γραφείου", hours: 3 },
                                { name: "Φορολογική Πρακτική", hours: 5 },
                                { name: "Λογιστικές Εφαρμογές", hours: 4 },
                                { name: "Επικοινωνία και Δημόσιες Σχέσεις", hours: 2 },
                            ]
                        },
                        {
                            name: "Υπάλληλος Τουριστικών Επιχειρήσεων",
                            subjects: [
                                { name: "Αρχές Οικονομικής Θεωρίας", hours: 3 },
                                { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 3 },
                                { name: "Οργάνωση και Λειτουργία Τουριστικών Επιχειρήσεων", hours: 3 },
                                { name: "Οργάνωση και Λειτουργία Ξενοδοχειακών Επιχειρήσεων", hours: 3 },
                                { name: "Γεωγραφία Τουρισμού", hours: 2 },
                                { name: "Εφαρμογές στον Τουρισμό", hours: 2 },
                                { name: "Αγγλικά Ειδικότητας", hours: 2 },
                                { name: "Γαλλικά ή Γερμανικά", hours: 2 },
                            ]
                        },
                        {
                            name: "Υπάλληλος Εμπορίας και Διαφήμισης",
                            subjects: [
                                { name: "Αρχές Οικονομικής Θεωρίας", hours: 3 },
                                { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 3 },
                                { name: "Σύγχρονο Περιβάλλον Γραφείου", hours: 2 },
                                { name: "Διαφήμιση (Εισαγωγή, Δημιουργία και Προβολή)", hours: 5 },
                                { name: "Επικοινωνία και Δημόσιες Σχέσεις", hours: 2 },
                                { name: "Εφαρμογές Μάρκετινγκ", hours: 3 },
                                { name: "Λογιστικές Εφαρμογές", hours: 2 },
                            ]
                        },
                        {
                            name: "Υπάλληλος Αποθήκης και Συστημάτων Εφοδιασμού",
                            subjects: [
                                { name: "Αρχές Οικονομικής Θεωρίας", hours: 3 },
                                { name: "Αρχές Οργάνωσης και Διοίκησης", hours: 3 },
                                { name: "Οργάνωση και Διαχείριση Αποθηκών", hours: 4 },
                                { name: "Οργάνωση και Διαχείριση Μεταφορών", hours: 4 },
                                { name: "Εφαρμογές Εφοδιαστικής", hours: 4 },
                                { name: "Λογιστικές Εφαρμογές", hours: 2 },
                            ]
                        },
                    ],
                },
                civil_engineering: {
                    name: "Δομικών Έργων, Δομημένου Περιβάλλοντος και Αρχιτεκτονικού Σχεδιασμού",
                    specialties: [
                        {
                            name: "Τεχνικός Δομικών Έργων και Γεωπληροφορικής",
                            subjects: [
                                { name: "Αρχιτεκτονικό Σχέδιο", hours: 4 },
                                { name: "Οικοδομική", hours: 3 },
                                { name: "Σχέδιο Πολιτικού Μηχανικού και Έργων Υποδομής", hours: 3 },
                                { name: "Εφαρμογές Γεωπληροφορικής στα Τεχνικά Έργα", hours: 4 },
                                { name: "Οργάνωση Τεχνικών Έργων", hours: 3 },
                                { name: "Σχέδιο Δομικών Έργων με χρήση Η/Υ ΙΙ", hours: 3 },
                            ]
                        },
                    ],
                },
                appliedArts: {
                    name: "Εφαρμοσμένων Τεχνών",
                    specialties: [
                        {
                            name: "Γραφικών Τεχνών",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Ελεύθερο Σχέδιο - Χρώμα", hours: 3 },
                                { name: "Γραφιστικές Εφαρμογές", hours: 3 },
                                { name: "Τεχνολογία Εκτυπώσεων", hours: 3 },
                                { name: "Ψηφιακή Σχεδίαση Εντύπων", hours: 3 },
                                { name: "Γραμματογραφία", hours: 2 },
                                { name: "Αγγλικά Ειδικότητας", hours: 1 },
                            ]
                        },
                        {
                            name: "Αργυροχρυσοχοϊας",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Εργαστήριο Χειροποίητου Κοσμήματος", hours: 6 },
                                { name: "Εργαστήριο Αναπαραγωγικού Κοσμήματος - Σμάλτο", hours: 3 },
                                { name: "Σχέδιο Κοσμηματοποιΐας", hours: 3 },
                                { name: "Εργαστήριο Πλαστικής - Μεταλλοπλαστικής", hours: 3 },
                            ]
                        },
                        {
                            name: "Συντήρησης Έργων Τέχνης - Αποκατάστασης",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Βασικές Τεχνικές Συντήρησης Έργων Τέχνης", hours: 6 },
                                { name: "Προστασία Πολιτιστικής Κληρονομιάς", hours: 1 },
                                { name: "Αντίγραφο Έργων Τέχνης", hours: 4 },
                                { name: "Σχεδιαστική Τεκμηρίωση Έργων Τέχνης", hours: 3 },
                                { name: "Αγγλικά Ειδικότητας", hours: 1 },
                            ]
                        },
                        {
                            name: "Σχεδίασης και Παραγωγής Ενδύματος",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Τεχνολογία Προτύπων Κοπής (Πατρόν)", hours: 4 },
                                { name: "Ηλεκτρονική Σχεδίαση Βιομηχανικού Προϊόντος", hours: 3 },
                                { name: "Τεχνολογία Υφάσματος και Οργάνωση Συλλογής Ενδύματος", hours: 2 },
                                { name: "Ποιοτικός Έλεγχος Υφάσματος", hours: 3 },
                                { name: "Τεχνολογία Παραγωγής Ενδυμάτων", hours: 3 },
                            ]
                        },
                        {
                            name: "Σχεδιασμού και Διακόσμησης Εσωτερικών Χώρων",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Ελεύθερο Σχέδιο – Χρώμα", hours: 3 },
                                { name: "Ψηφιακή Σχεδίαση", hours: 3 },
                                { name: "Διακόσμηση Εσωτερικών Χώρων", hours: 4 },
                                { name: "Διακοσμητική Σύνθεση – Τρισδιάστατη Μακέτα", hours: 4 },
                                { name: "Αγγλικά Ειδικότητας", hours: 2 },
                            ]
                        },
                        {
                            name: "Επιπλοποίας και Ξυλογλυπτικής",
                            subjects: [
                                { name: "Ιστορία Σύγχρονης Τέχνης", hours: 3 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Ξύλινες Κατασκευές", hours: 5 },
                                { name: "Συνδεσμολογία Επίπλου - Ξυλογλυπτική", hours: 5 },
                                { name: "Τεχνολογία Ξύλου - Μετρήσεις", hours: 1 },
                                { name: "Γραμμικό Σχέδιο", hours: 2 },
                                { name: "Ελεύθερο Σχέδιο", hours: 2 },
                            ]
                        },
                    ],
                },
                electrical_engineering: {
                    name: "Ηλεκτρολογίας, Ηλεκτρονικής και Αυτοματισμού",
                    specialties: [
                        {
                            name: "Τεχνικός Ηλεκτρονικών και Υπολογιστικών Συστημάτων, Εγκαταστάσεων, Δικτύων και Τηλεπικοινωνιών",
                            subjects: [
                                { name: "Ψηφιακά Συστήματα", hours: 3 },
                                { name: "Δίκτυα Υπολογιστών", hours: 3 },
                                { name: "Εφαρμοσμένα Ηλεκτρονικά - Κατασκευές", hours: 2 },
                                { name: "Εγκατάσταση και Διαχείριση Δικτύων - Συντήρηση Υπολογιστικών Συστημάτων", hours: 2 },
                                { name: "Συστήματα Ελέγχου και Ασφάλειας", hours: 2 },
                                { name: "Τηλεπικοινωνίες - Τηλεματική", hours: 4 },
                                { name: "Ρομποτική", hours: 2 },
                                { name: "Επεξεργασία Σήματος Ήχου και Εικόνας", hours: 2 },
                            ]
                        },
                        {
                            name: "Τεχνικός Ηλεκτρολογικών Συστημάτων, Εγκαταστάσεων και Δικτύων",
                            subjects: [
                                { name: "Ηλεκτροτεχνία 2", hours: 3 },
                                { name: "Ηλεκτρικές Μηχανές", hours: 3 },
                                { name: "Ηλεκτρολογικές Εγκαταστάσεις 2", hours: 5 },
                                { name: "Εργαστήριο Ηλεκτροτεχνίας – Ηλεκτρικών Μηχανών", hours: 4 },
                                { name: "Αυτοματισμοί Προγραμματιζόμενης Λογικής", hours: 5 },
                            ]
                        },
                    ],
                },
                mechanical_engineering: {
                    name: "Μηχανολογίας",
                    specialties: [
                        {
                            name: "Τεχνικός Μηχανολογικών Εγκαταστάσεων και Κατασκευών",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3 },
                                { name: "Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων", hours: 3 },
                                { name: "Μηχανουργική Τεχνολογία – Εργαλειομηχανές", hours: 6 },
                                { name: "Ανελκυστήρες – Ανυψωτικές Μηχανές", hours: 2 },
                                { name: "Στοιχεία Ψύξης – Κλιματισμού", hours: 6 },
                            ]
                        },
                        {
                            name: "Τεχνικός Θερμικών και Υδραυλικών Εγκαταστάσεων και Τεχνολογίας Πετρελαίου και Φυσικού Αερίου",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3 },
                                { name: "Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων", hours: 3 },
                                { name: "Συντήρηση και Επισκευή Εγκαταστάσεων Καύσης Υγρών και Αερίων Καυσίμων", hours: 4 },
                                { name: "Ύδρευση – Αποχέτευση", hours: 3 },
                                { name: "Κατασκευή και Λειτουργία Κεντρικής Θέρμανσης", hours: 5 },
                                { name: "Σχέδιο Ειδικότητας", hours: 2 },
                            ]
                        },
                        {
                            name: "Τεχνικός Εγκαταστάσεων Ψύξης, Αερισμού και Κλιματισμού",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3 },
                                { name: "Στοιχεία Ψύξης – Κλιματισμού", hours: 3 },
                                { name: "Στοιχεία Ψύξης – Κλιματισμού (ΕΡΓΑΣΤΗΡΙΟ)", hours: 5 },
                                { name: "Εγκαταστάσεις Κλιματισμού", hours: 6 },
                                { name: "Συστήματα Ελέγχου, Ρύθμισης και Αυτοματισμού Εγκαταστάσεων Ψύξης και Κλιματισμού", hours: 3 },
                                { name: "Μηχανολογική Σχεδίαση Εγκαταστάσεων Ψύξης Κλιματισμού", hours: 2 },
                            ]
                        },
                        {
                            name: "Τεχνικός Οχημάτων",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3 },
                                { name: "Μηχανές Εσωτερικής Καύσης ΙΙ", hours: 3 },
                                { name: "Μηχανές Εσωτερικής Καύσης ΙΙ (ΕΡΓΑΣΤΗΡΙΟ)", hours: 3 },
                                { name: "Συστήματα Αυτοκινήτου", hours: 6 },
                                { name: "Τεχνολογία Ελέγχων και Διαγνώσεων", hours: 5 },
                            ]
                        },
                        {
                            name: "Τεχνικός Μηχανοσυνθέτης Αεροσκαφών",
                            subjects: [
                                { name: "Στοιχεία Μηχανών", hours: 3 },
                                { name: "Κινητήρες Αεροσκαφών", hours: 3 },
                                { name: "Κινητήρες Αεροσκαφών (ΕΡΓΑΣΤΗΡΙΟ)", hours: 3 },
                                { name: "Δομή και Συστήματα Αεροσκαφών", hours: 6 },
                                { name: "Διαδικασίες Συντήρησης Αεροσκαφών", hours: 2 },
                                { name: "Τεχνολογία Αεροπορικού Υλικού", hours: 3 },
                            ]
                        },
                    ],
                },
                computer_science: {
                    name: "Πληροφορικής",
                    specialties: [
                        {
                            name: "Τεχνικός Εφαρμογών Πληροφορικής",
                            subjects: [
                                { name: "Προγραμματισμός Υπολογιστών", hours: 3 },
                                { name: "Δίκτυα Υπολογιστών", hours: 3 },
                                { name: "Προγραμματισμός Υπολογιστών (Εργαστήριο)", hours: 2 },
                                { name: "Δίκτυα Υπολογιστών (Εργαστήριο)", hours: 2 },
                                { name: "Πληροφοριακά Συστήματα σε Επιχειρήσεις και Οργανισμούς", hours: 1 },
                                { name: "Συστήματα Διαχείρισης Βάσεων Δεδομένων και Εφαρμογές τους στο Διαδίκτυο", hours: 3 },
                                { name: "Ειδικά Θέματα στον Προγραμματισμό Υπολογιστών", hours: 3 },
                                { name: "Σχεδιασμός και Ανάπτυξη Διαδικτυακών Εφαρμογών", hours: 3 },
                            ]
                        },
                        {
                            name: "Τεχνικός Η/Υ και Δικτύων Η/Υ",
                            subjects: [
                                { name: "Προγραμματισμός Υπολογιστών", hours: 3 },
                                { name: "Δίκτυα Υπολογιστών", hours: 3 },
                                { name: "Προγραμματισμός Υπολογιστών (Εργαστήριο)", hours: 2 },
                                { name: "Δίκτυα Υπολογιστών (Εργαστήριο)", hours: 2 },
                                { name: "Πληροφοριακά Συστήματα σε Επιχειρήσεις και Οργανισμούς", hours: 1 },
                                { name: "Εγκατάσταση, Διαχείριση και Συντήρηση Υπολογιστικών Συστημάτων", hours: 3 },
                                { name: "Ειδικά Θέματα στο Υλικό και στα Δίκτυα Υπολογιστών", hours: 3 },
                                { name: "Τεχνική Υποστήριξη Υπολογιστικών Συστημάτων και Δικτυακών Υποδομών", hours: 3 },
                            ]
                        },
                    ],
                },
                health: {
                    name: "Υγείας - Πρόνοιας και Ευεξίας",
                    specialties: [
                        {
                            name: "Βοηθός Νοσηλευτή",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Νοσηλευτική ΙΙ", hours: 10 },
                                { name: "Στοιχεία Παθολογίας", hours: 2 },
                                { name: "Χειρουργική - Τεχνική Χειρουργείου", hours: 2 },
                                { name: "Στοιχεία Μαιευτικής - Γυναικολογίας", hours: 1 },
                            ]
                        },
                        {
                            name: "Βοηθός Ιατρικών και Βιολογικών Εργαστηρίων",
                            subjects: [
                                { name: "Ανατομία-Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Μικροβιολογία ΙΙ", hours: 4 },
                                { name: "Αιματολογία", hours: 3 },
                                { name: "Κλινική Βιοχημεία", hours: 5 },
                                { name: "Ανοσολογία", hours: 3 },
                            ]
                        },
                        {
                            name: "Βοηθός Βρεφονηπιοκόμων",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Παιδαγωγικό Περιβάλλον Βρεφονηπιακού Σταθμού", hours: 3 },
                                { name: "Αγωγή Βρέφους και Νηπίου", hours: 4 },
                                { name: "Στοιχεία Γενικής και Εξελικτικής Ψυχολογίας", hours: 2 },
                                { name: "Δημιουργική Απασχόληση στην Προσχολική Ηλικία ΙΙ", hours: 3 },
                                { name: "Μουσικοκινητική Αγωγή", hours: 2 },
                                { name: "Λογοτεχνία Προσχολικής", hours: 1 },]
                        },
                        {
                            name: "Βοηθός Φυσικοθεραπευτή",
                            subjects: [
                                { name: "Ανατομία-Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Κινησιολογία", hours: 3 },
                                { name: "Φυσικοθεραπεία", hours: 4 },
                                { name: "Πρακτική Φυσικοθεραπεία", hours: 3 },
                                { name: "Μάλαξη", hours: 2 },
                                { name: "Φυσικά Μέσα και Εφαρμογή τους", hours: 3 },
                            ]
                        },
                        {
                            name: "Βοηθός Οδοντοτεχνίτη",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Οργάνωση, Εξοπλισμός και Υλικά Οδοντοτεχνικού Εργαστηρίου", hours: 2 },
                                { name: "Οδοντοτεχνία ΙΙ", hours: 3 },
                                { name: "Ακίνητη Προσθετική", hours: 3 },
                                { name: "Ακίνητη Προσθετική και Πορσελάνη", hours: 4 },
                                { name: "Στοιχεία Ορθοδοντικής", hours: 3 },
                            ]
                        },
                        {
                            name: "Βοηθός Ακτινολογικών Εργαστηρίων",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Ακτινοπροστασία", hours: 2 },
                                { name: "Νεότερες Απεικονιστικές Μέθοδοι", hours: 2 },
                                { name: "Ακτινοτεχνολογία ΙΙ", hours: 7 },
                                { name: "Ακτινοανατομική", hours: 3 },
                                { name: "Δεοντολογία Επαγγέλματος", hours: 1 },
                            ]
                        },
                        {
                            name: "Βοηθός Φαρμακείου",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Συνταγολογία, Νομοθεσία και Βιβλία Φαρμακείου", hours: 2 },
                                { name: "Φαρμακευτική Τεχνολογία ΙΙ", hours: 3 },
                                { name: "Κοσμητολογία", hours: 3 },
                                { name: "Στοιχεία Φαρμακογνωσίας", hours: 4 },
                                { name: "Φαρμακολογία - Τοξικολογία", hours: 4 },
                            ]
                        },
                        {
                            name: "Αισθητικής Τέχνης",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Μακιγιάζ", hours: 3 },
                                { name: "SPA και Λουτροθεραπεία", hours: 3 },
                                { name: "Σύγχρονη Αισθητική ΙΙ", hours: 6 },
                                { name: "Αισθητική Άκρων - Ονυχοπλαστική", hours: 2 },
                                { name: "Κοσμητολογία - Τεχνολογία Υλικών", hours: 1 },
                            ]
                        },
                        {
                            name: "Κομμωτικής Τέχνης",
                            subjects: [
                                { name: "Ανατομία - Φυσιολογία ΙΙ", hours: 3 },
                                { name: "Υγιεινή", hours: 2 },
                                { name: "Υγιεινή Κόμης Τριχωτού Κεφαλής - Τοξικολογία - Δερματολογία", hours: 2 },
                                { name: "Εργαστήριο Τεχνικών Εργασιών", hours: 4 },
                                { name: "Καλλιτεχνικά Χτενίσματα", hours: 4 },
                                { name: "Τεχνολογία Υλικών", hours: 2 },
                                { name: "Βασικές Εφαρμογές Κομμωτικής ΙΙ", hours: 3 },
                            ]
                        },
                    ],
                },
            }
        },
    },
};