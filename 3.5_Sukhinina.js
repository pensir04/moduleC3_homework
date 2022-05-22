class ElictricDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.turn = false;
    }

    // метод, определяющие включенный прибор
    turnOn() {
        console.log(this.name + " включен!");
        this.turn = true;
    }
// метод, определяющий выключенный прибор
    turnOff() {
        console.log(this.name + " выключен!");
        this.turn = false;
    }
}
// Лампа
class Lamp extends ElictricDevice {
    constructor(name, type, producedCountry, power) {
        super(name, power);
        this.name = name;
        this.type = type;
        this.producedCountry = producedCountry;
        this.power = power;
        this.turn = true;
    }
}

//Компьютер
class Computer extends ElictricDevice {
    constructor(name, produced, power, form, used) {
        super(name, power);
        this.name = name;
        this.produced = produced;
        this.power = power;
        this.form = form;
        this.used = used;
        this.turn = false;
    }
}

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
