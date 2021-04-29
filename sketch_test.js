// Sketch One
var s = function (sketch) { // sketch could be any variable name
  var w = window.innerWidth, h = window.innerHeight;

  let zoom = sketch.random(0.2, 1.5);


  var speed = 0;
  var size1 = sketch.random(0, 50);
  var size2 = sketch.random(0, 50);
  var bgColor;
  let gui;

  var geoX = sketch.random(0.01, 0.0001);
  var geoY = sketch.random(0.01, 0.0001);
  var geoZ = sketch.random(0.01, 0.0001);
  var geoAmount = sketch.random(1, 100);
  var geoAmount2 = sketch.random(1, 10);
  var geoData1 = sketch.random(1, 75);
  var geoData2 = sketch.random(1, 2000);
  var geoData3 = sketch.random(1, 75);

  // , 'cylinder(' + geoData1 + '); ', 'cone(' + geoData1 + '); ', 'ellipsoid(' + geoData1 + '); ', 'torus(' + geoData1 + '); '];
  var geomatrics = ['geoData1,geoData2,geoData3', 'geoData1 + geoData3'];
  var geo;
  var test = (255, 0, 0);
  var material1 = 0;
  var material2 = 0;
  var primary;
  let secondary;

  var icons = [];
  var icons2 = [];

  var secColor = ['#eb5777', '#33ffa9', '#ffff75', '#5090ff', '#101111', '#323234'];
  var prColor = ['#ff85b4', '#eb33eb', '#00e776', '#27a95a', '#1d5dfa', '#ffd342'];
  var greyColor = ['#101111', '#323234'];
  var showOnce = false;

  var save = ("myImage.png");

  sketch.preload = function () {
    for (let i = 0; i < 14; i++) {
      icons[i] = sketch.loadImage('images/symbolen' + i + '.svg');
      // console.log(i);
    }
    for (let i = 0; i < 14; i++) {
      icons2[i] = sketch.loadImage('images-2/symbolen' + i + '.svg');
      // console.log(i);
    }
  }


  sketch.setup = function () {
    savefile1 = sketch.createCanvas(w, h, sketch.WEBGL);

    // canvas1.position(0, 0);
    img = sketch.loadImage('images/symbolen10.svg');
    img2 = sketch.loadImage('images-2/symbolen3.svg');
    secondary = sketch.floor(sketch.random(0, 5));
    primary = sketch.floor(sketch.random(0, 5));
    geom = sketch.floor(sketch.random(0, 6));

    // console.log(secondary)
  };

  window.onload = function () {
    //http://bit101.github.io/quicksettings/
    //http://bit101.github.io/quicksettings/demos/demo2.js
    var master = QuickSettings.create(20, 20, "Master");
      // buttons = QuickSettings.create(250, 20, "Particles with pattern");

    // master.addBoolean("test button", false, function (value) {
    //   if (value) {
    //     buttons.show();
    //   }
    //   else {
    //     buttons.show();
    //   }
    // });

    // master.addRange("Speed", 0.010, 0.050, speed, 0.005, function (value) {
    //   speed = value;
    // });
    // buttons.addRange("Size particles - Size-1", 0, 100, 25, 1, function (value) {
    //   size1 = value;
    // });
    // buttons.addRange("Size particles - Size-2", 0, 100, 25, 1, function (value) {
    //   size2 = value;
    // });

    // master.addDropDown("Geomatrics", geomatrics, function (value) {
    //   console.log(geomatrics[geom]);
    //   geo = value.value;
    // });

    // // master.bindDropDown("fontFamily", ["serif", "sans-serif", "monospace", "cursive"], document.body.style);
    // master.addText("GeoData1", "150", function (value) {
    //   geoData1 = value;
    // })
    // master.addText("GeoData2", "5", function (value) {
    //   geoData2 = value;
    // })
    // master.addText("GeoData3", "5", function (value) {
    //   geoData3 = value;
    // })

    // master.addRange("Enthousiasme - geoX", 0, 0.01, 0, 0.0001, function (value) {
    //   geoX = value;
    // });
    // master.addRange("Verbazing - geoY", 0, 0.01, 0, 0.0001, function (value) {
    //   geoY = value;
    // });
    // master.addRange("Positiviteit - geoZ", 0, 0.005, 0, 0.0001, function (value) {
    //   geoZ = value;
    // });

    // master.addRange("Tijd - Geo Amount", 0, 100, 60, 0, function (value) {
    //   geoAmount = value;
    // });
    // master.addRange("Aantal deelnemers - Geo Amount2", 0, 20, 3, 0, function (value) {
    //   geoAmount2 = value;
    // });

    // buttons.addDropDown("Material-1", ['Material-1', 'Material-2', 'Material-3', 'Material-4', 'Material-5', 'Material-6', 'Material-7', 'Material-8', 'Material-9', 'Material-10', 'Material-11', 'Material-12', 'Material-13', 'Material-14'], function (value) {
    //   material1 = value.index;
    //   console.log("icons", value);

    // });
    // buttons.addDropDown("Material-2", ['Material-1', 'Material-2', 'Material-3', 'Material-4', 'Material-5', 'Material-6', 'Material-7', 'Material-8', 'Material-9', 'Material-10', 'Material-11', 'Material-12', 'Material-13', 'Material-14'], function (value) {
    //   material2 = value.index;
    //   console.log("icons2", material2);
    //   showOnce = false;
    // });

    // buttons.addColor("test-Color", "#dedede", function (value) {
    //   bgColor = value;
    //   console.log("bgcolor", bgColor)
    // });
    // master.addDropDown("Primary Colors", ['Roze 1', 'Roze 2', 'Groen 1', 'Groen 2', 'Blauw', 'Geel'], function (value) {
    //   primary = value.index;
    //   console.log("primary", primary);
    // });
    // master.addDropDown("Background Colors", ['Roze', 'Groen', 'Geel', 'Blauw', 'Zwart', 'Grijs'], function (value) {
    //   secondary = value.index;
    //   console.log("secondary", secondary);
    // });

    // save, pauze
    master.addBoolean("Bewegend beeld", true, function (value) {
      if (value) {
        sketch.loop();
      } else {
        sketch.noLoop();
      }
    })
    master.addBoolean("Microfoon input", false, function (value) {
      if (value) {
        sketch.userStartAudio();
      } else {
        sketch.getAudioContext().suspend();
      }
    })
    master.addButton("Save", function (value) {
      // sketch.saveCanvas(capture, 'myCanvas', 'png');


      html2canvas(document.querySelector('#capture')).then(function (canvas) {
        saveAs(canvas.toDataURL(), 'vette_plaat.png');
      });
    });

    function saveAs(uri, filename) {
      var link = document.createElement('a');
      if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        //simulate click
        link.click();
        //remove the link when done
        document.body.removeChild(link);
      } else {
        window.open(uri);
      }
    }
  }


  sketch.draw = function () {
    sketch.scale(zoom);
    // let s1 = new p5(sketch.s, document.getElementById('p5sketch1'));

    sketch.background('' + secColor[secondary]);
    // sketch.orbitControl();
    sketch.noStroke();
    // normalMaterial();

    // plane(200, 400);
    sketch.rotateY(sketch.frameCount * speed);
    sketch.rotateX(sketch.frameCount * speed);
    sketch.rotateZ(sketch.frameCount * speed);

    for (let j = 0; j < 5; j++) {
      sketch.push();
      for (let i = 0; i < 50; i++) {
        sketch.translate(
          sketch.sin(sketch.frameCount * 0.001 + j) * 1000,
          sketch.sin(sketch.frameCount * 0.001 + j) * 1000,
          // sin(frameCount * 0.001 + j) * 200,
          i * 0.1
        );
        sketch.rotateY(sketch.frameCount * geoY);
        sketch.rotateZ(sketch.frameCount * geoZ);
        sketch.rotateX(sketch.frameCount * geoX);
        // sketch.push();
        // sketch.texture(icons[material1]);
        // sketch.box(size2, size2, size2);
        // sketch.pop();
      }
      sketch.pop();
    }

    for (let j = 0; j < 5; j++) {
      sketch.push();
      for (let i = 0; i < 150; i++) {
        sketch.translate(
          sketch.sin(sketch.frameCount * 0.005 + j) * 400,
          sketch.sin(sketch.frameCount * 0.01 + j) * 200,
          sketch.sin(sketch.frameCount * 0.02 + j) * 300,
          i * 0.1
        );
        sketch.rotateY(sketch.frameCount * geoY);
        sketch.rotateZ(sketch.frameCount * geoZ);
        sketch.rotateX(sketch.frameCount * geoX);

        // sketch.push();
        // sketch.texture(icons2[material2]);

        // if (!showOnce) {
        //   // console.log(material2);
        //   showOnce = true
        // }

        // // fill('' + prColor);
        // sketch.box(0, size1, size1);
        // sketch.pop();
      }
      sketch.pop();
    }


    for (let j = 0; j < geoAmount; j++) {
      sketch.push();
      for (let i = 1; i < geoAmount2; i++) {
        sketch.translate(
          sketch.sin(sketch.frameCount * 0.1 + j) * 200,
          sketch.sin(sketch.frameCount * 0 + j) * 200,
          i * 100
        );
        sketch.rotateY(sketch.frameCount * geoY);
        sketch.rotateZ(sketch.frameCount * geoZ);
        sketch.rotateX(sketch.frameCount * geoX);
        sketch.push();
        //rgb
        //z
        // normalMaterial();
        sketch.ambientLight(prColor[primary]);
        // directionalLight('' + prColor[primary], 10, 10, 10);
        // texture(icons2[material2]);

        // directionalLight(prColor[primary], 0, 0, 10);
        // directionalLight(prColor[primary], 0, 10, 0);


        //x
        // directionalLight(0, 0, 0, 100, 0, 0);
        // directionalLight(0, 0, 0, -100, 0, 0);
        //y
        // directionalLight(0, 0, 0, 0, 100, 0);
        // directionalLight(0, 0, 0, 0, -100, 0);
        sketch.box(geoData1, geoData2, geoData3);

        sketch.pop();
      }
      sketch.pop();
    }
  };
};
var myp5 = new p5(s, 'c1');




// Sketch Two
var t = function (sketch) {
  var w = window.innerWidth, h = window.innerHeight;

  let fft, mic, song;

  // var song;
  // var fft;
  var button;
  var amped;
  var X_SPEED = 0;
  var Y_SPEED = 0;
  var Z_SPEED = .007;                                                             // noise change per frame
  var NOISE_SCALE = 400;                                                          // the higher the softer
  var r = (w < h) ? w / 11 : h / 11;
  var r2 = (w < h) ? w / 10 : h / 10;
  var x_off = 1000, y_off = 1000, z_off = 1000;
  var x_off2 = 1000, y_off2 = 1000, z_off2 = 1000;
  var px_offset = r / 400;                                                            // amplitude
  var px_offset2 = r2 / 400;                                                            // amplitude
  var vertices_amount = 400;
  var primary;
  let secondary;
  var secColor = ['#eb5777', '#33ffa9', '#ffff75', '#5090ff', '#101111', '#323234'];
  var prColor = ['#ff85b4', '#eb33eb', '#00e776', '#27a95a', '#1d5dfa', '#ffd342'];
  var frameval = 30;
  var bass_x = sketch.random(w/2);
  var bass_y = sketch.random(h);
  var treble_x = sketch.random(w/2, w);
  var treble_y = sketch.random(h);
  var bassankerpunten = 400;
  var trebleankerpunten = 400;


  sketch.setup = function () {
    savefile2 = sketch.createCanvas(w, h);
    // sketch.position(0, 0);
    // sketch.colorMode(sketch.RGB, 255);
    sketch.angleMode(sketch.RADIANS);                                                           // Kan alleen veranderen naar DEGREES of RADIANS
    // button = createButton('toggle');
    // button.mousePressed(toggleSong);
    // song.play()
    sketch.getAudioContext().suspend();
    amp = new p5.Amplitude();
    fft = new p5.FFT(0, 256);
    mic = new p5.AudioIn();
    mic.start();
    fft.setInput(mic);

    // let vol = amped.getLevel()*20;                                               // uncommenten wanneer audio bestand ingeladen wordt

    frameval = sketch.round(1 * sketch.random(10, 30));                                    // laat de visual genereren op basis van een percentage tussen 1 en ...

    secondary = sketch.floor(sketch.random(0, 5));
    primary = sketch.floor(sketch.random(0, 5));
    console.log("Tekenkans = " + frameval + "%");
  };

  sketch.draw = function () {
    // let s2 = new p5(sketch.s, document.getElementById('p5sketch2'));
    sketch.frameRate(frameval);
    let vol = sketch.round(mic.getLevel(0.0) * 30, 2);                                                  // commenten wanneer audio bestand ingeladen wordt


    let spectrum = fft.analyze();
    let bass, lowMid, mid, highMid, treble;
    bass = sketch.round(fft.getEnergy("bass"), 2);
    // lowMid = sketch.round(fft.getEnergy("lowMid"), 2);
    // mid = sketch.round(fft.getEnergy("mid"), 2);
    // highMid = sketch.round(fft.getEnergy("highMid"), 2);
    treble = sketch.round(fft.getEnergy("treble"), 2);
    // let bins = [bass, lowMid, mid, highMid, treble]
    let bassmap = sketch.round(sketch.map(bass, 80, 256, 0, 7.5), 1);
    let treblemap = sketch.round(sketch.map(treble, 1, 128, 0, 15), 1);

    // console.log("Vol: "+vol+" bassmap: "+bassmap+" treblemap: "+ treblemap);


    sketch.noFill();
    sketch.stroke('' + secColor[secondary]);
    sketch.strokeWeight(3);

    if (bassmap > 1 && vol > 1) {
      sketch.translate(bass_x, bass_y);
      sketch.beginShape();

      console.log(bassmap);

      for (let a = 0; a < sketch.TWO_PI; a += sketch.TWO_PI / bassankerpunten) {
        var x = bassmap * r * sketch.sin(a) + 10;
        var y = bassmap * r * sketch.cos(a) + 10;

        var new_x = x + (
          sketch.noise(
            ((x_off + x) / NOISE_SCALE),
            ((y_off + y) / NOISE_SCALE),
            z_off) * px_offset * sketch.sin(a) * 1000);

        var new_y = y + (
          sketch.noise(
            ((x_off + x) / NOISE_SCALE),
            ((y_off + y) / NOISE_SCALE),
            z_off) * px_offset * sketch.cos(a) * 1000);
        sketch.vertex(new_x, new_y);
        sketch.endShape();
      }
    }

    sketch.noFill();
    sketch.stroke('' + prColor[primary]);
    sketch.strokeWeight(3);

    if (vol > 1) {
      sketch.translate(treble_x, treble_y);
      sketch.beginShape();

      for (let b = 0; b < sketch.TWO_PI; b += sketch.TWO_PI / trebleankerpunten) {
        var x2 = treblemap * r2 * sketch.sin(b) + 10;
        var y2 = treblemap * r2 * sketch.cos(b) + 10;

        var new_x2 = x2 + (
          sketch.noise(
            ((x_off2 + x2) / NOISE_SCALE),
            ((y_off2 + y2) / NOISE_SCALE),
            z_off2) * px_offset2 * sketch.sin(b) * 1000);

        var new_y2 = y2 + (
          sketch.noise(
            ((x_off2 + x2) / NOISE_SCALE),
            ((y_off2 + y2) / NOISE_SCALE),
            z_off2) * px_offset2 * sketch.cos(b) * 1000);
        sketch.vertex(new_x2, new_y2);
        sketch.endShape();
      }
    }
  };
};


var myp5 = new p5(t, 'c2');