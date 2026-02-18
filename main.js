/* ═══════════════════════════════════════════════════════════════════════════════════════
   DECIPHER - Cryptographic Challenge System
   ═══════════════════════════════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════════════════════════════
// LEGACY CRYPTO MODULE (DEPRECATED)
// ═══════════════════════════════════════════════════════════════════════════════════════

function _legacyEncrypt(plaintext, useDeprecatedKey = false) {
    const oldKey = 'KEY';  // Legacy authentication key
    
    if (!useDeprecatedKey) {
        console.warn('Legacy encryption bypassed');
        return plaintext;
    }
    
    return plaintext;
}

// ═══════════════════════════════════════════════════════════════════════════════════════
// ROUND 2 ENHANCED AUTHENTICATION MODULE
// ═══════════════════════════════════════════════════════════════════════════════════════

const _round2MasterKey = 'EYE';  // Observation-based key

// ═══════════════════════════════════════════════════════════════════════════════════════

// System initialization
console.log('%c╔════════════════════════════════════════════════╗', 'color: #00F7FF; font-weight: bold;');
console.log('%c║  DECIPHER Challenge System                    ║', 'color: #00F7FF; font-weight: bold;');
console.log('%c║  Status: ACTIVE • Encryption: ON              ║', 'color: #00F7FF; font-weight: bold;');
console.log('%c╚════════════════════════════════════════════════╝', 'color: #00F7FF; font-weight: bold;');
console.log('%c[SYSTEM] Fragment #4: ZK', 'color: #00FFA3; font-size: 11px;');

// ═══════════════════════════════════════════════════════════════════════════════════════
// CORE CHALLENGE LOGIC
// ═══════════════════════════════════════════════════════════════════════════════════════

// State
let state = {
    round1Attempts: 0,
    round2Attempts: 0,
    fragmentsFound: []
};

// Correct answers
const ROUND1_ANSWER = 'ENCYCLOPEDIA';
const ROUND2_ANSWER = 'CODINGISFUN';
const FLAG = 'FLAG{VIGENERE_MASTER}';

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    // Round 1 Submit
    document.getElementById('round1Submit').addEventListener('click', checkRound1);
    document.getElementById('round1Input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkRound1();
    });
    
    // Round 2 Submit
    document.getElementById('round2Submit').addEventListener('click', checkRound2);
    document.getElementById('round2Input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkRound2();
    });
    
    console.log('%c✅ Challenge initialized', 'color: #00FFA3;');
}

// Round 1 Check
function checkRound1() {
    const input = document.getElementById('round1Input').value.toUpperCase().trim();
    state.round1Attempts++;
    
    document.getElementById('attempts1').textContent = state.round1Attempts;
    
    if (input === ROUND1_ANSWER) {
        document.getElementById('status1').textContent = 'VERIFIED ✓';
        document.getElementById('status1').style.color = '#00ffa3';
        
        // Show Round 2
        setTimeout(() => {
            document.getElementById('round1').classList.add('hidden');
            document.getElementById('round2').classList.remove('hidden');
            
            document.getElementById('step1').classList.remove('active');
            document.getElementById('step1').classList.add('completed');
            document.getElementById('step2').classList.add('active');
        }, 1000);
    } else {
        document.getElementById('status1').textContent = 'FAILED ✗';
        document.getElementById('status1').style.color = '#ff4d4d';
    }
}

// Round 2 Check
function checkRound2() {
    const input = document.getElementById('round2Input').value.toUpperCase().trim();
    state.round2Attempts++;
    
    document.getElementById('attempts2').textContent = state.round2Attempts;
    
    if (input === ROUND2_ANSWER) {
        document.getElementById('status2').textContent = 'COMPLETE ✓';
        document.getElementById('status2').style.color = '#00ffa3';
        
        // Show Victory
        setTimeout(() => {
            document.getElementById('round2').classList.add('hidden');
            document.getElementById('victory').classList.remove('hidden');
            
            document.getElementById('step2').classList.remove('active');
            document.getElementById('step2').classList.add('completed');
            document.getElementById('step3').classList.add('completed');
            
            document.getElementById('flagValue').textContent = FLAG;
            document.getElementById('totalAttempts').textContent = 
                state.round1Attempts + state.round2Attempts;
        }, 1000);
    } else {
        document.getElementById('status2').textContent = 'FAILED ✗';
        document.getElementById('status2').style.color = '#ff4d4d';
    }
}

// Vigenère Cipher (for reference/testing)
function vigenereDecrypt(ciphertext, key) {
    let result = '';
    const keyUpper = key.toUpperCase();
    
    for (let i = 0; i < ciphertext.length; i++) {
        const c = ciphertext.charCodeAt(i) - 65;
        const k = keyUpper.charCodeAt(i % keyUpper.length) - 65;
        const decrypted = (c - k + 26) % 26;
        result += String.fromCharCode(decrypted + 65);
    }
    
    return result;
}


