# ProjectCodeReview
Projekt jest realizacją prostego **kalkulatora** w przeglądarce, aby nie było problemów z konfigurowaniem środowiska. Zadanie polega na implementacji podstawowych operacji **dodawania/odejmowania/mnożenia/dzielenia/**.

### Instrukcje dla osoby piszącej kod
- Po ściągnięciu repozytorium tworzymy nowy branch z nazwą planowanej implementacji i podziału grup np. **"dodawanie"**, **"dodawanieOdejmowanie"**.
- Implementujemy swoje rozwiązanie z myślą, aby spełniało swoją funkcjonalność (poniżej jest wrzucony przykładowy, brudny kod).
- Możemy popełnić jakieś **specjalne błędy**, które nie wpływają na funkcjonalność, w celu sprawdzenia czujności oceniających osób
- Po skończonej pracy wykonujemy **commit** oraz **push** na **origin branch**.
- Następnie tworzymy **pull/merge request** z intencją połączenia naszej gałęzi z główną gałęzią.
- Dodajemy oceniających do **pull/merge request**, a następnie czekamy na opinie...
- W przypadku uzyskania negatywnej opinii wykonujemy zalecane poprawki i powtarzamy krok **"Po skończonej pracy..."**
- Po poprawnym **merge** uznajemy zadanie za zakończone

###script.js
```javascript
value = "";

function attachAndAddNumber(event) {
  value += event.currentTarget.value;
  updateDisplay();
}

function plusOperator() {
  value += "+";
  updateDisplay();
}

function minusOperator() {
  value += "-";
  updateDisplay();
}

function timesOperator() {
  value += "*";
  updateDisplay();
}

function divOperator() {
  value += "/";
  updateDisplay();
}

function clearOperator() {
  value = "";
  updateDisplay();
}

function equalOperator() {
  value = eval(value);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = value;
}
```
### Instrukcje dla osoby oceniającej
- Czekamy na **pull/merge request** od osoby piszącej kod
- Po pojawieniu się **pull/merge request** możemy sciągnąć zmiany jako **detached HEAD** w celu sprawdzenia projektu lub przejść od razu do oceniania, jeśli zmiany nie są duże.
- Jeśli projekt jest błędny (widok się nie pojawia lub funkcjonalności nie działają) zaznaczamy w trybie **Review** **Request changes** z komentarzem by zablokować możliwość **merge** do głównej gałęzi **master**
- Po sprawdzeniu czy projekt działa staramy się wyłapać **brudny kod** i piszemy komentarze z sugestiami poprawy. Przykładowy **lepszy kod"** znajduje się poniżej. Po wyłapaniu błędów zaznaczamy opcje **Comment**
- Jeśli któreś z powyższych kroków zmusza piszącego kod do wniesienia poprawek to powtarzamy krok **"Czekamy na..."**
- Jeśli uważamy, że **merge/pull request** jest poprawny to zaznaczamy **Approve changes**
- Po poprawnym **merge** do głównej gałęzi uznajemy zadanie za zakończone

###script.js
```javascript
equasion = "";

function attach(event) {
  equasion += event.currentTarget.value;
  updateDisplay();
}

function clearOperator() {
  equasion = "";
  updateDisplay();
}

function equalOperator() {
  equasion = eval(equasion);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = equasion;
}
```

###index.html
```html
<body>
  <form>
    <table>
      <tr>
        <td colspan="4">
          <input type="text" name="display" id="display" disabled>
        </td>
      </tr>
      <tr>
        <td><input type="button" name="one" value="1" onclick="attach(event)"></td>
        <td><input type="button" name="two" value="2" onclick="attach(event)"></td>
        <td><input type="button" name="three" value="3" onclick="attach(event)"></td>
        <td><input type="button" class="operator" name="plus" value="+" onclick="attach(event)"></td>
      </tr>
      <tr>
        <td><input type="button" name="four" value="4" onclick="attach(event)"></td>
        <td><input type="button" name="five" value="5" onclick="attach(event)"></td>
        <td><input type="button" name="six" value="6" onclick="attach(event)"></td>
        <td><input type="button" class="operator" name="minus" value="-" onclick="attach(event)"></td>
      </tr>
      <tr>
        <td><input type="button" name="seven" value="7" onclick="attach(event)"></td>
        <td><input type="button" name="eight" value="8" onclick="attach(event)"></td>
        <td><input type="button" name="nine" value="9" onclick="attach(event)"></td>
        <td><input type="button" class="operator" name="times" value="x" onclick="attach(event)"></td>
      </tr>
      <tr>
        <td><input type="button" id="clear" name="clear" value="c" onclick="clearOperator()"></td>
        <td><input type="button" name="zero" value="0" onclick="attach(event)"></td>
        <td><input type="button" name="doit" value="=" onclick="equalOperator()"></td>
        <td><input type="button" class="operator" name="div" value="/" onclick="attach(event)"></td>
      </tr>
    </table>
  </form>
  <script src="scripts.js"></script>
</body>
```
