import LocalizedStrings from 'react-localization';
 
let strings = new LocalizedStrings({
 en:{

   logout: "Logout",

   header_castVote: "Cast Vote",
   header_options: "Options",
   header_lang: "Language",

   home_title: "About E-Voting",
   home_voteBtn : "Login and Vote",
   home_body: "As technology advances and more transactions become electronic, many wonder when voting will truly enter the digital age. There are many issues to consider when it comes to exercising the right to vote through a computer. This includes building trust in the process, preserving secrecy of the ballot and ensuring citizens are not coerced or intimidated when using technology to vote.",
   home_security: "Security",
   home_access : "Accessibility",
   home_usability: "Usabiity",
   home_view: "View Details",

   login_login: "Login",
   login_usernmame: "Username",
   login_pass: "Password",
   login_min: "3 characters are required.",

   cand_title: "All Candidates",
   cand_reset: "Reset selected candidate",
   cand_voteHelp: "Vote for one candidate by clicking the check box next to it, scroll down and click 'Vote Now button to confirm.",
   cand_party: "Party",

   vote_success: "Success!",
   vote_info: "Your vote has been submitted.",
   vote_confirm: "Confirm"
 },
 de: {

   logout: "Ausloggen",

   header_castVote: "Wählen",
   header_options: "Optionen",
   header_lang: "Sprache",

   home_title: "Über E-Voting",
   home_voteBtn: "Einloggen und Wählen",
   home_body: "Mit dem Fortschritt der Technologie und der zunehmenden Anzahl elektronischer Transaktionen fragen sich viele, wann die Abstimmung wirklich in das digitale Zeitalter eintreten wird. Bei der Ausübung des Wahlrechts über einen Computer sind viele Punkte zu beachten. Dies beinhaltet den Aufbau von Vertrauen in den Prozess, die Wahrung des Wahlgeheimnisses und die Gewährleistung, dass die Bürger bei der Wahl der Technologie nicht gezwungen oder eingeschüchtert werden.",
   home_security: "Sicherheit",
   home_access : "Zu­gäng­lich­keit",
   home_usability: "Benutzbarkeit",
   home_view : "Info ansehen",

   login_login: "Einloggen",
   login_usernmame: "Benutzername",
   login_pass: "Kennwort",
   login_min: "3 Buchstaben sind erforderlich.",

   cand_reset: "Alle Aktionen zuruckfuehren.",
   cand_title: "Alle Kandidaten",
   cand_voteHelp: "Bitte waehlen Sie einer der Kandidaten und nachdem klicken Sie auf 'Waehlen'.",
   cand_party: "Patei",

   vote_success: "Erfolg!",
   vote_info: "Ihre Wahl wurde eingetragen.",
   vote_confirm: "Bestaestigen"

 }
});

export default strings;