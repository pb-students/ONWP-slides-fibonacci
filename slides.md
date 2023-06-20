---
theme: seriph
background: https://unsplash.com/photos/HrdNNoG_y-A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fHBpbmVhcHBsZXxlbnwwfHx8fDE2ODY4NDMwMDN8MA&force=true&w=1920
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  Created by Kasper (wvffle) Seweryn and Filip Rutkowski
drawings:
  persist: false
transition: slide-left
title: Ciąg Fibonacciego w naturze i muzyce
download: true
---

# Ciąg Fibonacciego w naturze i muzyce

<span class="opacity-80">
inż. Filip Rutkowski, inż. Kasper Seweryn
</span>

---

## transition: slide-left

# Czym jest ciąg Fibonacciego?

Ciąg Fibonacciego jest ciągiem liczb, w którym każdy kolejny element jest sumą dwóch poprzednich elementów. Rozpoczyna on się od dwóch jedynek:

<p v-click>

$$
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
$$

</p>

<p v-click>
Ciąg ten został odkryty przez włoskiego matematyka &mdash; Leonarda z Pizy, który uchodzi za jednego z najwybitniejszych matematyków swoich czasów.
</p>

<p v-click> Definicja dla informatyków :)

```python
def fibonacci(n):
  if n < 2:
    return 1

  return fibonacci(n - 1) + fibonacci(n - 2)

```

</p>

<!--
Czasami również rozpoczyna się od 0 i 1.

Mamy również definicję dla informatyków.
-->

---

# Zabawa z Fibonaccim

Co się wydarzy gdy podniesiemy liczy z ciągu Fibonacciego do drugiej potęgi?

$$
1^2, 1^2, 2^2, 3^2, 5^2, 8^2, 13^2, 21^2, ...
=
1, 1, 4, 9, 25, 64, 169, 441, ...
$$

<div class="grid grid-cols-3">
  <div>
<p v-click>

$$
1 + 1 = 2
$$

</p>
<p v-click>

$$
1 + 4 = 5
$$

</p>
<p v-click>

$$
4 + 9 = 13
$$

</p>
<p v-click>

$$
9 + 25 = 34
$$

</p>
<p v-click>

$$
...
$$

</p>
  </div>
  <div>
<p v-click>

$$
1 + 1 + 4 = 6
$$

</p>
<p v-click>

$$
1 + 1 + 4 + 9 = 15
$$

</p>
<p v-click>

$$
1 + 1 + 4 + 9 + 25 = 40
$$

</p>
<p v-click>

$$
1 + 1 + 4 + 9 + 25 + 64 = 104
$$

</p>
<p v-click>

$$
...
$$

</p>
  </div>
  <div v-click>
<p>

$$
= 2 * 3
$$

</p>
<p>

$$
= 3 * 5
$$

</p>
<p>

$$
= 5 * 8
$$

</p>
<p>

$$
= 8 * 13
$$

</p>
<p>

$$
...
$$

</p>
  </div>
</div>

<!--
Wydawałoby się, że gdy podniesiemy liczby Bonifacego do kwadratu, to utworzymy ciąg liczb w którym utraciliśmy oryginalną zależność. Dodajmy więc po kolei sąciadujące pary naszych potęg.

Zobaczmy więc co się wydarzy, gdy zaczniemy sumować wszystkie liczby naszego ciągu.

Jak widać, tworzymy liczby które tym razem MUSZĄ być totalnie niezależne od ciągu Bonifacego. Nic błędniejszego!
-->

---

# Czym jest złota proporcja?

Złota proporcja jako stosunek dwóch liczb ciągu Fibonacciego znajdujących się obok siebie

Gdy zaczniemy dzielić coraz większe, sąsiadujące liczby ciągu Fibonacciego, jej wynik będzie coraz bardziej zbliżał się do:

$$
\phi \approx 1.618033988749...
$$

<p v-click>

Im większe liczby dzielimy, tym wynik jest dokładniejszy. Istotną kwestią jest to, że zarówno liczby Fibonacciego, jak i złota proporcja,
występują bardzo często w otaczającym nas świecie.

</p>

<p v-click>
Graficzną reprentację ciągu Fibonacciego przedstawia złota spirala. Składa się ona z kwadratów o wymiarach kolejnych liczb ciągu.

</p>
<p v-click>
<img src="https://www.scienceabc.com/wp-content/uploads/ext-www.scienceabc.com/wp-content/uploads/2018/03/fibonacci-spiral.jpg-.jpg" class="w-1/3">

</p>

<!--
Tak jak widac na obrazku, stosunek kolejnych krawedzi na obrazku wynosi phi. Złota spirale otrzymujemy gdy wpiszemy ją w miejsca styczności odcinkuw o proporcji phi
-->

---

# Gdzie znajdziemy ciąg Fibonacciego oraz złotą proporcję?

<div class="grid grid-cols-3 gap-8">
  <img v-click src="https://www.nasa.gov/sites/default/files/m101.jpg">
  <img v-click src="https://unsplash.com/photos/d9_2kPJBG0U/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8dmlvbGlufGVufDB8fHx8MTY4Njg0MDI2OXww&force=true&w=640">
  <img v-click src="/twitter.jpg">
  <img v-click src="https://rainbowequation.com/images/mystery-18-golden-ratio-earh-hand-arm.jpg">
</div>

<!--
- Natura
- Muzyka
- Design
- Anatomia
-->

---

# Złota proporcja w anatomii

Złotą proporcję można zauważyć także w anatomii człowieka. Nie u każdego człowieka proporcje muszą być one idealnie zachowane, ale na pewno są bardzo zbliżone.

<div class="grid grid-cols-3">
  <img src="https://searx.wvffle.net/image_proxy?url=https%3A%2F%2Fqph.fs.quoracdn.net%2Fmain-qimg-80d1674b9b9386e2d8b0c17b0f14f182&h=cfa9dac990146652cda3d3b3b13c7a4d7355ed686ef28d1052aaedf5560d015e">

  <img src="https://searx.wvffle.net/image_proxy?url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F20%2F25%2Fb8%2F2025b852bfdef34b28c3237d114300e8.png&h=3ce86ed016db7c1603cef2f5254c21061de7aee0bd5ea493094286c4de22c93f">

  <img src="https://searx.wvffle.net/image_proxy?url=https%3A%2F%2Fzinaida.mamchenkov.net%2Fblog%2Fwp-content%2Fuploads%2F2015%2F09%2FGolden-ratio-face-body.jpg&h=87538f543f20e69e8942720c280f3f528be5bbe7f382a2268e456a306d13bcd9 ">
</div>

<!--
Stosunek dlugosci podloga pepek, podloga do czubka glowy phi,

od koniuszkow palcow do lokci a od lokci do nadgarstka phi.

Stosunek odleglosi od ramion do czubka glowy, do odleglosci brody do czubka glowy.

Od pepka do czubka glowy, do odleglosci ramion do czubkaglowy


2, 3, 5, 8

Mamy 10 palcow, gdzie 8 z nich skladaja sie z 3 paliczkow, oraz mamy 2 kciuki ktore skladaja sie z dwoch paliczkow
-->

---

transition: slide-up
layout: image-right
image: https://unsplash.com/photos/NgDapgpAiTE/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg2ODYyNTgzfA&force=true&w=1920

---

# Porozmawiajmy o ananasach! 🍍🍍🍍

<img src="https://craftofcoding.files.wordpress.com/2020/05/pineapplefibonacci.jpg">

---

# Ciąg Fibonacciego i złota proporcja w naturze

Złoty podział występuje w:

- Kształtach spiralnych galatktyk
- Formujących się huraganach
  <div class="flex">
    <img src="/sandy_huragan.png" class="w-1/7 object-cover">
    <img src="/irene_huragan.jpg" class="w-1/7 object-cover">
  </div>
- Ułożeniu gałęzi na pniu roślin i w nerwów liści (https://www.nature.com/articles/s41598-018-31763-1#Fig3)
- Ulistnieniu roślin - każdy kolejny liść rośnie co $360(1 - \frac{1}{\phi})^\circ \approx 137.5^\circ$
  <div class="grid grid-cols-5">
    <img src="https://gofiguremath.org/img/Leaf-Growth-2.png">
    <img src="https://gofiguremath.org/img/Leaf-Growth-3.png">
    <img src="https://gofiguremath.org/img/Leaf-Growth-4.png">
    <img src="https://gofiguremath.org/img/Leaf-Growth-5.png">
    <img src="https://gofiguremath.org/img/Leaf-Growth-13.png">
  </div>

---

# Ciąg Fibonacciego i złota proporcja w muzyce

Kolejną bardzo ciekawą informacją jest to, że ciąg Fibonacciego można stosować także w muzyce.
Kompozytorzy już dawno temu odkryli, że umiejętne wykorzystanie danych z ciągu, może ułatwić stworzenie kompozycji na bardzo
wysokim poziomie. Jednym z najbardziej znanych przykładów jest tutaj Canon D-dur Johanna Pachelbela, na któym bazuje wiele znanych współczesnych utworów,
jak na przykład "No Women, No cry" Boba Marleya, albo "Let It Be" zespołu "The Beatles".

<img src="https://searx.wvffle.net/image_proxy?url=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NJ70eeZdN5sB3q8LHkdsUQHaEe%26pid%3D15.1&h=32916f618275e8dc6ab744e6617d04609fae9daa6bf876357f63e9ab663dd27d">

<!--
Canon D-dur,Green-dayBasked base,
No Use for a Name - Laverne and Shirley

Ciąg fibonacciego ma zastosowanie także w muzyce, mozna go wykorzystac
na rozne sposoby, jak chociazby poprzez stosowanie liczby zarganych nut w jednym takcie(czyli raz dwa trzy cztery na przyklad) w formie liczb fibonacciego, jak i poprzez wysokosci dzwiekow.
-->

---

# Ciąg Fibonacciego i złota proporcja w muzyce

<Youtube id="IGJeGOw8TzQ" class="w-full aspect-16/9" />

<!--
Tonacja wykorzystana tutaj to e dur, w duzym skrocie, tonacja to zbior dzwiekow z ktorych mozna zagrac gamę, ktore pasuja do siebie, akurat ta jest tak utworzona ze zawiera zarowno biale jak i czarne dzwieki. teraz do kazdego dzwieku gdy przypiszemy cyfre, bedzie ona odpowiadac cyfrom w kolejnych wyrazach  ciagu fibonacciego
-->

---

layout: image-right
image: https://www.metalnews.pl/images/2021/05/Tool-Lateralus-okladka.jpg

---

# Ciąg Fibonacciego i złota proporcja w muzyce

TOOL &mdash; Lateralus

<div class="text-xl">
<span class="text-gray-700">Black</span><br>
<span class="text-red-600">Then</span><br>
<span class="text-gray-700">White</span> <span class="text-red-600">are</span><br>
<span class="text-red-600">All</span> <span class="text-gray-700">I</span> <span class="text-red-600">see</span><br>
<span class="text-gray-700">In</span> <span class="text-red-600">my</span> <span class="text-gray-700">in</span><span class="text-red-600">fan</span><span class="text-gray-700">cy</span><br>
<span class="text-red-600">Red</span> <span class="text-gray-700">and</span> <span class="text-red-600">yel</span><span class="text-gray-700">low</span> <span class="text-red-600">then</span> <span class="text-gray-700">came</span> <span class="text-red-600">to</span> <span class="text-gray-700">be</span><br>
<span class="text-gray-700">Rea</span><span class="text-red-600">ching</span> <span class="text-gray-700">out</span> <span class="text-red-600">to</span> <span class="text-gray-700">me</span><br>
<span class="text-red-600">Lets</span> <span class="text-gray-700">me</span> <span class="text-red-600">see</span>
</div>

https://youtu.be/Y7JG63IuaWs?t=94

<!--
Istnieją zespoły, których muzyka nie jest pisana na kolanie i grana ciągle na tych samych czterech akordach.

Pięknym tego przykładem jest zespół TOOL.

Każda ich piosenka jest dokładnie projektowana do tego stopnia, że nałożone na siebie dwa utwory potrafią utworzyć nowy utwór.

Wspaniałym przykładem zastosowania ciągu Bonifacego jest piosenka Lateralus, w której instrumenty, metrum oraz sposób w jaki skomponowany został tekst odzwierciedla ten ciąg. Natomiast sam tekst odnosi się do spirali i nieskończoności.
-->

---

## layout: two-cols

# Matematyka vs Informatyka

Interaktywny przykład

```ts
const PHI = 1.618033988749, SQRT5_I = 1 / Math.sqrt(5)

const fib1 = (n: number) => SQRT5_I * (
  PHI ** n - (-PHI) ** (-n)
}

const fib2 = (n: number, nums = [1, 1]) => {
  if (n == 0) return 0
  if (n < 2) return 1
  for (let count = 0; count < n - 2; ++count) {
  	[nums[0], nums[1]] = [nums[1], nums[0] + nums[1]]
  }
  return nums[1]
}
```

<div class="flex items-center flex-col p-4 gap-4">
  <OptimizedFib />
</div>
::right::

<img src="/meme.png" class="h-128">

---

layout: center
class: text-center

---

# Dziękujemy!

<div class="text-xs text-left">

</div>
