      var button = document.getElementById("button");
      var sum = 0;
      var array = [];

      function onclick1() {
        array.push("\nCabbage £30.00");
        sum += 30.00;
        console.log(sum);
      }
      button.addEventListener("click", onclick1);

      var button1 = document.getElementById("button1");

      function onclick2() {
        array.push("\n Onion £45.00");
        sum += 45.00;
        console.log(sum);
      }
      button1.addEventListener("click", onclick2);

      var button2 = document.getElementById("button2");

      function onclick3() {
        array.push("\n Onion £45.00");
        sum += 45.00;
        console.log(sum);
      }
      button2.addEventListener("click", onclick3);

      var button3 = document.getElementById("button3");

      function onclick4() {
        array.push("\n capsicum £45.00");
        sum += 45.00;
        console.log(sum);
      }
      button3.addEventListener("click", onclick4);

      var button5 = document.getElementById("button5");

      function onclick5() {
        array.push("\n  Carrot £35.00");
        sum += 35.00;
        console.log(sum);
      }
      button5.addEventListener("click", onclick5);

      var button6 = document.getElementById("button6");

      function onclick6() {
        array.push("\n Broccoli £65.00");
        sum += 65.00;
        console.log(sum);
      }
      button6.addEventListener("click", onclick6);

      var button7 = document.getElementById("button7");

      function onclick7() {
        array.push("\n Cauliflower £15.00");
        sum += 15.00;
        console.log(sum);
      }
      button7.addEventListener("click", onclick7);

      var button8 = document.getElementById("button8");

      function onclick8() {
        array.push("\n Onion £25.00");
        sum += 25.00;
        console.log(sum);
      }
      button8.addEventListener("click", onclick8);

      var button9 = document.getElementById("button9");

      function onclick9() {
        array.push("\n Onion £20.00");
        sum += 20.00;
        console.log(sum);
      }
      button9.addEventListener("click", onclick9);

      var button = document.getElementById("button");

      function onclick1() {
        array.push("\n pineapple £50.00");
        sum += 50.00;
        console.log(sum);
      }
      button.addEventListener("click", onclick1);

      var bas = document.getElementById("basket");

      function onclick11() {
        basket2.innerHTML = "<br><b>" + array + "</b>";
      }
      bas.addEventListener("click", onclick11);

      var rem = document.getElementById("remove");

      function onclick12() {
        array.pop();
        basket2.innerHTML = "<br><b>" + array + "</b>";
      }
      rem.addEventListener("click", onclick12);

      var button4 = document.getElementById("total_pay");
      function onclick13() {
        div1_basket.textContent = "The total price is £" + sum;
        console.log(sum);
      }
      button4.addEventListener("click", onclick13);
