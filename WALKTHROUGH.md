# DECIPHER Challenge - Player Walkthrough

## 🎮 How Participants Would Actually Solve This

This document explains the **player's perspective** - how someone encountering this challenge would approach and solve it.

---

## 🔍 **Initial Reconnaissance**

### What Players See First:
1. A dark-themed webpage with "DECIPHER" branding
2. **Round 1** challenge card showing:
   - Cipher: Vigenère
   - Encrypted: `ORAIGJYTCNMY`
   - Key Length: 3 characters
   - No obvious hints about what the key is

### First Thoughts:
> "I need to find a 3-character key to decrypt this. It's probably hidden somewhere in the source code."

---

## 🔐 **ROUND 1: The Hunt for the Key**

### Step 1: Check the Browser Console
Most CTF players start here:

```bash
Press F12 → Console Tab
```

**What they find:**
```
╔════════════════════════════════════════════════╗
║  DECIPHER Challenge System                    ║
║  Status: ACTIVE • Encryption: ON              ║
╚════════════════════════════════════════════════╝
[SYSTEM] Fragment #4: ZK
```

> "Interesting! There's a Fragment #4 here. This might be for Round 2. Let me keep looking for the Round 1 key."

### Step 2: Inspect the JavaScript Source
```bash
F12 → Sources Tab → main.js
```

**What they find:**
Players scroll through `main.js` and discover:

```javascript
// LEGACY CRYPTO MODULE (DEPRECATED)
function _legacyEncrypt(plaintext, useDeprecatedKey = false) {
    const oldKey = 'KEY';  // Legacy authentication key
    ...
}
```

> "Bingo! The key is **KEY**!"

### Step 3: Decrypt the Message
Now they need to decrypt `ORAIGJYTCNMY` using the Vigenère cipher with key `KEY`.

**Option A - Use Online Tool:**
- Go to https://www.dcode.fr/vigenere-cipher
- Enter ciphertext: `ORAIGJYTCNMY`
- Enter key: `KEY`
- Click decrypt

**Option B - Manual Calculation:**
```
Ciphertext: O  R  A  I  G  J  Y  T  C  N  M  Y
Key:        K  E  Y  K  E  Y  K  E  Y  K  E  Y
Result:     E  N  C  Y  C  L  O  P  E  D  I  A
```

**Option C - Use Browser Console:**
Players might use the `vigenereDecrypt` function they see in main.js:
```javascript
vigenereDecrypt('ORAIGJYTCNMY', 'KEY')
// Returns: "ENCYCLOPEDIA"
```

### Step 4: Submit Answer
- Enter `ENCYCLOPEDIA` in the input field
- Click "Verify"
- ✅ **Round 1 Complete!** Round 2 appears

---

## 🧩 **ROUND 2: Fragment Assembly**

### What Players See:
```
⚠️ Key Rotation: A new encryption key is in effect.
Find and assemble 4 token fragments scattered in the source code.

Token Fragments:
  Fragment 1 (HTML):     ?????
  Fragment 2 (HTML):     ?????
  Fragment 3 (CSS):      ??
  Fragment 4 (Console):  ??
```

> "I need to find 4 fragments. I already saw Fragment #4 in the console: **ZK**"

### Step 1: Search HTML Source
```bash
Right-click → View Page Source (Ctrl+U / Cmd+Option+U)
OR
F12 → Elements → Ctrl+F to search
```

**What they search for:**
- "fragment"
- "Fragment"
- "FRAGMENT"
- Look through HTML comments

**What they find:**
```html
<!-- Fragment #1: GPCTR -->
<!-- Fragment #2: SKPET -->
```

> "Great! I have fragments 1 and 2: **GPCTR** and **SKPET**"

### Step 2: Search CSS File
```bash
F12 → Sources → style.css
```

**What they find:**
Right at the top of the file:
```css
/* Fragment #3: FC */
```

> "Perfect! Fragment 3 is **FC**"

### Step 3: Recall Console Fragment
Earlier they saw in the console:
```
[SYSTEM] Fragment #4: ZK
```

> "Fragment 4 is **ZK**"

### Step 4: Assemble the Token
```
Fragment 1: GPCTR
Fragment 2: SKPET
Fragment 3: FC
Fragment 4: ZK

Assembled: GPCTRSKPETFCZK
```

### Step 5: Find the New Encryption Key
Back to `main.js`:

```javascript
// ROUND 2 ENHANCED AUTHENTICATION MODULE
const _round2MasterKey = 'EYE';  // Observation-based key
```

> "The Round 2 key is **EYE**"

### Step 6: Decrypt the Assembled Token
Using Vigenère cipher with key `EYE`:

**Using online tool or the function:**
```javascript
vigenereDecrypt('GPCTRSKPETFCZK', 'EYE')
// Returns: "CODINGISFUN"
```

### Step 7: Submit Answer
- Enter `CODINGISFUN`
- Click "Complete"
- 🏆 **Victory Screen Appears!**

---

## 🏆 **VICTORY**

### What Players See:
```
🏆 ACCESS GRANTED

YOUR FLAG:
FLAG{VIGENERE_MASTER}

Total Attempts: [varies]
Completion: 100%
```

They can also find the flag in HTML source:
```html
<!-- Victory flag: FLAG{VIGENERE_MASTER} -->
```

---

## 📊 **Typical Solving Strategies**

### Strategy 1: "DevTools Everything" (Most Common)
1. Open DevTools immediately
2. Check Console first
3. Read through all JS/CSS/HTML files
4. Find all keys and fragments
5. Solve systematically

**Time: 5-15 minutes for experienced CTF players**

### Strategy 2: "Brute Force First, Ask Questions Later"
1. Try common 3-letter keys: THE, AND, KEY, etc.
2. If that fails, write a brute-force script
3. Only check source code if brute force fails

**Time: 10-30 minutes**

### Strategy 3: "Read Everything Carefully"
1. Read all visible instructions first
2. Methodically check each mentioned location
3. Take notes on paper
4. Solve step by step

**Time: 15-25 minutes**

---

## 🎯 **Key Learning Points for Participants**

After solving this challenge, players learn:

1. ✅ **Source Code Inspection**: Always check JS/CSS/HTML comments
2. ✅ **Browser DevTools**: Essential for web-based CTF challenges
3. ✅ **Vigenère Cipher**: Understanding polyalphabetic substitution
4. ✅ **Fragment Assembly**: Combining clues from multiple sources
5. ✅ **Key Rotation**: Different rounds can use different keys

---

## 💡 **Common Mistakes Players Make**

1. ❌ **Forgetting to check the console** - Missing Fragment 4
2. ❌ **Not viewing page source** - Only using DevTools Elements tab
3. ❌ **Case sensitivity** - Entering "ilovecrypto" instead of "ILOVECRYPTO"
4. ❌ **Wrong fragment order** - Assembling as "ZKFCSKPETGPCTR" instead of correct order
5. ❌ **Using wrong key** - Using Round 1 key (KEY) for Round 2

---

## 🔧 **Tools Players Typically Use**

### Essential:
- **Browser DevTools** (F12)
- **View Page Source** (Ctrl+U)

### Optional but Helpful:
- **Online Vigenère Decoder**: https://www.dcode.fr/vigenere-cipher
- **CyberChef**: https://gchq.github.io/CyberChef/
- **Text Editor**: To organize fragments and notes
- **Python/JavaScript**: For automation or verification

---

## 🎓 **Difficulty Assessment**

**Overall Difficulty: Beginner to Intermediate**

- **Round 1**: ⭐⭐ (Beginner)
  - Key is clearly visible in source code
  - Cipher is well-known
  - Online tools available

- **Round 2**: ⭐⭐⭐ (Intermediate)
  - Requires checking multiple files
  - Fragment assembly adds complexity
  - Need to track 4 separate pieces of information

**Perfect for:**
- CTF beginners learning web reconnaissance
- Students learning classical cryptography
- Practice for OSINT and source code analysis

---

## 📝 **Summary: The Solving Flow**

```
1. Read challenge description
   ↓
2. Open DevTools (F12)
   ↓
3. Check Console → Find Fragment 4: ZK
   ↓
4. Check main.js → Find Round 1 key: KEY
   ↓
5. Decrypt ORAIGJYTCNMY → ENCYCLOPEDIA
   ↓
6. Submit Round 1 answer
   ↓
7. View page source → Find Fragments 1 & 2: GPCTR, SKPET
   ↓
8. Check style.css → Find Fragment 3: FC
   ↓
9. Assemble token → GPCTRSKPETFCZK
   ↓
10. Find Round 2 key in main.js → EYE
   ↓
11. Decrypt assembled token → CODINGISFUN
   ↓
12. Submit Round 2 answer
   ↓
13. 🏆 Get flag: FLAG{VIGENERE_MASTER}
```

**Total solving time for average player: 10-20 minutes**

---

Good luck to all participants! 🎯🔐
