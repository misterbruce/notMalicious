**notMalicious** is my attempt at better understanding potential cybersecurity challenges in a college settings.

In seeking to further my knowledge of cybersecurity I was lead to try my hand at malware and, more specifically, ransomware.
And before I go further I would like to put a disclaimer that this was and will never be used to compromise or otherwise mislead
other people. This project is at the very most my attempt to **learn**. 

In being lead to ransomware I was considering various methods of deployment and getting the malware onto an endpoint to begin with.
In considering this I accidentally landed upon something more or less of an attack plan.

Once again I feel the need to say that this is not meant to be utilized but only to be **learned** from.

**Here's what I concocted:**

Attack Plan
A. Mass Distribution.
B. Payload Process.

A.
  a. A badusb device will be left in an unassuming location.
  b. After device activates, the process waits a few minutes to avoid suspicion before prompting user to log into the university's
     chosen email. (Of course this will only be a custom built phishing site that looks identical).
  c. After entering a username it will be sent to a listener that will then store in a database and attempt to use it to login on
     the attacker computer via a script. (If any errors or usernameNotFound errors throw then the site will reflect accurately).
  d. Once a username has been accepted the script will auto select sms authentication code to be sent to users phone, simultaneously
     accurately reflecting on the phishing site.
  e. User will enter the sms code on the phishing site that will then utilize the same method as the username entry to check.
  f. Once attacker computer has gained access it will trigger the site to clear browser history, close, and enable a payload to 
     clear dns cache within the computer itself.
  g. Emails will be sent at once and scheduled to send containing the malware payload disguised as legitimate student weak points.

B. 
  Malware will behave like normal ransomware recursively searching for any valueable info before either extracting and encrypting
    or just encrypting.

---

**If twice was not enough please hear me once more when I write that this is never meant to be utilized maliciously in any way.**
