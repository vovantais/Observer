//observer
class Observer {
   addCircles() {
      const container = document.createElement('div');
      container.style = `max-width:1000px; margin:0 auto; height:200vh;`
      document.body.prepend(container);

      const circle__body = document.createElement('div');
      circle__body.style = `display:flex; margin:0 auto; justify-content:space-between;
			align-items:center;`
      container.append(circle__body);

      const circle__item1 = document.createElement('div');
      const circle__item2 = document.createElement('div');
      const circle__item3 = document.createElement('div');
      circle__item1.style = `display:flex; justify-content:center;align-items:center;text-align:center; border-radius:50%; border:1px solid black; width:150px;
				height:150px; font-weight: bold;font-size: 30px;box-shadow: 1px 1px 2px #000;`
      circle__item2.style = `display:flex; justify-content:center;align-items:center;text-align:center; border-radius:50%; border:1px solid black; width:150px;
				height:150px; font-weight: bold;font-size: 30px;box-shadow: 1px 1px 2px #000;`
      circle__item3.style = `display:flex; justify-content:center;align-items:center;text-align:center; border-radius:50%; border:1px solid black; width:150px;
				height:150px; font-weight: bold;font-size: 30px;box-shadow: 1px 1px 2px #000;`
      circle__item1.textContent = 57;
      circle__item2.textContent = 133;
      circle__item3.textContent = 249;
      circle__item1.className = circle__item2.className = circle__item3.className = 'circle__item';
      circle__body.append(circle__item1, circle__item2, circle__item3);
   }
   addObserver() {
      const obser = new IntersectionObserver((entries, observer) => {
         entries.forEach(item => {
            if (item.isIntersecting) {
               observ.letsCount(item.target, 20)
               obser.unobserve(item.target); // отключает постоянное срабатывание, только при первой загрузки 
            }
         });
      }, { threshold: 1.0 });
      const ClASS_NAME = document.querySelectorAll('.circle__item');
      ClASS_NAME.forEach(item => { obser.observe(item) });
   }
   letsCount(DOMElement, iteration) {
      let final = +DOMElement.textContent;
      const inc = Math.round(final / iteration);
      let n = 0;
      const timer = setInterval(() => {
         n += inc;
         if (n >= final) {
            n = final;
            clearInterval(timer);
         }
         DOMElement.textContent = n;
      }, 100)
   }
}
const observ = new Observer();
observ.addCircles();
observ.addObserver();