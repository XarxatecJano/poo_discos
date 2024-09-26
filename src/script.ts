import { CompactDisc } from "./CompactDisc.js";
import { HardDisk } from "./HardDisk.js";

let cd1 = new CompactDisc("Let it be", 56, 650, "laser")
cd1.ejectCd();
cd1.read();
cd1.write("Autor: The Beatles");
cd1.spin();

let hd1 = new HardDisk("Disco duro Principal", 64, 600000, "Cabezal magnético", "formateo 1");

hd1.format();
hd1.read();
hd1.write("Un montón de datos importantes y secretos");
hd1.spin();