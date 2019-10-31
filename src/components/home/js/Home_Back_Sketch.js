
export default function sketch(p){
      let canvas;

      let cols, rows;
      let scl;
      let w;
      let h;

      let flying = 0;

      let terrain = [];


      p.setup = () => {
            canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

            sclSetter();

            cols = 2*p.windowWidth/scl;
            rows = 15;

            terrainSetup();

            // cols = w / 2;
            // rows = h/ scl;
            p.background(0, 1);
            p.fill(0)

      }
  
      p.draw = () => {

            p.stroke('#B58900'); p.strokeWeight(2); p.fill('#073642'); p.background('#073642');
      
            terrainGenerator();

            sclSetter();

            p.background('#073642');
            p.rotateX(p.PI/2.6);
            p.translate(-p.windowWidth/p.PI*2, 0, 20)

            for (var y = 0; y < rows-1; y++) {
                  p.beginShape(p.TRIANGLE_STRIP);
                  for (var x = 0; x < cols; x++) {
                        p.vertex(x*scl, y*scl, terrain[x][y]);
                        p.vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
                  }
                  
                  p.endShape();
            }
      }
  

      p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);

            cols = 2*p.windowWidth/scl;

            terrainSetup();

            terrainGenerator();

      }

      function terrainGenerator() {

            flying -= 0.0014;
            var yoff = flying;

            for (var y = 0; y < rows; y++) {
                  var xoff = 0;
                  for (var x = 0; x < cols; x++) {
                        terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 2, -heightSetter(), heightSetter());
                        xoff += 0.11;
                  }
                  yoff += 0.11;
            }
      }

      function terrainSetup() {

            for (var x = 0; x < cols; x++) {
                  terrain[x] = [];
                  for (var y = 0; y < rows; y++) {
                        terrain[x][y] = 0; //specify a default value for now
                  }
            }

      }


      function sclSetter() {

            if (p.windowWidth < 299) {
                  scl = 30;
            } else if (p.windowWidth > 300 && p.windowWidth < 850) {
                  scl = 40;
            } else if (p.windowWidth > 850 && p.windowWidth < 1000) {
                  scl = 45;
            } else if (p.windowWidth > 1000 && p.windowWidth < 1400) {
                  scl = 55;
            } else if (p.windowWidth > 1400 && p.windowWidth <= 2000 ) {
                  scl = 60;
            } else if (p.windowWidth > 2000) {
                  scl = 70;
            }
      }

      function heightSetter() {
            if (p.windowHeight > 1400 && p.windowHeight < 2000 ) {
                  return 350;
            } else if (p.windowHeight > 2000) {
                  return 400;
            } else {
                  return 300;
            }
      }
  }
