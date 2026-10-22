// Task 6 — Security Discussion (as a comment block)

/*
==============================================================
WHY PASSWORDS & SECRET API KEYS MUST NOT BE STORED IN BROWSER
==============================================================

1. NOT ENCRYPTED
   - localStorage / sessionStorage store data in PLAIN TEXT.
   - Anyone with access to the device (DevTools → Application tab)
     can read every value instantly. No password required.
   - XSS (Cross-Site Scripting) attack me malicious JS kisi bhi
     script se localStorage padh sakta hai aur attacker ko bhej
     sakta hai.

2. NO EXPIRY / NO SCOPE
   - localStorage me data tab tak rehta hai jab tak manually
     clear na ho. Agar user public/shared laptop bhool jaye,
     credentials exposed.

3. XSS = COMPLETE COMPROMISE
   - Browser storage is directly accessible via JavaScript.
   - Ek single XSS vulnerability → saare tokens, keys, passwords
     leak. HttpOnly cookies at least JS se protected rehti hain,
     but localStorage nahi.

4. SECRET KEYS = FREE ACCESS TO THIRD-PARTY BILLS
   - Agar Stripe / AWS / OpenAI API key browser me ho, attacker
     use karke tumhare account pe charges laga sakta hai.
   - Client-side code me koi bhi "secret" actually secret nahi
     rehta (DevTools → Network/Sources se readable).

5. WRONG ASSUMPTION — "obfuscation is security"
   - Base64, minification, ya JS variable me chhupana — sab
     trivially reverse-engineerable.

==============================================================
WHAT TO DO INSTEAD
==============================================================
- Authentication  → HttpOnly + Secure + SameSite cookies,
                    server-issued session tokens.
- Sensitive data  → Store on server, access via authenticated API.
- API keys        → Keep on server; client calls YOUR backend,
                    backend calls the third-party API.
- Preferences     → localStorage is fine for non-sensitive data
                    (theme, language, form step) — NOT for secrets.

==============================================================
RULE OF THUMB
==============================================================
"Anything in the browser is PUBLIC."
If a value being exposed would cause harm → do not put it in
localStorage, sessionStorage, IndexedDB, or any client-side JS.
==============================================================
*/

console.log("Task 6 — See security notes at top of this file.");
console.log("Rule: Anything in the browser is PUBLIC. Keep secrets server-side.");
