let sn0;
let sn1;
let sn2;
let sn3;
let sn4;
let sn5;
let sn6;
let sn7;
let sn8;
let sn9;
let sn10;
let sn11;
let sn12;
let sn13;
let sn14;
let sn15;
let sn16;

let id0;
let id1;
let id2;
let id3;
let id4;
let id5;
let id6;
let id7;
let id8;
let id9;
let id10;
let id11;
let id12;
let id13;
let id14;
let id15;
let id16;

let d0;
let d1;
let d2;
let d3;
let d4;
let d5;
let d6;
let d7;
let d8;
let d9;
let d10;
let d11;
let d12;
let d13;
let d14;
let d15;
let d16;

let s0;
let s1;
let s2;
let s3;
let s4;
let s5;
let s6;
let s7;
let s8;
let s9;
let s10;
let s11;
let s12;
let s13;
let s14;
let s15;
let s16;

function setup() {
    textAlign(CENTER);
    createCanvas(400,400)
    sn0 = createSelect();
    sn1 = createSelect();
    sn2 = createSelect();
    sn3 = createSelect();
    sn4 = createSelect();
    sn5 = createSelect();
    sn6 = createSelect();
    sn7 = createSelect();
    sn8 = createSelect();
    sn9 = createSelect();
    sn10 = createSelect();
    sn11 = createSelect();
    sn12 = createSelect();
    sn13 = createSelect();
    sn14 = createSelect();
    sn15 = createSelect();
    sn16 = createSelect();

    sn0.position(10, 10);
    sn1.position(10, 30);
    sn2.position(10, 50);
    sn3.position(10, 70);
    sn4.position(10, 90);
    sn5.position(10, 110);
    sn6.position(10, 130);
    sn7.position(10, 150);
    sn8.position(10, 170);
    sn9.position(10, 190);
    sn10.position(10, 210);
    sn11.position(10, 230);
    sn12.position(10, 250);
    sn13.position(10, 270);
    sn14.position(10, 290);
    sn15.position(10, 310);
    sn16.position(10, 330);

    sn0.option("Bestningskammerat");
    sn1.option("Bestningskammerat");
    sn2.option("Bestningskammerat");
    sn3.option("Bestningskammerat");
    sn4.option("Bestningskammerat");
    sn5.option("Bestningskammerat");
    sn6.option("Bestningskammerat");
    sn7.option("Bestningskammerat");
    sn8.option("Bestningskammerat");
    sn9.option("Bestningskammerat");
    sn10.option("Bestningskammerat");
    sn11.option("Bestningskammerat");
    sn12.option("Bestningskammerat");
    sn13.option("Bestningskammerat");
    sn14.option("Bestningskammerat");
    sn15.option("Bestningskammerat");
    sn16.option("Bestningskammerat");
    sn0.option("Bedrager");
    sn1.option("Bedrager");
    sn2.option("Bedrager");
    sn3.option("Bedrager");
    sn4.option("Bedrager");
    sn5.option("Bedrager");
    sn6.option("Bedrager");
    sn7.option("Bedrager");
    sn8.option("Bedrager");
    sn9.option("Bedrager");
    sn10.option("Bedrager");
    sn11.option("Bedrager");
    sn12.option("Bedrager");
    sn13.option("Bedrager");
    sn14.option("Bedrager");
    sn15.option("Bedrager");
    sn16.option("Bedrager");

    id0 = createSelect();
    id1 = createSelect();
    id2 = createSelect();
    id3 = createSelect();
    id4 = createSelect();
    id5 = createSelect();
    id6 = createSelect();
    id7 = createSelect();
    id8 = createSelect();
    id9 = createSelect();
    id10 = createSelect();
    id11 = createSelect();
    id12 = createSelect();
    id13 = createSelect();
    id14 = createSelect();
    id15 = createSelect();
    id16 = createSelect();

    id0.position(160, 10);
    id1.position(160, 30);
    id2.position(160, 50);
    id3.position(160, 70);
    id4.position(160, 90);
    id5.position(160, 110);
    id6.position(160, 130);
    id7.position(160, 150);
    id8.position(160, 170);
    id9.position(160, 190);
    id10.position(160, 210);
    id11.position(160, 230);
    id12.position(160, 250);
    id13.position(160, 270);
    id14.position(160, 290);
    id15.position(160, 310);
    id16.position(160, 330);

    let ids = ["000001","000010","000011","000100","000101","000110","000111","001000","001001","001010","001011","001100","001101","001110","001111","010000","010001","010010","010011","010100","010101","010110","010111","011000","011001","011010","011011","011100","011101","011110","011111","100000","100001","100010","100011","100100","100101","100110","100111","101000","101001","101010","101011","101100","101101","101110","101111","110000","110001","110010","110011","110100","110101","110110","110111","111000","111001","111010","111011","111100","111101","111110","111111"];

    id0.option(str(ids[0]));
    id0.option(str(ids[1]));
    id0.option(str(ids[2]));

    id1.option(str(ids[3]));
    id1.option(str(ids[4]));
    id1.option(str(ids[5]));

    id2.option(str(ids[6]));
    id2.option(str(ids[7]));
    id2.option(str(ids[8]));

    id3.option(str(ids[9]));
    id3.option(str(ids[10]));
    id3.option(str(ids[11]));

    id4.option(str(ids[12]));
    id4.option(str(ids[13]));
    id4.option(str(ids[14]));

    id5.option(str(ids[15]));
    id5.option(str(ids[16]));
    id5.option(str(ids[17]));

    id6.option(str(ids[18]));
    id6.option(str(ids[19]));
    id6.option(str(ids[20]));
    id6.option(str(ids[21]));

    id7.option(str(ids[22]));
    id7.option(str(ids[23]));
    id7.option(str(ids[24]));

    id8.option(str(ids[25]));
    id8.option(str(ids[26]));
    id8.option(str(ids[27]));

    id9.option(str(ids[28]));
    id9.option(str(ids[29]));
    id9.option(str(ids[30]));

    id10.option(str(ids[31]));
    id10.option(str(ids[32]));
    id10.option(str(ids[33]));

    id11.option(str(ids[34]));
    id11.option(str(ids[35]));
    id11.option(str(ids[36]));

    id12.option(str(ids[37]));
    id12.option(str(ids[38]));
    id12.option(str(ids[39]));

    id13.option(str(ids[40]));
    id13.option(str(ids[41]));
    id13.option(str(ids[42]));

    id14.option(str(ids[43]));
    id14.option(str(ids[44]));
    id14.option(str(ids[45]));

    id15.option(str(ids[46]));
    id15.option(str(ids[47]));
    id15.option(str(ids[48]));

    id16.option(str(ids[49]));
    id16.option(str(ids[50]));
    id16.option(str(ids[51]));

    d0 = createSelect();
    d1 = createSelect();
    d2 = createSelect();
    d3 = createSelect();
    d4 = createSelect();
    d5 = createSelect();
    d6 = createSelect();
    d7 = createSelect();
    d8 = createSelect();
    d9 = createSelect();
    d10 = createSelect();
    d11 = createSelect();
    d12 = createSelect();
    d13 = createSelect();
    d14 = createSelect();
    d15 = createSelect();
    d16 = createSelect();

    d0.option("i live");
    d1.option("i live");
    d2.option("i live");
    d3.option("i live");
    d4.option("i live");
    d5.option("i live");
    d6.option("i live");
    d7.option("i live");
    d8.option("i live");
    d9.option("i live");
    d10.option("i live");
    d11.option("i live");
    d12.option("i live");
    d13.option("i live");
    d14.option("i live");
    d15.option("i live");
    d16.option("i live");
    d0.option("d??d");
    d1.option("d??d");
    d2.option("d??d");
    d3.option("d??d");
    d4.option("d??d");
    d5.option("d??d");
    d6.option("d??d");
    d7.option("d??d");
    d8.option("d??d");
    d9.option("d??d");
    d10.option("d??d");
    d11.option("d??d");
    d12.option("d??d");
    d13.option("d??d");
    d14.option("d??d");
    d15.option("d??d");
    d16.option("d??d");

    d0.position(235, 10);
    d1.position(235, 30);
    d2.position(235, 50);
    d3.position(235, 70);
    d4.position(235, 90);
    d5.position(235, 110);
    d6.position(235, 130);
    d7.position(235, 150);
    d8.position(235, 170);
    d9.position(235, 190);
    d10.position(235, 210);
    d11.position(235, 230);
    d12.position(235, 250);
    d13.position(235, 270);
    d14.position(235, 290);
    d15.position(235, 310);
    d16.position(235, 330);

    s0 = createSelect();
    s1 = createSelect();
    s2 = createSelect();
    s3 = createSelect();
    s4 = createSelect();
    s5 = createSelect();
    s6 = createSelect();
    s7 = createSelect();
    s8 = createSelect();
    s9 = createSelect();
    s10 = createSelect();
    s11 = createSelect();
    s12 = createSelect();
    s13 = createSelect();
    s14 = createSelect();
    s15 = createSelect();
    s16 = createSelect();

    s0.option("0");
    s1.option("0");
    s2.option("0");
    s3.option("0");
    s4.option("0");
    s5.option("0");
    s6.option("0");
    s7.option("0");
    s8.option("0");
    s9.option("0");
    s10.option("0");
    s11.option("0");
    s12.option("0");
    s13.option("0");
    s14.option("0");
    s15.option("0");
    s16.option("0");

    s0.option("1");
    s1.option("1");
    s2.option("1");
    s3.option("1");
    s4.option("1");
    s5.option("1");
    s6.option("1");
    s7.option("1");
    s8.option("1");
    s9.option("1");
    s10.option("1");
    s11.option("1");
    s12.option("1");
    s13.option("1");
    s14.option("1");
    s15.option("1");
    s16.option("1");

    s0.option("2");
    s1.option("2");
    s2.option("2");
    s3.option("2");
    s4.option("2");
    s5.option("2");
    s6.option("2");
    s7.option("2");
    s8.option("2");
    s9.option("2");
    s10.option("2");
    s11.option("2");
    s12.option("2");
    s13.option("2");
    s14.option("2");
    s15.option("2");
    s16.option("2");

    s0.option("3");
    s1.option("3");
    s2.option("3");
    s3.option("3");
    s4.option("3");
    s5.option("3");
    s6.option("3");
    s7.option("3");
    s8.option("3");
    s9.option("3");
    s10.option("3");
    s11.option("3");
    s12.option("3");
    s13.option("3");
    s14.option("3");
    s15.option("3");
    s16.option("3");

    s0.option("4");
    s1.option("4");
    s2.option("4");
    s3.option("4");
    s4.option("4");
    s5.option("4");
    s6.option("4");
    s7.option("4");
    s8.option("4");
    s9.option("4");
    s10.option("4");
    s11.option("4");
    s12.option("4");
    s13.option("4");
    s14.option("4");
    s15.option("4");
    s16.option("4");

    s0.option("5");
    s1.option("5");
    s2.option("5");
    s3.option("5");
    s4.option("5");
    s5.option("5");
    s6.option("5");
    s7.option("5");
    s8.option("5");
    s9.option("5");
    s10.option("5");
    s11.option("5");
    s12.option("5");
    s13.option("5");
    s14.option("5");
    s15.option("5");
    s16.option("5");

    s0.option("6");
    s1.option("6");
    s2.option("6");
    s3.option("6");
    s4.option("6");
    s5.option("6");
    s6.option("6");
    s7.option("6");
    s8.option("6");
    s9.option("6");
    s10.option("6");
    s11.option("6");
    s12.option("6");
    s13.option("6");
    s14.option("6");
    s15.option("6");
    s16.option("6");

    s0.position(300, 10);
    s1.position(300, 30);
    s2.position(300, 50);
    s3.position(300, 70);
    s4.position(300, 90);
    s5.position(300, 110);
    s6.position(300, 130);
    s7.position(300, 150);
    s8.position(300, 170);
    s9.position(300, 190);
    s10.position(300, 210);
    s11.position(300, 230);
    s12.position(300, 250);
    s13.position(300, 270);
    s14.position(300, 290);
    s15.position(300, 310);
    s16.position(300, 330);
}

function draw() {
}

