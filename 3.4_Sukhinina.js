function ElictricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.turn = false;
}
// метод, определяющие включенный прибор
ElictricDevice.prototype.turnOn = function() {
    console.log(this.name + " включен!");
    this.turn = true;
}
// метод, определяющий выключенный прибор
ElictricDevice.prototype.turnOff = function() {
    console.log(this.name + " выключен!");
    this.turn = false;
}
// Лампа
function Lamp(name, type, producedCountry, power) {
    this.name = name;
    this.type = type;
    this.producedCountry = producedCountry;
    this.power = power;
    this.turn = true;
}
Lamp.prototype = new ElictricDevice();

//Компьютер
function Computer(name, produced, power, form, used) {
    this.name = name;
    this.produced = produced;
    this.power = power;
    this.form = form;
    this.used = used;
    this.turn = false;
}
Computer.prototype = new ElictricDevice();

//элемент класса лампы
const nightLamp = new Lamp("Ночник", "светодиодный", "Китай", 5);

//элемент класса компьютер
const gameComp = new Computer("Игровой ПК", "ДНС", 120, "стационарный", "для дома");

//выключить лампу
nightLamp.turnOff();

//включить лампу
nightLamp.turnOn();

//выключить ПК
gameComp.turnOff();

//включить ПК
gameComp.turnOn();